import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youtube",
  description: "A platform for sharing videos",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "32x32" }, // classic favicon
      { url: "/favicon/favicon.svg", type: "image/svg+xml", sizes: "any" }, // scalable SVG
    ],
    shortcut: "/favicon/favicon.ico", // legacy support
    apple: [
      { url: "/favicon/apple-touch-icon.png" }, // iOS Home screen icon
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest", // PWA support
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <TRPCProvider>{children}</TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
