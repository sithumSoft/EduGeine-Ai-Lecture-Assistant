import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Moon, Globe, Mic, Bell, HelpCircle, ChevronRight } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen flex flex-col p-6 lg:pl-72 bg-background">
      <div className="max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate("/profile")} className="p-2 rounded-lg hover:bg-card transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground">Settings</h1>
      </div>

      <div className="space-y-8">
        {/* Appearance */}
        <div>
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
            Appearance
          </h3>
          <Card className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <Moon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="font-medium text-foreground">Dark Mode</span>
            </div>
            <Switch 
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className="data-[state=checked]:bg-primary"
            />
          </Card>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
            Preferences
          </h3>
          <div className="space-y-3">
            <Card className="p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium text-foreground">App Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">English</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Card>
            
            <Card className="p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Mic className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium text-foreground">Voice Type</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Male 1</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Card>
          </div>
        </div>

        {/* System */}
        <div>
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
            System
          </h3>
          <div className="space-y-3">
            <Card className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium text-foreground">Notifications</span>
              </div>
              <Switch 
                checked={notifications}
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-primary"
              />
            </Card>
            
            <Link to="/help">
              <Card className="p-4 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="font-medium text-foreground">Help & Support</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </Card>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Settings;
