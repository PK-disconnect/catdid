export const ACCENT_HEX: Record<string, string> = {
  lavender: "#c3b9e8",
  mint: "#aee0cf",
  sky: "#a9cdf0",
  blush: "#f3c6d4",
  peach: "#f6d2bd",
  butter: "#f4e2b3",
};

export const accentHex = (a: string) => ACCENT_HEX[a] ?? ACCENT_HEX.lavender;

export function initials(name: string) {
  const cleaned = name
    .replace(/(Assoc\.|Asst\.|Prof\.|Dr\.)/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = cleaned[0]?.[0] ?? "";
  const last = cleaned.length > 1 ? cleaned[cleaned.length - 1][0] : "";
  return (first + last).toUpperCase();
}
