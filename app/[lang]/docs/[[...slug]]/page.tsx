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
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export function generateMetadata({ params }: { params: { slug?: string[] } }): Metadata {
  const page = getPage(params.slug);
  if (!page) notFound();

  const description = page.data.description ?? "The Awesome Bot Base";

  const image = {
    alt: "Banner",
    url: `https://github.com/rinckodev/constatic-docs/blob/main/public/constatic.svg`,
    width: 500,
    height: 500,
  };

  return {
    title: page.data.title,
    description,
    openGraph: {
      url: `/docs/${page.slugs.join("/")}`,
      images: image,
      title: page.data.title,
      description: page.data.description,
      siteName: "Constatic docs",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@rinckodev",
      images: image,
    },
  };
}

export async function generateStaticParams() {
  return getLanguages().flatMap(({ pages, language }) => 
    pages.map(page => ({
      lang: language,
      slug: page.slugs
    }))
  );
}