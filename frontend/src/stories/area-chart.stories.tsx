import type { Meta, StoryFn } from "@storybook/react";
import AreaChartComponent from "@/components/charts/area-chart";
import { TrendingUp } from "lucide-react";

const meta: Meta<typeof AreaChartComponent> = {
  title: "Components/Charts/AreaChart",
  component: AreaChartComponent,
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
    dataKeyMobile: { control: "text" },
    dataKeyDesktop: { control: "text" },
    footerText: { control: "text" },
    footerSubtext: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof AreaChartComponent> = (args) => (
  <div className="mx-auto max-w-[400px] rounded-md border">
    <AreaChartComponent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Area Chart",
  description: "Showing total visitors for the last 6 months",
  dataKeyMobile: "mobile",
  dataKeyDesktop: "desktop",
  chartData: [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ],
  chartConfig: {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  },
  footerText: "Trending up by 5.2% this month",
  footerSubtext: "January - June 2024",
  footerIcon: <TrendingUp className="h-4 w-4" />,
};
