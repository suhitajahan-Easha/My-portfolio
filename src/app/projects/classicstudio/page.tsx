
import Image from "next/image";
import Link from "next/link";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Better Auth",
  "JWT",
  "REST APIs",
  "Git",
  "GitHub",
  "Vercel",
];

const features = [
  "Explore creative studios, including photography spaces, podcast rooms, music studios, and more.",
  "Browse studio listings with details such as hourly rates, locations, ratings, amenities, and capacity.",
  "View individual studio details with images, descriptions, and available facilities.",
  "Allow registered users to list and manage their own creative studio spaces.",
  "Implement secure authentication using Better Auth and JWT-based authorization.",
  "Enable creators to book studio spaces based on their requirements.",
  "Manage studio reservations and track booking information.",
  "Allow studio owners to view and manage bookings associated with their listed studios.",
  "Provide protected routes and role-based access to relevant application features.",
  "Deliver a responsive and user-friendly experience across mobile, tablet, and desktop devices.",
];

const challenges = [
  "Implementing authentication and JWT-based authorization to secure protected routes and API endpoints.",
  "Managing relationships between studio owners, studio listings, and booking records in MongoDB.",
  "Building a booking management system that connects creators with the correct studio owners.",
  "Implementing host-side booking retrieval by matching authenticated user information with booking records.",
  "Handling API requests, loading states, errors, and booking-related feedback consistently.",
  "Designing a responsive marketplace interface that makes studio discovery and booking management simple and intuitive.",
];

const futureImprovements = [
  "Integrate an online payment gateway for secure studio reservations.",
  "Implement a real-time availability calendar to prevent booking conflicts.",
  "Add a review and rating system so creators can share their studio experiences.",
  "Introduce advanced search and filtering by studio category, location, price, and availability.",
  "Add booking cancellation and rescheduling functionality.",
  "Implement email notifications for booking confirmations, updates, and cancellations.",
  "Enhance the dashboard with booking analytics and revenue insights for studio owners.",
];

export default function ClassicStudioPage() {
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
          ClassicStudio
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Full-Stack Creative Studio Booking Marketplace
        </p>

        <p className="mt-6 max-w-3xl leading-8 text-slate-300">
          ClassicStudio is a full-stack studio booking marketplace
          designed for creators, photographers, filmmakers,
          podcasters, and musicians. It allows creators to discover
          creative spaces, explore studio details, and reserve
          suitable studios, while studio owners can list their
          spaces and manage bookings through the platform.
        </p>

        {/* Project Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://classicstudio-client.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Visit Live Website ↗
          </a>

          <a
            href="https://github.com/suhitajahan-Easha/Classicstudio-client"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:border-blue-400/50"
          >
            Client GitHub ↗
          </a>

          <a
            href="https://github.com/suhitajahan-Easha/Classicstudio-server"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:border-blue-400/50"
          >
            Server GitHub ↗
          </a>
        </div>

        {/* Project Screenshot */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/projects/classicstudio.PNG"
            alt="ClassicStudio creative studio booking marketplace"
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

        {/* Future Improvements */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">
            Future Improvements &amp; Plans
          </h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            {futureImprovements.map((improvement) => (
              <li key={improvement} className="flex gap-3 leading-7">
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
