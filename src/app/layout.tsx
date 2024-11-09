import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev.Sarim's Code Craft",
  description:
    "Crafting modern web solutions with clean, efficient code. Designed and developed by Muhammad Sarim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
