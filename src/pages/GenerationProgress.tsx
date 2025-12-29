import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Lightbulb, Bell } from "lucide-react";

const tips = [
  "Spaced repetition helps you remember 80% more content.",
  "Taking notes while watching improves retention by 34%.",
  "Quizzing yourself is more effective than re-reading.",
  "Break study sessions into 25-minute focused blocks.",
];

const GenerationProgress = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => navigate("/player"), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const tipInterval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tipInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      {/* Spinner */}
      <div className="relative w-44 h-44 mb-10">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="88"
            cy="88"
            r="80"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />
          <circle
            cx="88"
            cy="88"
            r="80"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={502}
            strokeDashoffset={502 - (502 * progress) / 100}
            className="transition-all duration-200"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(263 70% 66%)" />
              <stop offset="100%" stopColor="hsl(330 81% 60%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-foreground">{progress}%</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-2">Generating...</h2>
      <p className="text-muted-foreground text-center mb-10 max-w-xs">
        Creating your personalized lecture. This usually takes 2-3 minutes.
      </p>

      {/* Tip Card */}
      <Card className="w-full max-w-sm p-5 bg-card/50">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Did you know?</span>
        </div>
        <p className="text-sm text-foreground italic leading-relaxed">
          "{tips[tipIndex]}"
        </p>
      </Card>

      <button className="mt-10 flex items-center gap-2 text-primary text-sm font-medium hover:underline">
        <Bell className="w-4 h-4" />
        Notify me when ready
      </button>
    </div>
  );
};

export default GenerationProgress;
