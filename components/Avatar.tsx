import { accentHex, initials } from "./accent";

export default function Avatar({
  name,
  accent,
  size = 56,
}: {
  name: string;
  accent: string;
  size?: number;
}) {
  const hex = accentHex(accent);
  return (
    <span
      className="grid place-items-center rounded-full bg-surface shadow-neu-sm shrink-0 font-semibold text-ink"
      style={{ width: size, height: size, fontSize: size * 0.34 }}
      aria-hidden
    >
      <span
        className="grid place-items-center rounded-full"
        style={{
          width: size - 12,
          height: size - 12,
          background: `linear-gradient(145deg, ${hex}, #ffffff)`,
          boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.06)",
        }}
      >
        {initials(name)}
      </span>
    </span>
  );
}
