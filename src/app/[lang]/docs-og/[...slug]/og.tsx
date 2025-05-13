import icons from "@/lib/icons";
import type { ImageResponseOptions } from "next/dist/compiled/@vercel/og/types";
import { ImageResponse } from "next/og";
import { createElement, type ReactElement, type ReactNode } from "react";

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  primaryTextColor?: string;
  icon?: string;
  site?: string;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const { title, description, primaryTextColor, icon, site, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      description,
      primaryTextColor,
      icon,
      site,
    }),
    {
      width: 1430,
      height: 660,
      ...rest,
    },
  );
}


export function generate({
  primaryTextColor = "#d9d9d9",
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      tw="relative flex flex-col w-full h-full text-white bg-[#17181C] overflow-hidden border-[#26272C]"
    >
      <div
        style={{
          position: "absolute",
          zIndex: 0,
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "110px 110px",
          width: "100%",
          height: "100%",
          opacity: 0.1,
          maskImage: "linear-gradient(to bottom right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom right, black, transparent)",
        }}
      />
      <div tw="relative z-10 flex flex-col w-full h-full px-32 py-24">
        <div tw="flex flex-col p-0">
          <div tw="flex flex-row items-center">
            {props.icon && (
              <div tw="flex mr-8">
                {createElement(icons[props.icon], { size: 80 })}
              </div>
            )}
            <p tw="text-[76px] font-semibold">{props.title}</p>
          </div>
          {props.description && (
            <p tw="text-[48px] text-[#aaaaaa]">
              {props.description}
            </p>
          )}
        </div>
        <div
          tw="flex flex-row items-center gap-8 mt-auto"
          style={{
            color: primaryTextColor,
          }}
        >
          <p tw="text-[46px] font-semibold">Constatic Docs</p>
        </div>
      </div>
    </div>
  );
}