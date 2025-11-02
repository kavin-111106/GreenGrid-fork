import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, TrendingDown } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Pie, PieChart, Cell } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data
const monthlyData = [
  { month: "Jan", generated: 350, shared: 120, saved: 230 },
  { month: "Feb", generated: 380, shared: 140, saved: 240 },
  { month: "Mar", generated: 420, shared: 165, saved: 255 },
  { month: "Apr", generated: 450, shared: 180, saved: 270 },
  { month: "May", generated: 480, shared: 200, saved: 280 },
  { month: "Jun", generated: 500, shared: 220, saved: 280 },
];

const energyDistribution = [
  { name: "Self Consumed", value: 60, color: "hsl(var(--primary))" },
  { name: "Shared to Community", value: 30, color: "hsl(var(--secondary))" },
  { name: "Stored", value: 10, color: "hsl(var(--accent))" },
];

const Reports = () => {
  return (
    <DashboardLayout userName="User" userRole="producer">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
            <p className="text-muted-foreground">Comprehensive overview of your energy impact</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Generated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,580 kWh</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-primary" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Shared</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,025 kWh</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-primary" />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Energy Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,555 kWh</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-primary" />
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Offset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,290 kg</div>
              <p className="text-xs text-muted-foreground">Carbon emissions saved</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="trends" className="space-y-4">
          <TabsList>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>6-Month Energy Overview</CardTitle>
                <CardDescription>Generated vs Shared vs Saved energy trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={monthlyData}>
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} />
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
                    <Line 
                      type="monotone" 
                      dataKey="saved" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={2}
                      name="Saved (kWh)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Energy Distribution</CardTitle>
                <CardDescription>How your generated energy is utilized</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={energyDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {energyDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
            <CardDescription>Key highlights from this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-medium">Best Generating Day</p>
                <p className="text-2xl font-bold">June 15</p>
                <p className="text-sm text-muted-foreground">18.5 kWh produced</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Most Shared Day</p>
                <p className="text-2xl font-bold">June 18</p>
                <p className="text-sm text-muted-foreground">8.2 kWh shared</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
