import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — FishHookBreaker",
  description:
    "Découvrez FishHookBreaker, l'outil de détection de phishing alimenté par l'intelligence artificielle.",
};

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-1/3 h-[500px] w-[500px] rounded-full bg-indigo-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 sm:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-sky-500">
              À propos
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Notre mission :{" "}
              <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
                un internet plus sûr
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              FishHookBreaker est né de la volonté de protéger chaque utilisateur
              contre les tentatives de phishing toujours plus sophistiquées.
              Notre outil utilise l&apos;intelligence artificielle de pointe
              pour détecter les menaces avant qu&apos;elles ne causent des
              dégâts.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-zinc-200/60 bg-zinc-50/50 py-24 dark:border-zinc-800/60 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Nos valeurs
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sécurité avant tout",
                description:
                  "Vos fichiers sont analysés en mémoire et jamais stockés. La confidentialité de vos données est notre priorité absolue.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
              },
              {
                title: "Transparence",
                description:
                  "Nous expliquons chaque décision de notre IA. Vous comprenez pourquoi un fichier est marqué comme suspect.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                ),
              },
              {
                title: "Innovation continue",
                description:
                  "Notre modèle d'IA est constamment entraîné sur les dernières menaces pour rester à la pointe de la détection.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
              },
              {
                title: "Accessibilité",
                description:
                  "Un outil simple et gratuit, accessible à tous. Pas besoin d'être expert en cybersécurité pour se protéger.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
              },
              {
                title: "Performance",
                description:
                  "Analyse en moins de 2 secondes grâce à notre infrastructure optimisée et nos algorithmes de pointe.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
              },
              {
                title: "Open Source",
                description:
                  "Notre code est auditable et ouvert à la communauté. La sécurité ne devrait jamais être une boîte noire.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200/80 bg-white p-8 transition-all hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-500/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Tech */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-sky-500">
                Technologie
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Propulsé par l&apos;IA de dernière génération
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                FishHookBreaker combine des modèles de machine learning avancés avec
                une base de données de menaces constamment mise à jour. Notre
                système analyse les patterns textuels, les métadonnées et les
                structures des fichiers pour identifier les tentatives de
                phishing les plus subtiles.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Analyse NLP des contenus textuels",
                  "Détection d'URLs malveillantes",
                  "Vérification des signatures numériques",
                  "Analyse comportementale des pièces jointes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative card */}
            <div className="relative">
              <div className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 to-white p-10 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-7 w-7"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                        99.7%
                      </div>
                      <div className="text-sm text-zinc-500">
                        Précision de détection
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xl font-bold text-zinc-900 dark:text-white">
                        &lt;2s
                      </div>
                      <div className="text-sm text-zinc-500">
                        Temps d&apos;analyse moyen
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-zinc-900 dark:text-white">
                        50+
                      </div>
                      <div className="text-sm text-zinc-500">
                        Types de fichiers supportés
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
