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
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex lg:w-[1100px] lg:m-auto items-center justify-items-center lg:min-h-screen sm:p-8 p-8 pb-20">
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
                className="sm:flex hidden rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors  items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-base h-12 px-5 min-w-44"
                href="mailto:renaultchloe7@gmail.com"
                rel="noopener noreferrer"
              >
                Contactez-moi
              </a>
              <a
                href="https://drive.google.com/file/d/1gbaRzYPHkqLSRVgTl1ixUhObEXCB2k4d/view?usp=sharing"
                target="_blank"
              >
                <AnimatedShinyText className="inline-flex items-center justify-center cursor-pointer px-4 sm:py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
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
        <div className=" px-3 md:px-7 lg:w-[1100px] lg:m-auto">
          <Image
            src="/images/section.svg"
            alt="Hero"
            width={1572}
            height={795}
            className="absolute top-0 -z-10"
          />
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
