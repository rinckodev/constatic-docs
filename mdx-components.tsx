import { Link, Card, Cards, Blockquote, CodeBlock } from "@components";
import { Callout } from "fumadocs-ui/components/callout";
import { MDXComponents } from "mdx/types";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        Accordion, Accordions, Tab, Tabs, ImageZoom,
        Steps, Step, Cards, Card, Blockquote, 
        blockquote: ({ children }) => <Callout>{children}</Callout>,
        pre: ({ ref: _ref, ...props }) => CodeBlock(props),
        a: props => <Link {...props} />, Link,
        Popup, PopupContent, PopupTrigger,
    }
}