import type { Meta, StoryFn } from "@storybook/react";
import Combobox from "@/components/combobox/combobox";

// Sample data for the combobox items
const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const Template: StoryFn<typeof Combobox> = (args) => <Combobox {...args} />;

export default {
  title: "Components/Combobox",
  component: Combobox,
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
    items: {
      control: {
        type: "object",
      },
    },
    placeholder: {
      control: "text",
    },
    onSelect: {
      action: "selected",
    },
    label: { control: "text" },
    required: { control: "boolean" },
    error: { control: "text" },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
  },
} as Meta<typeof Combobox>;

export const Default = Template.bind({});
Default.args = {
  items: frameworks,
  placeholder: "Select a framework...",
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  items: frameworks,
  placeholder: "Pick a JavaScript framework...",
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  items: [],
  placeholder: "No frameworks available",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  items: frameworks,
  label: "Select a framework",
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  items: frameworks,
  error: "This is an error message",
};
