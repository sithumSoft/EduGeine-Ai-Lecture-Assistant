import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
  showNav?: boolean;
}

export const MobileLayout = ({ children, className, showNav = false }: MobileLayoutProps) => {
  return (
    <div className={cn(
      "min-h-screen w-full flex flex-col bg-background",
      className
    )}>
      {children}
    </div>
  );
};
