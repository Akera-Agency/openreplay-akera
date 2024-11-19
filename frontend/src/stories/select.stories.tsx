import type { Meta, StoryFn } from "@storybook/react";
import { Select, type SelectItemType } from "@/components/form/select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
    label: { control: "text" },
    placeholder: { control: "text" },
    defaultValue: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    items: {
      control: "object",
      description: "Array of select items with `label` and `value`.",
    },
    onChange: { action: "changed" },
  },
};

export default meta;

const Template: StoryFn<typeof Select> = (args) => (
  <div className="max-w-[250px]">
    <Select {...args} />
  </div>
);

const items: SelectItemType[] = [
  { label: "Apple", value: "apple", group: "Fruits" },
  { label: "Banana", value: "banana", group: "Fruits" },
  { label: "Tomato", value: "tomato", group: "Fruits" },
];

export const Default = Template.bind({});
Default.args = {
  label: "Select an Option",
  placeholder: "Choose an option",
  items,
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  label: "Select with Default Value",
  placeholder: "Choose an option",
  defaultValue: "banana",
  items,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Select with Error",
  placeholder: "Choose an option",
  error: "This field is required.",
  items,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Select",
  placeholder: "Cannot choose",
  disabled: true,
  items,
};

export const Required = Template.bind({});
Required.args = {
  label: "Required Select",
  placeholder: "Choose an option",
  required: true,
  items,
};
