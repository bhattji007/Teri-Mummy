import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teri Mummy | Hindi Roast HQ",
  description: "Desi roast walla joke playground with API access."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
