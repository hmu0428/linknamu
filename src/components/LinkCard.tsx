"use client";

import { LinkItem } from "@/types";

export function LinkCard({ link }: { link: LinkItem }) {
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
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border border-black/10 bg-white px-5 py-4 text-center text-sm font-medium shadow-sm transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {link.label}
    </a>
  );
}
