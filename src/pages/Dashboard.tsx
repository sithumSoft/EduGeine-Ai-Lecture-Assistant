import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/layout/BottomNav";
import { Upload, Camera, Sparkles, BookOpen, Clock, ChevronRight } from "lucide-react";

const recentLectures = [
  { id: 1, title: "Biology 101", subtitle: "Cell Structure", progress: 75, color: "from-primary to-secondary" },
  { id: 2, title: "Physics", subtitle: "Quantum Mechanics", progress: 30, color: "from-accent to-primary" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-24 lg:pb-8 lg:pl-64 bg-background">
      {/* Header */}
      <div className="p-6 pb-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Good Morning,</p>
            <h1 className="text-xl font-bold text-foreground">Alex Doe</h1>
          </div>
          <Link to="/profile">
            <div className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
              AD
            </div>
          </Link>
        </div>

        {/* Quick Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Quick Action Card */}
          <Card className="gradient-primary p-5 relative overflow-hidden border-0">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
                <span className="font-bold text-primary-foreground">New Lecture?</span>
              </div>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Upload slides or scan notes
              </p>
              <Link to="/upload">
                <Button variant="secondary" size="sm" className="bg-card text-foreground hover:bg-card/90">
                  <Upload className="w-4 h-4 mr-1" />
                  Upload +
                </Button>
              </Link>
            </div>
            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-primary-foreground/10" />
            <div className="absolute right-8 bottom-8 w-16 h-16 rounded-full bg-primary-foreground/5" />
          </Card>

          {/* AR Scanner */}
          <Link to="/scanner" className="block">
            <Card className="p-4 h-full flex items-center gap-4 border-dashed border-2 bg-transparent hover:bg-card/50 transition-colors">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
              <Camera className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground">AR Scanner</h3>
              <p className="text-xs text-muted-foreground">Scan whiteboard & get AI notes</p>
            </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </Card>
          </Link>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Link to="/quiz">
            <Card className="p-4 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5 text-success" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">Take Quiz</h3>
              <p className="text-xs text-muted-foreground">Test your knowledge</p>
            </Card>
          </Link>
          <Link to="/flashcards">
            <Card className="p-4 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">Flashcards</h3>
              <p className="text-xs text-muted-foreground">Quick revision</p>
            </Card>
          </Link>
        </div>

        {/* Recent Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground">Recent Lectures</h2>
          <button className="text-xs text-primary font-semibold">See All</button>
        </div>
      </div>

      {/* Lectures Grid - Horizontal scroll on mobile, grid on desktop */}
      <div className="px-6 max-w-6xl mx-auto">
      <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-visible scrollbar-hide pb-4">
        {recentLectures.map((lecture) => (
          <Link key={lecture.id} to="/player">
            <Card className="w-40 shrink-0 overflow-hidden hover:border-primary/50 transition-colors">
              <div className={`h-24 bg-gradient-to-br ${lecture.color} flex items-center justify-center`}>
                <BookOpen className="w-8 h-8 text-primary-foreground/80" />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-foreground truncate">{lecture.title}</h3>
                <p className="text-xs text-muted-foreground truncate">{lecture.subtitle}</p>
                <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-primary rounded-full" 
                    style={{ width: `${lecture.progress}%` }} 
                  />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
