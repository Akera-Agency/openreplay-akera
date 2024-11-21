import type { Meta, StoryFn } from "@storybook/react";
import PieChart from "@/components/charts/pie-chart";
import { TrendingUp } from "lucide-react";

const meta: Meta<typeof PieChart> = {
  title: "Components/Charts/PieChart",
  component: PieChart,
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "dark" }],
    },
    darkMode: {
      current: "dark",
      stylePreview: true,
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    footerText: { control: "text" },
    footerSubtext: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof PieChart> = (args) => (
  <div className="mx-auto max-w-[400px]">
    <PieChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Pie Chart",
  description: "January - June 2024",
  dataKey: "visitors",
  chartData: [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ],
  chartConfig: {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  },
  footerText: "Trending up by 5.2% this month",
  footerSubtext: "Showing total visitors for the last 6 months",
  footerIcon: <TrendingUp className="h-4 w-4" />,
};
