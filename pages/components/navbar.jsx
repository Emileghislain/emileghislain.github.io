import Link from "next/link";
import { useRouter } from "next/router";
import { useThemeContext } from "../../context/theme";
import Image from "next/image";
import Head from "next/head.js";

export default function Navbar() {
  const router = useRouter();
  const [theme, setTheme] = useThemeContext();

  const changedTheme = () => {
    setTheme(!theme);
  };

  console.log(theme);

  return (
    <div className="flex justify-between xs:justify-end xs:pt-1 pt-8">
      <Head>
        <title>EG | Portfolio</title>
        <link rel="icon" href="/images/me.png"></link>
      </Head>
      <span className="text-white opacity-0 xs:hidden md:block">
        change theme
      </span>
      <div className="xs:hidden bg-[#1f1f1f] text-sm text-white flex gap-11 uppercase self-center items-center py-2 px-4 rounded-full font-light">
        <span
          className={
            router.pathname === "/home"
              ? "bg-[#3a3a3a] px-5 py-2 rounded-full"
              : ""
          }
        >
          <Link href="/home">Home</Link>
        </span>
        <span
          className={
            router.pathname === "/about"
              ? "bg-[#3a3a3a] px-5 py-2 rounded-full"
              : ""
          }
        >
          <Link href="/about">About</Link>
        </span>
        <span
          className={
            router.pathname === "/skills"
              ? "bg-[#3a3a3a] px-5 py-2 rounded-full"
              : ""
          }
        >
          <Link href="/skills">Skills</Link>
        </span>
        {/* <span className={router.pathname === '/experience' ? "bg-[#3a3a3a] px-5 py-2 rounded-full" : ""}>
                    <Link href="/experience">Experience</Link>
                </span> */}
        {/* <span className={router.pathname === '/contact' ? "bg-[#3a3a3a] px-5 py-2 rounded-full" : ""}>
                    <Link href="/contact">Contact</Link>
                </span> */}
      </div>
      {/* <div className="sm:hidden md:hidden lg:hidden self-start">
                <Image 
                    width={30}
                    height={30}
                    src={theme ? "/images/menu-dark.svg" : "/images/menu-white.svg"}
                />
            </div> */}
      <span
        className={
          (theme ? "bg-black " : "bg-white ") +
          "cursor-pointer xs:p-2 p-4 rounded-full flex"
        }
        onClick={changedTheme}
      >
        <Image
          width={20}
          height={20}
          src={theme ? "/images/dark-mode.svg" : "/images/light-theme.svg"}
        />
      </span>
    </div>
  );
}
