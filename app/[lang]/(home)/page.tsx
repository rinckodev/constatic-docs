import { CopyButton } from "@/components/CopyButton";
import { ConstaticFlare } from "@/components/decoration/ConstaticFlare";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import GridPattern from "@/components/ui/grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { JetBrains_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: "500" });

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col z-10 items-center justify-center text-center gap-12">
      <ConstaticFlare />
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image src={"/constatic.svg"} alt="logo" width={124} height={124} />
        <h1 
          className={`${poppins.className} text-3xl lg:text-6xl uppercase bg-gradient-to-r 
            dark:from-white from-black dark:to-neutral-400 to-neutral-500 bg-clip-text text-transparent
            
        `}>Constatic</h1>
      </div>
      <span className="justify-center items-center text-center text-sm lg:text-2xl px-24 max-w-screen-lg font-light text-wrap">
        Creating modern and <span className="font-bold">awesome</span> projects has never been easier
      </span>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-center justify-center">
        <RainbowButton className="rounded-full w-full lg:w-fit h-8">
          <Link href={"https://github.com/rinckodev/constatic"} 
            target="_blank" 
            className="flex items-center"
          >
            <FaGithub className="size-4" />
            <span className="ml-1 lg:hidden">Star</span>
            <span className="ml-1 hidden lg:inline">Star on GitHub</span>{" "}
          </Link>
          <div className="ml-2 flex items-center gap-1 text-sm md:flex">
            <FaStar className="size-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" />
          </div>
        </RainbowButton>
        <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <AnimatedShinyText className="flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <Link href={"/docs"} className="flex items-center gap-2">📄 Read the docs <FaArrowRightLong size={10} /></Link>
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div 
          className={`${jetbrains.className} flex gap-2 text-xs lg:text-sm items-center rounded-full px-4 py-1 text-neutral-500 border border-dashed`}>
          <p>npx constatic@latest</p>
          <CopyButton text="npx constatic@latest" />
        </div>
      </div>
      <GridPattern
        width={60}
        height={60}
        className={cn(
          "[mask-image:linear-gradient(-160deg,white,transparent,transparent)] ",
        )}
      />
    </main>
  );
}
