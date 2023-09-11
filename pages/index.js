import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=> {
    setTimeout(()=> {
      window.location.href = '/home'
    }, 3000);
  }, [])
  return (
    <main
      className={`bg-white min-h-screen flex flex-col items-center justify-center p-24`}
    >
      <div className='text-[#1f1c11] text-[40px] font-bold animate-pulse uppercase'>Welcome to my portfolio</div>
      <div className='text-[#1f1c11] uppercase text-sm absolute bottom-2'>
        code by <span className='font-bold'>EG</span> all right reserved 2023 
      </div>
    </main>
  )
}
