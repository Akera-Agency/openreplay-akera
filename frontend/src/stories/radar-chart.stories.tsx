import RadarChart from "@/components/charts/radar-chart";
import type { Meta, StoryFn } from "@storybook/react";
import { TrendingUp } from "lucide-react";

const meta: Meta<typeof RadarChart> = {
  title: "Components/Charts/RadarChart",
  component: RadarChart,
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
    className: { control: "text" },
    textAlign: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of text in the card header/footer",
    },
  },
};

export default meta;

const Template: StoryFn<typeof RadarChart> = (args) => (
  <div className="mx-auto max-w-[400px]">
    <RadarChart {...args} />
  </div>
);
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export const Default = Template.bind({});
Default.args = {
  data: chartData,
  config: chartConfig,
  dataKey: "month",
  radars: [
    { dataKey: "desktop", color: "hsl(var(--chart-1))", fillOpacity: 0.6 },
    { dataKey: "mobile", color: "hsl(var(--chart-2))" },
  ],
  className: "max-w-lg",
  title: "Radar Chart",
  description: "Monthly visitor data (January - June 2024)",
  footerText: "Trending up by 5.2% this month",
  footerSubtext: "Showing total visitors for the last 6 months",
  footerIcon: <TrendingUp className="h-4 w-4" />,
};
