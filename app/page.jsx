'use client'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <section id="home" className="pt-20 hero-section w-full h-screen  relative flex items-center justify-center overflow-hidden">
        <Image   
          src="/images/pattern.svg" 
          alt="pattern" 
          width="0" 
          height="0"
          sizes="30vh"
          className="w-[10vh] lg:w-auto absolute left-4 bottom-0"/>
        <Image 
          src="/images/pattern.svg" 
          width="0" 
          height="0"
          sizes="30vh"
          className="w-[10vh] lg:w-auto absolute -right-6 lg:right-4 top-16" />
        <Image src="/images/boxpattern.svg"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[40vh] bottom-[40%] lg:w-[500px] lg:top-16 h-auto absolute -z-10"/>
        <Image
          src="/images/hero-image.png"
          width="0"
          height="0"
          sizes="70vw"
          className="w-full lg:w-[70vw] h-auto absolute right-0 bottom-0 z-10"
        />
        <h1 className="text-6xl text-center lg:text-[160px] xl:text-[215px] font-semibold -translate-y-28">MULTIMEDIA 2</h1>
        <div className="absolute bottom-0 top-0 right-0 left-0 bg-gradient-to-t from-[#202020] via-[transparent] to-[transparent]"/>
        </section>
      <section id="gangs" className="gangs-section pt-20 w-full h-screen relative flex flex-col lg:flex-row bg-no-repeat  overflow-hidden" style={{"backgroundImage": "url(/images/bg-gangs.png)"}}>
        <div className="title w-full h-full lg:h-auto flex items-center justify-center px-8 relative">
        <Image
          src="/images/rectangle-gangs.svg"
          width="0"
          height="0"
          sizes="70vw"
          className="w-full lg:w-[10vw]  h-auto z-10 absolute top-28 left-[19rem] lg:left-28"
        />
        <Image
          src="/images/rectangle-gangs.svg"
          width="0"
          height="0"
          sizes="70vw"
          className="w-full lg:w-[10vw] h-auto hidden lg:block z-10 absolute bottom-[10.5rem] left-[13.6rem]"
        />
          <h1 className="text-[108px] font-semibold leading-[4.1rem] z-20">THE <br/><span className="text-primary">GANGS</span></h1>
        </div>
        <div className="image w-full h-full lg:h-auto flex items-start lg:items-center justify-center relative pt-8">
        <Image
          src="/images/gangs-image1.png"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[50vw] lg:w-[20vw] h-auto z-10 absolute lg:top-40 xl:top-16 lg:left-16"
        />
        <Image
          src="/images/gangs-image2.png"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[50vw] lg:w-[20vw] h-auto z-10 absolute lg:left-32 xl:left-40 lg:bottom-[13rem] bottom-20 right-12"
        />
        <Image
          src="/images/gangs-image3.png"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[50vw] lg:w-[20vw] h-auto z-10 absolute bottom-20 left-12 lg:bottom-[12rem] xl:bottom-40 lg:left-0"
        />
        </div>
      </section>
      <section className="memory-section w-full min-h-screen relative pt-28 bg-center lg:flex lg:flex-row-reverse bg-no-repeat overflow-hidden" style={{"background-image": "url(/images/bg-memory.png)"}}>
        <div className="title relative pl-4 lg:w-full xl:flex xl:flex-col xl:justify-center">
          <h1 className="text-[72px] xl:text-[108px] font-semibold leading-[3.1rem] xl:leading-none">OUR <br /><span className="text-primary">MEMORY</span></h1>
          <Image
          src="/images/timer.svg"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[30vw] absolute xl:w-[10vw] top-0 -right-3 xl:right-[23rem] xl:top-20"
        />
         <div className="button w-full hidden items-center py-3 xl:flex">
          <Link href="/gallery" className='border-2 border-primary border-solid rounded px-6 py-2 hover:bg-primary'>Goes To Gallery</Link>
        </div>
        </div>
        <div className="image w-full h-full flex flex-col items-center justify-center">
        <Image
          src="/images/image3.webp"
          width="0"
          height="0"
          sizes="70vw"
          className="w-[70vw] xl:w-[20vw]"
        />
        <div className="button w-full flex justify-center py-3 lg:hidden">
          <Link href="/gallery" className='border-2 border-primary border-solid rounded px-6 py-2 hover:bg-primary'>Goes To Gallery</Link>
        </div>
        </div>
      </section>
    </main>
  )
}
