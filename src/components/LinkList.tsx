"use client";

import { useEffect, useState } from "react";
import { LinkItem } from "@/types";
import { LinkCard } from "@/components/LinkCard";

export function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/links/click")
      .then((res) => res.json())
      .then((data: { counts?: Record<string, number> }) => {
        if (data.counts) setCounts(data.counts);
      })
      .catch(() => {
        // 클릭 수 조회 실패 시 0회 표시를 유지합니다.
      });
  }, []);

  const handleLinkClick = (linkId: string) => {
    setCounts((prev) => ({ ...prev, [linkId]: (prev[linkId] ?? 0) + 1 }));

    fetch("/api/links/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId }),
      keepalive: true,
    }).catch(() => {
      // 클릭 집계 실패는 사용자 이동을 막지 않습니다.
    });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onLinkClick={() => handleLinkClick(link.id)}
        />
      ))}
    </div>
  );
}
