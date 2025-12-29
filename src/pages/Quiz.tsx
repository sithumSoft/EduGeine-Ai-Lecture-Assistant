import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: 1,
    question: "What is the powerhouse of the cell?",
    options: [
      { id: "a", text: "Nucleus" },
      { id: "b", text: "Mitochondria" },
      { id: "c", text: "Ribosome" },
      { id: "d", text: "Cytoplasm" },
    ],
    correct: "b",
  },
  {
    id: 2,
    question: "What process do plants use to convert sunlight into energy?",
    options: [
      { id: "a", text: "Respiration" },
      { id: "b", text: "Fermentation" },
      { id: "c", text: "Photosynthesis" },
      { id: "d", text: "Digestion" },
    ],
    correct: "c",
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft] = useState(45);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleNext = () => {
    if (selected) {
      setAnswers([...answers, selected]);
      if (isLastQuestion) {
        navigate("/results", { state: { answers: [...answers, selected], questions } });
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelected(null);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm font-bold text-muted-foreground">
          Question {currentQuestion + 1}/{questions.length}
        </span>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border">
          <Clock className="w-4 h-4 text-accent" />
          <span className="text-sm font-bold text-foreground">0:{timeLeft.toString().padStart(2, '0')}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-muted rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full gradient-primary rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h2 className="text-xl font-bold text-foreground mb-8 leading-relaxed">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3 mb-auto">
        {question.options.map((option) => (
          <Card
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={cn(
              "p-4 cursor-pointer flex items-center justify-between transition-all",
              selected === option.id 
                ? "border-primary bg-primary/10" 
                : "hover:border-primary/50"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm",
                selected === option.id 
                  ? "gradient-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                {option.id.toUpperCase()}
              </div>
              <span className="font-medium text-foreground">{option.text}</span>
            </div>
            {selected === option.id && (
              <CheckCircle2 className="w-5 h-5 text-primary" />
            )}
          </Card>
        ))}
      </div>

      <Button 
        onClick={handleNext} 
        size="lg" 
        className="w-full md:w-auto md:px-16 mt-6"
        disabled={!selected}
      >
        {isLastQuestion ? "Finish Quiz" : "Next Question"}
      </Button>
      </div>
    </div>
  );
};

export default Quiz;
