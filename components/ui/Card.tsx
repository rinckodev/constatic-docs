import type { HTMLAttributes, ReactNode } from "react";
import Link, { type LinkProps } from "fumadocs-core/link";
import { cn } from "@/lib/utils";

export function Cards(
  props: HTMLAttributes<HTMLDivElement>,
): React.ReactElement {
  return (
    <div
      {...props}
      className={cn(`grid grid-cols-1 gap-4 sm:grid-cols-2`, props.className)}
    >
      {props.children}
    </div>
  );
}

export type CardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
} & Omit<LinkProps, "title">;

export function Card({
  icon,
  title,
  description,
  ...props
}: CardProps): React.ReactElement {
  return (
    <Link
      {...props}
      className={cn(
        "not-prose block rounded-lg bg-card p-4 text-sm text-card-foreground shadow-md transition-all hover:bg-accent/80 border",
        props.className,
      )}
    >
      <div className="flex items-center gap-2">
        {icon ? (
          <div className="mb-2 w-fit rounded-md border bg-muted p-2 text-muted-foreground [&_svg]:size-4">
            {icon}
          </div>
        ) : null}
        <h3 className="mb-1 font-medium">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
}