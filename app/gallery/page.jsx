"use client"

import React, { useState, useEffect } from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs"

async function getImage(currentPage) {
    const images = await fetch(
        `http://localhost:8000/api/image?page=${currentPage}&limit=15`
    );
    if (!images.ok) {
        throw new Error("Failed to fetch data");
    }
    return images.json();
}

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getImage(currentPage)
            .then((data) => {
                setImages(data.images);
                setTotalPages(data.totalPages);
                setLoading(false)
            })
            .catch((error) => console.error(error));
    }, [currentPage]);

    function handlePrev() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleNext() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <section className="pt-28 px-4 w-full min-h-screen relative">
            <div className="gallery columns-3">
                {images.map((item) => ( loading ? 
                    <div className="wrapper w-full h-[250px] mb-[12px] group relative animate-pulse bg-gray-400 " key={item.id}>
                    </div> :
                <div className="wrapper w-auto mb-[12px] group relative" key={item.id}>
                        <div className="kenangan absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center duration-300 opacity-0 group-hover:opacity-100 bg-black/50 text-[8px] md:text-xl p-4">
                            <h1>"{item.kenangan}"</h1>
                        </div>
                        <img className="object-center inset-0" src={`http://localhost:8000/${item.image}`} alt={item.kenangan} />
                    </div>
                ))}
            </div>
            <div className="pagination fixed bottom-6 left-0 right-0 flex items-center justify-center gap-4">
                <button
                    className="prev"
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                >
                    <BsArrowLeftCircle color="#10CA00" size={32}/>
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="next"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                   <BsArrowRightCircle color="#10CA00" size={32}/>
                </button>
            </div>
        </section>
    );
}
