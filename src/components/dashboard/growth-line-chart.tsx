"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2025-04-01", website: 120, app: 80 },
  { date: "2025-04-02", website: 95, app: 70 },
  { date: "2025-04-03", website: 140, app: 90 },
  { date: "2025-04-04", website: 180, app: 120 },
  { date: "2025-04-05", website: 220, app: 150 },
  { date: "2025-04-06", website: 200, app: 170 },
  { date: "2025-04-07", website: 160, app: 110 },
  { date: "2025-04-08", website: 260, app: 180 },
  { date: "2025-04-09", website: 90, app: 60 },
  { date: "2025-04-10", website: 170, app: 110 },
  { date: "2025-04-11", website: 230, app: 160 },
  { date: "2025-04-12", website: 190, app: 140 },
  { date: "2025-04-13", website: 240, app: 180 },
  { date: "2025-04-14", website: 130, app: 90 },
  { date: "2025-04-15", website: 110, app: 80 },
  { date: "2025-04-16", website: 140, app: 100 },
  { date: "2025-04-17", website: 290, app: 200 },
  { date: "2025-04-18", website: 260, app: 210 },
  { date: "2025-04-19", website: 180, app: 120 },
  { date: "2025-04-20", website: 90, app: 70 },
  { date: "2025-04-21", website: 150, app: 100 },
  { date: "2025-04-22", website: 170, app: 110 },
  { date: "2025-04-23", website: 160, app: 120 },
  { date: "2025-04-24", website: 270, app: 190 },
  { date: "2025-04-25", website: 190, app: 150 },
  { date: "2025-04-26", website: 80, app: 60 },
  { date: "2025-04-27", website: 280, app: 210 },
  { date: "2025-04-28", website: 120, app: 90 },
  { date: "2025-04-29", website: 220, app: 160 },
  { date: "2025-04-30", website: 300, app: 200 },
  { date: "2025-05-01", website: 120, app: 80 },
  { date: "2025-05-02", website: 95, app: 70 },
  { date: "2025-05-03", website: 140, app: 90 },
  { date: "2025-05-04", website: 180, app: 120 },
  { date: "2025-05-05", website: 220, app: 150 },
  { date: "2025-05-06", website: 200, app: 170 },
  { date: "2025-05-07", website: 160, app: 110 },
  { date: "2025-05-08", website: 260, app: 180 },
  { date: "2025-05-09", website: 90, app: 60 },
  { date: "2025-05-10", website: 170, app: 110 },
  { date: "2025-05-11", website: 230, app: 160 },
  { date: "2025-05-12", website: 190, app: 140 },
  { date: "2025-05-13", website: 240, app: 180 },
  { date: "2025-05-14", website: 130, app: 90 },
  { date: "2025-05-15", website: 110, app: 80 },
  { date: "2025-05-16", website: 140, app: 100 },
  { date: "2025-05-17", website: 290, app: 200 },
  { date: "2025-05-18", website: 260, app: 210 },
  { date: "2025-05-19", website: 180, app: 120 },
  { date: "2025-05-20", website: 90, app: 70 },
  { date: "2025-05-21", website: 150, app: 100 },
  { date: "2025-05-22", website: 170, app: 110 },
  { date: "2025-05-23", website: 160, app: 120 },
  { date: "2025-05-24", website: 270, app: 190 },
  { date: "2025-05-25", website: 190, app: 150 },
  { date: "2025-05-26", website: 80, app: 60 },
  { date: "2025-05-27", website: 280, app: 210 },
  { date: "2025-05-28", website: 120, app: 90 },
  { date: "2025-05-29", website: 220, app: 160 },
  { date: "2025-05-30", website: 300, app: 200 },
  { date: "2025-05-31", website: 270, app: 180 },
  { date: "2025-06-01", website: 120, app: 80 },
  { date: "2025-06-02", website: 95, app: 70 },
  { date: "2025-06-03", website: 140, app: 90 },
  { date: "2025-06-04", website: 180, app: 120 },
  { date: "2025-06-05", website: 220, app: 150 },
  { date: "2025-06-06", website: 200, app: 170 },
  { date: "2025-06-07", website: 160, app: 110 },
  { date: "2025-06-08", website: 260, app: 180 },
  { date: "2025-06-09", website: 90, app: 60 },
  { date: "2025-06-10", website: 170, app: 110 },
  { date: "2025-06-11", website: 230, app: 160 },
  { date: "2025-06-12", website: 190, app: 140 },
  { date: "2025-06-13", website: 240, app: 180 },
  { date: "2025-06-14", website: 130, app: 90 },
  { date: "2025-06-15", website: 110, app: 80 },
  { date: "2025-06-16", website: 140, app: 100 },
  { date: "2025-06-17", website: 290, app: 200 },
  { date: "2025-06-18", website: 260, app: 210 },
  { date: "2025-06-19", website: 180, app: 120 },
  { date: "2025-06-20", website: 90, app: 70 },
  { date: "2025-06-21", website: 150, app: 100 },
  { date: "2025-06-22", website: 170, app: 110 },
  { date: "2025-06-23", website: 160, app: 120 },
  { date: "2025-06-24", website: 270, app: 190 },
  { date: "2025-06-25", website: 190, app: 150 },
  { date: "2025-06-26", website: 80, app: 60 },
  { date: "2025-06-27", website: 280, app: 210 },
  { date: "2025-06-28", website: 120, app: 90 },
  { date: "2025-06-29", website: 220, app: 160 },
  { date: "2025-06-30", website: 300, app: 200 },
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
    label: "App",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2025-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Leads Generated</CardTitle>
          <CardDescription>
            Showing leads generated via website and mobile app
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillWebsite" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-website)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-website)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillApp" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-app)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-app)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="app"
              type="natural"
              fill="url(#fillApp)"
              stroke="var(--color-app)"
              stackId="a"
            />

            <Area
              dataKey="website"
              type="natural"
              fill="url(#fillWebsite)"
              stroke="var(--color-website)"
              stackId="a"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
