"use client";

import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
// import ShimmerButton from "@/components/magicui/shimmer-button";
import { MarqueeComponent } from "@/components/ui/reviewCard";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center sm:min-h-screen p-8 pb-20 sm:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col sm:gap-8 row-start-2 sm:items-start">
          <Image
            className="rounded-full bg-gradient-to-r from-blue-800 to-indigo-900 drop-shadow-md"
            src="/images/profile.png"
            alt="Next.js logo"
            width={120}
            height={120}
            priority
          />

          <h1 className="text-2xl sm:text-6xl font-bold mb-0">
            Chloe Renault.
          </h1>
          <h2 className="text-2xl sm:text-5xl font-bold text-[#888889] opacity-80 mt-0">
            Développeuse Fullstack Javascript.
          </h2>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Forte appétence pour React", // initially rendered starting point
              // icon
              1000,
              "Forte appétence pour TypeScript",
              1000,
              "Forte appétence pour NodeJS",
              500,
            ]}
            speed={50}
            repeat={Infinity}
            className=" text-lg sm:text-3xl"
          />

          <div className="flex gap-4 items-center sm:flex-row">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="#"
              rel="noopener noreferrer"
            >
              En savoir plus
            </a>
            <AnimatedShinyText className="inline-flex items-center justify-center cursor-pointer px-4 sm:py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Contactez-moi</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
            {/* <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                En savoir plus
              </span>
            </ShimmerButton> */}
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
      <div>
        <MarqueeComponent />
        {/* https://magicui.design/docs/components/magic-card */}
      </div>
    </div>
  );
}
