import React from "react";
import { Button } from "../button/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/shadcn-components/sidebar";
import { PanelLeftClose } from "lucide-react";

type CustomSidebarTriggerProps = {
  className?: string;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CustomSidebarTrigger = ({
  className,
  icon = <PanelLeftClose />,
  onClick,
  ...props
}: CustomSidebarTriggerProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      {icon}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export default CustomSidebarTrigger;
