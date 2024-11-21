"use client";

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import ChartCard from "@/components/card/chart-card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import { cn } from "@/lib/utils";

type BarChartProps = {
  title?: string;
  description?: string;
  data: any[];
  config: ChartConfig;
  xAxisKey: string;
  dataKey: string;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
  className?: string;
  textAlign?: "end" | "start" | "center";
};

const BarChart = ({
  title,
  description,
  data,
  config,
  xAxisKey,
  dataKey,
  footerText,
  footerSubtext,
  footerIcon,
  className,
  textAlign,
}: BarChartProps) => {
  return (
    <ChartCard
      title={title}
      description={description}
      footerText={footerText}
      footerSubtext={footerSubtext}
      footerIcon={footerIcon}
      className={className}
      textAlign={textAlign}
    >
      <ChartContainer config={config} className={cn("w-full", className)}>
        <RechartsBarChart data={data} className="text-xs">
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={xAxisKey}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis hide />
          <ChartTooltip
            content={
              <ChartTooltipContent className="min-w-[10rem]" hideLabel />
            }
          />
          <Bar
            dataKey={dataKey}
            fill={config[dataKey].color}
            radius={[10, 10, 10, 10]}
          />
        </RechartsBarChart>
      </ChartContainer>
    </ChartCard>
  );
};

export default BarChart;
