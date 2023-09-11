
import Image from "next/image"
import Navbar from "./components/navbar"
import Link from "next/link"

export default function Experience() {
  return (
    <div className="bg-black min-h-screen flex flex-col px-12 py-8">
        <Navbar />
        <div className="py-4 flex flex-col text-md font-bold text-start gap-12 capitalize text-white">
            <div className="w-1/5 text-[#ffc259] rounded-full px-6 py-4 bg-[#1f1c11] text-xs uppercase text-center">Experience</div>
            <div className="flex justify-between gap-4">
                <div className="w-1/3 p-4 border rounded-xl">
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                </div>
                <div className="w-1/3 p-4 border rounded-xl">
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                </div>
                <div className="w-1/3 p-4 border rounded-xl">
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                </div>
            </div>
            <div className="flex justify-between gap-4">
                <div className="w-1/3 p-4 border rounded-xl">
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                </div>
                <div className="w-1/3 p-4 border rounded-xl">
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                </div>
                <div className="w-1/3 p-4 border rounded-xl">
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                    say hello to the last banking management <br />solution! say hello to the last banking management solution!
                </div>
            </div>
            <div className="flex justify-center gap-8 text-xs">
            <Link href={"/skills"}><button className="text-white uppercase animate-[wiggle_5s_ease-in-out_infinite] bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-white">
                    skills
                </button></Link>
            </div>
        </div>
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
