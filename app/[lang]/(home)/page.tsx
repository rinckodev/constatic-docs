import { HeroButtons } from "@components";
import logo from "@/public/constatic.svg";
import Image from "next/image";

import { Poppins as Font } from "next/font/google"

const font = Font({ subsets: ["latin"], weight: "500" })

export default function HomePage() {
  return <main className="dark bg-black overflow-clip">
    <main className="dark z-10 bg-background/60 text-white w-full min-h-screen md:p-12
      flex flex-col items-center justify-center gap-12">
    <div className="relative flex place-items-center
        before:absolute before:rounded-full before:content-['']
        before:rotate-[-32deg]
        before:bg-gradient-to-r before:from-[#0141ff] before:to-[#60c5ff] 
        before:blur-[100px] before:opacity-30 pointer-events-none

        before:w-[140px] before:h-[700px]
        lg:before:w-[240px] lg:before:h-[700px]

        before:translate-x-1 lg:before:translate-x-[-100px] 
        before:translate-y-[-10px] 
        " />
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image src={logo} alt="logo" width={124} height={124} />
        <h1 className={`${font.className} text-4xl md:text-6xl uppercase bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent`}>Constatic</h1>
      </div>
      <span className="text-center text-sm md:text-2xl text-neutral-300 px-24 max-w-screen-lg font-light text-wrap">
        Creating modern and <span className="font-bold">awesome</span> projects has never been easier
      </span>
      <HeroButtons />
    </main>
  </main>
}