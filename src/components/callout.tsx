import { cn } from "@/lib/cn";
import { cva } from "class-variance-authority";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiInfo, FiXCircle } from "react-icons/fi";
import { IoWarning } from "react-icons/io5";
import { MdLightbulbOutline } from "react-icons/md";

type CalloutProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "title" | "type" | "icon"
> & {
  title?: ReactNode;
  /**
   * @defaultValue info
   */
  type?: "info" | "warn" | "danger" | "success" | "secondary" | "primary" | "hint";

  /**
   * Force an icon
   */
  icon?: ReactNode;
};

const calloutVariants = cva(
  `my-6 flex flex-row gap-2 rounded-lg border border-s-4 bg-fd-card p-4 text-sm text-fd-card-foreground shadow-md`,
  {
    variants: {
      type: {
        success: "border-s-4 border-green-500/30 border-s-green-500/50 bg-gradient-to-br from-green-950/20 to-60% to-fd-card",
        danger: `border-s-4 border-red-500/30 border-s-red-500/50 bg-gradient-to-br from-red-950/20 to-60% to-fd-card`,
        warn: "border-s-4 border-amber-500/70 border-s-amber-500/90 bg-gradient-to-br from-amber-950/20 to-60% to-fd-card",
        primary: "border-s-4 border-blue-500/30 border-s-blue-500/50 bg-gradient-to-br from-blue-950/20 to-60% to-fd-card",
        secondary: "border-s-4 border-gray-500/30 border-s-gray-500/50 bg-gradient-to-br from-gray-950/20 to-60% to-fd-card",
        hint: "border-s-4 border-yellow-300/70 border-s-yellow-300 bg-gradient-to-br from-yellow-200/20 to-60% to-fd-card",
        info: "border-s-4 border-blue-500/30 border-s-blue-500/50 bg-gradient-to-br from-blue-950/20 to-60% to-fd-card",
        error: "border-s-4 border-red-500/30 border-s-red-500/50 bg-gradient-to-br from-red-950/20 to-60% to-fd-card",
      },
    },
  },
);

const calloutIcons = {
  success: <FaRegCircleCheck className="text-xl text-green-500"/>,
  danger: <BsExclamationCircle className="text-xl text-red-500"/>,
  warn: <IoWarning className="text-xl text-amber-500"/>,
  primary: <FiInfo className="text-xl text-blue-500"/>,
  secondary: <FaRegCircleCheck className="text-xl text-gray-500"/>,
  hint: <MdLightbulbOutline className="text-xl text-yellow-200"/>,
  info: <FiInfo className="text-xl text-blue-500"/>,
  error: <FiXCircle className="text-xl text-red-500"/>,
} as const;

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, children, title, type = "info", icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(calloutVariants({ type }), className, 
        "transition-all duration-300 ease-in-out")}
        {...props}
      >
        {icon ?? calloutIcons[type]}
        <div className="min-w-0 flex-1">
            {title && <p className="not-prose mb-2 font-medium">{title}</p>}
          <div className="text-fd-muted-foreground prose-no-margin">
            {children}
          </div>
        </div>
      </div>
    );
  },
);

Callout.displayName = "Callout";
