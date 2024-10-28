
import Image from "next/image"

export default function Header() {
  return (
    <div className="flex justify-between items-center font-bold py-4 px-8">
      <span className="animate-[wiggle_5s_linear_running] text-[2rem]">Welcome!</span>
      {/* <div className="flex justify-between gap-8 items-center font-medium">
        <span className="hover:bg-[#fff6cb] py-2 px-4 rounded-lg w-30 text-center">Home</span>
        <span className="hover:bg-[#fff6cb] py-2 px-4 rounded-lg w-30 text-center">Services</span>
        <span className="hover:bg-[#fff6cb] py-2 px-4 rounded-lg w-30 text-center">Blog</span>
      </div> */}
      <div className="flex justify-between gap-2">
        <Image 
          src={"/images/image.png"}
          width={50}
          height={50}
          className="border rounded"
        />
        <div className="flex flex-col font-semibold text-sm justify-center">
            <span>Emile Ghislain</span>
            <span className="font-light text-[15px]">Fullstack Developer</span>
        </div>
      </div>
    </div>
  )
}
