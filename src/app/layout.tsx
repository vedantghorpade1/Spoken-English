import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sivi Speak | Spoken English Social Platform",
  description:
    "Practice spoken English through live random audio conversations with real people across India.",
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
