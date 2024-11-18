import {
  House,
  TvMinimalPlay,
  ChartColumnBig,
  Users,
  Settings,
  CircleHelp,
} from "lucide-react";

export type NavigationLink = {
  title?: string;
  url?: string;
  icon?: JSX.Element;
  label?: string;
  items?: { title: string; url: string }[];
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "Menu" },
  {
    title: "Dashboard",
    url: "#",
    icon: (
      <House className="h-5 w-5 group-data-[active=true]:text-primary-orange" />
    ),
  },
  {
    title: "Sessions",
    url: "/sessions",
    icon: (
      <TvMinimalPlay className="h-5 w-5 group-data-[active=true]:text-primary-orange" />
    ),
  },
  {
    title: "Cards general",
    url: "/cards",
    icon: (
      <ChartColumnBig className="h-5 w-5 group-data-[active=true]:text-primary-orange" />
    ),
    items: [
      { title: "Product analytics", url: "/cards/product" },
      { title: "Web analytics", url: "/cards/web" },
      { title: "Technical analytics", url: "/cards/technical" },
    ],
  },
  { label: "Settings" },
  {
    title: "Team",
    url: "/team",
    icon: (
      <Users className="h-5 w-5 group-data-[active=true]:text-primary-orange" />
    ),
  },
  {
    title: "Settings",
    url: "/settings",
    icon: (
      <Settings className="h-5 w-5 group-data-[active=true]:text-primary-orange" />
    ),
  },
  {
    title: "Support",
    url: "/support",
    icon: (
      <CircleHelp className="h-5 w-5 group-data-[active=true]:text-primary-orange" />
    ),
  },
];
