export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      <h1 className="text-5xl max-sm:text-3xl">
        This page doesn&apos;t exist.
      </h1>
      <a
        href="/"
        className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
      >
        Take me home, country road...
      </a>
    </div>
  );
}
