import { Check, ChevronsUpDown, TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/button/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn-components/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn-components/popover";
import { useState } from "react";
import Label from "../label/label";

type ComboboxItem = {
  value: string;
  label: string;
};

type ComboboxProps = {
  items: ComboboxItem[];
  placeholder?: string;
  buttonClassName?: string;
  commandClassName?: string;
  onSelect?: (value: string) => void;
  label?: string;
  required?: boolean;
  error?: string;
  align?: "start" | "center" | "end";
};

const Combobox: React.FC<ComboboxProps> = ({
  items,
  placeholder = "Select an option...",
  buttonClassName,
  commandClassName,
  onSelect,
  label,
  required,
  error,
  align = "center",
}) => {
  const hasError = !!error;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (selectedValue: string) => {
    const newValue = selectedValue === value ? "" : selectedValue;
    setValue(newValue);
    onSelect?.(newValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {label && <Label className="mb-2" label={label} required={required} />}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "min-w-[250px] justify-between",
            buttonClassName,
            hasError && "border-destructive",
          )}
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      {hasError && (
        <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-destructive">
          <TriangleAlert className="h-4 w-4" />
          {error}
        </p>
      )}
      <PopoverContent
        align={align}
        className={cn("min-w-[250px] p-0", commandClassName)}
      >
        <Command>
          <CommandInput
            placeholder={`Search ${placeholder.toLowerCase()}...`}
          />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
