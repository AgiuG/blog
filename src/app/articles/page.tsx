import ClientArticlesPage from "./ClientArticlesPage";
import { getAllJournalArticles } from "@/src/lib/journalArticles";

export default async function ArticlesPage() {
  const journalArticles = getAllJournalArticles();
  return <ClientArticlesPage journalArticles={journalArticles} />;
}
