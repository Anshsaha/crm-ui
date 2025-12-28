"use client";

import { attendanceRate } from "@/src/static/dashboard";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const COLORS = ["#3b82f6", "#ef4444"];

export function AttendancePieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Rate</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={attendanceRate}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {attendanceRate.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
