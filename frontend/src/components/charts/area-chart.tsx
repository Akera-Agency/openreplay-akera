"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import ChartCard from "@/components/card/chart-card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";

type AreaChartComponentProps = {
  title: string;
  description: string;
  dataKeyMobile: string;
  dataKeyDesktop: string;
  chartData: Array<any>;
  chartConfig: ChartConfig;
  footerText: string;
  footerSubtext: string;
  footerIcon?: React.ReactNode;
  className?: string;
  textAlign?: "end" | "start" | "center";
};

const AreaChartComponent = ({
  title,
  description,
  dataKeyMobile,
  dataKeyDesktop,
  className,
  chartData,
  chartConfig,
  footerText,
  footerSubtext,
  footerIcon,
  textAlign,
}: AreaChartComponentProps) => {
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
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Area
            dataKey={dataKeyMobile}
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
            stackId="a"
          />
          <Area
            dataKey={dataKeyDesktop}
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </ChartCard>
  );
};

export default AreaChartComponent;
