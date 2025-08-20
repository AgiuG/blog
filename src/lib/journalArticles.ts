export interface JournalArticle {
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

const journalArticles: JournalArticle[] = [
  {
    id: "computational-thinking-2024",
    title: {
        en: "Developing Games and Computational Thinking Skills: An Analysis of a Project-Based Learning Approach",
        pt: "Desenvolvendo Jogos e Habilidades de Pensamento Computacional: Análise de uma Abordagem Apoiada na Aprendizagem Baseada em Projetos"
    },
    journal: "RENOTE",
    authors: ["Guilherme Silva Duarte", "Claudia Eduarda de Moura Ramos", "Isaac Clemente Nunes", "Publio do Nascimento Oliveira", "Renan Tomazini", "Daniel Teixeira Nipo", "Rodrigo Lins Rodrigues"],
    date: "2025-01-06 ",
    doi: "10.22456/1679-1916.144997",
    url: "http://dx.doi.org/10.22456/1679-1916.144997",
    tags: {
        en: ["Project-Based Learning", "Construct 3", "Computational Thinking", "Game Development"],
        pt: ["Aprendizagem Baseada em Projetos", "Construct 3", "Pensamento Computacional", "Desenvolvimento de jogos"],
    },
    abstract: {
        en: "This article evaluates the approach to teaching Computational Thinking (CT) through game creation, using the Project-Based Learning (PBL) methodology. The research demonstrates that the PBL methodology, associated with game creation, is an effective tool for teaching CT, as it promotes practical and playful learning. The research results indicate that the approach contributed to the acquisition of CT skills, as well as the acquisition of essential competencies such as critical thinking and problem-solving, aligning with the educational objectives of the National Common Curricular Base (BNCC).",
        pt: "Este artigo avalia a abordagem do ensino de Pensamento Computacional (PC) por meio da criação de jogos, utilizando a metodologia de Aprendizagem Baseada em Projetos (ABP). A pesquisa demonstra que a metodologia ABP, associada a criação de jogos, é uma ferramenta eficaz pa o ensino de PC, pois promove uma aprendizagem prática e lúdica. Os resultados da pesquisa indicam que a abordagem contribuiu para a aquisição de habilidades de PC, bem como na aquisição de competências essenciais, como pensamento crítico e resolução de problemas, alinhando-se aos objetivos educacionais da Base Nacional Comum Curricular (BNCC)."
    }
  },
];

export function getAllJournalArticles(): JournalArticle[] {
  return journalArticles.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getJournalArticlesByTag(tag: string, language: 'en' | 'pt' = 'en'): JournalArticle[] {
  return journalArticles.filter(article => 
    article.tags?.[language]?.some(articleTag => articleTag.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllJournalTags(language: 'en' | 'pt' = 'en'): string[] {
  const tags = new Set<string>();
  
  journalArticles.forEach(article => {
    article.tags?.[language]?.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags);
}