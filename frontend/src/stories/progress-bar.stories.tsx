import type { Meta, StoryFn } from "@storybook/react";
import ProgressBar from "@/components/progress/progress-bar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
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
    percentage: {
      control: { type: "range", min: 0, max: 100 },
      description: "The progress percentage (0-100).",
      defaultValue: 50,
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "50" },
      },
    },
  },
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  percentage: 50,
  className: "max-w-[20rem]",
};

export const ZeroProgress = Template.bind({});
ZeroProgress.args = {
  percentage: 0,
  className: "max-w-[20rem]",
};

export const FullProgress = Template.bind({});
FullProgress.args = {
  percentage: 100,
  className: "max-w-[20rem]",
};
