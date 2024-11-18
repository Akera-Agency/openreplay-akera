import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import DropdownCheckbox from "@/components/dropdown/dropdown-checkbox";
import { Button } from "@/components/button/button";

export default {
  title: "Components/DropdownCheckbox",
  component: DropdownCheckbox,
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
    options: { control: "object" },
    onCheckedChange: { action: "checkedChange" },
    label: { control: "text" },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    defaultChecked: { control: "object" },
    className: { control: "text" },
  },
} as Meta;

type DropdownCheckboxProps = React.ComponentProps<typeof DropdownCheckbox>;

const Template: StoryFn<DropdownCheckboxProps> = (args) => (
  <div className="flex h-screen items-center justify-center">
    <DropdownCheckbox {...args}>
      <Button variant={"outline"}>Open Checkbox Menu</Button>
    </DropdownCheckbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Select Options",
  options: [
    { label: "Option A", value: "optionA" },
    { label: "Option B", value: "optionB" },
    { label: "Option C", value: "optionC" },
  ],
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: ["option2"],
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};

export const DisabledOptions = Template.bind({});
DisabledOptions.args = {
  options: [
    { label: "Option X", value: "optionX" },
    { label: "Option Y", value: "optionY", disabled: true },
    { label: "Option Z", value: "optionZ" },
  ],
};
