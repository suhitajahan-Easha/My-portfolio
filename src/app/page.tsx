"use client";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { FaShieldAlt, FaCode } from "react-icons/fa";
import Image from "next/image";

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-slate-400">{description}</p>
    </div>
  );
}
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const navbar = document.querySelector("header");
  const navbarHeight = navbar?.getBoundingClientRect().height ?? 80;

  const heading = section.querySelector("h2") ?? section;

  const top =
    heading.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100">
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#080D1A]/95 backdrop-blur">
        <nav className="mx-auto  flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Suhita Jahan <span className="text-blue-400">Easha</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-blue-400" href="#home">
              Home
            </a>
            <a className="transition hover:text-blue-400" href="#about">
              About
            </a>
            <a
              className="transition hover:text-blue-400"
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
            >
              Education
            </a>
            <a
              className="transition hover:text-blue-400"
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              Skills
            </a>
            <a
              className="transition hover:text-blue-400"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
            <a
              className="transition hover:text-blue-400"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </div>

          <a
            href="YOUR_GOOGLE_DRIVE_RESUME_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-400/10"
          >
            <FaFileAlt size={16} />
            Resume
          </a>
        </nav>
      </header>
      {/* section home */}
      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-36"
      >
        <div>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-slate-200 sm:text-3xl lg:text-4xl">
            Hi, I&apos;m Suhita
          </h1>

          <motion.h2
            className="mt-5 text-3xl font-bold text-blue-400 sm:text-4xl lg:text-6xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
          >
            {"Full Stack Developer".split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            I build modern web applications with thoughtful interfaces and
            practical functionality using frontend and backend technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
            >
              Explore My Projects ↗
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-blue-400/50 hover:text-blue-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>React & Next.js</span>
            <span>TypeScript</span>
            <span>Full Stack Development</span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs">
          <motion.div
            className="mx-auto w-full max-w-sm"
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <div
              className="aspect-square overflow-hidden rounded-full 
            "
            >
              <Image
                src="/suhita.png"
                alt="Suhita Jahan Easha"
                width={450}
                height={450}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* section about */}
      {/* <motion.section
        id="about"
        className="border-y border-white/[0.06] bg-[#0C1323]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Turning ideas into useful web experiences.
            </h2>
          </div>
          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              I&apos;m Suhita Jahan Easha, a Full Stack Developer passionate
              about building modern, responsive, and user-friendly web
              applications.
            </p>

            <p>
              I enjoy turning ideas into practical solutions, exploring new
              technologies, and improving my development skills through hands-on
              projects.
            </p>

            <p>
              I&apos;m currently seeking junior-level opportunities in frontend,
              backend, or full stack development where I can contribute to
              real-world projects, collaborate with experienced developers, and
              grow as a software developer.
            </p>
            <a
              href="YOUR_GOOGLE_DRIVE_RESUME_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-400/10"
            >
              <FaFileAlt size={16} />
              Resume
            </a>
          </div>
        </div>
      </motion.section> */}

      <motion.section
        id="about"
        className="border-y border-white/[0.06] bg-[#0C1323]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.7fr_1.3fr]">
          {/* About Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Turning ideas into useful web experiences.
            </h2>
          </div>

          {/* About Description */}
          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              I&apos;m Suhita Jahan Easha, a Full Stack Developer passionate
              about building modern, responsive, and user-friendly web
              applications.
            </p>

            <p>
              I enjoy turning ideas into practical solutions, exploring new
              technologies, and improving my development skills through hands-on
              projects.
            </p>

            <p>
              I&apos;m currently seeking junior-level opportunities in frontend,
              backend, or full stack development where I can contribute to
              real-world projects, collaborate with experienced developers, and
              grow as a software developer.
            </p>

            {/* Resume and Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Resume */}
              <a
                href="YOUR_GOOGLE_DRIVE_RESUME_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-400/10"
              >
                <FaFileAlt size={16} />
                Resume
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/suhita-jahan-easha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                title="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
              >
                <FaLinkedinIn size={19} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/suhitajahan-Easha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                title="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
              >
                <FaGithub size={19} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* education */}
      <motion.section
        id="education"
        className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Background
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Education
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-white/10 bg-[#111B30] p-6 transition hover:border-blue-400/40"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p className="text-sm font-medium text-blue-400">2024 – 2025</p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Master&apos;s in Engineering
            </h3>
            <p className="mt-2 text-slate-300">
              Computer Science &amp; Telecommunication Engineering
            </p>
            <p className="mt-2 text-slate-400">
              Noakhali Science and Technology University
            </p>
            <p className="mt-4 text-sm text-slate-300">CGPA: 3.59 / 4.00</p>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-[#111B30] p-6 transition hover:border-blue-400/40"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p className="text-sm font-medium text-blue-400">2017 – 2024</p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Bachelor of Science in Engineering
            </h3>
            <p className="mt-2 text-slate-300">
              Computer Science &amp; Telecommunication Engineering
            </p>
            <p className="mt-2 text-slate-400">
              Noakhali Science and Technology University
            </p>
            <p className="mt-4 text-sm text-slate-300">CGPA: 3.17 / 4.00</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Toolkit
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Technologies I use to build modern, responsive web applications.
          </p>
        </div>

        {[
          {
            title: "Frontend",
            skills: [
              { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
              { name: "CSS3", icon: SiCss, color: "#1572B6" },
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "React.js", icon: SiReact, color: "#61DAFB" },
              { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
              { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
            ],
          },
          {
            title: "Backend & Database",
            skills: [
              { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
              { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
              { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
              { name: "Better Auth", icon: FaShieldAlt, color: "#60A5FA" },
              { name: "REST APIs", icon: FaCode, color: "#60A5FA" },
            ],
          },
          {
            title: "Developer Tools & Deployment",
            skills: [
              { name: "VS Code", icon: VscVscode, color: "#007ACC" },
              { name: "Git", icon: SiGit, color: "#F05032" },
              { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
              { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
              { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
            ],
          },
        ].map((group) => (
          <div key={group.title} className="mb-7 last:mb-0">
            <h3 className="mb-3 text-sm font-semibold text-slate-300">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    title={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111827] px-3 py-2 transition-colors duration-200 hover:border-blue-400/40 hover:bg-[#14213D]"
                  >
                    <Icon
                      size={17}
                      aria-hidden="true"
                      style={{ color: skill.color }}
                      className="shrink-0"
                    />

                    <span className="text-xs font-medium text-slate-300 sm:text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </motion.section>

      {/* project section */}
      <motion.section
        id="projects"
        className="scroll-mt-24 border-y border-white/[0.06] bg-[#0C1323]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionTitle
            label="Selected Work"
            title="Featured Projects"
            description="A selection of my deployed projects and practical development work."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Bazar Dor Project Card */}
            <motion.div
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Project Screenshot */}
              <div className="aspect-video overflow-hidden bg-[#080D1A]">
                <Image
                  src="/projects/bazardor.PNG"
                  alt="Bazar Dor Bengali market price tracker"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Information */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  Bazar Dor (বাজার দর)
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A Bengali-first market price tracker to explore everyday
                  product prices, compare market rates, and track price changes.
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "MongoDB",
                    "Better Auth",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-400/10 px-2.5 py-1 text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-4">
                  <a
                    href="https://bazar-dor-suhitajahan-easha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/suhitajahan-Easha/bazar-dor-24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-300 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="/projects/bazar-dor"
                    className="text-sm font-semibold text-slate-300 transition hover:text-blue-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </motion.div>
            {/* DevStack Project Card */}
            <motion.div
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Project Screenshot */}
              <div className="aspect-video overflow-hidden bg-[#080D1A]">
                <Image
                  src="/projects/devstack.PNG"
                  alt="DevStack developer resource platform"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Information */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">DevStack</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A modern developer resource platform for discovering and
                  exploring development resources through a clean, user-friendly
                  interface.
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "JavaScript",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-400/10 px-2.5 py-1 text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-4">
                  <a
                    href="https://devstack-assignment-5-ph.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href="https://github.com/suhitajahan-Easha/Assignment-5-PH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-300 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="/projects/devstack"
                    className="text-sm font-semibold text-slate-300 transition hover:text-blue-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3: FitLog */}

            {/* FitLog Project Card */}
            <motion.div
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Project Screenshot */}
              <div className="aspect-video overflow-hidden bg-[#080D1A]">
                <Image
                  src="/projects/fitlog.PNG"
                  alt="FitLog workout and gym planning application"
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Information */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">FitLog</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A workout companion for exploring exercises, planning daily
                  training sessions, and saving favorite workouts.
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "daisyUI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-400/10 px-2.5 py-1 text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-4">
                  <a
                    href="https://assignment-6-fit-log-phi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href="https://github.com/suhitajahan-Easha/Fit-log"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-300 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="/projects/fitlog"
                    className="text-sm font-semibold text-slate-300 transition hover:text-blue-300"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* contact section */}
      <motion.section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            I&apos;m open to junior frontend and full stack developer
            opportunities. If you have an opportunity, a project idea, or simply
            want to connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Contact Information */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1424] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Choose your preferred way to contact me.
            </p>

            <div className="mt-7 space-y-4">
              {/* Email */}
              <a
                href="mailto:suhitajahaneasha@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111827] p-4 transition hover:border-blue-400/40 hover:bg-[#14213D]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                  <FaEnvelope size={19} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-slate-400">Email</span>
                  <span className="mt-1 block break-all text-sm font-medium text-slate-200">
                    suhitajahaneasha@gmail.com
                  </span>
                </span>

                <span className="text-blue-400 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* Phone */}
              <a
                href="mob:+8801627238676"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111827] p-4 transition hover:border-blue-400/40 hover:bg-[#14213D]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                  <FaPhoneAlt size={18} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-slate-400">Phone</span>
                  <span className="mt-1 block text-sm font-medium text-slate-200">
                    +880 1627238676
                  </span>
                </span>

                <span className="text-blue-400 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111827] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                  <FaMapMarkerAlt size={18} />
                </span>

                <span>
                  <span className="block text-sm text-slate-400">Location</span>
                  <span className="mt-1 block text-sm font-medium text-slate-200">
                    Rajshahi, Bangladesh
                  </span>
                </span>
              </div>

              {/* Optional WhatsApp */}
              <a
                href="https://wa.me/8801753200991"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#111827] p-4 transition hover:border-blue-400/40 hover:bg-[#14213D]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
                  <FaWhatsapp size={20} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-slate-400">WhatsApp</span>
                  <span className="mt-1 block text-sm font-medium text-slate-200">
                    Chat with me
                  </span>
                </span>

                <span className="text-blue-400 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right: Social Profiles */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0D1424] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Let&apos;s Connect
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              I enjoy learning new technologies, building useful applications,
              and connecting with people in the development community.
            </p>

            <div className="mt-7 space-y-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/suhita-jahan-easha/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-blue-400/40 hover:bg-[#14213D]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <FaLinkedinIn size={23} />
                </span>

                <span className="flex-1">
                  <span className="block font-semibold text-white">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-sm text-slate-400">
                    Professional profile and networking
                  </span>
                </span>

                <span className="text-blue-400 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/suhitajahan-Easha/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-blue-400/40 hover:bg-[#14213D]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white">
                  <FaGithub size={23} />
                </span>

                <span className="flex-1">
                  <span className="block font-semibold text-white">GitHub</span>
                  <span className="mt-1 block text-sm text-slate-400">
                    Projects and source code
                  </span>
                </span>

                <span className="text-blue-400 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            {/* Availability */}
            <div className="mt-auto pt-8">
              <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.05] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <p className="text-sm font-semibold text-slate-200">
                    Open to Opportunities
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Interested in junior frontend, React, Next.js, and full stack
                  developer roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <footer className="border-t border-white/[0.08] bg-[#080D1A]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Top: Name and Social Links */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <a href="#home" className="text-lg font-bold text-white">
                Suhita Jahan <span className="text-blue-400">Easha</span>
              </a>
              <p className="mt-2 text-sm text-slate-500">
                Full Stack Developer
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:suhitajahaneasha@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                <FaEnvelope size={17} />
              </a>

              <a
                href="https://github.com/suhitajahan-Easha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/suhita-jahan-easha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-7 border-t border-white/[0.08]" />

          {/* Footer Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-start"
          >
            <a
              href="#home"
              className="text-sm text-slate-400 transition hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-slate-400 transition hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#education"
              className="text-sm text-slate-400 transition hover:text-blue-400"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-sm text-slate-400 transition hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-400 transition hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-400 transition hover:text-blue-400"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="mt-7 flex flex-col justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Suhita Jahan Easha. All rights
              reserved.
            </p>

            <a href="#home" className="transition hover:text-blue-400">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
