import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "si", name: "Sinhala", flag: "🇱🇰" },
  { code: "ta", name: "Tamil", flag: "🇮🇳" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("en");

  const handleContinue = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg gradient-primary">
          <Globe className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">Step 1 of 2</span>
      </div>

      {/* Title */}
      <div className="mt-6 mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Choose Language</h1>
        <p className="text-muted-foreground text-sm">Select your preferred language to continue.</p>
      </div>

      {/* Language Grid */}
      <div className="grid grid-cols-2 gap-4">
        {languages.map((lang, index) => (
          <button
            key={lang.code}
            onClick={() => setSelected(lang.code)}
            className={cn(
              "aspect-square rounded-2xl flex flex-col items-center justify-center transition-all duration-200 border-2 animate-slide-up opacity-0",
              selected === lang.code
                ? "border-primary bg-primary/10 glow-primary"
                : "border-border bg-card hover:border-primary/50",
              `stagger-${index + 1}`
            )}
            style={{ animationFillMode: "forwards" }}
          >
            <span className="text-4xl mb-2">{lang.flag}</span>
            <span className="text-sm font-semibold text-foreground">{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Continue Button */}
      <Button onClick={handleContinue} size="lg" className="w-full mt-8">
        Continue
      </Button>
      </div>
    </div>
  );
};

export default LanguageSelection;
