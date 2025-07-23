import React, { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    // 跟随系统
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-secondary dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="切换深色模式"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle; 