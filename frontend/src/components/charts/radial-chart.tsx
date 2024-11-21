import { RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";

interface RadialChartProps {
  title: string;
  description?: string;
  chartData: Array<{ [key: string]: any }>;
  chartConfig: ChartConfig;
  dataKey: string;
  innerRadius?: number;
  outerRadius?: number;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
}

const RadialChart = ({
  title,
  description,
  chartData,
  chartConfig,
  dataKey,
  innerRadius = 30,
  outerRadius = 110,
  footerText,
  footerSubtext,
  footerIcon,
}: RadialChartProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey={dataKey} background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
    </Card>
  );
};

export default RadialChart;
