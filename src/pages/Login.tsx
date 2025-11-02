import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

const Login = () => {
  const [role, setRole] = useState<"producer" | "consumer">("producer");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect based on role
    if (role === "producer") {
      navigate("/producer-dashboard");
    } else {
      navigate("/consumer-dashboard");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register - redirect based on role
    if (role === "producer") {
      navigate("/producer-dashboard");
    } else {
      navigate("/consumer-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden md:block">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-12 w-12 text-primary" />
            <span className="text-3xl font-bold">GreenGrid</span>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Join the Energy Revolution</h2>
          <p className="text-muted-foreground mb-6">
            Connect with your community to share and manage renewable energy efficiently. 
            Whether you're a producer with solar panels or a consumer looking for clean energy, 
            GreenGrid makes it simple.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm">Real-time energy tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm">Community-driven sharing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm">Transparent transactions</span>
            </div>
          </div>
        </div>

        {/* Right side - Forms */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Login or create an account to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input id="login-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label>I am a</Label>
                    <RadioGroup value={role} onValueChange={(value) => setRole(value as "producer" | "consumer")}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="producer" id="login-producer" />
                        <Label htmlFor="login-producer" className="font-normal cursor-pointer">Producer (I generate energy)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consumer" id="login-consumer" />
                        <Label htmlFor="login-consumer" className="font-normal cursor-pointer">Consumer (I need energy)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input id="register-name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input id="register-email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input id="register-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label>I am a</Label>
                    <RadioGroup value={role} onValueChange={(value) => setRole(value as "producer" | "consumer")}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="producer" id="register-producer" />
                        <Label htmlFor="register-producer" className="font-normal cursor-pointer">Producer (I generate energy)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consumer" id="register-consumer" />
                        <Label htmlFor="register-consumer" className="font-normal cursor-pointer">Consumer (I need energy)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-4 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
