"use client";

import { employeesByDepartment } from "@/src/static/dashboard";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function DepartmentBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees by Department</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={employeesByDepartment}>
            <XAxis dataKey="department" />
            <Tooltip />
            <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
