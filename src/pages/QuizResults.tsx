import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Lightbulb, RotateCcw, Home } from "lucide-react";

const QuizResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Default values for demo
  const correct = 8;
  const wrong = 2;
  const score = 80;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md text-center">
      <h1 className="text-2xl font-bold text-foreground mb-10">Quiz Complete!</h1>

      {/* Score Circle */}
      <div className="relative w-44 h-44 mx-auto mb-10">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="88"
            cy="88"
            r="76"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="12"
          />
          <circle
            cx="88"
            cy="88"
            r="76"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={477}
            strokeDashoffset={477 - (477 * score) / 100}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(161 94% 30%)" />
              <stop offset="100%" stopColor="hsl(263 70% 66%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-foreground">{score}%</span>
          <span className="text-xs text-muted-foreground">Score</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-10 mb-10">
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <span className="text-2xl font-bold text-success">{correct}</span>
          </div>
          <span className="text-xs text-muted-foreground">Correct</span>
        </div>
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <XCircle className="w-5 h-5 text-destructive" />
            <span className="text-2xl font-bold text-destructive">{wrong}</span>
          </div>
          <span className="text-xs text-muted-foreground">Wrong</span>
        </div>
      </div>

      {/* Recommendation */}
      <Card className="p-4 bg-accent/10 border-accent/20 mb-auto text-left">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-accent mt-0.5" />
          <div>
            <p className="font-semibold text-foreground text-sm mb-1">Recommendation</p>
            <p className="text-xs text-muted-foreground">
              Review "Cell Structure" chapter again to improve your understanding of organelles.
            </p>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-3 mt-6">
        <Button variant="outline" size="lg" className="flex-1" onClick={() => navigate("/quiz")}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Retry
        </Button>
        <Button size="lg" className="flex-1" onClick={() => navigate("/dashboard")}>
          <Home className="w-4 h-4 mr-2" />
          Done
        </Button>
      </div>
      </div>
    </div>
  );
};

export default QuizResults;
