import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/shadcn-components/sidebar";
import { Circle, PanelRightClose } from "lucide-react";
import { Icons } from "@/components/icons";
import CustomSidebarTrigger from "@/components/sidebar/custom-sidebar-trigger";

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
      <Sidebar className="group" collapsible="icon">
        <SidebarHeader className="flex flex-row items-center justify-between p-4 group-data-[state=collapsed]:px-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-ring">
                  <Icons.navigatorLogo />
                </div>
                <h1 className="truncate text-2xl font-semibold">Navigator</h1>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
          <CustomSidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <CustomSidebarTrigger
            icon={<PanelRightClose />}
            className="hidden h-10 w-full rounded-none border-b border-t group-data-[state=collapsed]:flex"
          />
          <SidebarGroup>
            <SidebarGroupLabel className="uppercase group-data-[state=collapsed]:hidden">
              Menu
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="data-[active=true]:bg-sidebar-active-item group"
                    isActive
                  >
                    <Circle className="group-data-[active=true]:text-primary-orange" />
                    Item 1
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Circle />
                    Item 2
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Circle />
                    Item 3
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Circle />
                    Item 4
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </>
  ),
};
