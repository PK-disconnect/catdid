import type * as React from "react";
import {
  Pulse,
  Virus as PhVirus,
  Wind as PhWind,
  Drop as PhDrop,
  CloudFog,
  ShareNetwork,
  CalendarBlank,
  Gift as PhGift,
  GlobeHemisphereWest,
  Student,
  GraduationCap,
  EnvelopeSimple,
  GithubLogo,
  List,
  X,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import type { IconProps } from "@phosphor-icons/react";

type P = { className?: string };

const base = "w-full h-full";
const common: Partial<IconProps> = { weight: "regular" };

const make =
  (Icon: React.ComponentType<IconProps>, props: Partial<IconProps> = {}) =>
  ({ className }: P) =>
    <Icon className={className ?? base} aria-hidden {...common} {...props} />;

export const Logo = make(Pulse);
export const Virus = make(PhVirus);
export const Wind = make(PhWind);
export const Drop = make(PhDrop);
export const Smog = make(CloudFog);
export const Network = make(ShareNetwork);
export const Calendar = make(CalendarBlank);
export const Gift = make(PhGift);
export const Globe = make(GlobeHemisphereWest);
export const School = make(Student);
export const Scholar = make(GraduationCap);
export const Mail = make(EnvelopeSimple);
export const GitHub = make(GithubLogo);
export const Menu = make(List);
export const Close = make(X);
export const Arrow = make(ArrowRight);

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
