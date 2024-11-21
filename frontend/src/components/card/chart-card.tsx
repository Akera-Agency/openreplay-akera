import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/card";

type ChartCardProps = {
  title?: string;
  description?: string;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
  footerClassName?: string;
  className?: string;
  textAlign?: "start" | "center" | "end";
  children: React.ReactNode;
};

const ChartCard = ({
  title,
  description,
  footerText,
  footerSubtext,
  footerIcon,
  footerClassName,
  className,
  children,
  textAlign = "center",
}: ChartCardProps) => {
  return (
    <Card className={`flex flex-col ${className}`}>
      {title && (
        <CardHeader className={cn("mb-7 pb-0", `items-${textAlign}`)}>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="flex-1 pb-0">{children}</CardContent>
      {(footerText || footerSubtext) && (
        <CardFooter
          className={cn(
            "mt-4 flex-col gap-2 text-sm",
            footerClassName,
            `items-${textAlign}`,
          )}
        >
          {footerText && (
            <div className="flex items-center gap-2 font-medium leading-none">
              {footerText} {footerIcon}
            </div>
          )}
          {footerSubtext && (
            <div className="leading-none text-muted-foreground">
              {footerSubtext}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ChartCard;
