"use client";

import { LinkItem } from "@/types";

export function LinkCard({
  link,
  count,
  onLinkClick,
}: {
  link: LinkItem;
  count: number;
  onLinkClick: () => void;
}) {
  const isExternalPage = /^https?:\/\//.test(link.url);

  return (
    <a
      href={link.url}
      target={isExternalPage ? "_blank" : undefined}
      rel={isExternalPage ? "noopener noreferrer" : undefined}
      onClick={onLinkClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-card-border bg-card px-5 py-4 text-sm font-medium text-foreground shadow-[0_4px_20px_-6px_rgba(120,70,30,0.15)] backdrop-blur-md backdrop-saturate-150 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_8px_24px_-6px_rgba(120,70,30,0.22)] dark:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.4)] dark:hover:bg-white/10"
    >
      <span>{link.label}</span>
      <span className="text-xs font-normal text-foreground/50">
        {count}회
      </span>
    </a>
  );
}
