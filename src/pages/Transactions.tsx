import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data
const transactions = [
  { id: 1, date: "2025-11-01", from: "Ruhan", to: "Kavin", energy: 2.5, status: "completed" },
  { id: 2, date: "2025-11-01", from: "Asha", to: "Mani", energy: 1.2, status: "completed" },
  { id: 3, date: "2025-11-01", from: "Ruhan", to: "Asha", energy: 1.8, status: "completed" },
  { id: 4, date: "2025-10-31", from: "Mani", to: "Kumar", energy: 3.0, status: "completed" },
  { id: 5, date: "2025-10-31", from: "Kumar", to: "Kavin", energy: 0.8, status: "pending" },
  { id: 6, date: "2025-10-30", from: "Asha", to: "Ruhan", energy: 2.2, status: "completed" },
  { id: 7, date: "2025-10-30", from: "Ruhan", to: "Kavin", energy: 1.5, status: "completed" },
];

const Transactions = () => {
  return (
    <DashboardLayout userName="User" userRole="producer">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Transaction History</h1>
            <p className="text-muted-foreground">Complete log of all energy sharing activities</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Energy Shared</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">13.0 kWh</div>
              <p className="text-xs text-muted-foreground">Across all transactions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Unique users</p>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
            <CardDescription>Detailed record of energy sharing events</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Energy (kWh)</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell className="font-medium">{transaction.from}</TableCell>
                    <TableCell className="font-medium">{transaction.to}</TableCell>
                    <TableCell>{transaction.energy}</TableCell>
                    <TableCell>
                      <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
