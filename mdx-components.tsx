import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Tabs, Tab,
    ImageZoom,
    Step, Steps,
    Card, Cards,
    Callout,
    a({href, children, title }){
      return <><a className="text-[#376DFF]" href={href} title={title}>{children}</a></>
    },
    blockquote: (props) => <Callout>{props.children}</Callout>,
  };
}