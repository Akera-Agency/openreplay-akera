import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";

type BarChartProps = {
  data: any[];
  config: ChartConfig;
  xAxisKey: string;
  dataKey: string;
  className?: string;
};

const BarChart = ({
  data,
  config,
  xAxisKey,
  dataKey,
  className,
}: BarChartProps) => {
  return (
    <ChartContainer config={config} className={cn("w-full", className)}>
      <RechartsBarChart data={data} className="text-xs">
        <CartesianGrid vertical={false} className="!stroke-moderator-border" />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis hide />
        <ChartTooltip
          content={<ChartTooltipContent className="min-w-[10rem]" hideLabel />}
        />
        <Bar
          dataKey={dataKey}
          fill={config[dataKey].color}
          radius={[10, 10, 10, 10]}
        />
      </RechartsBarChart>
    </ChartContainer>
  );
};

export default BarChart;
