
import Image from "next/image";
import Link from "next/link";

const technologies = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "daisyUI",
];

const features = [
  "Browse a curated exercise library covering major muscle groups.",
  "View exercise details, including equipment, difficulty, sets, reps, duration, calories burned, and ratings.",
  "Add exercises to a daily workout plan, with a limit of five lifts.",
  "Save exercises for later.",
  "Sort planned and saved workouts using workout metrics.",
  "Follow step-by-step exercise instructions.",
  "Use a modern, dark-themed, responsive interface.",
];

const challenges = [
  "Organizing exercise information so users can easily explore exercises and understand their details.",
  "Implementing workout planning with a limit of five exercises per daily plan.",
  "Managing planned and saved exercises while keeping their actions and lists organized.",
  "Implementing sorting options for workout plans and saved exercises using workout metrics.",
  "Creating a consistent, responsive interface that works across mobile, tablet, and desktop screens.",
];

const futureImprovements = [
  "Add user authentication so users can save their workout plans across sessions.",
  "Introduce workout history and progress tracking to monitor training over time.",
  "Add weekly and monthly workout summaries with visual progress charts.",
  "Allow users to customize workout plans based on fitness goals and experience levels.",
  "Add exercise search and advanced filters for muscle groups, equipment, and difficulty.",
  "Improve accessibility and performance for a smoother user experience.",
];

export default function FitLogpage() {
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
          FitLog
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Workout &amp; Gym Planning Web App
        </p>

        {/* Description */}
        <p className="mt-6 max-w-3xl leading-8 text-slate-300">
          FitLog is a modern workout companion designed to help
          users discover exercises, build daily workout plans,
          and keep track of their training. It combines an
          organized exercise library with practical workout
          planning and a clean, dark-themed interface.
        </p>

        {/* Project Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://assignment-6-fit-log-phi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Visit Live Website ↗
          </a>

          <a
            href="https://github.com/suhitajahan-Easha/Fit-log"
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
            src="/projects/fitlog.png"
            alt="FitLog workout planning application screenshot"
            width={1200}
            height={675}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Key Features */}
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
