
import Link from "next/link"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { useThemeContext } from '../context/theme'

export default function Home() {
    const [theme, setTheme] = useThemeContext()
  return (
        <div className={(!theme ?"bg-black text-white ":"bg-white text-black ")+"min-h-screen flex flex-col px-12 xs:py-2 sm:py-8"}>
            <Navbar />
            <div className="flex my-8 justify-start [@media(min-width:640px)]:w-2/3 [@media(min-width:640px)]:px-20 sm:p-6 py-8 flex-col font-bold text-start gap-4 uppercase text-[60px] xs:text-[30px]">
                Hey, <br/> I am Kamela Djounga Emile Ghislain
            </div>
            <div className="flex flex-col gap-8 uppercase items-center">
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
