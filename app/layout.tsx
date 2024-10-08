import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alisha Shrestha",
  description: "A portfolio website for Alisha Shrestha.",
  icons: {
    icon: "/favicon.ico",
  },
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
