import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Base URL from environment variable
//const ngrokUrl = "https://3943-136-50-53-197.ngrok-free.app";

export const metadata: Metadata = {
  title: {
    template: "%s | Rachels Tattoos",
    default: "Rachels Tattoos", // a default is required when creating a template
  },
  description: "Hi my name is Rachel I do tattoos.",
  generator: "Next.js",
  applicationName: "Rachels Tattoos",
  authors: [{ name: "Rachel Molina" }, { name: "Jordan Molina" }],
  keywords: ["tattoo", "body art", "tattoo studio", "tattoo artist"], // Keywords for SEO
  robots: "index, follow", // Allow indexing by search engines
  publisher: "Jordan Molina",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Rachels Tattoos",
    description:
      "Discover custom tattoos, piercings, and body art at Ink Master Tattoo Studio. Book your appointment today.",
    url: baseUrl,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
