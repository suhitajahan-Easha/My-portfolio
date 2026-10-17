
import Image from "next/image";
import Link from "next/link";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "daisyUI",
  "Better Auth",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
  "Vercel",
];

const features = [
  "Browse everyday essentials across multiple product categories.",
  "Display prices using Bengali numerals and localized dates.",
  "Highlight products with rising and falling prices.",
  "Support email/password, Google, and GitHub authentication.",
  "Protect product details and profile pages through authenticated routes.",
  "View account information and update profile details.",
  "Use category browsing, price sorting, loading skeletons, and toast notifications.",
  "Enjoy responsive layouts on mobile, tablet, and desktop.",
];

const challenges = [
  "Integrating authentication providers and protecting pages that require a signed-in user.",
  "Connecting the Next.js application to MongoDB and managing product data efficiently.",
  "Displaying prices with Bengali numerals while keeping the interface clear and consistent.",
  "Handling loading states, errors, and user feedback to create a smooth browsing experience.",
  "Building a responsive interface that works well across mobile, tablet, and desktop screens.",
];

const futureImprovements = [
  "Add an admin dashboard to manage products, categories, and market prices.",
  "Introduce price history charts to help users understand changes over time.",
  "Add search and advanced filtering to make products easier to find.",
  "Provide price alerts when a product's price rises or falls.",
  "Improve data accuracy by integrating reliable market price data sources.",
];

export default function BazarDorpage() {
  return (
    <main className="min-h-screen bg-[#080D1A] px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Projects
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Project Details
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
          Bazar Dor (বাজার দর)
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Bengali Market Price Tracker
        </p>

        <p className="mt-6 max-w-3xl leading-8 text-slate-300">
          Bazar Dor is a responsive, Bengali-first market price
          tracking application that helps users explore everyday
          product prices, compare market rates, and understand
          price fluctuations through an intuitive interface.
        </p>

        {/* Project Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://bazar-dor-suhitajahan-easha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Visit Live Website ↗
          </a>

          <a
            href="https://github.com/suhitajahan-Easha/bazar-dor-24"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:border-blue-400/50"
          >
            View GitHub ↗
          </a>
        </div>

        {/* Project Screenshot */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/projects/bazardor.PNG"
            alt="Bazar Dor application screenshot"
            width={1200}
            height={675}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Key Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Key Features</h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 leading-7">
                <span className="text-blue-400">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Technologies Used</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-[#111827] px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges Faced */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Challenges Faced</h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            {challenges.map((challenge) => (
              <li key={challenge} className="flex gap-3 leading-7">
                <span className="mt-1 text-blue-400">▸</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Future Improvements and Plans */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Future Improvements &amp; Plans
          </h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            {futureImprovements.map((improvement) => (
              <li
                key={improvement}
                className="flex gap-3 leading-7"
              >
                <span className="mt-1 text-blue-400">↗</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Back to Projects */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <Link
            href="/#projects"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

