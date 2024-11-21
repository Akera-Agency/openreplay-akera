import { RadialBar, RadialBarChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import ChartCard from "../card/chart-card";

type RadialChartProps = {
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
};

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
    <ChartCard
      title={title}
      description={description}
      footerText={footerText}
      footerSubtext={footerSubtext}
      footerIcon={footerIcon}
    >
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
    </ChartCard>
  );
};

export default RadialChart;
