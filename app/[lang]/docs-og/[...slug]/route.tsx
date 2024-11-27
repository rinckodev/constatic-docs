import { metadataImage } from "@/lib/metadata";
import { generateOGImage } from "fumadocs-ui/og";

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    primaryTextColor: "rgb(240,240,240)",
    primaryColor: "rgba(28,29,33)",
    title: page.data.title,
    description: page.data.description,
    site: "Constatic Docs",
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
