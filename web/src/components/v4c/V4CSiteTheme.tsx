"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { SITE_THEMES, DEFAULT_THEME_ID } from "./etabli-variants/themes";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V4CSiteTheme({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<string>(DEFAULT_THEME_ID);
  const [collapsed, setCollapsed] = useState(false);

  const theme = SITE_THEMES.find((t) => t.id === themeId) ?? SITE_THEMES[0];

  const cssVars: CSSProperties = {
    ["--site-bg" as string]: theme.bg,
    ["--site-surface" as string]: theme.surface,
    ["--site-text" as string]: theme.text,
    ["--site-accent" as string]: theme.accent,
    ["--site-caveat" as string]: theme.caveat,
  };

  const surfaceTone =
    theme.tone === "light"
      ? "bg-white/85 border-[var(--site-accent)]/35 shadow-lg shadow-black/5"
      : "bg-black/60 border-[var(--site-accent)]/40 shadow-lg shadow-black/40";

  return (
    <div style={cssVars} className="bg-[var(--site-bg)] text-[var(--site-text)]">
      {/* Switcher sticky — visible sur toute la LP */}
      <div
        className={`fixed top-20 right-4 lg:top-24 lg:right-6 z-[60] backdrop-blur-md border ${surfaceTone} transition-all duration-300`}
        role="region"
        aria-label="Sélecteur de palette"
      >
        {collapsed ? (
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            aria-label="Afficher le sélecteur de palette"
            className="flex items-center gap-2 px-3 py-2"
          >
            <span
              className="block w-4 h-4 rounded-full border border-[var(--site-accent)]/50"
              style={{ backgroundColor: theme.bg }}
              aria-hidden
            />
            <span className={`${garamond} italic text-[12px] tracking-widest text-[var(--site-text)]`}>
              palette
            </span>
          </button>
        ) : (
          <div className="px-3 py-2.5 flex flex-col gap-2 w-[260px]">
            <div className="flex items-center justify-between gap-2">
              <span className={`${caveat} italic text-[13px] text-[var(--site-accent)]`}>
                palette du carnet
              </span>
              <button
                type="button"
                onClick={() => setCollapsed(true)}
                aria-label="Masquer le sélecteur"
                className={`${garamond} italic text-[11px] text-[var(--site-text)]/50 hover:text-[var(--site-text)] transition-colors`}
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-9 gap-1.5">
              {SITE_THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setThemeId(t.id)}
                  aria-label={`Palette ${t.label} — ${t.sub}`}
                  aria-pressed={themeId === t.id}
                  title={`${t.label} — ${t.sub}`}
                  className={`relative w-6 h-6 rounded-full transition-all duration-300 border ${
                    themeId === t.id
                      ? "scale-110 border-[var(--site-accent)] ring-2 ring-[var(--site-accent)]/40 ring-offset-1 ring-offset-transparent"
                      : "border-[var(--site-accent)]/40 hover:scale-105"
                  }`}
                  style={{ backgroundColor: t.bg }}
                />
              ))}
            </div>

            <div className="pt-1 border-t border-[var(--site-accent)]/20">
              <p className={`${garamond} italic text-[12px] text-[var(--site-text)]`}>
                {theme.label}
              </p>
              <p className={`${caveat} text-[12px] text-[var(--site-accent)]/80 italic`}>
                {theme.sub}
              </p>
            </div>
          </div>
        )}
      </div>

      {children}
    </div>
  );
}
