import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/layout/BottomNav";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = ["All", "Science", "Math", "History", "Languages"];

const posts = [
  {
    id: 1,
    author: "Sarah Jenkins",
    avatar: "SJ",
    time: "2 hrs ago",
    title: "Advanced Calculus Notes",
    description: "Generated from PDF. Includes voice explanation.",
    likes: 24,
    comments: 5,
    category: "Math",
    gradient: "from-primary to-secondary",
  },
  {
    id: 2,
    author: "Mike Thompson",
    avatar: "MT",
    time: "5 hrs ago",
    title: "History of Art",
    description: "Comprehensive notes on Renaissance art movements.",
    likes: 18,
    comments: 3,
    category: "History",
    gradient: "from-accent to-primary",
  },
  {
    id: 3,
    author: "Emily Chen",
    avatar: "EC",
    time: "1 day ago",
    title: "Organic Chemistry Basics",
    description: "Easy to understand lecture on molecular structures.",
    likes: 42,
    comments: 12,
    category: "Science",
    gradient: "from-secondary to-accent",
  },
];

const Community = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen pb-24 lg:pb-8 lg:pl-64 bg-background">
      {/* Header */}
      <div className="p-6 pb-4 bg-card">
        <h1 className="text-xl font-bold text-foreground mb-4">Community</h1>
        
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all",
                activeCategory === category
                  ? "gradient-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            {/* Author */}
            <div className="p-4 pb-3 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-primary-foreground font-semibold text-sm`}>
                {post.avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{post.author}</p>
                <p className="text-xs text-muted-foreground">{post.time}</p>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-3">
              <h3 className="font-bold text-foreground mb-1">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.description}</p>
            </div>

            {/* Thumbnail */}
            <div className={`h-32 mx-4 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-4`}>
              <span className="text-primary-foreground/50 text-sm font-medium">Preview</span>
            </div>

            {/* Actions */}
            <div className="px-4 pb-4 flex justify-between items-center">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Community;
