import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waveloom",
  description: "A portfolio website for Waveloom.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const runtime = "edge";

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
