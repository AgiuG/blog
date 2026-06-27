"use client";

import { Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";

interface Project {
  name: string;
  description: { en: string; pt: string };
  imageUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Cardex",
    description: {
      en: "Spaced repetition flashcard platform with GitHub OAuth. All data is stored directly in the user's own private GitHub repository — no database required.",
      pt: "Plataforma de flashcards com revisão espaçada (SM-2) e autenticação via GitHub OAuth. Todos os dados ficam no próprio repositório privado do usuário no GitHub — sem banco de dados.",
    },
    url: "https://cardex-web-cyan.vercel.app/",
    imageUrl: "/projects/cardex.png",
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          React 19
        </span>
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          TypeScript
        </span>
        <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Tailwind v4
        </span>
        <span className="rounded-full bg-[#009688] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          FastAPI
        </span>
        <span className="rounded-full bg-[#3776AB] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Python 3.14
        </span>
      </div>
    ),
  },
  {
    name: "CIMut",
    description: {
      en: "Cloud Injection Mutator — chaos engineering and mutation testing platform for cloud-native infrastructures. Uses Google Gemini to autonomously plan and apply code mutations on OpenStack and AWS Lambda environments.",
      pt: "Cloud Injection Mutator — plataforma de chaos engineering e mutation testing para infraestruturas cloud-native. Usa Google Gemini para planejar e aplicar mutações de código de forma autônoma em ambientes OpenStack e AWS Lambda.",
    },
    url: "https://cimut.vercel.app/",
    imageUrl: "/projects/cimut.png",
    technologies: (
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          React 18
        </span>
        <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          TypeScript
        </span>
        <span className="rounded-full bg-[#009688] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          FastAPI
        </span>
        <span className="rounded-full bg-[#3776AB] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500">
          Python 3.12
        </span>
        <span className="rounded-full bg-gradient-to-r from-[#4285F4] to-[#34A853] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none dark:ring-1 dark:ring-zinc-500">
          Gemini
        </span>
      </div>
    ),
  },
];

interface ProjectCardProps extends Project {
  language: "en" | "pt";
  visitWebsite: string;
}

function ProjectCard({ name, description, imageUrl, url, technologies, language, visitWebsite }: ProjectCardProps) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description[language]}</p>
      </div>
      <Image
        src={imageUrl}
        width={620}
        height={324}
        alt={`Screenshot of ${name}`}
      />
      <a
        href={url}
        target="_blank"
        className="flex w-full items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
      >
        <Globe strokeWidth={1.4} className="size-5" /> {visitWebsite}
      </a>
    </div>
  );
}

export default function ProjectsPage() {
  const { messages, language } = useLanguage();

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {messages.projectsPage.title}
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.url}
            {...project}
            language={language}
            visitWebsite={messages.projectsPage.visitWebsite}
          />
        ))}
      </div>
    </>
  );
}
