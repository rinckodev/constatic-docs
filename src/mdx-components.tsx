import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as twoslashComponents from "fumadocs-twoslash/ui";
import * as calloutComponents from "@/components/callout";
import * as cardComponents from "@/components/card";

import * as AccordionComponents from "fumadocs-ui/components/accordion";
import * as bannerComponents from "fumadocs-ui/components/banner";
import * as codeblockComponents from "fumadocs-ui/components/codeblock";
import * as filesComponents from "fumadocs-ui/components/files";
import * as githubComponents from "fumadocs-ui/components/github-info";
import * as headingComponents from "fumadocs-ui/components/heading";
import * as imageComponents from "fumadocs-ui/components/image-zoom";
import * as inlineComponents from "fumadocs-ui/components/inline-toc";
import * as stepsComponents from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Link } from "./components/Link";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ...twoslashComponents,
    ...AccordionComponents,
    ...bannerComponents,
    ...calloutComponents,
    ...cardComponents,
    ...codeblockComponents,
    ...filesComponents,
    ...githubComponents,
    ...headingComponents,
    ...imageComponents,
    ...inlineComponents,
    ...stepsComponents,
    Tab, Tabs,
    // pre: ({ ref: _ref, ...props }) => (
    //   <codeblockComponents.CodeBlock {...props}>
    //     <codeblockComponents.Pre>{props.children}</codeblockComponents.Pre>
    //   </codeblockComponents.CodeBlock>
    // ),
    a: props => <Link {...props}/>, Link,
  };
}
