
import Link from "next/link"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { useThemeContext } from '../context/theme'
import Image from "next/image"

export default function Home() {
    const [theme, setTheme] = useThemeContext()
  return (
        <div className={(!theme ?"bg-black text-white ":"bg-white text-black ")+"min-h-screen flex flex-col px-12 xs:py-2 sm:py-8"}>
            <Navbar />
            {/* <div className="flex my-8 justify-start sm:p-6 py-8 text-start gap-4"> */}
            <div className="grid grid-cols-7 my-8 justify-start sm:p-6 py-8 text-start gap-4">
                {/* <div className="flex justify-start [@media(min-width:640px)]:w-2/3 [@media(min-width:640px)]:px-20 sm:p-6 py-8 flex-col font-bold text-start gap-4 uppercase text-[60px] xs:text-[30px]"> */}
                <div className="col-span-4 justify-start [@media(min-width:640px)]:px-20 sm:p-6 py-8 flex-col font-bold text-start gap-4 uppercase text-[60px] xs:text-[30px]">
                    Hey, <br/> I am Kamela Djounga Emile Ghislain
                </div>
                <hr className={(theme? "bg-black": "bg-white")+" col-span-1 rotate-[75deg] w-[420px] origin-top-left"}/>
                <div className="col-span-2 flex my-8 [@media(min-width:640px)]:px-20 justify-center sm:p-6 flex-col gap-4 text-[16px]">
                    <Link target="_blank" href={"https://gitlab.com/emileghislain"} className="flex gap-4 hover:text-[#0781d7]">
                        <Image 
                            width={25}
                            height={25}
                            src={"/images/gitlab.svg"}
                            className="hover:text-[#0781d7]"
                        />
                        <div>GitLab</div>
                    </Link>
                    <Link target="_blank" href={"https://www.linkedin.com/in/kamela-%C3%A9mile-94124a194/"} className="flex gap-4 hover:text-[#0781d7]">
                        <Image 
                            width={25}
                            height={25}
                            src={"/images/linkedin.svg"}
                            className="hover:text-[#0781d7]"
                        />
                        <div>LinkedIn</div>
                    </Link>
                    <Link target="_blank" href={"https://twitter.com/emile_ghislain"} className="flex gap-4 hover:text-[#0781d7]">
                        <Image 
                            width={25}
                            height={25}
                            src={"/images/twitter.svg"}
                            className="hover:text-[#0781d7]"
                        />
                        <div>Twitter</div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 uppercase items-center">
                <div className={"font-light text-[20px]"}>I am a backend Developer & web integrator.</div>
                <div className="flex justify-center gap-8 text-xs [@media(max-width:639px)]:hidden">
                    <Link href={"/about"}><button className={"hover:border-2 text-white uppercase animate-[wiggle_5s_ease-in-out_infinite] bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-white"}>
                        About me
                    </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
        
  )
}
