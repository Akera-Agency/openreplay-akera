import { Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import ChartCard from "../card/chart-card";

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
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey={dataKey} innerRadius={innerRadius} />
        </PieChart>
      </ChartContainer>
    </ChartCard>
  );
};

export default DonutChart;
