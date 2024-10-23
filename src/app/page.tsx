"use client";

import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ProjectsList } from "@/components/projects/ProjectList";
import BlurFade from "@/components/magicui/blur-fade";
import { ExperienceList } from "@/components/experiences/ExperienceList";
import { EducationList } from "@/components/education/EducationList";
import { SkillList } from "@/components/skills/SkillList";
import { Download } from "lucide-react";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-section bg-no-repeat bg-contain">
      <div className="flex lg:w-[990px] w-full lg:m-auto items-center justify-center lg:min-h-screen sm:p-8 p-8 pb-20 ">
        <main className="flex flex-col sm:gap-8 row-start-2 sm:items-start items-center mt-28 sm:mt-0">
          <BlurFade delay={0.25} inView>
            <Image
              className="rounded-full bg-gradient-to-r dark:bg-transparent  dark:from-[#9c40ff]/50 dark:to-[#8244FF] bg-transparent from-slate-900 to-slate-700  to-bg-slate-500 drop-shadow-xl  sm:mt-0 mt-3"
              src="/images/profile.png"
              alt="Next.js logo"
              width={120}
              height={120}
              priority
            />
          </BlurFade>

          <h1 className="text-xl !text sm:text-6xl sm:text-left text-center opacity-90 font-bold mb-0 sm:mt-3 mt-5 text-wrap sm:!leading-[79px] !leading-[32px]">
            <BlurFade delay={0.5} inView>
              Salut ! {"Moi c'est  "}
              <span className="dark:text-[#8244FF] text-gray-500">
                Chloé Renault
              </span>
              , <br />
            </BlurFade>
            <BlurFade delay={0.75} inView>
              Développeuse Full Stack <br />
            </BlurFade>
            <BlurFade delay={1} inView>
              <span className="dark:text-[#8244FF] text-gray-500">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "TypeScript",
                    1000,
                    "ReactJS",
                    1000,
                    "NodeJS",
                    500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-xl sm:text-6xl"
                />
              </span>
            </BlurFade>
          </h1>

          <BlurFade delay={1.25} inView>
            <div className="flex gap-4 items-center sm:flex-row sm:mt-0 mt-28">
              <a
                className="sm:flex hidden rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors  items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-base h-12 px-5 min-w-44"
                href="#more"
                rel="noopener noreferrer"
              >
                En savoir plus
              </a>
              <a
                href="https://drive.google.com/file/d/1Qv5aED91W0RjUC0TOOi3A3e21k2ePVtB/view?usp=sharing"
                target="_blank"
              >
                <AnimatedShinyText className=" h-12 px-5 min-w-44 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] inline-flex items-center justify-center cursor-pointer transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span className="flex gap-2 items-center">
                    <Download size={22} />
                    Obtenir mon CV ✨
                  </span>
                </AnimatedShinyText>
              </a>
            </div>
          </BlurFade>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
      <div
        className="sm:border-t bg-background sm:px-0 px-4 sm:py-0 py-8"
        id="more"
      >
        <div className="px-3 md:px-7 lg:w-[1100px] lg:m-auto">
          <ProjectsList />
          <SkillList />
          <ExperienceList />
          <EducationList />
        </div>
        <Footer />
      </div>
    </div>
  );
}
