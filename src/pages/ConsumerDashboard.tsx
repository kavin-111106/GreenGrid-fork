import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingDown, Users, Zap } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data
const usageData = [
  { day: "Mon", received: 2.3, total: 8.5 },
  { day: "Tue", received: 3.0, total: 10.8 },
  { day: "Wed", received: 2.8, total: 9.2 },
  { day: "Thu", received: 3.5, total: 11.5 },
  { day: "Fri", received: 3.0, total: 10.0 },
  { day: "Sat", received: 2.5, total: 7.8 },
  { day: "Sun", received: 2.2, total: 7.5 },
];

const ConsumerDashboard = () => {
  return (
    <DashboardLayout userName="Kavin" userRole="consumer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Consumer Dashboard</h1>
          <p className="text-muted-foreground">Track your energy consumption and community contributions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Received Today</CardTitle>
              <Download className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.0 kWh</div>
              <p className="text-xs text-muted-foreground">From community</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Used</CardTitle>
              <Zap className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10.8 kWh</div>
              <p className="text-xs text-muted-foreground">Today's consumption</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community %</CardTitle>
              <TrendingDown className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28%</div>
              <p className="text-xs text-muted-foreground">Energy from sharing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Producers</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Connected sources</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Energy Usage Trend</CardTitle>
            <CardDescription>Last 7 days consumption overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageData}>
                <XAxis dataKey="day" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Bar dataKey="received" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Received (kWh)" />
                <Bar dataKey="total" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} name="Total Used (kWh)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Action Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Request Energy</CardTitle>
              <CardDescription>Connect with available producers in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Browse Available Energy</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Sources</CardTitle>
              <CardDescription>Producers currently sharing with you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ruhan's Solar</span>
                <span className="font-medium text-primary">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Asha's Wind</span>
                <span className="font-medium text-primary">Active</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConsumerDashboard;
