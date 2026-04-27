import { useEffect, useState } from "react";

const STORAGE_KEY = "fmp-theme";

function getInitialTheme() {
  if (typeof document === "undefined") return "v1";
  return document.documentElement.dataset.theme === "v2" ? "v2" : "v1";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore — private mode, etc.
    }
  }, [theme]);

  const isV2 = theme === "v2";

  return (
    <div
      role="group"
      aria-label="Design version"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-1.5 py-1.5 shadow-lift border border-hairline-strong"
      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
    >
      <span
        className="px-2 text-[11px] uppercase tracking-wider font-medium text-ink-tertiary select-none"
        aria-hidden="true"
      >
        Design
      </span>
      <button
        type="button"
        onClick={() => setTheme("v1")}
        aria-pressed={!isV2}
        className={`relative px-3.5 h-8 rounded-full text-[13px] font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-brand ${
          !isV2
            ? "bg-brand text-white shadow-card"
            : "text-ink-secondary hover:text-ink-primary"
        }`}
      >
        v1
      </button>
      <button
        type="button"
        onClick={() => setTheme("v2")}
        aria-pressed={isV2}
        className={`relative px-3.5 h-8 rounded-full text-[13px] font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-brand ${
          isV2
            ? "bg-brand text-white shadow-card"
            : "text-ink-secondary hover:text-ink-primary"
        }`}
      >
        v2
      </button>
    </div>
  );
}
