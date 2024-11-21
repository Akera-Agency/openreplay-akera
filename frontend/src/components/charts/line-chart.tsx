import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
} from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import { cn } from "@/lib/utils";
import ChartCard from "../card/chart-card";

type LineChartProps = {
  data: Array<{ [key: string]: any }>;
  config: ChartConfig;
  xAxisKey: string;
  lines: Array<{ dataKey: string; color: string }>;
  className?: string;
  title?: string;
  description?: string;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
  textAlign?: "end" | "start" | "center";
};

const LineChart = ({
  data,
  config,
  xAxisKey,
  lines,
  className,
  title,
  description,
  footerText,
  footerSubtext,
  footerIcon,
  textAlign,
}: LineChartProps) => {
  return (
    <ChartCard
      title={title}
      description={description}
      footerText={footerText}
      footerSubtext={footerSubtext}
      footerIcon={footerIcon}
      textAlign={textAlign}
    >
      <ChartContainer config={config} className={cn("w-full", className)}>
        <RechartsLineChart
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={xAxisKey}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              dataKey={line.dataKey}
              type="monotone"
              stroke={line.color}
              strokeWidth={2}
              dot={false}
            />
          ))}
          <ChartLegend content={<ChartLegendContent />} />
        </RechartsLineChart>
      </ChartContainer>
    </ChartCard>
  );
};

export default LineChart;
