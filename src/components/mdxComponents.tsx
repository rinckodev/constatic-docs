import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import fumadocsMdxComponents from "fumadocs-ui/mdx";
import { MDXComponents } from "mdx/types";
import { Callout } from "./callout";
import { Card } from "./card";
import { Link } from "./Link";
import { Step, Steps } from "./steps";

export const defaultMdxComponents: MDXComponents = {
    ...fumadocsMdxComponents,
    Callout, Card,
    a: props => <Link {...props}/>, Link,
    Step, Steps, ImageZoom, Tab, Tabs,
    Accordion, Accordions,
    Popup,
    PopupContent,
    PopupTrigger,
}