import { Inter, JetBrains_Mono } from "next/font/google";
import "../global.css";
import { Provider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
});

const codefont = JetBrains_Mono({
  subsets: ["latin"]
});

codefont;

export default async function Layout({ children, params }: {
  params: Promise<{
    lang: string,
    slug?: string[]
  }>
  children: React.ReactNode
}) {
  const lang = (await params).lang
  return (
    <html lang="en" data-theme="dark" className={`${inter.className} dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider lang={lang}>
          {children}
        </Provider>
      </body>
    </html>
  );
}