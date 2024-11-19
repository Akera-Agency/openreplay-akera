import type { Meta, StoryFn } from "@storybook/react";
import BarChart from "@/components/charts/bar-chart";
import type { ChartConfig } from "@/shadcn-components/chart";

const meta: Meta = {
  title: "Components/Charts/BarChart",
  component: BarChart,

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
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
];

const defaultConfig: ChartConfig = {
  value: {
    label: "Value",
    color: "#ff784d", //this will become a variable when used in the app
  },
};

const Template: StoryFn = (args) => (
  <div className="mx-auto w-full max-w-[400px] rounded-md border p-4">
    <BarChart
      data={defaultData}
      config={defaultConfig}
      xAxisKey="name"
      dataKey="value"
      {...args}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: defaultData,
  config: defaultConfig,
  xAxisKey: "name",
  dataKey: "value",
  className: "",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  data: [
    { name: "Q1", sales: 100 },
    { name: "Q2", sales: 200 },
    { name: "Q3", sales: 300 },
    { name: "Q4", sales: 400 },
  ],
  config: {
    sales: { color: "#10B981" },
  },
  xAxisKey: "name",
  dataKey: "sales",
  className: "custom-chart-class",
};
