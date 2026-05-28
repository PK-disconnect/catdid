"use client";

import { useState } from "react";
import { accentHex } from "./accent";
import { Virus, Wind, Drop, Smog } from "./Icons";

type Signal = {
  key: string;
  label: string;
  unit: string;
  accent: string;
  Icon: (p: { className?: string }) => JSX.Element;
  series: number[];
  risk: "Low" | "Moderate" | "Elevated" | "High";
  note: string;
};

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const SIGNALS: Signal[] = [
  {
    key: "hfmd",
    label: "HFMD",
    unit: "outbreak risk index",
    accent: "blush",
    Icon: Virus,
    series: [30, 38, 52, 64, 72, 80, 74, 60, 48, 55, 68, 58],
    risk: "Elevated",
    note: "Driven by max temperature, rainfall, and vapor pressure.",
  },
  {
    key: "flu",
    label: "Influenza",
    unit: "activity (biannual peaks)",
    accent: "sky",
    Icon: Wind,
    series: [70, 78, 60, 40, 30, 42, 66, 58, 44, 50, 72, 84],
    risk: "Moderate",
    note: "Relative humidity is the key driver; rainfall & PM₁₀ regional.",
  },
  {
    key: "lepto",
    label: "Leptospirosis",
    unit: "flood-linked risk",
    accent: "mint",
    Icon: Drop,
    series: [20, 18, 24, 30, 42, 58, 76, 88, 82, 64, 40, 26],
    risk: "High",
    note: "Flooding and temperature strongly influence human cases.",
  },
  {
    key: "pm25",
    label: "PM2.5",
    unit: "predicted concentration",
    accent: "peach",
    Icon: Smog,
    series: [86, 80, 72, 54, 40, 30, 26, 28, 34, 48, 66, 82],
    risk: "Elevated",
    note: "Average actual vs. predicted, Dec 2024 – Apr 2025.",
  },
];

const RISK_STEPS = ["Low", "Moderate", "Elevated", "High"] as const;

export default function SignalTracker() {
  const [active, setActive] = useState(0);
  const s = SIGNALS[active];
  const hex = accentHex(s.accent);
  const max = Math.max(...s.series);
  const riskIdx = RISK_STEPS.indexOf(s.risk);

  return (
    <div className="neu-card p-6 sm:p-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-ink-soft">
            Signal tracker
          </p>
          <h3 className="font-semibold text-ink text-lg">Climate &amp; disease pulse</h3>
        </div>
        <span className="neu-chip font-mono">preview</span>
      </div>

      <div
        role="tablist"
        aria-label="Select a signal to track"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6"
      >
        {SIGNALS.map((sig, i) => {
          const selected = i === active;
          return (
            <button
              key={sig.key}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-1.5 rounded-neu py-3 px-2 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selected ? "shadow-neu-inset" : "shadow-neu-sm hover:shadow-neu"
              }`}
            >
              <span
                className="grid place-items-center w-9 h-9 rounded-full p-2"
                style={{
                  color: selected ? "#3a4256" : "#6b7488",
                  background: selected
                    ? `linear-gradient(145deg, ${accentHex(sig.accent)}, #ffffff)`
                    : "transparent",
                }}
              >
                <sig.Icon />
              </span>
              <span
                className={`text-xs font-medium ${
                  selected ? "text-ink" : "text-ink-soft"
                }`}
              >
                {sig.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="neu-inset p-5 sm:p-6">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-sm font-medium text-ink">{s.label}</span>
          <span className="text-xs text-ink-soft">{s.unit}</span>
        </div>

        <div className="flex items-end gap-1.5 sm:gap-2 h-40" aria-hidden>
          {s.series.map((v, i) => (
            <div key={i} className="flex-1 h-full flex flex-col justify-end items-center gap-1.5">
              <div className="w-full flex-1 flex flex-col justify-end">
                <div
                  className="w-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    height: `${(v / max) * 100}%`,
                    minHeight: 6,
                    background: `linear-gradient(to top, ${hex}, #ffffff)`,
                    boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.05)",
                  }}
                />
              </div>
              <span className="text-[10px] text-ink-soft font-mono">
                {MONTHS[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs text-ink-soft">Risk</span>
          <div className="flex gap-1.5">
            {RISK_STEPS.map((step, i) => (
              <span
                key={step}
                className="w-7 h-2.5 rounded-full transition-all duration-300"
                style={{
                  background: i <= riskIdx ? hex : "#dde1ea",
                  boxShadow:
                    i <= riskIdx
                      ? "inset 1px 1px 2px rgba(0,0,0,0.08)"
                      : "inset 1px 1px 2px rgba(0,0,0,0.04)",
                }}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-ink">{s.risk}</span>
        </div>
        <p className="text-xs text-ink-soft sm:ml-auto sm:text-right max-w-xs">
          {s.note}
        </p>
      </div>

      <p className="mt-4 text-[11px] text-ink-soft/80 italic">
        Illustrative preview — figures are stylized to demonstrate the lab&apos;s
        modeling focus, not live surveillance data.
      </p>
    </div>
  );
}
