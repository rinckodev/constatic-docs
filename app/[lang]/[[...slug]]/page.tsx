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
        before:absolute before:rounded-full before:content-['']
        before:rotate-[-32deg]
        before:bg-gradient-to-r before:from-[#0141ff] before:to-[#60c5ff] 
        before:blur-[100px] before:opacity-20

        before:w-[140px] before:h-[400px]
        lg:before:w-[240px] lg:before:h-[600px]

        before:translate-x-1 lg:before:translate-x-[600px] 
        before:translate-y-[-10px] 
        " />
        {/* <div className="relative z-[-1] flex place-items-center 
        
        before:absolute before:h-[600px] before:w-full before:-translate-x-[-400px] before:-translate-y-[-100px] before:rounded-full before:bg-gradient-radial before:from-[#0141ff] before:to-transparent before:blur-2xl before:content-[''] 
        
        after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 
        sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]
        ">
        </div> */}
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
