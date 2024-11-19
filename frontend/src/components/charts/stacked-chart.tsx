import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";

type StackedBarChartProps = {
  data: any[];
  config: ChartConfig;
  xAxisKey: string;
  dataKeys: string[];
  className?: string;
};

const StackedBarChart = ({
  data,
  config,
  xAxisKey,
  dataKeys,
  className,
}: StackedBarChartProps) => {
  return (
    <ChartContainer config={config} className={cn("w-full", className)}>
      <BarChart data={data} className="">
        <CartesianGrid vertical={false} className="!stroke-moderator-border" />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          domain={[0, 500]}
          tickCount={11}
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="bg-input-bg-color min-w-[10rem]"
              hideLabel
            />
          }
        />
        <ChartLegend
          className="mt-3 justify-start px-8"
          content={<ChartLegendContent />}
        />
        {dataKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            stackId="a"
            fill={config[key].color}
            radius={
              index === dataKeys.length - 1 ? [10, 10, 0, 0] : [0, 0, 0, 0]
            }
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default StackedBarChart;
