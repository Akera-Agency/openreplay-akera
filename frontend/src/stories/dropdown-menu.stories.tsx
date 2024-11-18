import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { DropdownMenu } from "@/components/dropdown/dropdown-menu";
import { Button } from "@/components/button/button";
import { Circle, Cog, LogOut, Settings, User } from "lucide-react";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
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
    onSelect: { action: "selected" },
    showChevronIcon: { control: "boolean" },
    label: { control: "text" },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    className: { control: "text" },
  },
} as Meta;

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu>;

const Template: StoryFn<DropdownMenuProps> = (args) => (
  <div className="flex h-screen items-center justify-center">
    <DropdownMenu {...args}>
      <Button variant={"outline"}>Open Menu</Button>
    </DropdownMenu>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Profile", value: "profile" },
    { label: "Settings", value: "settings" },
    { label: "Log out", value: "logout" },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  options: [
    {
      label: "Profile",
      value: "profile",
      icon: <User className="h-4 w-4" />,
    },
    {
      label: "Settings",
      value: "settings",
      icon: <Settings className="h-4 w-4" />,
    },
    { label: "Log out", value: "logout", icon: <LogOut className="h-4 w-4" /> },
  ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Actions",
  options: [
    { label: "Profile", value: "profile" },
    { label: "Settings", value: "settings" },
    { label: "Log out", value: "logout" },
  ],
};

export const DisabledOptions = Template.bind({});
DisabledOptions.args = {
  options: [
    { label: "Profile", value: "profile" },
    { label: "Settings", value: "settings", disabled: true },
    { label: "Log out", value: "logout" },
  ],
};
