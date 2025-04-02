
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: number;
  className?: string;
}

export const Loader = ({ size = 24, className }: LoaderProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Loader2 size={size} className="animate-spin text-primary" />
    </div>
  );
};
