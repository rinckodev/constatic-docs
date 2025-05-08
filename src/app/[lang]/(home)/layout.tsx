import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default async function Layout({ children }: {
  params: Promise<{
      lang: string,
      slug?: string[]
  }>
  children: React.ReactNode
}) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
