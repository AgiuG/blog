"use client";

import { useLanguage } from "../../hooks/useLanguage";

const content = {
  pt: {
    title: "Sobre mim",
    paragraphs: [
      "Pois é, deixa eu te contar minha história.",
      <>
        Sou pernambucano, de Recife, a tal &quot;Veneza Brasileira&quot;. Por muito tempo tive certeza de que seria o lateral-direito do Sport (meu time de coração, só pra deixar registrado). Mas aos 16 a vida bateu na porta: o vestibular estava chegando e tive que pendurar as chuteiras pra focar nos estudos.
      </>,
      "Um ano depois, troquei a ideia de cursar Filosofia pela Licenciatura em Computação, e confesso que minha facilidade com matemática pesou nessa escolha. Foi na UFRPE que escrevi minhas primeiras linhas de código, e foi lá também que tive meu primeiro flerte com a pesquisa: uma iniciação científica em machine learning, criando modelos pra prever vendas de indústrias do setor têxtil do interior de Pernambuco.",
      "Em 2022, troquei a iniciação científica pelo meu primeiro estágio como desenvolvedor full-stack. Foi ali que conheci o desenvolvimento web e, num grande plot twist da história, a computação em nuvem, por quem me apaixonei de vez. Essa paixão me rendeu mais uma iniciação científica e o meu TCC sobre injeção de falhas em ambientes de nuvem.",
      <>
        O tema gostou tanto de mim quanto eu dele e acabou virando meu mestrado, agora juntando tudo que vivi até aqui: injeção de falhas geradas por IA em ambientes de nuvem. Dessa história nasceu o{" "}
        <a href="/projects">CIMut</a>, uma ferramenta que rendeu alguns artigos publicados e ainda deu uma mãozinha a outros pesquisadores nas investigações deles.
      </>,
      <>
        Se precisar de algo, ou só quiser prosear, me manda um e-mail:{" "}
        <a href="mailto:guilhermeduarte19@gmail.com">guilhermeduarte19@gmail.com</a>.
      </>,
      "Da lama ao caos, do caos à lama.",
      <>
        Abraço,
        <br />
        Guiga.
      </>,
    ],
  },
  en: {
    title: "About me",
    paragraphs: [
      "Well, let me tell you my story.",
      <>
        I&apos;m from Recife, Pernambuco — the so-called &quot;Brazilian Venice&quot;. For a long time I was convinced I&apos;d end up as a right-back for Sport (my team, just for the record). But at 16, life came knocking: college entrance exams were around the corner and I had to hang up my boots to focus on studying.
      </>,
      "A year later, I swapped my plan to study Philosophy for a Computer Science degree, and I'll admit my knack for math played a big part in that call. It was at UFRPE that I wrote my first lines of code, and also where I had my first brush with research: an undergraduate research project in machine learning, building models to forecast sales for textile factories in the interior of Pernambuco.",
      "In 2022, I traded research for my first full-stack developer internship. That's where I fell in love with web development and — in a major plot twist — cloud computing, which I became truly obsessed with. That passion led to another research project and my final thesis on fault injection in cloud environments.",
      <>
        The topic liked me as much as I liked it, and it ended up becoming my master&apos;s research, bringing together everything I&apos;d lived up to that point: AI-powered fault injection in cloud environments. That journey gave birth to{" "}
        <a href="/projects">CIMut</a>, a tool that produced a few published papers and even helped other researchers along the way.
      </>,
      <>
        If you need anything, or just want to chat, send me an email:{" "}
        <a href="mailto:guilhermeduarte19@gmail.com">guilhermeduarte19@gmail.com</a>.
      </>,
      "From mud to chaos, from chaos to mud.",
      <>
        Cheers,
        <br />
        Guiga.
      </>,
    ],
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const { title, paragraphs } = content[language];

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {title}
      </h1>
      <article>
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
    </>
  );
}
