import type { Meta, StoryFn } from "@storybook/react";
import Tabs from "@/components/tabs/tabs";
import { Circle } from "lucide-react";

const tabs = [
  {
    label: "Tab 1",
    value: "tab1",
    content: <div>Content for Tab 1</div>,
  },
  {
    label: "Tab 2",
    value: "tab2",
    content: <div>Content for Tab 2</div>,
  },
  {
    label: "Tab 3",
    value: "tab3",
    content: <div>Content for Tab 3</div>,
  },
];

export default {
  title: "Components/Tabs",
  component: Tabs,
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
    defaultValue: {
      control: "text",
      description: "Default selected tab value",
    },
    className: {
      control: "text",
      description: "Class name for Tabs container",
    },
    listClassName: { control: "text", description: "Class name for TabsList" },
    triggerClassName: {
      control: "text",
      description: "Class name for TabsTrigger",
    },
    contentClassName: {
      control: "text",
      description: "Class name for TabsContent",
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Tabs tabs={tabs} {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      label: "Tab 1",
      value: "tab1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      value: "tab2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      value: "tab3",
      content: <div>Content for Tab 3</div>,
    },
  ],
  defaultValue: "tab1",
  className: "w-fit",
  contentClassName: "py-3 px-2",
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    {
      label: "Tab 1",
      value: "tab1",
      content: <div>Content for Tab 1</div>,
      icon: <Circle className="h-4 w-4" />,
    },
    {
      label: "Tab 2",
      value: "tab2",
      content: <div>Content for Tab 2</div>,
      icon: <Circle className="h-4 w-4" />,
    },
    {
      label: "Tab 3",
      value: "tab3",
      content: <div>Content for Tab 3</div>,
      icon: <Circle className="h-4 w-4" />,
    },
  ],
  defaultValue: "tab1",
  className: "w-fit",
  contentClassName: "py-3 px-2",
};

export const VerticalDirection = Template.bind({});
VerticalDirection.args = {
  tabs: [
    {
      label: "Tab 1",
      value: "tab1",
    },
    {
      label: "Tab 2",
      value: "tab2",
    },
    {
      label: "Tab 3",
      value: "tab3",
    },
  ],
  defaultValue: "tab1",
  direction: "vertical",
  className: "w-fit",
  contentClassName: "py-3 px-2",
};

export const VerticalDirectionWithIcons = Template.bind({});
VerticalDirectionWithIcons.args = {
  tabs: [
    {
      label: "Tab 1",
      value: "tab1",
      icon: <Circle className="h-4 w-4" />,
    },
    {
      label: "Tab 2",
      value: "tab2",
      icon: <Circle className="h-4 w-4" />,
    },
    {
      label: "Tab 3",
      value: "tab3",
      icon: <Circle className="h-4 w-4" />,
    },
  ],
  defaultValue: "tab1",
  direction: "vertical",
  className: "w-fit",
  contentClassName: "py-3 px-2",
};
