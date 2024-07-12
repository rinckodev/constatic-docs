import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  params: { lang: string };
  children: ReactNode;
}

export default function RootLayout({ children, params }: LayoutProps) {
  if (params.lang === "favicon.ico"){
    return;
  }
  return <html lang={params.lang} className={inter.className}>
    <body>
      {children}
    </body>
  </html>
}
