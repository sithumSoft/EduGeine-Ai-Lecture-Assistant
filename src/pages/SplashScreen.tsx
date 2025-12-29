import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      navigate("/language");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      
      {/* Animated circles */}
      <div className="absolute w-96 h-96 rounded-full border border-primary/20 animate-pulse" />
      <div className="absolute w-72 h-72 rounded-full border border-primary/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute w-48 h-48 rounded-full border border-primary/40 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-28 h-28 rounded-full gradient-primary flex items-center justify-center mb-6 animate-pulse-glow">
          <Sparkles className="w-14 h-14 text-primary-foreground" />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-2">EduGenie</h1>
        <p className="text-muted-foreground text-sm">AI-Powered Learning</p>
        
        {/* Loading dots */}
        <div className="mt-12 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "0.1s" }} />
          <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
