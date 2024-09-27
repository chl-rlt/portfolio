import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { useTheme } from "next-themes";
import { Fragment } from "react";
import { MagicCard } from "../magicui/magic-card";

const SkillBox = ({
  title,
  desc,
  techTags,
}: {
  title: string;
  desc: string;
  techTags: { text: string; icon: JSX.Element }[];
}) => {
  const { theme } = useTheme();
  return (
    <MagicCard
      className=" dark:bg-[#05071998] flex-col shadow-xl p-4 sm:p-5 pb-7 rounded-xl"
      gradientColor={theme === "dark" ? "#000234" : "#D9D9D955"}
    >
      <div className="flex flex-col justify-between ">
        <div>
          <h3 className="dark:text-white mb-2 text-xl tracking-tight font-semibold">
            {title}
          </h3>
          <p className="text-zinc-400 group-hover:text-zinc-300 transition ease-in-out prose prose-invert min-w-full sm:min-h-80">
            {/* Replace all \n with a new line */}
            {desc.split("\\n").map((line, i) => (
              <Fragment key={i}>
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {techTags?.map((tech) => (
            <Tooltip key={tech.text}>
              <TooltipTrigger className="">{tech.icon}</TooltipTrigger>
              <TooltipContent className="Tooltip text-sm bg-slate-800 py-1 px-2 rounded text-white">
                {tech.text}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </MagicCard>
  );
};

export default SkillBox;
