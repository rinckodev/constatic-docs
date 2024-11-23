import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import mdxComponnets from "fumadocs-ui/mdx";
import { MDXComponents } from "mdx/types";
import { Blockquote } from "./docs/Blockquote";
import { Card, Cards } from "./docs/Card";
import { Link } from "./docs/Link";


export const defaultMdxComponents: MDXComponents = {
    ...mdxComponnets,
    Accordion, Accordions, Tab, Tabs, ImageZoom,
    Steps, Step, Cards, Card, Blockquote, 
    blockquote: ({ children }) => <Callout>{children}</Callout>,
    a: props => <Link {...props} />, Link,
};