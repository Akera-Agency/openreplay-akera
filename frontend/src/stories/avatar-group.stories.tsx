import type { Meta, StoryFn } from "@storybook/react";
import AvatarGroup from "@/components/avatar/avatar-group";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
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
    className: { control: "text" },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
  },
} as Meta;

type User = {
  imageUrl?: string;
  name: string;
  email: string;
};

const Template: StoryFn<{
  users: User[];
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}> = (args) => (
  <div className="max-w-md">
    <AvatarGroup {...args} />
  </div>
);

const usersData: User[] = [
  {
    imageUrl: "/images/user.png",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    imageUrl: "/images/user.png",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    imageUrl: "/images/user.png",
    name: "Sam Wilson",
    email: "sam.wilson@example.com",
  },
];

export const Small = Template.bind({});
Small.args = {
  users: usersData,
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  users: usersData,
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  users: usersData,
  size: "lg",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  users: usersData,
  size: "xl",
};
