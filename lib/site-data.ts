export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export const socials = {
  github: "https://github.com/karlmarxmanzano",
  linkedin: "https://www.linkedin.com/in/karl-marx-manzano",
  email: "mailto:karlmarxmanzano@gmail.com",
  resume: "https://drive.google.com/file/d/13EOSImM35smJRWmK4R16TmsSSoIZmR5A/view?usp=sharing",
};

export const stats = {
  years: 8,
  projects: 30,
  clients: 15,
};

export type ExperienceEntry = {
  /** Full precise range, e.g. "Mar 2020 — Present" — used on the full history page. */
  when: string;
  /** Compact year-only range, e.g. "2020 — Present" — used in the homepage preview. */
  years: string;
  role: string;
  company: string;
  location: string;
  href: string | null;
  bullets: string[];
  chips: string[];
};

export const experience: ExperienceEntry[] = [
  {
    when: "Mar 2020 — Present",
    years: "2020 — Present",
    role: "Full Stack Web Developer",
    company: "Freelance",
    location: "Remote",
    href: null,
    bullets: [
      "Spearheaded the architecture and development of scalable, multi-tenant SaaS platforms utilizing Laravel and Nuxt.js to meet diverse international client needs.",
      "Design and implement AI-powered pipelines into Laravel systems.",
      "Integrate third-party libraries and external APIs into Laravel applications.",
      "Translate UI/UX designs into responsive, mobile-first interfaces.",
      "Manage the full application lifecycle: development, testing, deployment, and ongoing monitoring.",
      "Optimize performance across backend, database, and frontend layers.",
    ],
    chips: ["Laravel", "Nuxt.js", "LLM APIs", "REST APIs"],
  },
  {
    when: "Oct 2024 — Jun 2025",
    years: "2024 — 2025",
    role: "Full Stack Web Developer",
    company: "Localmicrosites",
    location: "Australia · Remote",
    href: null,
    bullets: [
      "Built a platform with Laravel and Filament that generates SEO-optimized websites for local businesses, boosting engagement and search rankings through automated structured data: business and web page schema, meta tags, Open Graph and Twitter cards, opening hours, page type, and price range.",
      "Developed a robust Laravel package for automated bot/human traffic detection to enhance the dynamic rendering strategy.",
      "Managed hosting servers on SiteGround, handling deployment and configuration.",
    ],
    chips: ["Laravel", "Filament", "SEO", "SiteGround"],
  },
  {
    when: "Mar 2024 — Mar 2025",
    years: "2024 — 2025",
    role: "Lead Full Stack Developer",
    company: "Buildovate",
    location: "United States · Remote",
    href: null,
    bullets: [
      "Led the development team that took a construction CMS to launch after the project had been stalled for two years.",
      "Built the platform end to end using a Laravel RESTful API (also supporting a mobile app) and Nuxt.js, covering customer capture, business KPI dashboards, IFTTT automation, lead capture, prospect management, project tracking, project costing, and payment processing.",
      "Integrated third-party APIs including Plaid and Stripe for payments and Google APIs.",
      "Owned delivery across the full stack, from database relational design and API design to frontend implementation.",
    ],
    chips: ["Laravel", "Nuxt.js", "Plaid", "Stripe"],
  },
  {
    when: "May 2021 — Jan 2022",
    years: "2021 — 2022",
    role: "Full Stack Web Developer",
    company: "Winterwind Inc.",
    location: "Canada · Remote",
    href: null,
    bullets: [
      "Developed and maintained multi-tenant and SaaS applications using Laravel, Vue.js, MySQL, Bootstrap, TailwindCSS.",
      "Designed and built RESTful APIs powering both a mobile app and frontend clients.",
      "Integrated third-party libraries into Laravel systems seamlessly.",
      "Served as the main point of contact for clients, addressing technical queries and concerns.",
      "Managed AWS infrastructure, handling deployment, configuration, and DevOps operations.",
      "Provided technical guidance and code support to a team of developers, ensuring high-quality code and efficient project delivery.",
    ],
    chips: ["Laravel", "Vue.js", "MySQL", "AWS"],
  },
  {
    when: "Oct 2021 — Dec 2021",
    years: "2021",
    role: "Integration and Back-End Developer",
    company: "NRBY",
    location: "United States · Remote",
    href: null,
    bullets: [
      "Engineered and maintained a CLI-based Laravel integration application connecting the NRBY platform with third-party systems via a recurring polling process with configurable frequency to extract key metrics.",
      "Led end-to-end application testing, continuous monitoring, and streamlined deployments across platforms.",
    ],
    chips: ["Laravel", "CLI", "API Integrations"],
  },
  {
    when: "May 2020 — Sep 2021",
    years: "2020 — 2021",
    role: "Software Developer Consultant",
    company: "Xiklab Digital",
    location: "Philippines",
    href: null,
    bullets: [
      "Collaborated with marketing and design teams to develop web applications using Laravel, OctoberCMS, PyroCMS, and MySQL.",
      "Implemented UI/UX designs into responsive front-end interfaces using SASS and Bootstrap.",
      "Built and customized web application themes on OctoberCMS to match client branding.",
    ],
    chips: ["Laravel", "OctoberCMS", "PyroCMS", "MySQL"],
  },
  {
    when: "Apr 2020 — May 2021",
    years: "2020 — 2021",
    role: "Full Stack Web Developer",
    company: "Perfect Cleaning LTD.",
    location: "United Kingdom · Remote",
    href: null,
    bullets: [
      "Maintained multiple production websites built with vanilla PHP, keeping them updated and secure.",
      "Upgraded legacy projects to PHP 7.",
      "Managed cPanel servers and databases.",
    ],
    chips: ["PHP", "cPanel"],
  },
  {
    when: "Mar 2020 — Sep 2020",
    years: "2020",
    role: "Full Stack Web Developer",
    company: "TBL Tech Nerds",
    location: "United States · Remote",
    href: null,
    bullets: [
      "Designed and developed full-stack web applications for client solutions using Laravel, Vue.js, Bootstrap, and MySQL.",
    ],
    chips: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    when: "Jun 2018 — Jul 2020",
    years: "2018 — 2020",
    role: "Software Engineer",
    company: "Kaiser-dela Cruz Consulting Inc.",
    location: "Philippines",
    href: null,
    bullets: [
      "Developed and maintained interconnected hospital operations software, including inventory modules, using VB6, C#, MSSQL, and Seagate Crystal Reports.",
      "Managed databases, performed backups, optimized MSSQL queries, and supported system recovery operations.",
      "Served as primary tech support for clients, resolving queries and ensuring smooth project delivery.",
    ],
    chips: ["VB6", "C#", "MSSQL"],
  },
];

