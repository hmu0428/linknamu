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
      className="fixed right-4 top-4 rounded-full border border-black/10 bg-white p-2 text-sm shadow-sm dark:border-white/10 dark:bg-white/5"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
