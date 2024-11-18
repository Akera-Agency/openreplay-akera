import { cn } from "@/lib/utils";
import {
  Tabs as ShadTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn-components/tabs";

type Tab = {
  label: string;
  value: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultValue?: string;
  direction?: "horizontal" | "vertical";
  className?: string;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

const Tabs = ({
  tabs,
  defaultValue,
  direction = "horizontal",
  className,
  listClassName,
  triggerClassName,
  contentClassName,
}: TabsProps) => {
  const isVertical = direction === "vertical";

  return (
    <ShadTabs
      defaultValue={defaultValue || tabs[0]?.value}
      className={cn(className, isVertical && "flex")}
    >
      <TabsList
        className={cn(
          "bg-tag-hover",
          isVertical ? "flex h-full flex-col" : "flex-row",
          listClassName,
        )}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "group min-w-[11rem] font-medium data-[state=active]:bg-input-background",
              triggerClassName,
            )}
          >
            {tab.icon && (
              <span
                className={cn(
                  "mr-1 h-4 w-4",
                  "group-data-[state=active]:text-orange-500",
                )}
              >
                {tab.icon}
              </span>
            )}
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div
        className={cn("w-full", isVertical && "ml-4", !isVertical && "mt-4")}
      >
        {tabs.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className={contentClassName}
          >
            {tab.content}
          </TabsContent>
        ))}
      </div>
    </ShadTabs>
  );
};

export default Tabs;
