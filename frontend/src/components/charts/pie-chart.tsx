import { Pie, PieChart as RechartPieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import ChartCard from "../card/chart-card";

type PieChartProps = {
  chartData: Array<{ [key: string]: any }>;
  chartConfig: ChartConfig;
  dataKey: string;
  title?: string;
  description?: string;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
};

const PieChart = ({
  title,
  description,
  dataKey,
  chartData,
  chartConfig,
  footerText,
  footerSubtext,
  footerIcon,
}: PieChartProps) => {
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
        <RechartPieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie data={chartData} dataKey={dataKey} nameKey="browser" />
          <ChartLegend content={<ChartLegendContent />} />
        </RechartPieChart>
      </ChartContainer>
    </ChartCard>
  );
};

export default PieChart;
