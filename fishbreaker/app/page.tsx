import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -top-24 left-1/4 h-100 w-100 rounded-full bg-indigo-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 text-center sm:pt-36">

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl">
            Brisez les hameçons{" "}
            <span className="bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              avant qu&apos;ils ne vous attrapent
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            FishHookBreaker analyse vos fichiers et emails suspects en quelques
            secondes et totalement gratuitement. Identifiez les
            menaces de phishing instantanément.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/detecteur"
              className="inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-sky-500 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Analyser un mail
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-base font-semibold text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              En savoir plus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200/60 bg-zinc-50/50 py-24 dark:border-zinc-800/60 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Comment agir pour votre sécurité en ligne ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Trois étapes simples pour sécuriser votre navigation et vos
              communications.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Déposez votre fichier",
                description:
                  "Glissez-déposez un email suspect dans notre interface sécurisée.",
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
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Analyse avancée en temps réel",
                description:
                  "Notre outil scanne le contenu et détecte les patterns de phishing les plus courants.",
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
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Résultat instantané",
                description:
                  "Recevez un verdict clair avec un score de confiance et des recommandations détaillées.",
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
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.step}
                className="group relative rounded-2xl border border-zinc-200/80 bg-white p-8 transition-all hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-500/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20">
                  {feature.icon}
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-sky-500">
                  Étape {feature.step}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "99.7%", label: "Taux de détection" },
              { value: "<2s", label: "Temps d'analyse" },
              { value: "500K+", label: "Fichiers analysés" },
              { value: "24/7", label: "Disponibilité" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-200/60 bg-zinc-50/50 py-24 dark:border-zinc-800/60 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Prêt à vous protéger ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            Commencez dès maintenant à analyser vos mails suspects.
            C'est gratuit, rapide et confidentiel.
          </p>
          <Link
            href="/detecteur"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-sky-500 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-110"
          >
            Lancer une analyse
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
