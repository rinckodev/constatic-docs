import { defaultMdxComponents } from "@/components/defaultMdxComponents";
import { createMetadata, metadataImage } from "@/lib/metadata";
import { source } from "@/lib/source";
import { CommomPageProps } from "@/lib/types";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export default async function Page(props: CommomPageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const { body: MDX, lastModified } = page.data;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      lastUpdate={lastModified}
      editOnGithub={{
        owner: "rinckodev",
        repo: "constatic-docs",
        path: `content/docs/${page.file.path}`,
        sha: "main",
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={defaultMdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(props: CommomPageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const description = page.data.description ?? "Constatic docs";

  return createMetadata(
    metadataImage.withImage(page.slugs, {
      title: page.data.title,
      description,
      openGraph: {
        url: `/docs/${page.slugs.join("/")}`
      }
    })
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}