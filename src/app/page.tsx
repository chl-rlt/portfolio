"use client";

import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ProjectsList } from "@/components/projects/ProjectList";
import BlurFade from "@/components/magicui/blur-fade";
import { ExperienceList } from "@/components/experiences/ExperienceList";
import { EducationList } from "@/components/education/EducationList";
import { SkillList } from "@/components/skills/SkillList";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex lg:w-[1100px] lg:m-auto items-center justify-items-center min-h-screen sm:p-8 p-8 pb-20">
        <main className="flex flex-col sm:gap-8 row-start-2 sm:items-start items-center">
          <BlurFade delay={0.25} inView>
            <Image
              className="rounded-full bg-gradient-to-r dark:bg-transparent from-slate-900 to-slate-700 drop-shadow-xl  sm:mt-0 mt-3"
              src="/images/profile.png"
              alt="Next.js logo"
              width={120}
              height={120}
              priority
            />
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h1 className="text-2xl sm:text-6xl font-bold mb-0 sm:mt-0 mt-5">
              Chloé Renault.
            </h1>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h2 className="text-2xl sm:text-5xl font-bold text-[#888889] opacity-60 sm:mt-0 mt-4 sm:text-left text-center ">
              Développeuse Fullstack Javascript.
            </h2>
          </BlurFade>

          <BlurFade delay={0.75} inView>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Forte appétence pour ReactJS", // initially rendered starting point
                // icon
                1000,
                "Forte appétence pour TypeScript",
                1000,
                "Forte appétence pour NodeJS",
                500,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-3xl sm:mt-0 mt-7"
            />
          </BlurFade>

          <BlurFade delay={1} inView>
            <div className="flex gap-4 items-center sm:flex-row sm:mt-0 mt-16">
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="/#more"
                rel="noopener noreferrer"
              >
                En savoir plus
              </a>
              <AnimatedShinyText className="inline-flex items-center justify-center cursor-pointer px-4 sm:py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Contactez-moi</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </BlurFade>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
      <div
        className="sm:border-t bg-background sm:px-0 px-4 sm:py-0 py-8"
        id="more"
      >
        <div className=" px-3 md:px-7 lg:w-[1100px] lg:m-auto">
          <ProjectsList />
          <SkillList />
          <ExperienceList />
          <EducationList />
        </div>
      </div>
    </div>
  );
}
