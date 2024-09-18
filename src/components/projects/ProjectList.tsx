import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { useTheme } from "next-themes";
import FastifyIcon from "../icons/FastifyIcon";
import GitLabIcon from "../icons/GitlabIcon";
import IonicIcon from "../icons/IonicIcon";
import MaterialUIIcon from "../icons/MaterialUiIcon";
import MongoIcon from "../icons/MongoIcon";
import NodeIcon from "../icons/NodeIcon";
import PostGreSqlIcon from "../icons/PostGreSqlIcon";
import PrismaIcon from "../icons/PrismaIcon";
import ReactIcon from "../icons/ReactIcon";
import ReactQueryIcon from "../icons/ReactQueryIcon";
import TRPCIcon from "../icons/TrpcIcon";
import TypeScriptIcon from "../icons/TypescriptIcon";
import { MagicCard } from "../magicui/magic-card";
import { useEffect, useState } from "react";
import { Project } from "@/app/types/project";
import BlurFade from "../magicui/blur-fade";

export function ProjectsList() {
  const { theme } = useTheme();
  const [projects, setData] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="lg:py-24 sm:py-10 py-6">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tight dark:text-zinc-100 sm:text-4xl">
          Mes projets
        </h2>

        <p className="my-4 text-zinc-400">
          {"Jetez un coup d'œil à mes derniers projets."}
        </p>
      </BlurFade>
      <div className="border sm:block hidden"></div>
      <div className={"flex flex-col gap-4 lg:flex-row mt-8 w-full"}>
        {projects.map((project) => (
          <BlurFade
            delay={0.25 * projects.indexOf(project) + 0.25}
            inView
            key={project.id}
            className="w-full"
          >
            <MagicCard
              key={project.id}
              className="cursor-pointer dark:bg-[#05071998] flex-col shadow-2xl p-4 sm:p-5 pb-7"
              gradientColor={theme === "dark" ? "#000234" : "#D9D9D955"}
              url={`projects/${project.id}`}
            >
              <div>
                <div className="text-xs dark:text-zinc-100 text-zinc-700">
                  {project.date ? (
                    <span>{project.date}</span>
                  ) : (
                    <span>SOON</span>
                  )}
                </div>

                <h2 className="mt-4 text-xl font-bold dark:text-zinc-100 dark:group-hover:text-white text-zinc-700 sm:text-4xl font-display">
                  {project.name}
                </h2>
                <p className="mt-4 text-sm text-wrap duration-150 text-zinc-500 group-hover:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-4">
                  {project.stack.map((stack) => (
                    <Tooltip key={stack.key}>
                      <TooltipTrigger className="text-xs font-medium">
                        {getIcon(stack.key)}
                      </TooltipTrigger>
                      <TooltipContent className="Tooltip text-sm bg-slate-800 py-1 px-2 rounded text-white">
                        {stack.name}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                <div>
                  <p className="hidden text-zinc-500 dark:hover:text-zinc-400 sm:block sm:mt-5 mt-0">
                    {"Plus d'infos"} <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

function getIcon(type: string) {
  switch (type) {
    case "react":
      return <ReactIcon />;
    case "material-ui":
      return <MaterialUIIcon />;
    case "nodejs":
      return <NodeIcon />;
    case "fastify":
      return <FastifyIcon />;
    case "mongodb":
      return <MongoIcon />;
    case "prisma":
      return <PrismaIcon />;
    case "react-query":
      return <ReactQueryIcon />;
    case "trpc":
      return <TRPCIcon />;
    case "typescript":
      return <TypeScriptIcon />;
    case "gitlab":
      return <GitLabIcon />;
    case "postgresql":
      return <PostGreSqlIcon />;
    case "ionic":
      return <IonicIcon />;
  }
}