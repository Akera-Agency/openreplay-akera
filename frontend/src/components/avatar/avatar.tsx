import {
  Avatar as ShadAvatar,
  AvatarImage,
  AvatarFallback,
} from "@/shadcn-components/avatar";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

type AvatarProps = {
  user?: {
    imageUrl?: string;
    name?: string;
    email?: string;
    status?: boolean;
  };
  fallbackText?: string;
  isLoading?: boolean;
  className?: string;
} & VariantProps<typeof avatarVariants>;

const avatarVariants = cva("relative overflow-hidden rounded-full", {
  variants: {
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-14 w-14",
      "2xl": "h-16 w-16",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Avatar = ({
  user,
  fallbackText,
  isLoading = false,
  size,
  className,
}: AvatarProps) => {
  const statusClasses = {
    true: "bg-green-500 ring-2 ring-white",
    false: "bg-gray-400 ring-2 ring-white",
  };

  const status =
    user?.status !== undefined ? user.status.toString() : undefined;

  return (
    <div className={cn("relative h-fit w-fit overflow-visible")}>
      <ShadAvatar className={cn(avatarVariants({ size }), className)}>
        {!isLoading && user?.imageUrl ? (
          <AvatarImage
            src={user.imageUrl}
            alt={user.name}
            className="object-cover"
          />
        ) : (
          <AvatarFallback className="text-sm font-medium">
            {isLoading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              fallbackText || user?.name?.slice(0, 2).toUpperCase()
            )}
          </AvatarFallback>
        )}
      </ShadAvatar>

      {user?.status !== undefined && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-3 w-3 rounded-full",
            statusClasses[status as "true" | "false"],
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
