
import Image from "next/image"
import Link from "next/link"

export default function Body() {
  return (
    <div className="bg-black flex flex-col px-8 py-16 rounded-t-3xl">
        <div className="bg-[#1f1f1f] text-sm text-white w-1/2 flex justify-between uppercase self-center items-center py-2 px-4 gap-x-16 rounded-full font-light">
            <span className="bg-[#3a3a3a] px-5 py-2 rounded-full">
                <Link href="/">Home</Link>
            </span>
            <span>
                <Link href="/about">About</Link>
            </span>
            <span>Skills</span>
            <span>Experience</span>
            <span>Contact</span>
        </div>
        <div className="flex text-white my-8 justify-around">
            <div className="w-1/2 px-8 py-4 flex flex-col text-[30px] font-bold text-start gap-12 capitalize">
                <button className="w-1/5 text-[#ffc259] rounded-full px-6 py-4 bg-[#1f1c11] text-xs">New Service</button>
                <div>say hello to the last <br />banking management <br />solution!</div>
                <div className="font-light text-[20px]">say hello to the last banking management <br />solution! say hello to the last banking management solution!</div>
                <div className="flex justify-center gap-8 text-xs">
                    <button className="text-[#1f1f1f] bg-gradient-to-r from-[#fff6cb] to-[#ffc055] py-5 px-14 rounded-3xl hover:text-white">Read More</button>
                    <button className="text-white bg-[#1f1f1f] py-5 px-14 rounded-3xl hover:text-[#1f1f1f] hover:bg-gradient-to-r from-[#fff6cb] to-[#ffc055]">Skip This Service</button>
                </div>
                <span className="font-light text-[15px] pt-4">Our Official Partners</span>
            </div>
            <div className="w-1/2 flex items-center justify-center flex-col gap-8">
                <Image src={"/images/image.png"} 
                width={500}
                height={300}/>

                <span className="font-light text-[12px] self-end pr-10 flex gap-3">
                    Scroll down to read more
                    <Image src={"/images/arrow_down.svg"} width={20} height={20} className="bg-white rounded-full p-1 animate-bounce w-6 h-6"/>
                </span>
            </div>
        </div>
    </div>
  )
}
