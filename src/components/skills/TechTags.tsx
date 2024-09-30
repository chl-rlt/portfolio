import GitLabIcon from "../icons/GitlabIcon";
import MongoIcon from "../icons/MongoIcon";
import NodeIcon from "../icons/NodeIcon";
import PrismaIcon from "../icons/PrismaIcon";
import ReactIcon from "../icons/ReactIcon";
import TypeScriptIcon from "../icons/TypescriptIcon";
import FastifyIcon from "../icons/FastifyIcon";
import IonicIcon from "../icons/IonicIcon";
import MaterialUIIcon from "../icons/MaterialUiIcon";
import ReactQueryIcon from "../icons/ReactQueryIcon";
import TRPCIcon from "../icons/TrpcIcon";

import Marquee from "../magicui/marquee";
import { useState } from "react";
import { motion } from "framer-motion";
import NextIcon from "../icons/NextIcon";
import GitIcon from "../icons/GithubIcon";
import PlaywrightIcon from "../icons/Playwright";
import ExpressIcon from "../icons/ExpressIcon";
import VitePWAIcon from "../icons/VItePwaIcon";
import PostGreSqlIcon from "../icons/PostGreSqlIcon";
import TailwindIcon from "../icons/TailwindIcon";

const tech = [
  {
    text: "React",
    icon: <ReactIcon size={14} />,
  },
  {
    text: "TypeScript",
    icon: <TypeScriptIcon size={14} className="fill-blue-500" />,
  },
  {
    text: "Node.js",
    icon: <NodeIcon size={14} className="fill-green-500" />,
  },
  {
    text: "Prisma",
    icon: <PrismaIcon />,
  },
  {
    text: "Fastify",
    icon: <FastifyIcon />,
  },
  {
    text: "React Query",
    icon: <ReactQueryIcon />,
  },
  {
    text: "TRPC",
    icon: <TRPCIcon />,
  },
  {
    text: "Material UI",
    icon: <MaterialUIIcon />,
  },
  {
    text: "Ionic",
    icon: <IonicIcon />,
  },
  {
    text: "Next.JS",
    icon: <NextIcon />,
  },
  {
    text: "Express",
    icon: <ExpressIcon />,
  },
  {
    text: "MongoDB",
    icon: <MongoIcon />,
  },
  {
    text: "Github",
    icon: <GitIcon />,
  },
  {
    text: "Gitlab",
    icon: <GitLabIcon />,
  },
  {
    text: "Playwright",
    icon: <PlaywrightIcon />,
  },
  {
    text: "Vite PWA",
    icon: <VitePWAIcon size={15} />,
  },
  {
    text: "PostgreSQL",
    icon: <PostGreSqlIcon />,
  },
  {
    text: "Tailwind",
    icon: <TailwindIcon />,
  },
];

const TechTagsMarquee = () => (
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg dark:md:shadow-xl">
    <Marquee pauseOnHover className="[--duration:25s]">
      <div className="flex flex-wrap">
        {tech.map((tech) => (
          <div
            key={tech.text}
            className="text-xs mr-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full dark:bg-gray-800 border dark:border-gray-700 bg-gray-200 border-gray-100"
          >
            <div className="mr-2">{tech.icon}</div>

            {tech.text}
          </div>
        ))}
      </div>
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
  </div>
);

const TechTags = () => {
  const [isList, setIsList] = useState(false);
  return (
    <div className="mt-6">
      <div className="mb-6 flex items-center gap-2">
        <button className="relative flex items-center">
          <input
            type="checkbox"
            className="border-blue-gray-200 relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 transition-all duration-500 checked:border-gray-500 checked:bg-gray-500"
            onChange={() => setIsList(!isList)}
            id="c1"
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="currentColor"
              className="h-3.5 w-3.5"
              initial={false}
              animate={isList ? "checked" : "unchecked"}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
                variants={tickVariants}
              />
            </motion.svg>
          </div>
        </button>
        <label className="Label" htmlFor="c1">
          Afficher la liste
        </label>
      </div>

      {isList ? (
        <div className="flex flex-wrap">
          {tech.map((tech) => (
            <div
              key={tech.text}
              className="text-xs mr-2 mb-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full dark:bg-gray-800 border dark:border-gray-700 bg-slate-200 border-slate-200"
            >
              <div className="mr-2">{tech.icon}</div>

              {tech.text}
            </div>
          ))}
        </div>
      ) : (
        <TechTagsMarquee />
      )}
    </div>
  );
};

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default TechTags;
