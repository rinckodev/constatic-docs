import { readFileSync } from "node:fs";
import { type ImageResponse } from "next/og";
import { generateOGImage } from "./og";
import { metadataImage } from "@/lib/metadata";

export const GET = metadataImage.createAPI((page): ImageResponse => {

  return generateOGImage({
    primaryTextColor: "rgb(240,240,240)",
    primaryColor: "rgba(65,65,84,0.9)",
    title: page.data.title,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        stroke="url(#test)"
        style={{
          marginLeft: "-4px",
        }}
        strokeWidth="1"
        strokeLinecap="round"
        fill="rgb(0,0,0,0.8)"
        strokeLinejoin="round"
      >
        <linearGradient id="test" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="white" />
          <stop stopColor="rgb(100,100,100)" offset="100%" />
        </linearGradient>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <polyline points="11 3 11 11 14 8 17 11 17 3" />
      </svg>
    ),
    description: page.data.description,
    site: "Constatic"
  });
});

export function generateStaticParams(){
  return metadataImage.generateParams();
}