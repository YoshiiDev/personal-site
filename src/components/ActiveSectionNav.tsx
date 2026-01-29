"use client";

import { useEffect, useMemo, useState } from "react";

export type ActiveSectionNavItem = {
  label: string;
  href: `#${string}`;
  className?: string;
};

export default function ActiveSectionNav({
  items,
  className,
}: {
  items: ActiveSectionNavItem[];
  className?: string;
}) {
  const [activeHref, setActiveHref] = useState<ActiveSectionNavItem["href"]>(
    items[0]?.href ?? "#top",
  );

  const ids = useMemo(
    () => items.map((item) => item.href.replace(/^#/, "")).filter(Boolean),
    [items],
  );

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0),
          );

        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return (
    <nav className={className}>
      {items.map((item) => {
        const isActive = item.href === activeHref;

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`${
              item.className ?? ""
            } transition hover:text-white ${
              isActive ? "text-white" : "text-zinc-300"
            }`}
          >
            <span className="relative">
              {item.label}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -bottom-2 left-0 h-px w-full bg-sky-400 transition-opacity ${
                  isActive ? "opacity-70" : "opacity-0"
                }`}
              />
            </span>
          </a>
        );
      })}
    </nav>
  );
}
