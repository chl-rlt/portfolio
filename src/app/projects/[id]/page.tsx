"use client";
import { useState, useEffect } from "react";
import { Project } from "@/app/types/project";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Iphone15Pro from "@/components/mockup/IphoneMockup";
import Safari from "@/components/mockup/SafariMockup";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { theme } = useTheme();
  const [projects, setData] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const project = projects.find((project: Project) => project.id === params.id);
  console.log(project);
  return (
    <div className="sm:min-h-screen">
      <header className="relative isolate overflow-hidden ">
        <div
          className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent bg-white/10  border-zinc-200 lg:border-transparent`}
        >
          <div className="container flex items-center p-6 mx-auto">
            <Link
              href="/"
              className={`duration-200 hover:font-medium ${
                theme === "dark"
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <ArrowLeft className="w-6 h-6 " />
            </Link>
          </div>
        </div>
        <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                {project?.name}
              </h1>
              <span className="mt-6 inline-flex items-center rounded-md bg-indigo-50 bg-opacity-15 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                Badge
              </span>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                {project?.description}
              </p>
            </div>
          </div>
        </div>
      </header>
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless sm:h-[500px] sm:w-[850px] sm:m-auto dark:prose-invert  ">
        {project?.images.map((image) => (
          <div className="relative" key={image.key}>
            {image.device === "mobile" && <Iphone15Pro src={image.url} />}
            {image.device === "desktop" && <Safari src={image.url} />}
          </div>
        ))}
      </article>
    </div>
  );
}
