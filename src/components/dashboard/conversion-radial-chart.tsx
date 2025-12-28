"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A radial chart showing lead sources distribution";

const chartData = [
  { source: "website", leads: 180, fill: "var(--color-website)" },
  { source: "app", leads: 140, fill: "var(--color-app)" },
  { source: "portals", leads: 110, fill: "var(--color-portals)" },
  { source: "walkins", leads: 75, fill: "var(--color-walkins)" },
  { source: "referrals", leads: 55, fill: "var(--color-referrals)" },
];

const chartConfig = {
  leads: {
    label: "Leads",
  },
  website: {
    label: "Website",
    color: "var(--chart-1)",
  },
  app: {
    label: "Mobile App",
    color: "var(--chart-2)",
  },
  portals: {
    label: "Property Portals",
    color: "var(--chart-3)",
  },
  walkins: {
    label: "Walk-ins",
    color: "var(--chart-4)",
  },
  referrals: {
    label: "Referrals",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ConversionRadialChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Lead Sources Distribution</CardTitle>
        <CardDescription>Last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="source" />}
            />

            <RadialBar dataKey="leads" background>
              <LabelList
                position="insideStart"
                dataKey="source"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Website & App contributing highest leads
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing lead sources for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
