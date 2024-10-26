import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@app/layout.config";
import { source } from "@/lib/source";

interface Props {
  params: Promise<{
    lang: string;
  }>
  children: ReactNode
}
export default async function Layout({ children, params }: Props) {
  const { lang } = await params;
  return (
    <DocsLayout tree={source.pageTree[lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
