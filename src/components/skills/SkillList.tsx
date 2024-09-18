import BlurFade from "../magicui/blur-fade";
import TechTags from "./TechTags";

export const SkillList = () => {
  return (
    <div className="border-y sm:py-12 py-16 sm:mb-10">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tight dark:text-zinc-100  sm:text-4xl mb-6 ">
          Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      </BlurFade>
      <TechTags />
    </div>
  );
};
