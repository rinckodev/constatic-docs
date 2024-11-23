import { cn } from "@/lib/utils";
import settings from "@/settings.json";
import { CSSProperties, forwardRef, JSX, type ReactNode } from "react";
import { IconType } from "react-icons";

interface BlockquoteProps {
    title?: string;
    coloredTitle?: boolean;
    children: ReactNode;
    className?: string;
    color?: keyof typeof settings.colors;
    icon?: JSX.Element | IconType;
}
interface BlockquoteStyle extends CSSProperties {
    "--blockcolor": string;
}

export const Blockquote = forwardRef<HTMLDivElement, BlockquoteProps>((props, ref) => {
    const { title, className, children, color="primary", coloredTitle=false, icon: Icon, ...other } = props;

    return <div ref={ref}
        className={cn(`flex flex-row p-px rounded-lg my-6 text-sm
        bg-gradient-to-r from-[var(--blockcolor)] to-border from-[1%] to-[20%]
        `, className)}
        style={{ "--blockcolor": settings.colors[color] } as BlockquoteStyle}
        {...other}
    >
        <div className="w-full rounded-lg bg-card p-3 min-w-0 flex gap-2">
            {Icon ? <span className="text-[var(--blockcolor)] text-lg" style={{ "--blockcolor": settings.colors[color] } as BlockquoteStyle}>
                {typeof Icon === "function" ? <Icon/> : Icon}
            </span> : null}
            <div className="flex flex-col gap-2">
                {title ? coloredTitle 
                    ? <p className="not-prose align-baseline font-medium text-[var(--blockcolor)]" style={{ "--blockcolor": color } as BlockquoteStyle}>{title}</p>
                    : <p className="not-prose align-baseline font-medium">{title}</p> : null
                }
                <div className="text-muted-foreground prose-no-margin">
                    {children}
                </div>
            </div>
        </div>
    </div>
})

Blockquote.displayName = "Blockquote";