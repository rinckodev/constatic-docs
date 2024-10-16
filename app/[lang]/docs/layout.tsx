import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import { source } from "@/app/source";

interface Props {
  children: ReactNode;
  params: { lang: string }
}
export default function Layout({ children, params }: Props) {
  return (
    <DocsLayout tree={source.pageTree[params.lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
