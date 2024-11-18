import type { Meta, StoryObj } from "@storybook/react";

import { Circle, PanelRightClose } from "lucide-react";
import { Icons } from "@/components/icons";
import CustomSidebarTrigger from "@/components/sidebar/custom-sidebar-trigger";
import Sidebar from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/shadcn-components/sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
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
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <>
      <Sidebar />
    </>
  ),
};
