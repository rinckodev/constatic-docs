import { settings } from '@/app';
import { cn } from '@/lib/utils';
import { AlertTriangle, Info, OctagonAlert } from 'lucide-react';
import { CSSProperties, forwardRef, type HTMLAttributes, type ReactNode, JSX } from 'react';

interface BlockquoteProps {
    title?: string;
    coloredTitle?: boolean;
    children: ReactNode;
    className?: string;
    color?: keyof typeof settings.colors;
    icon?: JSX.Element;
}
interface BlockquoteStyle extends CSSProperties {
    "--blockcolor": string;
}

export const Blockquote = forwardRef<HTMLDivElement, BlockquoteProps>((props, ref) => {
    const { title, className, children, color="primary", coloredTitle=false, icon, ...other } = props;

    return <div ref={ref}
        className={cn(`flex flex-row p-px rounded-lg my-6 text-sm
        bg-gradient-to-r from-[var(--blockcolor)] to-border from-[1%] to-[20%]
        `, className)}
        style={{ "--blockcolor": settings.colors[color] } as BlockquoteStyle}
        {...other}
    >
        <div className="w-full rounded-lg bg-card p-3 min-w-0 flex gap-2">
            {icon ? <span className="text-[var(--blockcolor)] text-lg" style={{ "--blockcolor": settings.colors[color] } as BlockquoteStyle}>
                {icon}
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