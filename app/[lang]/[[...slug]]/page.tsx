import { getPage, getLanguages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
 

export default async function Page({
  params,
}: {
  params: { lang: string, slug?: string[] };
}) {
  const page = getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.exports.default;

  return (
    <DocsPage 
      toc={page.data.exports.toc} 
      full={page.data.full}
    >
      <DocsBody>
        <div className="relative z-[-1] flex place-items-center
        before:absolute before:w-[240px] before:h-[600px] before:rounded-full before:content-['']
        before:translate-x-[600px] before:translate-y-[-10px] before:rotate-[-32deg]
        before:bg-gradient-to-r before:from-[#0141ff] before:to-[#60c5ff] 
        before:blur-[100px] before:opacity-20
        " />
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getLanguages().flatMap(({ pages, language }) => 
    pages.map(page => ({
      lang: language,
      slug: page.slugs
    }))
  );
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
