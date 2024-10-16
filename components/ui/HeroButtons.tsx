import { AnimatedShinyText, CopyButton } from "@/components";
import Link from "fumadocs-core/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

import { JetBrains_Mono as Font } from "next/font/google"
const font = Font({ subsets: ["latin"] });

export function HeroButtons() {
  return <div className="flex flex-col gap-2 justify-center items-center">
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
      <Link href="https://github.com/rinckodev/constatic">
        <span className="flex gap-2 items-center md:bg-white rounded-full px-4 py-1 md:text-black">
          ⭐ Star on github <IoLogoGithub />
        </span>
      </Link>
      <Link href="/docs">
        <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
          <AnimatedShinyText className="flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="flex items-center gap-2">📄 Read the docs <FaArrowRightLong size={10} /></span>
          </AnimatedShinyText>
        </div>
      </Link>
    </div>
    <span className={`${font.className} flex gap-2 text-xs md:text-sm items-center rounded-full px-4 py-1 text-neutral-500`}>
      npx constatic@latest
      <CopyButton text="npx constatic@latest" />
    </span>
  </div>
}