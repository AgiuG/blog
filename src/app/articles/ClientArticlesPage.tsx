"use client";

import { JournalArticle } from "@/src/lib/journalArticles";
import moment from "moment";
import { useLanguage } from "../../hooks/useLanguage";

interface ClientArticlesPageProps {
  journalArticles: JournalArticle[];
}

export default function ClientArticlesPage({ journalArticles }: ClientArticlesPageProps) {
  const { messages, language } = useLanguage();

  return (
    <div>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {messages.articlesPage.title}
      </h1>

      <div className="space-y-4">
        {journalArticles.map((article) => (
          <div
            key={article.id}
            className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500"
          >
            <div className="p-4">
              <h2 className="text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                {article.title[language]}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {article.journal} · {moment(article.date.trim(), "YYYY-MM-DD").format("MMM YYYY")}
              </p>
              <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                {article.authors.join(", ")}
              </p>
            </div>

            {article.abstract && (
              <div className="p-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {article.abstract[language]}
                </p>
              </div>
            )}

            {article.tags?.[language] && (
              <div className="flex flex-wrap gap-2 p-4">
                {article.tags[language].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 ring-1 ring-zinc-300 dark:bg-inherit dark:text-zinc-400 dark:ring-zinc-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {(article.doi || article.url) && (
              <a
                href={article.url ?? `https://doi.org/${article.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 py-4 text-sm transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
              >
                {messages.articlesPage.publishedPapers.viewPaper} →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
