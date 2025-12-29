import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, Play, Pause, SkipBack, SkipForward, 
  Glasses, MessageCircle, FileText, HelpCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["Transcript", "Notes", "Q&A"];

const transcriptLines = [
  { time: "0:00", text: "Welcome to this lecture on cell biology.", highlighted: false },
  { time: "0:15", text: "Today we'll explore the fundamental building blocks of life.", highlighted: false },
  { time: "0:32", text: "The mitochondria is known as the powerhouse of the cell.", highlighted: true },
  { time: "0:48", text: "It produces ATP through cellular respiration.", highlighted: false },
  { time: "1:05", text: "Let's examine the structure in more detail.", highlighted: false },
];

const LecturePlayer = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("Transcript");
  const [currentTime] = useState("04:20");
  const [duration] = useState("15:00");

  return (
    <div className="min-h-screen flex flex-col lg:pl-64 bg-background">
      {/* Video Area */}
      <div className="relative aspect-video lg:aspect-[21/9] bg-card flex items-center justify-center">
        {/* Back Button */}
        <button 
          onClick={() => navigate("/dashboard")}
          className="absolute top-4 left-4 p-2 rounded-lg glass"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* VR Mode Button */}
        <button className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass flex items-center gap-2">
          <Glasses className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-foreground">VR MODE</span>
        </button>

        {/* Play Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center glow-button"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-primary-foreground" />
          ) : (
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          )}
        </button>

        {/* Avatar */}
        <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full gradient-accent border-2 border-background" />
      </div>

      {/* Controls */}
      <div className="px-4 py-3 bg-card border-b border-border flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{currentTime}</span>
        <div className="flex items-center gap-6">
          <button className="text-foreground hover:text-primary transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
            )}
          </button>
          <button className="text-foreground hover:text-primary transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        <span className="text-xs font-medium text-muted-foreground">{duration}</span>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-muted">
        <div className="h-full w-[28%] gradient-primary" />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors border-b-2",
              activeTab === tab 
                ? "text-primary border-primary" 
                : "text-muted-foreground border-transparent hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto relative">
        {activeTab === "Transcript" && (
          <div className="space-y-3">
            {transcriptLines.map((line, index) => (
              <div
                key={index}
                className={cn(
                  "p-3 rounded-lg transition-colors",
                  line.highlighted ? "bg-primary/20 border border-primary/30" : "hover:bg-card"
                )}
              >
                <span className="text-xs text-muted-foreground mr-3">{line.time}</span>
                <span className="text-sm text-foreground">{line.text}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === "Notes" && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">AI-generated notes will appear here</p>
          </div>
        )}
        {activeTab === "Q&A" && (
          <div className="text-center py-12">
            <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Questions and answers</p>
          </div>
        )}

        {/* Floating Chatbot Button */}
        <button
          onClick={() => navigate("/chatbot")}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-secondary flex items-center justify-center shadow-lg glow-button"
        >
          <MessageCircle className="w-6 h-6 text-secondary-foreground" />
        </button>
      </div>
    </div>
  );
};

export default LecturePlayer;
