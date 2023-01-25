"use client";

import React, { useState, useEffect } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

async function getData(currentPage) {
  const images = await fetch(
    `http://localhost:8000/api/image?page=${currentPage}&limit=8`
  );
  if (!images.ok) {
    throw new Error("Failed to fetch data");
  }
  return images.json();
}

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(currentPage)
      .then((data) => {
        setDatas(data.images);
        setTotalPages(data.totalPages);
        setLoading(false);
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

  async function handleDelete(id) {
    const deleted = await fetch(`http://localhost:8000/api/image/${id}`, {
      method: 'DELETE'
    });
    if (!deleted.ok) {
      throw new Error("Failed to delete data");
    }
    setDatas(datas.filter(item => item.id !== id));
  }

  return (
    <div className="container mx-auto pt-20 px-4 relative">
      <div className="overflow-x-auto w-full h-full flex items-center flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {datas.map((item) => {
            const { id, kenangan, image } = item
            return(
              <div
                className="card card-compact w-full bg-base-100 shadow-xl text-slate-900"
                key={id}
              >
                <figure className="h-[160px]">
                  <img
                    className="object-center object-contain"
                    src={`http://localhost:8000/${image}`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Kenangan:</h2>
                  <p>{kenangan}</p>
                  <div className="actions flex">
                    <button className="w-full bg-emerald-400 rounded-bl rounded-tl px-6 py-3 font-semibold text-white">
                      Edit
                    </button>
                    <button
                      className="w-full bg-red-400 rounded-br rounded-tr px-6 py-3 font-semibold text-white"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination flex items-center justify-center gap-4 p-6">
          <button
            className="prev"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <BsArrowLeftCircle color="#10CA00" size={32} />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="next"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <BsArrowRightCircle color="#10CA00" size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
