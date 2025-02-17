import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '../../layout.config';
import { source } from '../../../lib/source';
import { GridPattern } from '@/components/decoration/GridPattern';
import { cn } from '@/lib/cn';

export default async function Layout({ children, params }: { 
  params: Promise<{
    lang: string
  }>
  children: ReactNode 
}) {
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
