import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  { id: 1, type: "bot", text: "Hello! I can help you summarize this lecture or explain difficult terms. What would you like to know?" },
];

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      text: input,
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        text: getBotResponse(input),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("osmosis")) {
      return "Osmosis is like water moving through a filter from a crowded place to a less crowded place. Imagine a tea bag in water - the water moves into the bag to balance things out. It's the movement of water molecules through a semipermeable membrane!";
    }
    if (lowerQuery.includes("mitochondria")) {
      return "The mitochondria is often called the 'powerhouse of the cell' because it produces ATP - the energy currency that powers all cellular activities. Think of it as a tiny power plant inside each cell!";
    }
    if (lowerQuery.includes("photosynthesis")) {
      return "Photosynthesis is how plants make their food! They use sunlight, water, and carbon dioxide to create glucose (sugar) and oxygen. It's like they're cooking with light!";
    }
    return "That's a great question! Based on the lecture content, I'd be happy to explain this concept in simpler terms. Could you tell me which specific topic you'd like me to elaborate on?";
  };

  return (
    <div className="min-h-screen flex flex-col lg:pl-64 bg-background">
      <div className="flex flex-col h-screen lg:h-auto lg:min-h-screen max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="gradient-secondary px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/player")} className="p-2 rounded-lg hover:bg-secondary-foreground/10 transition-colors">
          <ArrowLeft className="w-5 h-5 text-secondary-foreground" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary-foreground/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-secondary-foreground">AI Assistant</h1>
            <p className="text-xs text-secondary-foreground/70">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Context Banner */}
      <div className="px-4 py-2 bg-secondary/20 text-center border-b border-border">
        <span className="text-xs text-secondary">Context: Biology - Cell Structure Lecture</span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.type === "user" && "flex-row-reverse"
            )}
          >
            <div className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
              message.type === "bot" ? "gradient-secondary" : "bg-card"
            )}>
              {message.type === "bot" ? (
                <Bot className="w-4 h-4 text-secondary-foreground" />
              ) : (
                <User className="w-4 h-4 text-foreground" />
              )}
            </div>
            <div className={cn(
              "max-w-[75%] p-3 rounded-2xl text-sm",
              message.type === "bot" 
                ? "bg-card border border-border rounded-tl-sm" 
                : "gradient-primary text-primary-foreground rounded-tr-sm"
            )}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-card border-t border-border">
        <div className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 rounded-full bg-muted border-0"
          />
          <button
            onClick={handleSend}
            className="w-11 h-11 rounded-full gradient-secondary flex items-center justify-center glow-button"
          >
            <Send className="w-5 h-5 text-secondary-foreground" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chatbot;
