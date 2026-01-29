export type SiteLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  status?: string;
  role: string;
  summary: string;
  tech: string[];
  links: SiteLink[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  credentialId?: string;
  credentialUrl: string;
  icon: "docker" | "linkedin" | "certificate";
};

export type SiteData = {
  name: string;
  title: string;
  tagline: string;
  description: string;
  focusItems: string[];
  resume: {
    label: string;
    url: string;
  };
  profile: {
    imageSrc: string;
    imageAlt: string;
    objectPosition: string;
  };
  techBanner: {
    title: string;
    subtitle: string;
    groups: {
      title: string;
      items: string[];
      description?: string;
    }[];
  };
  openToRemoteLine: string;
  aboutParagraphs: string[];
  links: {
    email: string;
    linkedin: string;
    github: string;
  };
  projects: Project[];
  skills: SkillGroup[];
  certifications: Certification[];
  certificationsNote: string;
};

export const siteData: SiteData = {
  name: "Rodnny Garcia",
  title: "Web Developer & Technical Support Specialist",
  tagline: "I build reliable web platforms and automation with a support-first mindset.",
  description: "I build reliable web platforms and automation with a support-first mindset.",
  focusItems: [
    "Supported a community of 2,000+ users",
    "Automation that reduces support load",
    "Reliability, usability, and clear communication",
  ],
  resume: {
    label: "Resume",
    url: "/resume.pdf",
  },
  profile: {
    imageSrc: "/profile.jpg",
    imageAlt: "Rodnny Garcia",
    objectPosition: "50% 20%",
  },
  techBanner: {
    title: "Tech I’ve Worked With",
    subtitle: "Tools and platforms I’ve used in real projects (not sponsorships).",
    groups: [
      {
        title: "Web Development",
        items: ["HTML", "CSS", "JavaScript", "Tailwind", "Next.js", "Vercel"],
      },
      {
        title: "Backend & Data (Project-Based)",
        items: ["Supabase", "MySQL", "REST APIs"],
      },
      {
        title: "Automation & APIs",
        items: ["Node.js", "Discord API", "Webhooks"],
      },
      {
        title: "Server & Platform Engineering",
        items: [
          "FiveM",
          "Lua",
          "MySQL",
          "FileZilla",
          "Server Configuration",
          "Anti-Cheat Systems",
        ],
      },
      {
        title: "Game & Interactive Development",
        items: ["Unity", "C#", "Blender"],
      },
      {
        title: "Tooling & DevOps",
        items: ["Docker", "Git", "GitHub", "VS Code"],
      },
      {
        title: "Systems & Platforms",
        items: ["Windows", "macOS", "Discord", "Zoom", "Slack"],
      },
      {
        title: "Game Modding & Technical Analysis",
        items: [],
        description:
          "Experience analyzing and modifying game assets and server-side logic for learning and development purposes. Developed an understanding of common exploit patterns and abuse vectors, and implemented preventative, server-side protections and anti-cheat measures to maintain system integrity.",
      },
    ],
  },
  openToRemoteLine: "Open to remote opportunities.",
  aboutParagraphs: [
    "I’m a self-taught web developer with hands-on experience building platforms used by real communities. I care about shipping features that work, stay reliable over time, and are easy to use.",
    "My background in technical support, operations, and customer-facing roles helps me think beyond “it works on my machine” and focus on real users, real edge cases, and clear communication.",
    "I’m bilingual (English / Spanish) and open to remote opportunities in web development, technical support, and support-focused engineering roles.",
  ],
  links: {
    email: "mailto:xxyoshiiprxx@proton.me",
    linkedin: "https://www.linkedin.com/in/rodnnygarcia/",
    github: "https://github.com/YoshiiDev",
  },
  projects: [
    {
      name: "Propday – Indie Game Platform",
      status: "In Development • Public",
      role: "Web Developer & Automation",
      summary:
        "Built and maintain the official website, implemented beta sign-ups and content updates, and built a custom Discord bot to automate workflows and support the community.",
      tech: ["HTML", "CSS", "JavaScript", "Discord API", "Deployment"],
      links: [
        { label: "Live Site", href: "#" },
        { label: "GitHub (Private)", href: "" },
      ],
    },
    {
      name: "FiveM.social – Community Platform",
      status: "Archived",
      role: "Founder & Web Developer",
      summary:
        "Built a platform serving 2,000+ users and handled growth, moderation, and platform stability. Archived due to scale and personal reasons; the experience shaped how I approach reliability, support, and sustainable product decisions.",
      tech: [],
      links: [],
    },
  ],
  skills: [
    {
      title: "Development",
      items: [
        "Front-End Web Development",
        "JavaScript",
        "API Integration",
        "Basic Back-End Concepts",
        "Docker (Foundations Certified)",
      ],
    },
    {
      title: "Automation & Platforms",
      items: ["Discord Bots", "Workflow Automation", "Deployment & Hosting"],
    },
    {
      title: "Support & Operations",
      items: [
        "Technical Support",
        "Troubleshooting",
        "Documentation",
        "Customer-Focused Problem Solving",
      ],
    },
  ],
  certifications: [
    {
      name: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      credentialUrl: "https://www.linkedin.com/learning/certificates/032c7601ddbd96c8f49b2a984063b9e8fcf3c445e1bcb052b6dcaeb1bad816cb",
      icon: "docker",
    },
    {
      name: "IT Support Learning Path (LinkedIn Learning)",
      issuer: "LinkedIn Learning",
      credentialUrl: "https://www.linkedin.com/learning/certificates/6491b2fcd98a5060a02b05c33c74752057a77069622fb94b1cfc2cf32ae25262",
      icon: "linkedin",
    },
  ],
  certificationsNote: "Currently preparing for CompTIA A+.",
};
