import { siteData } from "@/lib/siteData";
import Image from "next/image";

function CertificationIcon({
  name,
}: {
  name: (typeof siteData.certifications)[number]["icon"];
}) {
  if (name === "docker") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 256 256"
        className="h-6 w-6 text-zinc-100"
        fill="currentColor"
      >
        <path d="M181.3 113.6c-2.9 0-5.4.5-7.7 1.4-3.6-24.9-25.1-44.1-51.2-44.1-26.5 0-48.3 19.8-51.4 45.2-2-.7-4.2-1.1-6.6-1.1-11.1 0-20.2 9-20.2 20.2 0 11.1 9 20.2 20.2 20.2h117.7c11.7 0 21.2-9.5 21.2-21.2 0-11.7-9.5-21.2-21.2-21.2zm-34.7 31.8h-37.3v-10.1h37.3v10.1zm0-17.3h-59v-10.1h59v10.1z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-zinc-100"
        fill="currentColor"
      >
        <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.852 0-2.135 1.445-2.135 2.94v5.666H9.355V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.266 2.37 4.266 5.455v6.279zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.115 20.45H3.56V9h3.556v11.45z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-zinc-100"
      fill="currentColor"
    >
      <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM7 12h10v2H7v-2zm0 4h10v2H7v-2zm0-8h6v2H7V8z" />
    </svg>
  );
}

function ProjectLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[180px]">
      {links.map((link) => {
        const isDisabled = !link.href;
        const isExternal = /^https?:\/\//i.test(link.href);

        if (isDisabled) {
          return (
            <span
              key={link.label}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-semibold text-zinc-300"
            >
              {link.label}
            </span>
          );
        }

        const className =
          link.label.toLowerCase().includes("live")
            ? "inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
            : "inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10";

        return (
          <a
            key={link.label}
            href={link.href}
            className={className}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(900px_500px_at_10%_0%,rgba(71,85,105,0.18),transparent_60%),radial-gradient(900px_500px_at_100%_10%,rgba(30,58,138,0.14),transparent_55%)]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <header className="border-b border-white/10">
        <div className="border-b border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-6 py-2 text-xs text-zinc-300">
            {siteData.openToRemoteLine}
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <a href="#top" className="text-sm font-semibold tracking-tight text-white">
            {siteData.name}
          </a>
          <nav className="flex items-center gap-5 text-sm text-zinc-300">
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hidden transition hover:text-white sm:inline" href="#skills">
              Skills
            </a>
            <a
              className="hidden transition hover:text-white sm:inline"
              href="#certifications"
            >
              Certifications
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-5xl px-6">
        <section className="animate-fade-up py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <p className="text-sm font-medium text-zinc-300">
                {siteData.title}
              </p>
              <div className="mt-3 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5 md:h-14 md:w-14">
                  <Image
                    src={siteData.profile.imageSrc}
                    alt={siteData.profile.imageAlt}
                    fill
                    sizes="(max-width: 768px) 48px, 56px"
                    className="object-cover"
                    style={{ objectPosition: siteData.profile.objectPosition }}
                    priority
                  />
                </div>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                  {siteData.name}
                </h1>
              </div>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-200">
                {siteData.tagline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact
                </a>
                <a
                  href={siteData.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {siteData.resume.label}
                </a>
                <span className="text-xs text-zinc-400">
                  Calm, support-minded engineering. Remote-ready.
                </span>
              </div>
            </div>

            <aside className="md:col-span-4">
              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Focus
                </p>
                <div className="mt-4 grid gap-3 text-sm text-zinc-200">
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    Web platforms used by real communities
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    Automation that reduces support load
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    Reliability, usability, and clear communication
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Currently
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                  {siteData.aboutParagraphs[2]}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="animate-fade-up border-t border-white/10 py-10 md:py-12">
          <div className="grid gap-6 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {siteData.techBanner.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {siteData.techBanner.subtitle}
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {siteData.techBanner.groups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="text-sm font-semibold text-white">
                      {group.title}
                    </div>
                    {group.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {group.description}
                      </p>
                    ) : null}
                    {group.items.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((t) => (
                          <span
                            key={`${group.title}-${t}`}
                            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="animate-fade-up border-t border-white/10 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                About
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                A developer who builds and supports.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-200">
                {siteData.aboutParagraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="animate-fade-up border-t border-white/10 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Projects
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Real work with operational context: shipping, supporting, and learning
                from scale.
              </p>
            </div>

            <div className="grid gap-6 md:col-span-8">
              <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {siteData.projects[0].name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-300">
                      Role: {siteData.projects[0].role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                      {siteData.projects[0].summary}
                    </p>
                  </div>

                  <ProjectLinks links={siteData.projects[0].links} />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {siteData.projects[0].tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    {siteData.projects[0].status ?? ""}
                  </span>
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {siteData.projects[1].name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-300">
                      Role: {siteData.projects[1].role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                      {siteData.projects[1].summary}
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[180px]">
                    <span className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 text-sm font-semibold text-zinc-300">
                      {siteData.projects[1].status ?? "Archived"}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="animate-fade-up border-t border-white/10 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Skills
              </p>
            </div>
            <div className="grid gap-6 md:col-span-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-sm font-semibold text-white">Development</h3>
                <div className="mt-4 grid gap-2 text-sm text-zinc-200">
                  {siteData.skills[0].items.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-sm font-semibold text-white">
                  Automation & Platforms
                </h3>
                <div className="mt-4 grid gap-2 text-sm text-zinc-200">
                  {siteData.skills[1].items.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-6 md:col-span-2">
                <h3 className="text-sm font-semibold text-white">
                  Support & Operations
                </h3>
                <div className="mt-4 grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
                  {siteData.skills[2].items.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="animate-fade-up border-t border-white/10 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Certifications
              </p>
            </div>
            <div className="grid gap-3 md:col-span-8">
              {siteData.certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <CertificationIcon name={cert.icon} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {cert.name}
                          </div>
                          <div className="mt-1 text-xs text-zinc-400">
                            Issuer: {cert.issuer}
                          </div>
                        </div>
                        <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 transition group-hover:bg-white/10">
                          View credential
                        </span>
                      </div>
                      {cert.credentialId ? (
                        <div className="mt-3 text-sm text-zinc-300">
                          Credential ID:
                          <span className="font-mono text-zinc-200"> {cert.credentialId}</span>
                        </div>
                      ) : null}
                      <div className="mt-1 text-xs text-zinc-500 break-all">
                        {cert.credentialUrl}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="animate-fade-up border-t border-white/10 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Contact
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Open to remote opportunities.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-sm leading-relaxed text-zinc-200">
                  Send your preferred contact links (email, LinkedIn, GitHub) and I’ll
                  wire them up so recruiters can reach you in one click.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <a
                    href={siteData.links.email}
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  >
                    Email
                  </a>
                  <a
                    href={siteData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-xs text-zinc-500">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <span>{new Date().getFullYear()} {siteData.name}</span>
            <span>{siteData.title}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
