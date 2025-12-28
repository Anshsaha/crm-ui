"use client";

import { revenuePipeline } from "@/src/static/dashboard";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function RevenueLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Pipeline (₹ Crores)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenuePipeline}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
