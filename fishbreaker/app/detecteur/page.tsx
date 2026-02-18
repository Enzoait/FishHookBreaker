import type { Metadata } from "next";
import FileDropZone from "./FileDropZone";

export const metadata: Metadata = {
  title: "Détecteur — FishHookBreaker",
  description:
    "Déposez un fichier suspect pour l'analyser instantanément avec notre IA anti-phishing.",
};

export default function Detecteur() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/3 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-6 pb-8 pt-28 text-center sm:pt-36">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-sky-500">
            Détecteur
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Analysez vos fichiers{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              en un instant
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            Déposez un fichier suspect ci-dessous. Notre IA l&apos;analysera en
            quelques secondes et vous donnera un verdict clair.
          </p>
        </div>
      </section>

      {/* Drop Zone */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <FileDropZone />

          {/* Supported formats */}
          <div className="mt-8 rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Formats supportés
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                ".eml",
                ".msg",
                ".pdf",
                ".html",
                ".txt",
                ".doc",
                ".docx",
                ".xls",
                ".xlsx",
                ".png",
                ".jpg",
                ".zip",
              ].map((format) => (
                <span
                  key={format}
                  className="inline-flex rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
                title: "Chiffré & sécurisé",
                description:
                  "Vos fichiers sont analysés en mémoire et jamais stockés.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                title: "Ultra rapide",
                description: "Résultat en moins de 2 secondes.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title: "99.7% de précision",
                description: "IA entraînée sur des millions de menaces.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-zinc-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                  {card.icon}
                </div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {card.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
