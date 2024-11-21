import { Pie, PieChart as RechartPieChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";

interface PieChartProps {
  chartData: Array<{ [key: string]: any }>;
  chartConfig: ChartConfig;
  dataKey: string;
  title?: string;
  description?: string;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
}

const PieChart = ({
  title,
  description,
  dataKey,
  chartData,
  chartConfig,
  footerText,
  footerSubtext,
  footerIcon,
}: PieChartProps) => {
  return (
    <Card className="flex flex-col">
      {title && (
        <CardHeader className="items-center pb-0">
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RechartPieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey={dataKey} nameKey="browser" />
            <ChartLegend content={<ChartLegendContent />} />
          </RechartPieChart>
        </ChartContainer>
      </CardContent>
      {footerText && (
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            {footerText} {footerIcon}
          </div>
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

export default PieChart;
