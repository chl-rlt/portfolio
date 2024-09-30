import Image from "next/image";
import { Briefcase, Calendar, Star } from "lucide-react";
import { useEffect, useState } from "react";
import BlurFade from "../magicui/blur-fade";
import { Experience } from "@/app/types/experience";

export const ExperienceList = () => {
  const [experiences, setData] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/data/experiences.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="sm:py-8 py-2">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tight dark:text-zinc-100  sm:text-4xl mb-6 ">
          Expériences
        </h2>
        {/* 
        <p className="my-4 text-zinc-400">
          {"Jetez un coup d'œil à mes derniers projets."}
        </p> */}
      </BlurFade>
      <div className="relative px-4 lg:px-2 sm:overflow-x-hidden lg:overflow-x-visible">
        <ol className="relative border-l dark:border-gray-800">
          {experiences.map((p, i) => (
            <BlurFade delay={0.25 + i * 0.1} inView key={p.title}>
              <li key={i} className="mb-10 ml-6">
                <div className="dark:bg-gray-800 bg-gray-100 px-4 py-3 rounded-lg shadow-lg ">
                  <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 rounded-full ring-8 bg-background ring-gray-200 dark:ring-gray-900">
                    <Image
                      src={p.logo.url}
                      alt={p.title}
                      className="rounded-full dark:text-white text-slate-950 bg-transparent"
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
                  <p className="mb-4 text-base font-sans whitespace-pre-wrap font-normal dark:text-gray-300 text-gray-600 prose prose-invert min-w-full">
                    {p.description}
                  </p>

                  {/* {p.link && (
                    <a
                      href={p.link}
                      className="text-blue-300 underline break-all"
                      target="_blank"
                    >
                      {p.link}
                    </a>
                  )} */}

                  <div className="mt-4 flex flex-wrap">
                    {p.tech.map((tech) => (
                      <div
                        key={tech}
                        className="mb-2 py-1 px-2 text-xs rounded-md mr-2 dark:bg-gray-600 bg-gray-200 text-gray-2"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    <time>{p.date}</time>
                  </div>
                </div>

                {p.subItems && (
                  <ol className="mt-7 space-y-10 relative border-l dark:border-gray-800">
                    {p.subItems?.map((subItem, i) => (
                      <li key={i} className="p-1 ml-6">
                        <span className="absolute -left-3.5">
                          {subItem.isPromotion ? (
                            <span className="flex justify-center items-center w-7 h-7 bg-yellow-200 rounded-full dark:bg-gray-700">
                              <Star size="20px" />
                            </span>
                          ) : (
                            <span className="flex justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700">
                              <Briefcase size="20px" />
                            </span>
                          )}

                          <Image
                            src={p.logo.url}
                            alt={p.title}
                            className="w-4 h-4 absolute z-[2] rounded-full bottom-[-2px] right-[-2px]"
                            width={100}
                            height={100}
                          />
                        </span>

                        <div className="flex flex-col md:flex-row items-start md:items-center">
                          {subItem.isPromotion && (
                            <div className="text-sm font-bold px-2 border rounded mr-2">
                              Promotion
                            </div>
                          )}

                          <h4 className="flex items-center font-semibold text-md text-gray-900 dark:text-white">
                            {subItem.title}
                          </h4>
                        </div>

                        {subItem.role && (
                          <p className="block  text-sm font-normal leading-none text-gray-400">
                            {subItem.role}
                          </p>
                        )}

                        <p className="mb-4 mt-3 text-base font-normal text-gray-400 prose prose-invert min-w-full">
                          {subItem.description}
                        </p>

                        <a
                          href={subItem.link}
                          className="text-blue-300 underline break-all"
                          target="_blank"
                        >
                          {subItem.link}
                        </a>

                        {subItem.tech && (
                          <div className="mt-4 flex flex-wrap">
                            {subItem.tech.map((tech) => (
                              <div
                                key={tech}
                                className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800  text-gray-300"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                          <Calendar size={16} />
                          <time>{subItem.date}</time>
                        </div>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            </BlurFade>
          ))}
        </ol>
      </div>
    </div>
  );
};
