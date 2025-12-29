import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import SplashScreen from "./pages/SplashScreen";
import LanguageSelection from "./pages/LanguageSelection";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadMaterials from "./pages/UploadMaterials";
import LectureCustomization from "./pages/LectureCustomization";
import GenerationProgress from "./pages/GenerationProgress";
import LecturePlayer from "./pages/LecturePlayer";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import Flashcards from "./pages/Flashcards";
import Chatbot from "./pages/Chatbot";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import ARScanner from "./pages/ARScanner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/language" element={<LanguageSelection />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadMaterials />} />
            <Route path="/customize" element={<LectureCustomization />} />
            <Route path="/progress" element={<GenerationProgress />} />
            <Route path="/player" element={<LecturePlayer />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<QuizResults />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/scanner" element={<ARScanner />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
