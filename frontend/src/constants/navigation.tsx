import {
  House,
  TvMinimalPlay,
  ChartColumnBig,
  Users,
  Settings,
  CircleHelp,
} from "lucide-react";

export const NAVIGATION_LINKS = [
  // Menu
  {
    title: "Dashboard",
    url: "#",
    icon: <House className="h-5 w-5" />,
  },
  {
    title: "Sessions",
    url: "/sessions",
    icon: <TvMinimalPlay className="h-5 w-5" />,
  },
  {
    title: "Cards general",
    url: "/cards",
    icon: <ChartColumnBig className="h-5 w-5" />,
    children: [
      {
        title: "Product analytics",
        url: "/cards/product",
      },
      {
        title: "Web analytics",
        url: "/cards/web",
      },
      {
        title: "Technical analytics",
        url: "/cards/technical",
      },
    ],
  },
  // Settings
  {
    title: "Team",
    url: "/team",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Support",
    url: "/support",
    icon: <CircleHelp className="h-5 w-5" />,
  },
];
