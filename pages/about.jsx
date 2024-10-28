
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
                        Hey, my name is KAMELA Emile Ghislain. <br />I am a Telecommunications Engineer with a Specialisation in Mobile Networks & Services. 
                        <br />For the past {(new Date()).getFullYear() - 2021} years, I have been perfecting my skills first as a Backend Developer and Web Integrator, now as a Frontend Developer.
                        <br />I am passionate about modelling and designing efficient api and backends, and designing intuitive interfaces.
                        <br />I also like to listen to music and in my spare time.
                    </div>
                </div>
                <div className="bg-[url('/images/me.png')] bg-no-repeat bg-center bg-cover  [@media(min-width:640px)]:w-1/3 flex items-center justify-center">
                    <div className={(!theme ?"bg-black ":"bg-white")+" relative top-0 left-0 w-[100%] opacity-50"}>
                    </div>
                    {/* <Image src={"/images/me.png"} 
                        className="bg-white"
                        width={500}
                        height={300}
                    /> */}
                </div>
            </div>
            <div className="flex [@media(max-width:639px)]:hidden justify-end items-center gap-8 text-xs">
                <div className="w-1/2 fixed bottom-4">
                    <Link href={"/skills"}>
                        <button className={(!theme?"":"hover:border ")+"text-white uppercase animate-[wiggle_5s_ease-in-out_infinite] bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-white"}>
                            skills
                        </button>
                    </Link>
                </div>
                <span className="fixed bottom-4 right-2 font-light text-[12px] self-end pr-10 flex gap-3 [@media(max-width:639px)]:hidden">
                    Click here to read more
                    <Link href={"/skills"} className=" hover:cursor-pointer">
                        <Image 
                            src={theme ? "/images/white_right_arrow.svg" : "/images/dark_right_arrow.svg"} 
                            width={20} height={20} 
                            className={(theme ?"bg-[#1f1f1f] ":"bg-white ")+"rounded-full p-1 animate-bounce w-6 h-6"}
                        />
                    </Link>
                    
                </span>
            </div>
        </div>
        <Footer />
    </div>
  )
}
