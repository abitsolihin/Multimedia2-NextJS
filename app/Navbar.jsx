"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
const Navbar = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scroll > 5 ? 'fixed top-0 left-0 right-0 p-4 flex items-center justify-between z-20 bg-[#202020]' : 'fixed top-0 left-0 right-0 p-4 flex items-center justify-between z-20'}>
        <div className="logo text-3xl font-bold">MM<span className='text-primary'>2</span></div>
        <div className="navlink flex-1 hidden md:flex justify-center">
            <ul className='flex '>
                <li className='nav-list w-full h-full flex items-center'><Link className='nav-item px-4 py-2' href="/">Home</Link></li>
                <li className='nav-list w-full h-full flex items-center'><Link className='nav-item px-4 py-2' href="/gallery">Gallery</Link></li>
            </ul>
        </div>
        <Link href="/signin" className='border-2 border-primary border-solid rounded-md px-4 py-2 hover:bg-primary'>Upload Foto</Link>
    </nav>
  )
}

export default Navbar