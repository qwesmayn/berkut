import type { FC } from "react";
import { cn } from "@/shared/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div  
      className={cn("w-full h-full bg-gray-300 animate-pulse rounded-md", className)}
      {...props}
    />
  );
};
