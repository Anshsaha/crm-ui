"use client";

import { leadsOverTime } from "@/src/static/dashboard";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function LeadsAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leads Generated Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leadsOverTime}>
            <XAxis dataKey="month" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="leads"
              stroke="#6366f1"
              fill="#c7d2fe"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
