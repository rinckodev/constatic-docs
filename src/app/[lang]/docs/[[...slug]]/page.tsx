import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { Metadata } from "next";
import icons from "@/lib/icons";
import { MdStickyNote2 } from "react-icons/md";

export default async function Page({ params }: {
  params: Promise<{
      lang: string,
      slug?: string[]
  }>
}) {
  const { lang, slug } = await params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const Icon = page.data.icon 
    ? icons[page.data.icon]
    : null

  const Title = <span className="flex gap-4 items-center">
    {Icon && <Icon className="h-8 w-8"/>} {page.data.title}
  </span>
  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{Title}</DocsTitle>
      <DocsDescription>
        <span className="flex gap-2 items-center">
            {<MdStickyNote2/>} {page.data.description}
        </span>
      </DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: {
  params: Promise<{
      lang: string,
      slug?: string[]
  }>
}) {
  const { slug=[], lang } = await params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();
  
  const images = {
    alt: "Banner",
    url: `/${lang}/og/${slug.join("/")}/image.png`,
    width: 1430,
    height: 660,
  };

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images,
    },
    twitter: {
      card: "summary_large_image",
      images,
    },
  } satisfies Metadata;
}
