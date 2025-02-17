import { metadataImage } from "../../../../lib/metadata";
import { generateOGImage } from "./og";

export const GET = metadataImage.createAPI((page) => {
  const { title, description, icon } = page.data;
  return generateOGImage({
    primaryTextColor: "#8d8d8d", 
    title, description, icon
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
