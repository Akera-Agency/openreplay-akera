import type { Meta, StoryFn } from "@storybook/react";
import BarChart from "@/components/charts/bar-chart";
import type { ChartConfig } from "@/shadcn-components/chart";
import { TrendingUp } from "lucide-react";

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
  <div className="mx-auto w-full max-w-[400px]">
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
  title: "Bar Chart",
  description: "January - June 2024",
  footerText: "Trending up by 5.2% this month",
  footerSubtext: "Showing total visitors for the last 6 months",
  footerIcon: <TrendingUp className="h-4 w-4" />,
  data: defaultData,
  config: defaultConfig,
  xAxisKey: "name",
  dataKey: "value",
  className: "",
  textAlign: "start",
};
