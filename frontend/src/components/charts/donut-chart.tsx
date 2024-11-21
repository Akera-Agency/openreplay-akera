import { Pie, PieChart } from "recharts";

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

type DonutChartProps = {
  chartData: Array<{ [key: string]: any }>;
  chartConfig: ChartConfig;
  dataKey: string;
  title?: string;
  description?: string;
  innerRadius?: number;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
};

const DonutChart = ({
  title,
  description,
  dataKey,
  chartData,
  chartConfig,
  innerRadius = 80,
  footerText,
  footerSubtext,
  footerIcon,
}: DonutChartProps) => {
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
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey={dataKey} innerRadius={innerRadius} />
          </PieChart>
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

export default DonutChart;
