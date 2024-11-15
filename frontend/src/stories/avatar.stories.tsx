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
    email: "john.doe@example.com",
    status: true,
  },
  size: "md",
  fallbackText: "JD",
};

export const Loading = Template.bind({});
Loading.args = {
  user: {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: true,
  },
  isLoading: true,
  size: "md",
};

export const NoImage = Template.bind({});
NoImage.args = {
  user: {
    name: "Sam Wilson",
    email: "sam.wilson@example.com",
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
    email: "alice.brown@example.com",
    status: true,
  },
  size: "xl",
};

export const StatusInactive = Template.bind({});
StatusInactive.args = {
  user: {
    imageUrl: "/images/user.png",
    name: "Bob Green",
    email: "bob.green@example.com",
    status: false,
  },
  size: "xl",
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  user: {
    name: "Charlie Black",
    email: "charlie.black@example.com",
    status: true,
  },
  size: "md",
  fallbackText: "CB",
  className: "ring-2 ring-blue-500",
};
