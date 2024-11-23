import { baseOptions } from "@/app/layout.config";
import GridPattern from "@/components/ui/grid-pattern";
import { source } from "@/lib/source";
import { CommomPageProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export default async function Layout({ children, params }: CommomPageProps & { children: ReactNode }) {
  const { lang } = await params;
  return (
    <DocsLayout tree={source.pageTree[lang]} {...baseOptions}>
      {children}
      <GridPattern
        width={60}
        height={60}
        className={cn(
          "[mask-image:linear-gradient(-160deg,white,transparent,transparent)]",
          "opacity-50"
        )}
      />
    </DocsLayout>
  );
}
