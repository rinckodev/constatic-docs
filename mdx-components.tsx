import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Callout } from "fumadocs-ui/components/callout";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Card, Cards, Link, Blockquote } from "@/components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Accordion, Accordions,
    Tabs, Tab,
    ImageZoom,
    Step, Steps,
    Callout,
    Cards,
    Card: props => <Card {...props}/>,
    Link,
    a: props => <Link {...props}/>,
    blockquote: ({ children }) => <Callout>{children}</Callout>,
    Blockquote,
  };
}