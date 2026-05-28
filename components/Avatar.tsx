"use client";

import { useState } from "react";
import { accentHex, initials } from "./accent";

export default function Avatar({
  name,
  accent,
  photo,
  size = 60,
}: {
  name: string;
  accent: string;
  photo?: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);
  const hex = accentHex(accent);
  const inner = size - 10;
  const showPhoto = photo && !failed;

  return (
    <span
      className="grid place-items-center rounded-full bg-surface shadow-neu-sm shrink-0 font-semibold text-ink"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
      aria-hidden
    >
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="rounded-full object-cover"
          style={{
            width: inner,
            height: inner,
            boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.08)",
          }}
        />
      ) : (
        <span
          className="grid place-items-center rounded-full"
          style={{
            width: inner,
            height: inner,
            background: `linear-gradient(145deg, ${hex}, #ffffff)`,
            boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.06)",
          }}
        >
          {initials(name)}
        </span>
      )}
    </span>
  );
}
