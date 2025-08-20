"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { messages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
        className={`${isVisible ? "opacity-100" : "opacity-0"} fixed z-10 items-center gap-2 rounded bg-zinc-50 py-2 pl-4 pr-3 ring-1 ring-zinc-400 transition-all sm:right-8 sm:top-8 sm:flex sm:hover:bg-zinc-200 dark:bg-zinc-900 dark:ring-zinc-500 sm:hover:dark:bg-zinc-800`}
      >
        {messages.scrollToTop.buttonText}
        <ArrowUp className="size-4" />
      </button>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
        className={`${isVisible ? "opacity-100" : "opacity-0"} fixed z-10 items-center gap-2 rounded bg-zinc-50 p-3 ring-1 ring-zinc-400 transition-all max-sm:bottom-6 max-sm:right-6 max-sm:flex sm:hover:bg-zinc-200 dark:bg-zinc-900 dark:ring-zinc-500 sm:hover:dark:bg-zinc-800`}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
};
