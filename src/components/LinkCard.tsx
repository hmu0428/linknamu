"use client";

import { LinkItem } from "@/types";

export function LinkCard({ link }: { link: LinkItem }) {
  const isExternalPage = /^https?:\/\//.test(link.url);

  const handleClick = () => {
    fetch("/api/links/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: link.id }),
      keepalive: true,
    }).catch(() => {
      // 클릭 집계 실패는 사용자 이동을 막지 않습니다.
    });
  };

  return (
    <a
      href={link.url}
      target={isExternalPage ? "_blank" : undefined}
      rel={isExternalPage ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className="block w-full rounded-2xl border border-card-border bg-card px-5 py-4 text-center text-sm font-medium text-foreground shadow-[0_4px_20px_-6px_rgba(120,70,30,0.15)] backdrop-blur-md backdrop-saturate-150 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_8px_24px_-6px_rgba(120,70,30,0.22)] dark:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.4)] dark:hover:bg-white/10"
    >
      {link.label}
    </a>
  );
}
