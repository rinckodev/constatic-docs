import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as twoslashComponents from "fumadocs-twoslash/ui";
import * as AccordionComponents from "@/components/accordion";
import * as bannerComponents from "@/components/banner";
import * as calloutComponents from "@/components/callout";
import * as cardComponents from "@/components/card";
import * as codeblockComponents from "@/components/codeblock";
import * as filesComponents from "@/components/files";
import * as githubComponents from "@/components/github-info";
import * as headingComponents from "@/components/heading";
import * as imageComponents from "@/components/image-zoom";
import * as inlineComponents from "@/components/inline-toc";
import * as stepsComponents from "@/components/steps";
import { Tab, Tabs } from "@/components/tabs";
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
    pre: ({ ref: _ref, ...props }) => (
      <codeblockComponents.CodeBlock {...props}>
        <codeblockComponents.Pre>{props.children}</codeblockComponents.Pre>
      </codeblockComponents.CodeBlock>
    ),
    a: props => <Link {...props}/>, Link,
  };
}
