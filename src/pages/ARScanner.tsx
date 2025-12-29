import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { X, Zap, Globe, Camera, Sparkles } from "lucide-react";

const ARScanner = () => {
  const navigate = useNavigate();
  const [isScanning] = useState(true);

  return (
    <div className="min-h-screen bg-card relative overflow-hidden">
      {/* Camera View Background (simulated) */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-muted flex items-center justify-center">
        <Camera className="w-24 h-24 text-muted-foreground/30" />
        
        {/* Simulated whiteboard text */}
        <div className="absolute top-1/3 text-center">
          <p className="text-3xl font-serif italic text-muted-foreground/50">E = mc²</p>
          <p className="text-lg text-muted-foreground/40 mt-2">Theory of Relativity</p>
        </div>
      </div>

      {/* Scanning overlay animation */}
      <div className="absolute inset-x-0 top-0 h-1/3 pointer-events-none">
        <div className="w-full h-1 gradient-primary animate-pulse" />
      </div>

      {/* Overlay UI */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Top Bar */}
        <div className="flex justify-between items-start">
          <div className="px-4 py-2 rounded-full glass flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-semibold text-foreground">
              {isScanning ? "Scanning..." : "Ready"}
            </span>
          </div>
          
          <div className="flex flex-col gap-2">
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </button>
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <Globe className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </div>

        {/* AR Explanation Card */}
        <div className="flex justify-center mb-20">
          <Card className="max-w-xs p-4 glass border-primary/30 animate-pulse-glow">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary">AI Explanation</span>
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              Energy equals mass times the speed of light squared. This equation shows that mass and energy are interchangeable.
            </p>
          </Card>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col items-center gap-6 pb-8">
          <div className="flex items-center gap-8">
            <span className="text-sm font-semibold text-foreground">Simple</span>
            <span className="text-sm font-medium text-muted-foreground">Advanced</span>
          </div>
          
          {/* Capture Button */}
          <button className="w-20 h-20 rounded-full border-4 border-primary-foreground flex items-center justify-center">
            <div className="w-16 h-16 rounded-full gradient-primary" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-destructive flex items-center justify-center"
        >
          <X className="w-5 h-5 text-destructive-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ARScanner;
