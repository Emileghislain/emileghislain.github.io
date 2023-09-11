
import Image from "next/image"
import Navbar from "./components/navbar"
import Link from "next/link"

export default function About() {
  return (
    <div className="bg-black min-h-screen flex flex-col px-12 pt-8">
        <Navbar />
        <div className="flex py-4 text-md font-bold gap-12 text-white">
            <div className="flex w-2/3 flex-col py-10 text-md font-bold gap-12 text-white">
                <div className="flex gap-4 px-20 text-[30px] font-light">
                    Hey, my name is Emile Ghislain KAMELA. <br />I am a Telecommunications Engineer with a Specialisation in Mobile Networks & Services. 
                    <br />For the past 2 years, I have been perfecting my skills as a Backend Developer and Web Integrator.  
                    <br />I am passionate about the modelling and design of resistant and efficient api.  
                    <br />I also like to listen to music and in my spare time.
                </div>
                <div className="flex justify-center gap-8 text-xs">
                <Link href={"/skills"}><button className="text-white uppercase animate-[wiggle_5s_ease-in-out_infinite] bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-white">
                        skills
                    </button></Link>
                </div>
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <Image src={"/images/image.png"} 
                width={500}
                height={300}/>

                {/* <span className="font-light text-[12px] self-end pr-10 flex gap-3">
                    Scroll down to read more
                    <Image src={"/images/arrow_down.svg"} width={20} height={20} className="bg-white rounded-full p-1 animate-bounce w-6 h-6"/>
                </span> */}
            </div>
        </div>
    </div>
  )
}
