import { createMetadataImage } from "fumadocs-core/server";
import type { Metadata } from "next/types";
import { source } from "./source";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://constatic-docs.vercel.app",
      siteName: "Constatic",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@rinckodev",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL}`);

    
export const metadataImage = createMetadataImage({
    source: source,
    imageRoute: "og",
});