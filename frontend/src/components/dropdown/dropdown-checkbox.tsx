import { cn } from "@/lib/utils";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import * as React from "react";
import { Checkbox } from "@/shadcn-components/checkbox";

type DropdownCheckboxOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type IDropdownCheckboxProps = {
  children: React.ReactNode;
  options: DropdownCheckboxOption[];
  onCheckedChange?: (checkedValues: string[]) => void;
  className?: string;
  label?: string;
  defaultChecked?: string[];
  align?: "start" | "center" | "end";
};

const DropdownCheckbox = ({
  children,
  options,
  onCheckedChange,
  className,
  label,
  defaultChecked = [],
  align = "center",
}: IDropdownCheckboxProps) => {
  const [checkedValues, setCheckedValues] =
    React.useState<string[]>(defaultChecked);

  const handleChange = (value: string, checked: boolean) => {
    const newCheckedValues = checked
      ? [...checkedValues, value]
      : checkedValues.filter((v) => v !== value);

    setCheckedValues(newCheckedValues);
    if (onCheckedChange) {
      onCheckedChange(newCheckedValues);
    }
  };

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
          className="relative z-50"
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
              <DropdownMenuPrimitive.CheckboxItem
                key={option.value}
                checked={checkedValues.includes(option.value)}
                onCheckedChange={(checked) =>
                  handleChange(option.value, checked)
                }
                disabled={option.disabled}
                className={cn(
                  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-normal outline-none transition-colors focus:bg-accent",
                  option.disabled && "pointer-events-none opacity-50",
                )}
              >
                <Checkbox
                  checked={checkedValues.includes(option.value)}
                  onCheckedChange={(checked: boolean) =>
                    handleChange(option.value, checked)
                  }
                  disabled={option.disabled}
                  className="mr-2"
                />
                <span>{option.label}</span>
              </DropdownMenuPrimitive.CheckboxItem>
            ))}
          </DropdownMenuPrimitive.Content>
        </motion.div>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

DropdownCheckbox.displayName = "DropdownCheckbox";

export default DropdownCheckbox;
