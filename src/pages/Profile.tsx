import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/layout/BottomNav";
import { User, Target, Shield, Settings, LogOut, ChevronRight, Pencil } from "lucide-react";

const menuItems = [
  { icon: User, label: "Personal Info", path: "/settings" },
  { icon: Target, label: "Learning Goals", path: "/settings" },
  { icon: Shield, label: "Account Security", path: "/settings" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const Profile = () => {
  return (
    <div className="min-h-screen pb-24 lg:pb-8 lg:pl-64 bg-background">
      {/* Header Banner */}
      <div className="h-36 lg:h-48 gradient-primary relative">
        <button className="absolute top-4 right-4 p-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
          <Pencil className="w-4 h-4 text-primary-foreground" />
        </button>
        
        {/* Avatar */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-28 h-28 rounded-full gradient-accent border-4 border-background flex items-center justify-center">
            <span className="text-3xl font-bold text-accent-foreground">AD</span>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="text-center mt-16 mb-8 px-6">
        <h1 className="text-xl font-bold text-foreground">Alex Doe</h1>
        <p className="text-sm text-muted-foreground">Student • University of Colombo</p>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Lectures</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-secondary">85%</p>
            <p className="text-xs text-muted-foreground">Avg. Score</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">24</p>
            <p className="text-xs text-muted-foreground">Quizzes</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-3 max-w-2xl mx-auto lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
        {menuItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <Card className="p-4 flex items-center justify-between hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </Card>
          </Link>
        ))}

        {/* Logout */}
        <Card className="p-4 flex items-center gap-3 cursor-pointer hover:border-destructive/50 transition-colors mt-6">
          <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
            <LogOut className="w-5 h-5 text-destructive" />
          </div>
          <span className="font-medium text-destructive">Log Out</span>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
