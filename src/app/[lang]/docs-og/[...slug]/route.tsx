// import { generateOGImage } from "fumadocs-ui/og";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { generateOGImage } from "./og";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const { title, description, icon } = page.data;

  return generateOGImage({
    title, description, icon,
    site: "My App",
  });
}

export function generateStaticParams() {
  return source.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, "image.png"],
  }));
}