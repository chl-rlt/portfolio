import Image from "next/image";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import BlurFade from "../magicui/blur-fade";
import { Education } from "@/app/types/education";

export const EducationList = () => {
  const [educations, setData] = useState<Education[]>([]);

  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="sm:py-8 py-2">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tight dark:text-zinc-100  sm:text-4xl mb-6 ">
          Education
        </h2>

        {/* <p className="my-4 text-zinc-400">
          {"Jetez un coup d'œil à mes derniers projets."}
        </p> */}
      </BlurFade>
      <div className="relative px-4 lg:px-2 sm:overflow-x-hidden lg:overflow-x-visible">
        <ol className="relative border-l dark:border-gray-800">
          {educations.map((p, i) => (
            <BlurFade delay={0.25 + i * 0.1} inView key={p.title}>
              <li key={i} className="mb-10 ml-6">
                <div className="px-4 py-3 rounded-lg shadow-lg ">
                  <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 rounded-full bg-background ring-8 ring-gray-400 dark:ring-gray-900">
                    <Image
                      src={p.logo.url}
                      alt={p.title}
                      className="rounded-full dark:text-white text-slate-950"
                      width={40}
                      height={40}
                    />
                  </span>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="block mb-3 text-sm font-normal leading-none text-gray-400">
                    {p.role}
                  </p>
                  <p className="mb-4 text-base font-sans whitespace-pre-wrap font-normal text-gray-300 prose prose-invert min-w-full">
                    {p.description}
                  </p>

                  <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    <time>{p.date}</time>
                  </div>
                </div>
              </li>
            </BlurFade>
          ))}
        </ol>
      </div>
    </div>
  );
};
