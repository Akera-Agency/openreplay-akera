import Avatar from "./avatar";
import { cn } from "@/lib/utils";

type User = {
  imageUrl?: string;
  name: string;
  email: string;
};

type AvatarGroupProps = {
  users: User[];
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

const AvatarGroup = ({ users, className, size = "md" }: AvatarGroupProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {users.map((user, index) => (
        <div key={index} className="flex items-center gap-2 rounded-lg p-2">
          <Avatar
            user={{
              imageUrl: user.imageUrl,
              name: user.name,
            }}
            size={size}
          />
          <div>
            <p className={cn("font-medium text-primary", sizeClasses[size])}>
              {user.name}
            </p>
            <p className={cn("text-secondary-text", sizeClasses[size])}>
              {user.email}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
