import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart as RechartsRadarChart,
} from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shadcn-components/chart";
import { cn } from "@/lib/utils";
import ChartCard from "../card/chart-card";

type RadarChartProps = {
  data: Array<{ [key: string]: any }>;
  config: ChartConfig;
  dataKey: string;
  radars: Array<{ dataKey: string; color: string; fillOpacity?: number }>;
  className?: string;
  title?: string;
  description?: string;
  footerText?: string;
  footerSubtext?: string;
  footerIcon?: React.ReactNode;
  textAlign?: "end" | "start" | "center";
};

const RadarChart = ({
  data,
  config,
  dataKey,
  radars,
  className,
  title,
  description,
  footerText,
  footerSubtext,
  footerIcon,
  textAlign = "center",
}: RadarChartProps) => {
  return (
    <ChartCard
      title={title}
      description={description}
      footerText={footerText}
      footerSubtext={footerSubtext}
      footerIcon={footerIcon}
      textAlign={textAlign}
    >
      <ChartContainer
        config={config}
        className={cn("mx-auto aspect-square", className)}
      >
        <RechartsRadarChart data={data}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <PolarAngleAxis dataKey={dataKey} />
          <PolarGrid />
          {radars.map((radar) => (
            <Radar
              key={radar.dataKey}
              dataKey={radar.dataKey}
              fill={radar.color}
              fillOpacity={radar.fillOpacity ?? 0.6}
            />
          ))}
        </RechartsRadarChart>
      </ChartContainer>
    </ChartCard>
  );
};

export default RadarChart;
