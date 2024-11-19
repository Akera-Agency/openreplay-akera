import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
  className?: string;
}

const ProgressBar = ({ percentage, className }: ProgressBarProps) => {
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));

  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-md bg-primary-foreground",
        className,
      )}
    >
      <motion.div
        className="bg-primary-orange h-full rounded-r-md"
        initial={{ width: 0 }}
        animate={{ width: `${clampedPercentage}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ProgressBar;
