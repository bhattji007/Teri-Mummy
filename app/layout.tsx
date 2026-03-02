import type { Metadata } from "next";
import { Anton, Space_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TeriMummy",
  description: "Epic desi roast central where Teri Mummy memes hit like spicy chaat – all fun, no burns! 🌶️😆",
  icons: {
    icon: "/tm_logo.svg",      // default favicon in public/
    apple: "/tm_logo.svg",
    other: [
      { rel: "shortcut icon", url: "/tm_logo.svg" }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-Latn">
      <body className={`${anton.variable} ${spaceMono.variable} ${inter.variable}`}>
        {children}
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `,
          }}
        />
      </body>
    </html>
  );
}
