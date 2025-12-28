import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background p-4">
        <h2 className="text-lg font-semibold">CRM</h2>
        <nav className="mt-6 space-y-2">
          <a className="block text-sm text-muted-foreground">Dashboard</a>
          <a className="block text-sm text-muted-foreground">Employees</a>
          <a className="block text-sm text-muted-foreground">Reports</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 bg-muted/40">{children}</main>
    </div>
  );
}
