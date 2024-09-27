import NextIcon from "../icons/NextIcon";
import ReactIcon from "../icons/ReactIcon";
import TailwindIcon from "../icons/TailwindIcon";
import TypeScriptIcon from "../icons/TypescriptIcon";
import BlurFade from "../magicui/blur-fade";
import SkillBox from "./SkillBox";
import TechTags from "./TechTags";
import MaterialUIIcon from "../icons/MaterialUiIcon";
import GitIcon from "../icons/GithubIcon";
import GitLabIcon from "../icons/GitlabIcon";
import PlaywrightIcon from "../icons/Playwright";
import NodeIcon from "../icons/NodeIcon";
import FastifyIcon from "../icons/FastifyIcon";
import ExpressIcon from "../icons/ExpressIcon";
import IonicIcon from "../icons/IonicIcon";
import ShadcnIcon from "../icons/ShadcnIcon";

export const SkillList = () => {
  return (
    <div className="border-y sm:py-12 py-16 sm:mb-10">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tight dark:text-zinc-100  sm:text-4xl mb-6 ">
          Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillBox
            title="UI"
            desc="Maîtrise des frameworks modernes : Une solide expérience avec des frameworks comme React ou Vue.JS. \n\n 
            UX/UI collaboration : Capacité à collaborer étroitement avec les designers UX/UI, en comprenant les besoins de l’utilisateur final. \n\n Performance et accessibilité : Connaissance des bonnes pratiques en matière d'optimisation des performances et d'accessibilité."
            techTags={[
              {
                text: "TypeScript",
                icon: <TypeScriptIcon size={20} className="fill-blue-500" />,
              },
              {
                text: "React",
                icon: <ReactIcon size={20} className="fill-cyan-500" />,
              },
              {
                text: "Next.js (SSR/SSG)",
                icon: <NextIcon size={20} />,
              },
              {
                text: "Tailwind CSS",
                icon: <TailwindIcon size={20} className="text-cyan-500" />,
              },
              {
                text: "Material UI",
                icon: <MaterialUIIcon size={20} />,
              },
              {
                text: "Ionic",
                icon: <IonicIcon size={20} />,
              },
              {
                text: "Shadcn UI",
                icon: <ShadcnIcon size={20} />,
              },
            ]}
          />
          <SkillBox
            title="API"
            desc="Conception et implémentation d'APIs RESTful : Expertise dans la création et la consommation d’APIs RESTful robustes et résilientes. \n\n Sécurité API : connaissances dans la sécurisation des API (authentification, autorisation, gestion des tokens)"
            techTags={[
              {
                text: "Node.JS",
                icon: <NodeIcon size={20} />,
              },
              {
                text: "Fastify",
                icon: <FastifyIcon size={20} />,
              },
              {
                text: "Express",
                icon: <ExpressIcon size={20} />,
              },
            ]}
          />
          <SkillBox
            title="QA"
            desc="Intégration de tests unitaires et E2E avec Playwright et Cypress. \n\n Maintient d'une bonne couverture de tests sans compromettre la productivité, en s'assurant que les fonctionnalités critiques sont toujours testées. \n\n CI/CD et intégration des tests : Familiarité avec les pipelines CI/CD où les tests sont automatisés avant les déploiements."
            techTags={[
              {
                text: "GitHub",
                icon: <GitIcon size={20} />,
              },
              {
                text: "GitLab",
                icon: <GitLabIcon size={20} />,
              },
              {
                text: "Playwright",
                icon: <PlaywrightIcon size={20} />,
              },
            ]}
          />
        </div>
      </BlurFade>
      <BlurFade delay={0.5} inView className="sm:block hidden">
        <TechTags />
      </BlurFade>
    </div>
  );
};
