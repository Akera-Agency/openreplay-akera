import type { Meta, StoryFn } from "@storybook/react";
import Avatar from "@/components/avatar/avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
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
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    isLoading: { control: "boolean" },
    user: { control: "object" },
    fallbackText: { control: "text" },
    className: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    imageUrl: "/images/user.png",
    name: "John Doe",
    status: true,
  },
  size: "md",
  fallbackText: "JD",
};

export const Loading = Template.bind({});
Loading.args = {
  user: {
    name: "Jane Smith",
    status: true,
  },
  isLoading: true,
  size: "md",
};

export const NoImage = Template.bind({});
NoImage.args = {
  user: {
    name: "Sam Wilson",
    status: false,
  },
  size: "lg",
  fallbackText: "SW",
};

export const StatusActive = Template.bind({});
StatusActive.args = {
  user: {
    imageUrl: "/images/user.png",
    name: "Alice Brown",
    status: true,
  },
  size: "xl",
};

export const StatusInactive = Template.bind({});
StatusInactive.args = {
  user: {
    imageUrl: "/images/user.png",
    name: "Bob Green",
    status: false,
  },
  size: "xl",
};
