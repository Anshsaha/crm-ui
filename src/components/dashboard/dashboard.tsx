import { AgentRadarChart } from "./agent-radar-chart";
import { AttendancePieChart } from "./attendance-pie-chart";
import { ConversionRadialChart } from "./conversion-radial-chart";
import { DepartmentBarChart } from "./department-bar-chart";
import { ChartAreaInteractive } from "./growth-line-chart";
import { LeadsAreaChart } from "./leads-area-chart";
import { RevenueLineChart } from "./revenue-line-chart";
import { StatCards } from "./stat-cards";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <StatCards />

      <ChartAreaInteractive />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LeadsAreaChart />
        <RevenueLineChart />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DepartmentBarChart />
        <AttendancePieChart />
        <ConversionRadialChart />
      </div>

      <AgentRadarChart />
    </div>
  );
}
