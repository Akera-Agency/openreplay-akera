"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
};

const AreaChartComponent = ({
  title,
  description,
  dataKeyMobile,
  dataKeyDesktop,
  chartData,
  chartConfig,
  footerText,
  footerSubtext,
  footerIcon,
}: AreaChartComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {footerText} {footerIcon}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {footerSubtext}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AreaChartComponent;
