import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, HelpCircle, MessageSquare, Bug, ChevronRight, Hand } from "lucide-react";

const helpItems = [
  { icon: HelpCircle, label: "FAQ", description: "Find answers to common questions" },
  { icon: MessageSquare, label: "Contact Support", description: "Get help from our team" },
  { icon: Bug, label: "Report a Bug", description: "Help us improve the app" },
];

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col p-6 lg:pl-72 bg-background">
      <div className="max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate("/settings")} className="p-2 rounded-lg hover:bg-card transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground">Help & Support</h1>
      </div>

      {/* Welcome Card */}
      <Card className="p-6 text-center mb-6 gradient-card">
        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
          <Hand className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="font-bold text-foreground text-lg mb-1">How can we help?</h2>
        <p className="text-sm text-muted-foreground">Our team is here for you 24/7</p>
      </Card>

      {/* Help Items */}
      <div className="space-y-3 mb-auto">
        {helpItems.map((item) => (
          <Card 
            key={item.label} 
            className="p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-xs text-muted-foreground">EduGenie v1.0.2</p>
        <div className="flex justify-center gap-4 mt-2">
          <button className="text-xs text-primary hover:underline">Privacy Policy</button>
          <span className="text-muted-foreground">•</span>
          <button className="text-xs text-primary hover:underline">Terms of Service</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Help;
