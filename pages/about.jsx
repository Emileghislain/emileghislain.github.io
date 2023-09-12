
import Image from "next/image"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Link from "next/link"
import { useThemeContext } from '../context/theme'

export default function About() {
    const [theme, setTheme] = useThemeContext()
  return (
    <div className={(!theme ?"bg-black text-white ":"bg-white text-black ")+"min-h-screen flex flex-col px-12 xs:py-2 sm:py-8"}>
        <Navbar />
        <div>
            <div className="[@media(min-width:640px)]:flex [@media(max-width:639px)]:mb-14 py-4 text-md font-bold gap-12">
                <div className="flex [@media(min-width:640px)]:w-2/3 flex-col py-10 text-md font-bold gap-12">
                    <div className="flex gap-4 [@media(min-width:640px)]:px-20 [@media(min-width:640px)]:text-[30px] text-[20px] font-light">
                        Hey, my name is Emile Ghislain KAMELA. <br />I am a Telecommunications Engineer with a Specialisation in Mobile Networks & Services. 
                        <br />For the past 2 years, I have been perfecting my skills as a Backend Developer and Web Integrator.  
                        <br />I am passionate about the modelling and design of resistant and efficient api.  
                        <br />I also like to listen to music and in my spare time.
                    </div>
                </div>
                <div className="[@media(min-width:640px)]:w-1/3 flex items-center justify-center">
                    <Image src={"/images/me.png"} 
                    width={500}
                    height={300}/>
                </div>
            </div>
            <div className="flex [@media(max-width:639px)]:hidden justify-end items-center gap-8 text-xs">
                <div className="w-1/2">
                    <Link href={"/skills"}>
                        <button className={(!theme?"":"hover:border ")+"text-white uppercase animate-[wiggle_5s_ease-in-out_infinite] bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-white"}>
                            skills
                        </button>
                    </Link>
                </div>
                <span className="font-light text-[12px] self-end pr-10 flex gap-3 [@media(max-width:639px)]:hidden">
                    Click here to read more
                    <Image 
                        src={theme ? "/images/white_right_arrow.svg" : "/images/dark_right_arrow.svg"} 
                        width={20} height={20} 
                        className={(theme ?"bg-[#1f1f1f] ":"bg-white ")+"rounded-full p-1 animate-bounce w-6 h-6"}
                    />
                </span>
            </div>
        </div>
        <Footer />
    </div>
  )
}
