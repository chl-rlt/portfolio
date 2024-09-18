import { useState } from "react";
import GitLabIcon from "../icons/GitlabIcon";
import MongoIcon from "../icons/MongoIcon";
import NodeIcon from "../icons/NodeIcon";
import PrismaIcon from "../icons/PrismaIcon";
import ReactIcon from "../icons/ReactIcon";
import TypeScriptIcon from "../icons/TypescriptIcon";
import Marquee from "../magicui/marquee";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

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
    text: "MongoDB",
    icon: <MongoIcon />,
  },
  {
    text: "Gitlab",
    icon: <GitLabIcon />,
  },
  {
    text: "Prisma",
    icon: <PrismaIcon />,
  },
];

const TechTagsMarquee = () => (
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
    <Marquee pauseOnHover className="[--duration:20s]">
      <div className="flex flex-wrap">
        {tech.map((tech) => (
          <div
            key={tech.text}
            className="text-xs mr-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
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
      <div className="mb-6">
        {/* <Checkbox.Root
          checked={isList}
          onCheckedChange={() => setIsList(!isList)}
          className="CheckboxRoot"
          defaultChecked
          id="c1"
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="Label" htmlFor="c1">
          Show as List
        </label> */}
      </div>

      {isList ? (
        <div className="flex flex-wrap">
          {tech.map((tech) => (
            <div
              key={tech.text}
              className="text-xs mr-2 mb-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
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

export default TechTags;
