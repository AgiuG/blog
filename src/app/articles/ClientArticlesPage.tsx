"use client";

import { Article } from "@/src/lib/articles";
import moment from "moment";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react";

interface JournalArticle {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  journal: string;
  authors: string[];
  date: string;
  doi?: string;
  url?: string;
  tags?: {
    en: string[];
    pt: string[];
  };
  abstract?: {
    en: string;
    pt: string;
  };
}

interface ClientArticlesPageProps {
  articles: Article[];
  journalArticles?: JournalArticle[];
}

export default function ClientArticlesPage({ articles, journalArticles = [] }: ClientArticlesPageProps) {
  const { messages, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'blog' | 'journal'>('blog');

  return (
    <div>
      <h1 className="mb-8 mt-4 text-center text-5xl max-sm:text-4xl">
        {messages.articlesPage.title}
      </h1>

      {/* Tabs */}
      <div className="mb-8 flex justify-center">
        <div className="flex rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
          <button
            onClick={() => setActiveTab('blog')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              activeTab === 'blog'
                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            {messages.articlesPage.blogArticles.title} ({articles.length})
          </button>
          <button
            onClick={() => setActiveTab('journal')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              activeTab === 'journal'
                ? 'bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-white'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            {messages.articlesPage.publishedPapers.title} ({journalArticles.length})
          </button>
        </div>
      </div>

      {/* Blog Articles */}
      {activeTab === 'blog' && (
        <section className="space-y-4">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {messages.articlesPage.blogArticles.title}
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((article: Article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="group block"
              >
                <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] dark:border-zinc-700 dark:bg-zinc-900">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                      {article.title}
                    </h3>
                  </div>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {article?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {moment(article.date, "YYYY-MM-DD").format("MMM DD, YYYY")}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-400">Blog</span>
                      <span className="text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Journal Articles */}
      {activeTab === 'journal' && (
        <section className="space-y-4">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {messages.articlesPage.publishedPapers.title}
          </h2>
          
          <div className="space-y-4">
            {journalArticles.map((article: JournalArticle) => (
              <div
                key={article.id}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {article.title[language]}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {article.journal}
                  </p>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-medium">Authors:</span> {article.authors.join(', ')}
                  </p>
                </div>

                {article.abstract && (
                  <div className="mb-3">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {article.abstract[language]}
                    </p>
                  </div>
                )}
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {article?.tags?.[language]?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {moment(article.date, "YYYY-MM-DD").format("MMM DD, YYYY")}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-400">{messages.articlesPage.publishedPapers.title}</span>
                    {article.doi && (
                      <a
                        href={`https://doi.org/${article.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                      >
                        DOI
                      </a>
                    )}
                    {article.url && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {messages.articlesPage.publishedPapers.viewPaper} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}