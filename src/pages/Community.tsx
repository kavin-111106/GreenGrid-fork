import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, TrendingUp } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data
const producers = [
  { id: 1, name: "Ruhan's Solar", location: "2.3 km away", available: 2.5, status: "active" },
  { id: 2, name: "Asha's Wind", location: "1.8 km away", available: 1.8, status: "active" },
  { id: 3, name: "Mani's Solar", location: "3.5 km away", available: 3.2, status: "active" },
  { id: 4, name: "Kumar's Hydro", location: "4.1 km away", available: 0, status: "inactive" },
];

const Community = () => {
  return (
    <DashboardLayout userName="User" userRole="consumer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Energy Map</h1>
          <p className="text-muted-foreground">Browse and connect with local energy producers</p>
        </div>

        {/* Map Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Energy Network Overview</CardTitle>
            <CardDescription>Interactive map of producers and consumers in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive map visualization</p>
                  <p className="text-sm text-muted-foreground">Shows producers and consumers in your area</p>
                </div>
              </div>
              {/* Mock pins */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-secondary rounded-full animate-pulse" />
            </div>
          </CardContent>
        </Card>

        {/* Producers List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Producers</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {producers.map((producer) => (
              <Card key={producer.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{producer.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {producer.location}
                      </CardDescription>
                    </div>
                    <Badge variant={producer.status === "active" ? "default" : "secondary"}>
                      {producer.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Available Energy</span>
                    </div>
                    <span className="font-semibold">{producer.available} kWh</span>
                  </div>
                  {producer.status === "active" && producer.available > 0 && (
                    <Button className="w-full" size="sm">
                      Request Energy
                    </Button>
                  )}
                  {producer.status === "inactive" && (
                    <Button className="w-full" size="sm" variant="secondary" disabled>
                      Currently Unavailable
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Producers</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">In your area</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Available</CardTitle>
              <Zap className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7.5 kWh</div>
              <p className="text-xs text-muted-foreground">Ready to share</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network Range</CardTitle>
              <MapPin className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 km</div>
              <p className="text-xs text-muted-foreground">Coverage radius</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;
