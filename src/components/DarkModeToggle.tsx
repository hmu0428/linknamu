"use client";

import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage를 사용할 수 없어도 토글은 정상 동작합니다.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="다크모드 전환"
      className="fixed right-5 top-5 rounded-full border border-card-border bg-card p-2.5 text-sm shadow-[0_4px_16px_-6px_rgba(120,70,30,0.2)] backdrop-blur-md transition-transform hover:-translate-y-0.5 dark:shadow-[0_4px_16px_-6px_rgba(0,0,0,0.4)]"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
