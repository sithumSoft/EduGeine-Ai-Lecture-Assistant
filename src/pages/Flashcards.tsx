import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, RotateCcw, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const flashcardsData = [
  { id: 1, term: "Mitochondria", definition: "The organelle that produces ATP through cellular respiration, often called the powerhouse of the cell." },
  { id: 2, term: "Photosynthesis", definition: "The process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen." },
  { id: 3, term: "DNA", definition: "Deoxyribonucleic acid - the molecule that carries genetic instructions for all living organisms." },
  { id: 4, term: "Osmosis", definition: "The movement of water molecules through a semipermeable membrane from low to high solute concentration." },
  { id: 5, term: "Nucleus", definition: "The control center of the cell containing genetic material and directing cell activities." },
];

const Flashcards = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const [unknown, setUnknown] = useState<number[]>([]);

  const card = flashcardsData[currentIndex];
  const remaining = flashcardsData.length - known.length - unknown.length;

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleAnswer = (knew: boolean) => {
    if (knew) {
      setKnown([...known, card.id]);
    } else {
      setUnknown([...unknown, card.id]);
    }
    
    if (currentIndex < flashcardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnown([]);
    setUnknown([]);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 lg:pl-72 bg-background">
      <div className="max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate("/dashboard")} className="p-2 rounded-lg hover:bg-card transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground">Flashcards</h1>
        <button onClick={handleReset} className="p-2 rounded-lg hover:bg-card transition-colors">
          <RotateCcw className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Progress */}
      <div className="flex justify-center gap-6 mb-6">
        <div className="text-center">
          <span className="text-lg font-bold text-success">{known.length}</span>
          <p className="text-xs text-muted-foreground">Known</p>
        </div>
        <div className="text-center">
          <span className="text-lg font-bold text-foreground">{remaining}</span>
          <p className="text-xs text-muted-foreground">Remaining</p>
        </div>
        <div className="text-center">
          <span className="text-lg font-bold text-destructive">{unknown.length}</span>
          <p className="text-xs text-muted-foreground">Review</p>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center mb-6">
        <div
          onClick={handleFlip}
          className="w-full max-w-sm perspective-1000"
        >
          <Card
            className={cn(
              "relative h-80 cursor-pointer transition-all duration-500 transform-style-3d",
              isFlipped && "rotate-y-180"
            )}
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <RotateCcw className="w-5 h-5 text-muted-foreground absolute top-4 right-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">{card.term}</h2>
              <div className="w-16 h-0.5 bg-border mb-4" />
              <p className="text-sm text-muted-foreground">Tap to reveal definition</p>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center gradient-primary rounded-xl"
              style={{ 
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <p className="text-lg text-primary-foreground leading-relaxed">{card.definition}</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => handleAnswer(false)}
          className="flex-1 h-14 rounded-xl bg-destructive/20 text-destructive font-bold flex items-center justify-center gap-2 hover:bg-destructive/30 transition-colors"
        >
          <X className="w-5 h-5" />
          Forgot
        </button>
        <button
          onClick={() => handleAnswer(true)}
          className="flex-1 h-14 rounded-xl bg-success/20 text-success font-bold flex items-center justify-center gap-2 hover:bg-success/30 transition-colors"
        >
          <Check className="w-5 h-5" />
          Got it
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4">
        Card {currentIndex + 1} of {flashcardsData.length}
      </p>
      </div>
    </div>
  );
};

export default Flashcards;
