import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Cloud, Camera, HardDrive, Folder } from "lucide-react";

const UploadMaterials = () => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6 lg:pl-72 bg-background">
      <div className="max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate("/dashboard")} className="p-2 rounded-lg hover:bg-card transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground">Upload Materials</h1>
      </div>

      {/* Drop Zone */}
      <div
        className={`h-52 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center mb-6 transition-all ${
          dragActive ? "border-primary bg-primary/10" : "border-border bg-card/50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
        }}
      >
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Cloud className="w-8 h-8 text-primary" />
        </div>
        <p className="font-semibold text-foreground mb-1">Drag & Drop Files</p>
        <p className="text-xs text-muted-foreground">PDF, PPT, DOCX, Images</p>
        <Button variant="outline" size="sm" className="mt-4">
          Browse Files
        </Button>
      </div>

      {/* Import Options */}
      <h3 className="font-semibold text-foreground mb-3">Or import from</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Card className="p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-primary/50 transition-colors">
          <HardDrive className="w-6 h-6 text-primary" />
          <span className="text-sm font-medium text-foreground">Google Drive</span>
        </Card>
        <Card className="p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-primary/50 transition-colors">
          <Folder className="w-6 h-6 text-secondary" />
          <span className="text-sm font-medium text-foreground">Dropbox</span>
        </Card>
      </div>

      {/* Scan Notes */}
      <Card className="p-4 flex items-center gap-4 mb-auto cursor-pointer hover:border-primary/50 transition-colors">
        <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
          <Camera className="w-6 h-6 text-accent-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Scan Notes</h3>
          <p className="text-xs text-muted-foreground">Take a photo of your notes</p>
        </div>
      </Card>

      <Button onClick={() => navigate("/customize")} size="lg" className="w-full md:w-auto md:px-12 mt-6">
        Next Step
      </Button>
      </div>
    </div>
  );
};

export default UploadMaterials;
