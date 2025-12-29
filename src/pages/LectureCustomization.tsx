import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Sparkles, User, UserCircle, Video, Music } from "lucide-react";
import { cn } from "@/lib/utils";

const LectureCustomization = () => {
  const navigate = useNavigate();
  const [voice, setVoice] = useState<"male" | "female">("male");
  const [speed, setSpeed] = useState([1.0]);
  const [format, setFormat] = useState<"video" | "audio">("video");

  const handleGenerate = () => {
    navigate("/progress");
  };

  return (
    <div className="min-h-screen flex flex-col p-6 lg:pl-72 bg-background">
      <div className="max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate("/upload")} className="p-2 rounded-lg hover:bg-card transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground">Customize Lecture</h1>
      </div>

      {/* Voice Selection */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">AI Voice</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card
            onClick={() => setVoice("male")}
            className={cn(
              "p-4 cursor-pointer transition-all",
              voice === "male" ? "border-primary bg-primary/10" : "hover:border-primary/50"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                voice === "male" ? "gradient-primary" : "bg-card"
              )}>
                <User className={cn("w-5 h-5", voice === "male" ? "text-primary-foreground" : "text-muted-foreground")} />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Male</p>
                <p className="text-xs text-muted-foreground">Deep, Calm</p>
              </div>
            </div>
          </Card>
          <Card
            onClick={() => setVoice("female")}
            className={cn(
              "p-4 cursor-pointer transition-all",
              voice === "female" ? "border-primary bg-primary/10" : "hover:border-primary/50"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                voice === "female" ? "gradient-primary" : "bg-card"
              )}>
                <UserCircle className={cn("w-5 h-5", voice === "female" ? "text-primary-foreground" : "text-muted-foreground")} />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Female</p>
                <p className="text-xs text-muted-foreground">Clear, Fast</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Speed Slider */}
      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold text-foreground">Speed</h3>
          <span className="text-sm text-primary font-semibold">{speed[0].toFixed(1)}x</span>
        </div>
        <Slider
          value={speed}
          onValueChange={setSpeed}
          min={0.5}
          max={2.0}
          step={0.1}
          className="mb-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Slow</span>
          <span>Fast</span>
        </div>
      </div>

      {/* Format Selection */}
      <div className="mb-auto">
        <h3 className="font-semibold text-foreground mb-3">Output Format</h3>
        <div className="space-y-3">
          <Card
            onClick={() => setFormat("video")}
            className={cn(
              "p-4 cursor-pointer flex items-center justify-between transition-all",
              format === "video" ? "border-primary bg-primary/10" : "hover:border-primary/50"
            )}
          >
            <div className="flex items-center gap-3">
              <Video className={cn("w-5 h-5", format === "video" ? "text-primary" : "text-muted-foreground")} />
              <span className="font-medium text-foreground">Video (Avatar)</span>
            </div>
            <div className={cn(
              "w-5 h-5 rounded-full border-2",
              format === "video" ? "border-primary bg-primary" : "border-muted-foreground"
            )}>
              {format === "video" && <div className="w-2 h-2 bg-primary-foreground rounded-full m-auto mt-0.5" />}
            </div>
          </Card>
          <Card
            onClick={() => setFormat("audio")}
            className={cn(
              "p-4 cursor-pointer flex items-center justify-between transition-all",
              format === "audio" ? "border-primary bg-primary/10" : "hover:border-primary/50"
            )}
          >
            <div className="flex items-center gap-3">
              <Music className={cn("w-5 h-5", format === "audio" ? "text-primary" : "text-muted-foreground")} />
              <span className="font-medium text-foreground">Audio Only</span>
            </div>
            <div className={cn(
              "w-5 h-5 rounded-full border-2",
              format === "audio" ? "border-primary bg-primary" : "border-muted-foreground"
            )}>
              {format === "audio" && <div className="w-2 h-2 bg-primary-foreground rounded-full m-auto mt-0.5" />}
            </div>
          </Card>
        </div>
      </div>

      <Button onClick={handleGenerate} size="lg" className="w-full mt-6">
        <Sparkles className="w-4 h-4 mr-2" />
        Generate Lecture
      </Button>
      </div>
    </div>
  );
};

export default LectureCustomization;
