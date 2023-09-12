import Navbar from "./components/navbar";
import Footer from "./components/footer";
import skills from "../data/skills";
import Image from "next/image";
import { useThemeContext } from '../context/theme'

export default function Skills(){
    const [theme, setTheme] = useThemeContext()
    console.log(skills)
    return(
        <div className={(!theme ?"bg-black text-white ":"bg-white text-black ")+"min-h-screen flex flex-col px-12 xs:py-2 sm:py-8"}>
            <Navbar/>
            {skills.map((el, i)=>(<div key={i} className="flex flex-col py-6 [@media(max-width:639px)]:pb-12 gap-1">
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
            <Footer />
        </div>
    )
}