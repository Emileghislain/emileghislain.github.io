import Link from "next/link"
import { useRouter } from 'next/router'
import { useThemeContext } from '../context/theme'
import Image from "next/image"

export default function Footer() {
    const router = useRouter()
    const [theme, setTheme] = useThemeContext()

    const changedTheme =()=>{
        setTheme(!theme)
    }
    
    return (
        <div className="[@media(min-width:640px)]:hidden self-center flex justify-around fixed bottom-2">
            <div className="bg-[#1f1f1f] text-xs text-white flex gap-2 uppercase self-center items-center py-2 px-4 rounded-full font-light">
                <span className={router.pathname === '/home' ? "bg-[#3a3a3a] px-5 py-2 rounded-full" : ""}>
                    <Link href="/home">Home</Link>
                </span>
                <span className={router.pathname === '/about' ? "bg-[#3a3a3a] px-5 py-2 rounded-full" : ""}>
                    <Link href="/about">About</Link>
                </span>
                <span className={router.pathname === '/skills' ? "bg-[#3a3a3a] px-5 py-2 rounded-full" : ""}>
                    <Link href="/skills">Skills</Link>
                </span>
                <span className={router.pathname === '/experience' ? "bg-[#3a3a3a] px-5 py-2 rounded-full" : ""}>
                    <Link href="/experience">Experience</Link>
                </span>
                <span className={router.pathname === '/contact' ? "bg-[#3a3a3a] px-5 py-2 rounded-full" : ""}>
                    <Link href="/contact">Contact</Link>
                </span>
            </div>
        </div>
    )
}
