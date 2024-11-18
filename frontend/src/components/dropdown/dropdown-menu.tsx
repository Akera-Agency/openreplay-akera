import { cn } from "@/lib/utils";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React from "react";

type DropdownMenuOption = {
  label: string;
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
};

type IDropdownMenuProps = {
  children: React.ReactNode;
  options: DropdownMenuOption[];
  onSelect?: (value: string) => void;
  className?: string;
  label?: string;
  showChevronIcon?: boolean;
  align?: "start" | "center" | "end";
};

const DropdownMenu = ({
  children,
  options,
  onSelect,
  className,
  label,
  showChevronIcon = false,
  align = "center",
}: IDropdownMenuProps) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {children}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <DropdownMenuPrimitive.Content
            className={cn(
              "z-50 min-w-[8rem] rounded-md border p-0 text-popover-foreground shadow",
              className,
            )}
            sideOffset={4}
            align={align}
          >
            {label && (
              <DropdownMenuPrimitive.Label className="border-b px-2 py-1.5 text-sm font-semibold">
                {label}
              </DropdownMenuPrimitive.Label>
            )}
            {options.map((option) => (
              <DropdownMenuPrimitive.Item
                key={option.value}
                onSelect={() => onSelect && onSelect(option.value)}
                disabled={option.disabled}
                onClick={option.onClick}
                className={cn(
                  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none transition-colors focus:bg-accent",
                  option.disabled && "pointer-events-none opacity-50",
                  option.icon && "pl-3",
                )}
              >
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {option.label}
                {showChevronIcon && (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </motion.div>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

DropdownMenu.displayName = "DropdownMenu";

export { DropdownMenu };
