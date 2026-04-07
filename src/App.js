import { useState, useEffect } from "react";

// ─── Floating particles background ───────────────────────────────────────────
function Particles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-float"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#a78bfa" : "#38bdf8",
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 10 + 8}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["About", "Experience", "Skills", "Projects", "Contact"];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0118]/80 backdrop-blur-xl shadow-lg shadow-purple-900/20"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-display text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          MT
        </span>
        <ul className="flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-slate-300 hover:text-pink-400 transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative z-10 px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-pink-300 text-xs tracking-widest uppercase font-semibold">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-white">Maryam</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tahir
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
            Software Engineering student at{" "}
            <span className="text-purple-400 font-semibold">
              COMSATS University Islamabad
            </span>
            . Crafting beautiful, efficient software from full-stack web apps to
            mobile experiences.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:maryamtahir061@gmail.com"
              className="group flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-500/30 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Say Hello
            </a>
            <a
              href="https://github.com/maryamtahirexe"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-slate-600 hover:border-purple-400 text-slate-300 hover:text-purple-400 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="/MaryamTahir_CV.pdf"
              download="MaryamTahir_CV.pdf"
              className="flex items-center gap-2 border border-slate-600 hover:border-purple-400 text-slate-300 hover:text-purple-400 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>
          </div>

          <div className="flex gap-6 pt-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-pink-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Islamabad, Pakistan
            </span>
          </div>
        </div>

        {/* Photo card */}
        <div className="flex justify-center lg:justify-end animate-fadeInRight">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl animate-spin-slow" />
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pink-500/30 to-purple-600/30 blur-xl" />
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-900/50">
              <img
                src="/profile.jpg"
                alt="Maryam Tahir"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-[#1a0535]/90 backdrop-blur border border-purple-500/30 rounded-2xl px-4 py-2.5 shadow-xl">
              <div className="text-xs text-slate-400 font-medium">
                Current Focus
              </div>
              <div className="text-purple-300 font-bold text-sm mt-0.5">
                MERN Stack Dev
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#1a0535]/90 backdrop-blur border border-pink-500/30 rounded-2xl px-4 py-2.5 shadow-xl">
              <div className="text-xs text-slate-400 font-medium">Degree</div>
              <div className="text-pink-300 font-bold text-sm mt-0.5">
                BSSE • 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
const experiences = [
  {
    company: "Texinity Technologies",
    role: "Web Developer Intern",
    duration: "2 Months • Onsite",
    year: "2024",
    type: "Internship",
    typeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/20",
    glow: "shadow-cyan-900/20",
    accent: "bg-cyan-400",
    icon: "💻",
    description:
      "Worked as a full-stack web developer building and maintaining web applications using the MERN stack. Collaborated with the dev team on real client projects, implemented RESTful APIs, and built responsive React interfaces.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "Git",
    ],
  },
  {
    company: "Apricot Wanderers",
    role: "Part-Time Developer & Designer",
    duration: "Ongoing • Hybrid",
    year: "2023 – Present",
    type: "Part-Time",
    typeColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    gradient: "from-pink-500/10 to-purple-500/10",
    border: "border-pink-500/20",
    glow: "shadow-pink-900/20",
    accent: "bg-pink-400",
    icon: "💻",
    description:
      "Wearing multiple hats as a developer, designer, and video editor. Build and maintain the company's web presence, create engaging visual content, design UI/UX in Figma, and produce video content for social media and marketing.",
    skills: [
      "Web Development",
      "Figma",
      "UI/UX Design",
      "Video Editing",
      "Adobe Premiere Pro",
      "Canva",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-28 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Where I've Worked" title="Experience" />

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-24 group">
                {/* Timeline dot */}
                <div className="absolute left-5 top-8 hidden md:flex items-center justify-center">
                  <div
                    className={`w-6 h-6 rounded-full ${exp.accent} shadow-lg flex items-center justify-center`}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  {/* Pulse ring */}
                  <div
                    className={`absolute w-6 h-6 rounded-full ${exp.accent} opacity-30 animate-ping`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br ${exp.gradient} border ${exp.border} rounded-3xl p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl ${exp.glow}`}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} border ${exp.border} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">
                          {exp.role}
                        </h3>
                        <p className="text-slate-300 font-semibold text-base mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${exp.typeColor}`}
                      >
                        {exp.type}
                      </span>
                      <span className="text-slate-500 text-sm font-medium">
                        {exp.duration}
                      </span>
                      <span className="text-slate-600 text-xs">{exp.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-white/20 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
const skillGroups = [
  {
    title: "Languages",
    icon: "⊹",
    color: "from-yellow-400/20 to-orange-400/20",
    border: "border-yellow-500/20",
    tag: "text-yellow-300",
    skills: ["Java", "Python", "JavaScript", "C++", "PHP"],
  },
  {
    title: "Web Dev",
    icon: "⊹",
    color: "from-cyan-400/20 to-blue-400/20",
    border: "border-cyan-500/20",
    tag: "text-cyan-300",
    skills: [
      "React JS",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MERN Stack",
    ],
  },
  {
    title: "Mobile",
    icon: "⊹",
    color: "from-green-400/20 to-emerald-400/20",
    border: "border-green-500/20",
    tag: "text-green-300",
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Design",
    icon: "⊹",
    color: "from-pink-400/20 to-rose-400/20",
    border: "border-pink-500/20",
    tag: "text-pink-300",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
  {
    title: "Testing",
    icon: "⊹",
    color: "from-purple-400/20 to-violet-400/20",
    border: "border-purple-500/20",
    tag: "text-purple-300",
    skills: ["JUnit", "Selenium", "Cypress", "Postman"],
  },
  {
    title: "Deployment",
    icon: "⊹",
    color: "from-indigo-400/20 to-blue-500/20",
    border: "border-indigo-500/20",
    tag: "text-indigo-300",
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "Railway"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="What I Know" title="Skills & Technologies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className={`group relative bg-gradient-to-br ${g.color} border ${g.border} rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{g.icon}</span>
                <h3 className="text-white font-bold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={`text-xs font-semibold ${g.tag} bg-white/5 border border-white/10 rounded-full px-3 py-1`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "AI-Driven Sports League Scheduling System",
    desc: "A full-stack scheduling platform designed to automate sports league operations, including match planning, team management, and resource allocation. The system incorporates scheduling logic to avoid conflicts, optimize time slots, and manage venues efficiently. Built with a dynamic frontend and Python-powered backend for handling scheduling constraints and real-time updates.",
    tags: ["HTML", "Python", "JavaScript"],
    emoji: "</>",
    color: "from-pink-500/10 to-rose-500/10",
    border: "border-pink-500/20",
    accent: "text-pink-400",
    repo: "https://github.com/maryamtahirexe/sports-scheduler.git",
  },
  {
    title: "Literera – Intelligent Research Writing Assistant",
    desc: "A full-stack web application providing 4 tools to ensure a smooth writing experience for researchers and students. Designed with scalability and usability in mind, leveraging REST APIs and modular architecture.",
    tags: ["Tailwind", "MongoDB", "Express", "React", "Node","Python","REST API","FAST API","Transformer"],
    emoji: "</>",
    color: "from-purple-500/10 to-violet-500/10",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    repo: "https://github.com/maryamtahirexe/literera.git",
  },
  {
    title: "KarayeDar",
    desc: "A web application built with MERN Stack to handle tenant management, enabling landlords to manage tenants, rent tracking, damage control and property records in real-time.",
    tags: ["MERN Stack", "MongoDB","Node.js","Express","React","Tailwind"],
    emoji: "</>",
    color: "from-cyan-500/10 to-sky-500/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    repo: "https://github.com/maryamtahirexe/karayedar.git",
  },
  {
    title: "Final Internship Project",
    desc: "A full-stack MERN + Next.js application featuring separate admin and user portals. Includes product management, role-based access control, and optimized frontend rendering using server-side rendering (SSR). Designed with scalable architecture and clean API integration.",
    tags: ["MongoDB", "Express", "React", "Node", "Next.js"],
    emoji: "</>",
    color: "from-amber-500/10 to-yellow-500/10",
    border: "border-amber-500/20",
    accent: "text-amber-400",
    repo: "https://github.com/maryamtahirexe/SmartStores.git",
  },
  {
    title: "DiagnoPro – AI-Based Disease Diagnosis System using Prolog",
    desc: "An intelligent diagnostic system that predicts diseases based on user-provided symptoms using rule-based reasoning and logical inference with Genetic Algorithm. The application integrates Prolog’s backward chaining algorithm for decision-making, enabling accurate disease prediction through knowledge-based rules. A Python-based GUI (Tkinter) provides an interactive interface, bridging symbolic AI with user-friendly design.",
    tags: ["Python", "tkinter", "Prolog","Genetic Algorithm"],
    emoji: "</>",
    color: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20",
    accent: "text-green-400",
    repo: "https://github.com/maryamtahirexe/HealthProject.git",
  },
  {
    title: "Literera UI/UX Prototype",
    desc: "A complete UI/UX prototype designed in Figma for the Literera platform, focusing on usability, accessibility, and seamless user experience. Includes wireframes, interactive flows, and high-fidelity mockups following modern design principles.",
    tags: ["Figma", "Design", "Prototyping"],
    emoji: "</>",
    color: "from-indigo-500/10 to-blue-500/10",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
    repo: "https://github.com/maryamtahirexe/Literera-Design.git",
  },
  {
    title: "Cloud-Native Application Deployment with CI/CD Pipeline",
    desc: "Implemented a cloud-based deployment pipeline using AWS services, Docker containerization, and Jenkins automation. Designed a CI/CD workflow to ensure continuous integration, automated testing, and seamless deployment, improving application reliability and scalability.",
    tags: ["AWS", "Docker", "Jenkins", "CI/CD","Docker Compose"],
    emoji: "</>",
    color: "from-orange-500/10 to-red-500/10",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    repo: "https://github.com/maryamtahirexe/assignmentpart2.git",
  },
  {
    title: "End-to-End Testing Suite for MERN Application using Cypress",
    desc: "Developed a comprehensive testing framework using Cypress to validate the functionality, performance, and reliability of the Literera application. Implemented end-to-end test cases covering user workflows, API responses, and UI interactions to ensure production-level stability.",
    tags: ["Cypress", "JavaScript", "Testing"],
    emoji: "</>",
    color: "from-teal-500/10 to-cyan-500/10",
    border: "border-teal-500/20",
    accent: "text-teal-400",
    repo: "https://github.com/maryamtahirexe/Literera-Tests.git",
  },
];

function ProjectCard({ p }) {
  return (
    <div
      className={`group relative bg-gradient-to-br ${p.color} border ${p.border} rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer`}
    >
      <div className="flex justify-between items-start">
        <span className="text-4xl">{p.emoji}</span>
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className={`${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          title="View on GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {p.tags.map((t) => (
          <span
            key={t}
            className={`text-xs font-semibold ${p.accent} bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5`}
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={p.repo}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center gap-2 text-sm font-semibold ${p.accent} group-hover:gap-3 transition-all duration-300`}
      >
        View on GitHub
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="My Work" title="Featured Projects" />
        <p className="text-slate-400 text-center mt-4 max-w-lg mx-auto">
          The following are the projects on which I have worked on, with their Github Repositories!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-28 relative z-10 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader label="Get In Touch" title="Let's Work Together" />
        <p className="text-slate-400 mt-4 text-lg">
          I'm actively looking for internships and full-time opportunities.
          Whether you have a project or just want to say hi — my inbox is always
          open!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:maryamtahir061@gmail.com"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-purple-900/40 hover:-translate-y-1"
          >
            maryamtahir061@gmail.com
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-6">
          <SocialLink href="https://github.com/maryamtahirexe" label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/maryamtahir00/"
            label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-2xl border border-slate-700 hover:border-purple-500 flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
    >
      {children}
    </a>
  );
}

// ─── Shared helpers ───────────────────────────────────────────────────────────
function SectionHeader({ label, title }) {
  return (
    <div className="text-center">
      <span className="inline-block text-xs tracking-widest uppercase font-bold text-pink-400 bg-pink-400/10 border border-pink-400/20 rounded-full px-4 py-1 mb-4">
        {label}
      </span>
      <h2 className="font-display text-5xl font-black text-white">{title}</h2>
      <div className="mt-4 w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-purple-500" />
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
      Maryam Tahir · {new Date().getFullYear()}
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#0a0118] min-h-screen text-white font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; }

        .font-display { font-family: 'Syne', sans-serif; }
        .font-sans { font-family: 'DM Sans', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out both; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out 0.3s both; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0118; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 3px; }
      `}</style>

      <Particles />
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
