
import Image from "next/image"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Link from "next/link"
import { useThemeContext } from '../context/theme'
import skills from "../data/skills";

export default function Experience() {
    const [theme, setTheme] = useThemeContext()
  return (
    <div className={(!theme ?"bg-black text-white ":"bg-white text-black ")+"bg-black min-h-screen flex flex-col px-12 xs:py-2 sm:py-8"}>
        <Navbar />
        <div className="py-4 flex flex-col text-md text-start gap-12 [@media(max-width:639px)]:gap-0">
            {/* <div className="w-1/5 text-[#ffc259] rounded-full px-6 py-4 bg-[#1f1c11] text-xs text-center">Experience</div> */}
            {skills.map((el, i)=>(<div key={i} className="flex flex-col py-6 gap-1">
                <span className="uppercase font-extrabold text-[20px]">
                    {el.title}
                </span>
                <hr className="pb-2"/>
                <div className="grid [@media(max-width:639px)]:grid-cols-1 grid-cols-4 justify-between pt-2">
                    {el.content.map((e, index)=>(
                        <div key={index} className={(!theme ?"hover:bg-[#1f1f1f] ":"hover:bg-[#ece9e9] ")+"flex flex-col p-6 rounded-xl gap-y-2"}>
                            <Image 
                                width={50}
                                height={50}
                                src={e.image}
                            />
                            <span className="font-bold">{e.title}</span>
                            <span className="font-light">{e.description}</span>
                        </div>
                        )
                    )}
                </div>
            </div>))}
            <div className="flex justify-center gap-8 text-xs [@media(max-width:639px)]:hidden">
                <Link href={"/skills"}>
                    <button className="text-white uppercase animate-[wiggle_5s_ease-in-out_infinite] bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-white">
                        skills
                    </button>
                </Link>
            </div>
        </div>
        <Footer />
        {/* <div className="flex text-white my-8 justify-around">
            
            {/* <div className="w-1/2 flex items-center justify-center flex-col gap-8">
                <Image src={"/images/image.png"} 
                width={500}
                height={300}/>

                <span className="font-light text-[12px] self-end pr-10 flex gap-3">
                    Scroll down to read more
                    <Image src={"/images/arrow_down.svg"} width={20} height={20} className="bg-white rounded-full p-1 animate-bounce w-6 h-6"/>
                </span>
            </div>
        </div> */}
    </div>
  )
}
