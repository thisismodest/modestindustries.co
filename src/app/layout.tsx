import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { osFont } from '@/app/ui/fonts';
import Navigation from "./ui/navigation/navigation";
import Footer from "./ui/footer/footer";

export const metadata: Metadata = {
  title: "Modest Industries: Digital Creative Studio",
  description: "Modest Industries is a small creative studio specialising in ideas, design and development.",
  keywords: "modest industries, modest, digital studio, creative studio, advertising, marketing, design, web development, html5 banners, development, banners, social media, idea generation, strategy",
  openGraph: {
    images: ['/img/header-pencil.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1MY29QVR2H" />
      <body className={osFont.variable}>
        <Navigation />
        <main id="container">
          {children}
        </main>
        <Footer />
        <script defer src="/js/TweenLite.min.js" />
        <script defer src="/js/CSSPlugin.min.js" />
        <script defer src="/js/EasePack.min.js" />
        <script defer src="/js/main.js" />
      </body>
    </html>
  );
}
