"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { useRouter } from 'next/navigation'



const SignIn = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [username, setUsername] = useState("admin")
  const [password, setPassword] = useState("multimedia2")

  function handleSubmit(event) {
    event.preventDefault();
    if(inputUsername === username && inputPassword === password) {
      router.push('/dashboard');
    }
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }


 

  return (
    <div className='pt-28 px-4 w-full min-h-screen flex flex-col items-center justify-center relative'>
      <div className="blur absolute top-0 right-0">
      <Image
          src="/images/blur-signin.svg"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[40vw]"
        />
      </div>
      <div className="blur absolute botttom-0 left-0 rotate-45">
      <Image
          src="/images/blur-signin.svg"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[30vw]"
        />
      </div>
      <div className="logo">
          <h1 className='text-3xl font-bold'>SIGN IN</h1>
      </div>
      <div className="singin-wrapper flex w-[320px] md:w-[400px] lg:w-[500px] p-4 rounded z-10">
        <div className="left-signin w-full">
          <form onSubmit={handleSubmit}>
            <div className="control w-full my-2">
              <label className='py-2'>Username :</label>
              <div className="wrapper w-full p-2 rounded text-slate-100 bg-gray-600">
              <input className='focus:outline-none bg-transparent w-full' type="text" placeholder='Masukkan username' value={inputUsername} onChange={e => setInputUsername(e.target.value)} />
              </div>
            </div>
            <div className="control w-full my-2">
              <label className='py-2'>Password :</label>
              <div className="wrapper w-full p-2 rounded text-slate-100 bg-gray-600 flex items-center">
              <input className='focus:outline-none bg-transparent w-full' type={showPassword ? "text" : "password"} placeholder='Masukkan password' value={inputPassword} onChange={e => setInputPassword(e.target.value)}/>
              <div className='cursor-pointer' onClick={toggleShowPassword}>{showPassword ? <AiFillEye color='white'/>:<AiFillEyeInvisible  color='white'/>}</div>
              </div>
            </div>
            <button type="submit" className='px-6 py-2 bg-primary rounded-md my-2'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn