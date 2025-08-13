import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as twoslashComponents from "fumadocs-twoslash/ui";
import * as calloutComponents from "@/components/callout";
import * as cardComponents from "@/components/card";

import * as AccordionComponents from "fumadocs-ui/components/accordion";
import * as bannerComponents from "fumadocs-ui/components/banner";
import * as githubComponents from "fumadocs-ui/components/github-info";
import * as headingComponents from "fumadocs-ui/components/heading";
import * as imageComponents from "fumadocs-ui/components/image-zoom";
import * as inlineComponents from "fumadocs-ui/components/inline-toc";
import * as stepsComponents from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "./components/tabs";
import { Link } from "./components/Link";
import { DiscordButton } from "./components/discord/button";
import { DiscordActionRow } from "./components/discord/row";
import { DiscordSlashCommand } from "./components/discord/slash";
import { CodeBlock, Pre, CodeBlockTabs, CodeBlockTabsList, CodeBlockTab, CodeBlockTabsTrigger } from "./components/codeblock";
import { File, Files, Folder } from "./components/files";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...twoslashComponents,
    ...AccordionComponents,
    ...bannerComponents,
    ...calloutComponents,
    ...cardComponents,
    ...githubComponents,
    ...headingComponents,
    ...imageComponents,
    ...inlineComponents,
    ...stepsComponents,
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
    File, Files, Folder,
    CodeBlockTabs, CodeBlockTabsList,
    CodeBlockTab, CodeBlockTabsTrigger
  };
}

