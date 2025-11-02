import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Map, 
  FileText, 
  BarChart3, 
  User, 
  LogOut, 
  Zap 
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  userName: string;
  userRole: "producer" | "consumer";
}

const DashboardLayout = ({ children, userName, userRole }: DashboardLayoutProps) => {
  const location = useLocation();

  const producerRoutes = [
    { path: "/producer-dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/community", icon: Map, label: "Community" },
    { path: "/transactions", icon: FileText, label: "Transactions" },
    { path: "/reports", icon: BarChart3, label: "Reports" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  const consumerRoutes = [
    { path: "/consumer-dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/community", icon: Map, label: "Community" },
    { path: "/transactions", icon: FileText, label: "Transactions" },
    { path: "/reports", icon: BarChart3, label: "Reports" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  const routes = userRole === "producer" ? producerRoutes : consumerRoutes;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GreenGrid</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {userName}</span>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card min-h-[calc(100vh-57px)] p-4">
          <nav className="space-y-1">
            {routes.map((route) => {
              const Icon = route.icon;
              const isActive = location.pathname === route.path;
              return (
                <Link key={route.path} to={route.path}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {route.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
