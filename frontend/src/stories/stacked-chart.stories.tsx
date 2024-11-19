import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import StackedBarChart from "@/components/charts/stacked-chart";
import type { ChartConfig } from "@/shadcn-components/chart";

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
  <div className="mx-auto w-full max-w-[400px] rounded-md border p-4">
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
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  data: [
    { name: "Q1", revenue: 300, expenses: 150 },
    { name: "Q2", revenue: 400, expenses: 200 },
    { name: "Q3", revenue: 350, expenses: 170 },
    { name: "Q4", revenue: 500, expenses: 250 },
  ],
  config: {
    revenue: { label: "Revenue", color: "#F59E0B" },
    expenses: { label: "Expenses", color: "#EF4444" },
  },
  xAxisKey: "name",
  dataKeys: ["revenue", "expenses"],
  className: "custom-chart-class",
};
