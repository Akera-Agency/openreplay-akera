import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import StackedBarChart from "@/components/charts/stacked-chart";
import type { ChartConfig } from "@/shadcn-components/chart";
import { TrendingUp } from "lucide-react";

const meta: Meta = {
  title: "Components/Charts/StackedBarChart",
  component: StackedBarChart,
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
};

export default meta;

const defaultData = [
  { name: "Jan", sales: 100, profit: 50 },
  { name: "Feb", sales: 200, profit: 80 },
  { name: "Mar", sales: 150, profit: 60 },
  { name: "Apr", sales: 250, profit: 120 },
];

const defaultConfig: ChartConfig = {
  sales: { label: "Sales", color: "#4F46E5" },
  profit: { label: "Profit", color: "#10B981" },
};

const Template: StoryFn<typeof StackedBarChart> = (args) => (
  <div className="mx-auto w-full max-w-[400px]">
    <StackedBarChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: defaultData,
  config: defaultConfig,
  xAxisKey: "name",
  dataKeys: ["sales", "profit"],
  className: "",
  title: "Stacked Bars Chart",
  description: "January - June 2024",
  footerText: "Trending up by 5.2% this month",
  footerSubtext: "Showing total visitors for the last 6 months",
  footerIcon: <TrendingUp className="h-4 w-4" />,
  textAlign: "start",
};
