import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-center">
      <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mb-8 animate-pulse-glow">
        <span className="text-4xl font-bold text-primary-foreground">404</span>
      </div>
      
      <h1 className="text-2xl font-bold text-foreground mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-xs">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex gap-3">
        <Button variant="outline" onClick={() => window.history.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
        <Link to="/dashboard">
          <Button>
            <Home className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
