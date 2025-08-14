import { baseOptions } from "@/app/layout.config";
import { GridPattern } from "@/components/constatic/grid";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";

export default async function Layout({ children, params }: {
  params: Promise<{
      lang: string,
      slug?: string[]
  }>
  children: React.ReactNode
}) {
  const { lang } = await params;

  return (
    <DocsLayout 
    {...baseOptions}
      tree={source.pageTree[lang]}
      sidebar={{
        collapsible: false,
        prefetch: false,
      }} 
    >
      {children}
      <GridPattern
        width={60}
        height={56}
        className={cn(
          "[mask-image:linear-gradient(-160deg,white,transparent,transparent)]",
          "opacity-50"
        )}
      />
    </DocsLayout>
  );
}
