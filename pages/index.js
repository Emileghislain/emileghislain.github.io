import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect } from 'react'
import Head from 'next/head.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=> {
    setTimeout(()=> {
      window.location.href = '/home'
    }, 3000);
  }, [])
  return (
    <main
      className={`bg-white min-h-screen flex flex-col items-center justify-center`}
    >
      <Head>
        <title>EG | Portfolio</title>
        <link rel='icon' href='/images/me.png'></link>
      </Head>
      <div className='text-[#1f1c11] flex self-center justify-center text-[40px] [@media(max-width:639px)]:text-[20px] font-bold animate-pulse uppercase'>Welcome to my portfolio</div>
      <div className='flex items-center gap-1 text-[#1f1c11] uppercase text-sm absolute bottom-2 xs:bottom-0'>
        code by <span className='font-bold'>EG</span><span className="border-black bg-black p-1 h-1 rounded-full"></span>all right reserved <span className="border-black bg-black p-1 h-1 rounded-full"></span>{(new Date()).getFullYear()} 
      </div>
    </main>
  )
}
