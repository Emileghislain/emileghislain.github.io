
import Image from "next/image"
import Header from "./components/header"
import Link from "next/link"
import Navbar from "./components/navbar"

export default function Contact() {
  return (
    <div className="bg-black min-h-screen flex flex-col px-12 py-8">
            <Navbar />
            <div className="flex text-white my-8 justify-start">
                <div className="w-2/3 px-20 py-8 flex flex-col text-[30px] font-bold text-start gap-4 uppercase">
                    {/* <button className="w-1/5 text-[#ffc259] rounded-full px-6 py-4 bg-[#1f1c11] text-xs">New Service</button> */}
                    <div className="text-[60px]">
                        Hey, <br/> I'm Kamela Djounga Emile Ghislain
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col gap-8 uppercase">
                <div className="font-light text-[20px] self-center text-white">I'm a backend Developer & web integrator.</div>
                <div className="flex justify-center gap-8 text-xs">
                    {/* <button className="text-[#1f1f1f] bg-gradient-to-r from-[#fff6cb] to-[#ffc055] py-5 px-14 rounded-3xl hover:text-white">Read More</button> */}
                    <button className="text-white uppercase animate-[wiggle_5s_ease-in-out_infinite] bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-white">
                        <Link href={"/about"}>About me</Link>
                    </button>
                </div>
            </div>
        </div>
  )
}
