
import Image from "next/image";
import Link from "next/link";

const technologies = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

const features = [
  "Modern and responsive user interface.",
  "Organized developer-focused content and resources.",
  "Interactive and user-friendly navigation.",
  "Clean, component-based interface.",
  "Responsive design optimized for different screen sizes.",
  "Deployed online and accessible through Netlify.",
];

const challenges = [
  "Creating a clean and organized interface for presenting developer resources.",
  "Building reusable React components to keep the code organized and maintainable.",
  "Implementing responsive layouts that work across mobile, tablet, and desktop screens.",
  "Managing component styling and spacing to maintain a consistent visual design.",
  "Making navigation intuitive and easy for users to explore the available content.",
];

const futureImprovements = [
  "Add search functionality to help developers find resources quickly.",
  "Introduce categories and filters for different development topics.",
  "Add user authentication and personalized saved resources.",
  "Include more tutorials, tools, and learning resources for developers.",
  "Improve accessibility, performance, and the overall user experience.",
];

export default function DevStackpage() {
  return (
    <main className="min-h-screen bg-[#080D1A] px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="text-sm text-blue-400 transition hover:text-blue-300"
        >
          ← Back to Projects
        </Link>

        {/* Project Heading */}
        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Project Details
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
          DevStack
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Developer Resource &amp; Community Platform
        </p>

        {/* Description */}
        <p className="mt-6 max-w-3xl leading-8 text-slate-300">
          DevStack is a modern web application designed to help
          developers discover and explore development resources
          through a clean, organized, and user-friendly interface.
          It focuses on accessible navigation, reusable UI
          components, and responsive design across screen sizes.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://devstack-assignment-5-ph.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Visit Live Website ↗
          </a>

          <a
            href="https://github.com/suhitajahan-Easha/Assignment-5-PH"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:border-blue-400/50"
          >
            View GitHub ↗
          </a>
        </div>

        {/* Project Screenshot */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
          <Image
            src="/projects/devstack.PNG"
            alt="DevStack developer resource platform screenshot"
            width={1200}
            height={675}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Key Features
          </h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 leading-7"
              >
                <span className="text-blue-400">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Technologies Used
          </h2>

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
          <h2 className="text-2xl font-bold">
            Challenges Faced
          </h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            {challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 leading-7"
              >
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

        {/* Bottom Link */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <Link
            href="/#projects"
            className="font-semibold text-blue-400 transition hover:text-blue-300"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
