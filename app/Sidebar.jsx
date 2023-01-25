import React from 'react'
import Link from 'next/link'
import {MdOutlineDashboard,MdAddPhotoAlternate} from 'react-icons/md'

const Sidebar = () => {
  return (
      <div className="sidebar w-[20%] h-full p-1 rounded-tr-md rounded-br-md shadow-primary shadow pt-20">
      <div className="container">
        <div className="sidebar-item hover:bg-green-500 p-2 rounded group">
          <Link className='flex items-center justify-center lg:justify-start gap-3' href="/dashboard">
            <MdOutlineDashboard size={32} className="text-[#10CA00] group-hover:text-white"/>
            <span className='hidden md:block'>Dashboard</span>
          </Link>
        </div>
        <div className="sidebar-item hover:bg-green-500 p-2 rounded group">
          <Link className='flex items-center justify-center lg:justify-start gap-3' href="/dashboard/add">
            <MdAddPhotoAlternate size={32} className="text-[#10CA00] group-hover:text-white"/>
            <span className='hidden md:block'>Add Image</span>
          </Link>
        </div>
      </div>
      </div>
  )
}

export default Sidebar