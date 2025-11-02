import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Share2, Battery } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data
const energyData = [
  { time: "00:00", generated: 0, shared: 0 },
  { time: "06:00", generated: 2.5, shared: 0.5 },
  { time: "09:00", generated: 8.2, shared: 3.1 },
  { time: "12:00", generated: 12.5, shared: 4.3 },
  { time: "15:00", generated: 10.8, shared: 3.8 },
  { time: "18:00", generated: 6.2, shared: 2.0 },
  { time: "21:00", generated: 1.5, shared: 0.3 },
];

const ProducerDashboard = () => {
  return (
    <DashboardLayout userName="Ruhan" userRole="producer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Producer Dashboard</h1>
          <p className="text-muted-foreground">Monitor your energy generation and sharing</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Generated Today</CardTitle>
              <Zap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5 kWh</div>
              <p className="text-xs text-muted-foreground">+18% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shared to Community</CardTitle>
              <Share2 className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.3 kWh</div>
              <p className="text-xs text-muted-foreground">34% of generation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available for Sharing</CardTitle>
              <Battery className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.1 kWh</div>
              <p className="text-xs text-muted-foreground">Ready to share</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Consumers</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">Connected users</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Energy Generation & Sharing</CardTitle>
            <CardDescription>Your energy production throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <XAxis dataKey="time" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="generated" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="Generated (kWh)"
                />
                <Line 
                  type="monotone" 
                  dataKey="shared" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={2}
                  name="Shared (kWh)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Action Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Share Energy</CardTitle>
              <CardDescription>Distribute your excess energy to the community</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Configure Sharing Settings</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest energy sharing transactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shared to Kavin</span>
                <span className="font-medium">2.5 kWh</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shared to Asha</span>
                <span className="font-medium">1.8 kWh</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProducerDashboard;
