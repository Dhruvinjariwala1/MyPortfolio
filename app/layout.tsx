import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhruvin Jariwala | ASP.NET Core & React Developer Portfolio",
  description: "3D Developer Portfolio of Dhruvin Jariwala",
  verification: {
    google: "7pgBNgVePf3jY_sI6fr51AHCrDOJ3j6SndMAwB9GQQM",
  },
  keywords: [
    "Dhruvin Jariwala",
    "ASP.NET Core Developer",
    "Reactjs Developer",
    "Full Stack Developer India",
  ],
  authors: [{ name: "Dhruvin Jariwala" }],
  metadataBase: new URL("https://www.dhruvinjariwala.com"),

  openGraph: {
    title: "Dhruvin Jariwala Developer Portfolio",
    description:
      "Portfolio of Dhruvin Jariwala - ASP.NET Core MVC and React Developer.",
    url: "https://www.dhruvinjariwala.com",
    siteName: "Dhruvin Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.dhruvinjariwala.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Dhruvin Jariwala Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
