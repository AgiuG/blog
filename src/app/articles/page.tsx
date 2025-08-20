import { getArticles } from "@/src/lib/articles";
import ClientArticlesPage from "./ClientArticlesPage";
import { getAllJournalArticles } from "@/src/lib/journalArticles";

export default async function ArticlesPage() {
  const articles = getArticles();
  const journalArticles = getAllJournalArticles();

  return <ClientArticlesPage articles={articles} journalArticles={journalArticles} />;
}