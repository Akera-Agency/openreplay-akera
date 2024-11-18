import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/shadcn-components/sidebar";

import { ChevronRight, Minus, PanelRightClose, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shadcn-components/collapsible";
import { Icons } from "../icons";
import CustomSidebarTrigger from "./custom-sidebar-trigger";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { groupLinksByLabel } from "@/helpers/group-links";

const Sidebar = () => {
  const groupedLinks = groupLinksByLabel(NAVIGATION_LINKS);

  return (
    <ShadSidebar className="group" collapsible="icon">
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
          className="border-sidebar-separator hidden h-10 w-full rounded-none border-b border-t group-data-[state=collapsed]:flex"
        />
        {Object.entries(groupedLinks).map(([label, links]) => (
          <SidebarGroup
            key={label}
            className="border-sidebar-separator group-data-[state=collapsed]:border-b group-data-[state=collapsed]:pb-7"
          >
            <SidebarGroupLabel className="uppercase group-data-[state=collapsed]:hidden">
              {label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {links.map((link) =>
                  link.items ? (
                    <Collapsible
                      key={link.title}
                      defaultOpen
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className="group px-2 py-5 data-[active=true]:bg-sidebar-active-item"
                            isActive
                          >
                            {link.icon}
                            {link.title}
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {link.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuButton className="data-[active=true]:bg-sidebar-active-item">
                                  {subItem.title}
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={link.title}>
                      <SidebarMenuButton className="group px-2 py-5 data-[active=true]:bg-sidebar-active-item">
                        {link.icon}
                        {link.title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ),
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </ShadSidebar>
  );
};

export default Sidebar;
