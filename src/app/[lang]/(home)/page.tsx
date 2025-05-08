import { ConstaticFlare } from "@/components/constatic/ConstaticFlare";
import { GithubButton } from "@/components/constatic/GithubButton";
import { ReadDocsButton } from "@/components/constatic/ReadDocsButton";
import { GridPattern } from "@/components/decoration/GridPattern";
import { CliCommand } from "@/components/display/CliCommand";
import { cn } from "@/lib/cn";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col z-10 items-center justify-center text-center gap-12">
      <ConstaticFlare />
      <div className="flex flex-col md:flex-row justify-center items-center motion-preset-expand motion-delay-[200ms]">
        <Image src={"/constatic.svg"} alt="logo" width={124} height={124}/>
        <h1 
          className={`${poppins.className} text-3xl lg:text-6xl uppercase bg-gradient-to-r 
            dark:from-white from-black dark:to-neutral-400 to-neutral-500 bg-clip-text text-transparent
        `}>Constatic</h1>
      </div>
      <span className="justify-center items-center text-center text-sm lg:text-2xl px-24 max-w-screen-lg font-light text-wrap motion-preset-expand motion-delay-[300ms]">
        Creating modern and <span className="font-bold">awesome</span> projects has never been easier
      </span>
      <div className="flex flex-col w-fit">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-center justify-center motion-preset-expand motion-delay-[400ms]">
          <GithubButton/>
          <ReadDocsButton/>
        </div>
        <CliCommand 
          packageName="constatic@latest" 
          className="border-dashed"
        />
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
