
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
            <div className="[@media(max-width:639px)]:flex [@media(max-width:639px)]:flex-col [@media(min-width:640px)]:grid [@media(min-width:640px)]:grid-cols-7 my-8 justify-start sm:p-6 py-8 text-start gap-4">
                {/* <div className="flex justify-start [@media(min-width:640px)]:w-2/3 [@media(min-width:640px)]:px-20 sm:p-6 py-8 flex-col font-bold text-start gap-4 uppercase text-[60px] xs:text-[30px]"> */}
                <div className="[@media(min-width:640px)]:col-span-4 justify-start [@media(min-width:640px)]:px-20 sm:p-6 py-8 flex-col font-bold text-start gap-4 uppercase text-[60px] xs:text-[30px]">
                    Hey, <br/> I am Kamela Djounga Emile Ghislain
                </div>
                <hr className={(theme? "bg-black": "bg-white")+" [@media(max-width:639px)]:col-span-1 rotate-[75deg] w-[420px] origin-top-left [@media(max-width:639px)]:hidden"}/>
                <div className="[@media(min-width:640px)]:col-span-2 flex [@media(min-width:640px)]:flex-col [@media(min-width:640px)]:items-start [@media(min-width:640px)]:justify-center [@media(min-width:640px)]:px-20 sm:p-6 [@media(min-width:640px)]:gap-4 [@media(max-width:639px)]:justify-around [@media(max-width:639px)]:text-[12px] [@media(min-width:640px)]:text-[16px]">
                    <Link target="_blank" href={"https://gitlab.com/emileghislain"} className={"flex gap-4 hover:text-[#0781d7] [@media(max-width:639px)]:gap-1 [@media(max-width:639px)]:items-center [@media(max-width:639px)]:p-3 [@media(max-width:639px)]:rounded-full "+(!theme ? "[@media(max-width:639px)]:bg-white":"[@media(max-width:639px)]:bg-black")}>
                        <Image 
                            width={25}
                            height={25}
                            src={"/images/gitlab.svg"}
                            className="hover:text-[#0781d7]"
                        />
                        <div className="[@media(max-width:639px)]:hidden">GitLab</div>
                    </Link>
                    <Link target="_blank" href={"https://www.linkedin.com/in/kamela-%C3%A9mile-94124a194/"} className={"flex gap-4 hover:text-[#0781d7] [@media(max-width:639px)]:gap-1 [@media(max-width:639px)]:items-center [@media(max-width:639px)]:p-3 [@media(max-width:639px)]:rounded-full "+(!theme ? "[@media(max-width:639px)]:bg-white":"[@media(max-width:639px)]:bg-black")}>
                        <Image 
                            width={25}
                            height={25}
                            src={"/images/linkedin.svg"}
                            className="hover:text-[#0781d7]"
                        />
                        <div className="[@media(max-width:639px)]:hidden">LinkedIn</div>
                    </Link>
                    <Link target="_blank" href={"https://twitter.com/emile_ghislain"} className={"flex gap-4 hover:text-[#0781d7] [@media(max-width:639px)]:gap-1 [@media(max-width:639px)]:items-center [@media(max-width:639px)]:p-3 [@media(max-width:639px)]:rounded-full [@media(max-width:639px)]:bg-white "+(!theme ? "[@media(max-width:639px)]:bg-white":"[@media(max-width:639px)]:bg-black")}>
                        <Image 
                            width={25}
                            height={25}
                            src={"/images/twitter.svg"}
                            className="hover:text-[#0781d7]"
                        />
                        <div className="[@media(max-width:639px)]:hidden">Twitter</div>
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
