import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import ChartCard from "../card/chart-card";

type StackedBarChartProps = {
  data: any[];
  config: ChartConfig;
  xAxisKey: string;
  dataKeys: string[];
  className?: string;
  title?: string;
  description?: string;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
  textAlign?: "end" | "start" | "center";
};

const StackedBarChart = ({
  data,
  config,
  xAxisKey,
  dataKeys,
  className,
  title,
  description,
  footerText,
  footerSubtext,
  footerIcon,
  textAlign,
}: StackedBarChartProps) => {
  return (
    <ChartCard
      title={title}
      description={description}
      footerText={footerText}
      footerSubtext={footerSubtext}
      footerIcon={footerIcon}
      textAlign={textAlign}
      className={className}
    >
      <ChartContainer config={config} className="w-full">
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
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
              <ChartTooltipContent className="min-w-[10rem]" hideLabel />
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
    </ChartCard>
  );
};

export default StackedBarChart;
