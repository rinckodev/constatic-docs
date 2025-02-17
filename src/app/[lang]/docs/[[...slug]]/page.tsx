import { defaultMdxComponents } from "@/components/mdxComponents";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { source } from "../../../../lib/source";

export default async function Page(props: {
  params: Promise<{ 
    slug?: string[],
    lang?: string 
  }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const path = `content/docs/${page.file.path}`;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full} 
        breadcrumb={{
        enabled: true,
        includePage: true,
        includeSeparator: true,
      }}
      tableOfContent={{
        style: "clerk",
      }}
      editOnGithub={{
        repo: "constatic-docs",
        owner: "rinckodev",
        sha: "main",
        path,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[], lang: string }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const images = {
    alt: "Banner",
    url: `${params.lang}/docs-og/${params.slug?.join("/")}/image.png`,
    width: 1200,
    height: 630
  };

  const metadata: Metadata = {
    title: page.data.title,
    description: page.data.description,
    openGraph: { images },
    twitter: { images, card: "summary_large_image" }
  };

  console.log(metadata);

  return metadata;
}
