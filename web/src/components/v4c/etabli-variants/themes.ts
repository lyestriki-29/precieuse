export type SiteTheme = {
  id: string;
  label: string;
  sub: string;
  tone: "light" | "dark";
  bg: string;
  surface: string;
  text: string;
  accent: string;
  caveat: string;
};

export const SITE_THEMES: SiteTheme[] = [
  {
    id: "velin",
    label: "Vélin",
    sub: "pur, comme le site",
    tone: "light",
    bg: "#f4ede0",
    surface: "#ede4d5",
    text: "#3d2817",
    accent: "#7a6638",
    caveat: "#1e3a5f",
  },
  {
    id: "creme",
    label: "Crème",
    sub: "patiné, chaud",
    tone: "light",
    bg: "#ecdfc6",
    surface: "#e2d5b8",
    text: "#3d2817",
    accent: "#7a6638",
    caveat: "#1e3a5f",
  },
  {
    id: "kraft",
    label: "Kraft",
    sub: "parchemin atelier",
    tone: "light",
    bg: "#d4bf99",
    surface: "#c8b288",
    text: "#2a1d10",
    accent: "#5a4828",
    caveat: "#1e3a5f",
  },
  {
    id: "sable",
    label: "Sable",
    sub: "doré, lumineux",
    tone: "light",
    bg: "#e0d2b0",
    surface: "#d6c69e",
    text: "#3d2817",
    accent: "#6b5a3a",
    caveat: "#1e3a5f",
  },
  {
    id: "lin",
    label: "Lin",
    sub: "tissé, doux",
    tone: "light",
    bg: "#ebe3d0",
    surface: "#e0d6bf",
    text: "#3d2817",
    accent: "#7a6638",
    caveat: "#1e3a5f",
  },
  {
    id: "violet",
    label: "Violet pastel",
    sub: "lavande Stitch",
    tone: "light",
    bg: "#e9dff0",
    surface: "#dccce8",
    text: "#3a2a4a",
    accent: "#8a6e9a",
    caveat: "#5a3d75",
  },
  {
    id: "bleu",
    label: "Bleu de roi",
    sub: "rappel encre Caveat",
    tone: "dark",
    bg: "#1e3a5f",
    surface: "#284a73",
    text: "#f4ede0",
    accent: "#d4b886",
    caveat: "#a8c6e8",
  },
  {
    id: "anthracite",
    label: "Anthracite",
    sub: "neutre premium",
    tone: "dark",
    bg: "#1c1c1c",
    surface: "#2a2a2a",
    text: "#f4ede0",
    accent: "#a08552",
    caveat: "#9bb0c8",
  },
  {
    id: "papier",
    label: "Papier sombre",
    sub: "actuel (référence)",
    tone: "dark",
    bg: "#2a1d10",
    surface: "#3a2a1c",
    text: "#f4ede0",
    accent: "#a08552",
    caveat: "#7ca0cc",
  },
];

export const DEFAULT_THEME_ID = "velin";

// Backward-compat alias (keeps any older imports working until cleaned up)
export const ETABLI_THEMES = SITE_THEMES;
export type EtabliTheme = SiteTheme;
