// import { generateOGImage } from "fumadocs-ui/og";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { generateOGImage } from "./og";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[], lang: string }> },
) {
  const { slug, lang } = await params;
  const page = source.getPage(slug.slice(0, -1), lang);
  if (!page) notFound();

  const { title, description, icon } = page.data;

  return generateOGImage({
    title, description, icon,
    site: "Constatic",
  });
}

export function generateStaticParams() {
  return source.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, "image.png"],
  }));
}