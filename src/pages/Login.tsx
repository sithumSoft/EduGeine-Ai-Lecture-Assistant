import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { LogIn, Mail, Lock, Eye, EyeOff, Fingerprint } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg gradient-primary">
          <LogIn className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>

      <div className="mt-6 mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground text-sm">Please login to access your lectures.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="space-y-4 mb-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type="email" placeholder="Email / Username" className="pl-11" />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="pl-11 pr-11" 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Switch 
              checked={rememberMe}
              onCheckedChange={setRememberMe}
              className="data-[state=checked]:bg-primary"
            />
            <span className="text-xs text-muted-foreground">Remember Me</span>
          </div>
          <button type="button" className="text-xs text-primary font-semibold hover:underline">
            Forgot?
          </button>
        </div>

        <Button type="submit" size="lg" className="w-full mb-8">
          Login
        </Button>

        {/* Biometric Login */}
        <div className="flex flex-col items-center mt-auto mb-8">
          <button 
            type="button"
            className="w-16 h-16 rounded-full border-2 border-border bg-card flex items-center justify-center hover:border-primary transition-colors mb-2"
          >
            <Fingerprint className="w-8 h-8 text-muted-foreground" />
          </button>
          <span className="text-xs text-muted-foreground">Touch ID</span>
        </div>

        <p className="text-center text-sm text-muted-foreground mb-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
