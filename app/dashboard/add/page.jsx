"use client"

import axios from "axios";
import React, {useState} from "react";
import { useRouter } from 'next/navigation'

const AddPhoto = () => {
  const [kenangan, setKenangan] = useState("")
  const [image, setImage] = useState("")
  const router = useRouter()

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image)
}

  const saveFilm = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kenangan", kenangan)
    formData.append("image",image)
    try {
      await axios.post(`http://localhost:8000/api/image`, formData,{
        headers:{
          "Content-Type": "multipart/form-data"
        }
      })
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto h-screen  px-4">
      <div className=" w-full h-full pt-20 flex items-center justify-center">
        <div className="wrapper w-[300px] md:w-auto border-primary border-2 border-solid p-4 rounded-md">
        <div className="title my-2">
          <h1 className="text-4xl text-primary font-semibold">Add Photo</h1>
        </div>
        <hr />
        <form onSubmit={saveFilm}>
          <div className="my-2 flex flex-col gap-2">
            <label>Kenangan: </label>
            <div className="controller w-full">
              <input className="w-full text-slate-100 p-2 bg-transparent focus:outline-none border-2 border-white border-solid rounded-md" type="text" placeholder="Contoh: Pas Ulang Tahun Wali Kelas" value={kenangan} onChange={(e) => setKenangan(e.target.value)}/>
            </div>
          </div>
          <div className="my-2">
            <label className="label">Thumbnail</label>
            <div className="control">
              <div className="file">
                <input
                  className=""
                  type="file"
                  onChange={loadImage}
                  placeholder="Movie URL"
                />
                <span className="span-cta">
                  <span className="file-label">Choose a File...</span>
                </span>
              </div>
            </div>
          </div>
          <button type="submit" className='px-6 py-2 bg-primary rounded my-2'>Tambahkan Foto</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
