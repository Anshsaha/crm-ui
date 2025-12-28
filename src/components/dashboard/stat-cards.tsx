import { employeeStats } from "@/src/static/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-700">Total Employees</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-blue-900">
          {employeeStats.total}
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-700">Active Today</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-green-900">
          {employeeStats.active}
        </CardContent>
      </Card>

      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-700">On Leave</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-yellow-900">
          {employeeStats.onLeave}
        </CardContent>
      </Card>
    </div>
  );
}
