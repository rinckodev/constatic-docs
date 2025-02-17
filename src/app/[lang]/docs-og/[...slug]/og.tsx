import icons from "@/lib/icons";
import type { ImageResponseOptions } from "next/dist/compiled/@vercel/og/types";
import { ImageResponse } from "next/og";
import { createElement, type ReactElement, type ReactNode } from "react";

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  primaryTextColor?: string;
  icon?: string;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const { title, description, primaryTextColor, icon, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      description,
      primaryTextColor,
      icon,
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
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        color: "white",
        backgroundColor: "#17181C",
        border: "#26272C"
      }}
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
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "3rem 4rem",
        }}
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: "0"
        }}>
          <div tw="flex flex-row items-center justify-start"
            style={{
              gap: "2rem"
            }}
          >
            {props.icon && 
              <div tw="flex">
                {createElement(icons[props.icon], {
                  size: 60
                })}
              </div>
            }
            <p tw="text-[76px] font-semibold">
              {props.title}
            </p>
          </div>
          <p
            
            style={{
              fontSize: "48px",
              color: "#aaaaaa",
            }}
          >
            {props.description}
          </p>
        </div>
        <div
          tw="flex flex-row items-center gap-8 mt-auto"
          style={{
            color: primaryTextColor,
          }}
        >
          <p tw="text-[46px] font-semibold">
            Constatic Docs
          </p>
        </div>
      </div>
    </div>
  );
}