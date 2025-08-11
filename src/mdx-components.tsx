import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as twoslashComponents from "fumadocs-twoslash/ui";
import * as calloutComponents from "@/components/callout";
import * as cardComponents from "@/components/card";

import * as AccordionComponents from "fumadocs-ui/components/accordion";
import * as bannerComponents from "fumadocs-ui/components/banner";
import * as filesComponents from "fumadocs-ui/components/files";
import * as githubComponents from "fumadocs-ui/components/github-info";
import * as headingComponents from "fumadocs-ui/components/heading";
import * as imageComponents from "fumadocs-ui/components/image-zoom";
import * as inlineComponents from "fumadocs-ui/components/inline-toc";
import * as stepsComponents from "fumadocs-ui/components/steps";
import * as codeComponents from "fumadocs-ui/components/codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Link } from "./components/Link";
import { DiscordButton } from "./components/discord/button";
import { DiscordActionRow } from "./components/discord/row";
import { DiscordSlashCommand } from "./components/discord/slash";
import { CodeBlock, Pre, } from "./components/codeblock";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...twoslashComponents,
    ...AccordionComponents,
    ...bannerComponents,
    ...calloutComponents,
    ...cardComponents,
    ...codeComponents,
    ...filesComponents,
    ...githubComponents,
    ...headingComponents,
    ...imageComponents,
    ...inlineComponents,
    ...stepsComponents,
    // ...codeComponents,
    Tab, Tabs,
    a: props => <Link {...props}/>, Link,
    DiscordButton,
    DiscordActionRow,
    DiscordSlashCommand,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
  };
}

