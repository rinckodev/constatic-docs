import { cn } from "@/lib/utils";
import { CodeBlock as CB, Pre, CodeBlockProps } from "fumadocs-ui/components/codeblock";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({
    subsets: ["latin"],
});

export function CodeBlock(props: CodeBlockProps){
    const className = cn(props.className, font.className);
    return <CB {...props} className={className}>
        <Pre>{props.children}</Pre>
    </CB>
}