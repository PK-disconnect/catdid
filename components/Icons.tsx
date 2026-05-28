type P = { className?: string };

const base = "w-full h-full";

export const Logo = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path
      d="M3 17c2.5-1 4-3 5-6 1.2 3.5 2.5 5.5 4 6 1.5-.5 2.8-4 4-9 .8 4 2 6.5 5 7"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Virus = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
      <line
        key={d}
        x1="12"
        y1="12"
        x2={12 + 8.5 * Math.cos((d * Math.PI) / 180)}
        y2={12 + 8.5 * Math.sin((d * Math.PI) / 180)}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    ))}
  </svg>
);

export const Wind = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3 12h15a2.5 2.5 0 1 1-2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3 16h8a2 2 0 1 1-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Drop = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path d="M12 3c3 4 5.5 6.8 5.5 10a5.5 5.5 0 1 1-11 0C6.5 9.8 9 7 12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9.5 13.5a2.5 2.5 0 0 0 2 2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const Smog = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path d="M6 11a4 4 0 1 1 7-2.6A3.5 3.5 0 0 1 18 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 15h13M6 18h12M8 21h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Network = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.6 7.4 10.5 16M17.6 9.4 13.6 16.4M7 6.5l10 1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const Calendar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Gift = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <rect x="4" y="9" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 13h16M12 9v11M12 9C9 9 8 4 12 6c4-2 3 3 0 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const Globe = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const School = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path d="M12 4 22 9l-10 5L2 9l10-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 11v5c0 1.7 3 3 6 3s6-1.3 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GitHub = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? base} aria-hidden>
    <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z" />
  </svg>
);

export const Scholar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? base} aria-hidden>
    <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Z" />
    <path d="M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.6Z" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Arrow = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className ?? base} aria-hidden>
    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const projectIcon = {
  virus: Virus,
  wind: Wind,
  drop: Drop,
  smog: Smog,
  network: Network,
};

export const activityIcon = {
  calendar: Calendar,
  gift: Gift,
  globe: Globe,
  school: School,
};