export type SkillCategory = "frontend" | "backend" | "database" | "devops";

export const skillCategoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "DevOps & Cloud",
};

export const skills: {
  name: string;
  category: SkillCategory;
}[] = [
  { name: "Vue.js", category: "frontend" },
  { name: "Nuxt", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "HTML / CSS", category: "frontend" },
  { name: "C# / .NET", category: "backend" },
  { name: "ASP.NET", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "MediatR / CQRS", category: "backend" },
  { name: "Hangfire", category: "backend" },
  { name: "SQL Server", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "EF Core", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "AWS", category: "devops" },
];

export const projects = [
  {
    title: "Buildovate",
    tag: "SaaS · Construction",
    description:
      "A CRM for construction companies that streamlines lead management, project tracking, contract handling, financial management, and online payments.",
    chips: ["Laravel", "Nuxt.js", "Plaid", "Stripe"],
    href: "https://buildovate.com",
    image: "/projects/buildovate.png",
  },
  {
    title: "Localmicrosites",
    tag: "Platform · Local SEO",
    description:
      "A platform that generates SEO-optimized websites for local businesses — boosting engagement and search rankings — and manages deployment to their servers.",
    chips: ["Laravel", "Filament", "SEO"],
    href: "https://localmicrosites.com",
    image: "/projects/localmicrosites.png",
  },
  {
    title: "Pop Up Pros",
    tag: "Marketplace · Events",
    description:
      "A booking platform that lets pop-up shop vendors reserve events in their area, helping them increase sales and expand their network.",
    chips: [],
    href: "https://thepopuppros.com",
    image: "/projects/pop-up-pros.png",
  },
  {
    title: "Isuzu Philippines",
    tag: "Website · Automotive",
    description: "A complete revamp of the official Isuzu Philippines website.",
    chips: [],
    href: "https://isuzuphil.com.ph",
    image: "/projects/isuzuphil.png",
  },
];
