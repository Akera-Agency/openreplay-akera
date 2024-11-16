import React from "react";
import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/shadcn-components/sidebar";

const Sidebar = () => {
  return (
    <ShadSidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </ShadSidebar>
  );
};

export default Sidebar;
