import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mind's AI",
  description:
    "Experience the power of Mind's AI, a cutting-edge AI SASS platform that enables you to effortlessly generate stunning images, captivating videos, and engaging conversations. Boost your creativity and productivity with our intuitive interface and unleash the limitless possibilities of artificial intelligence. Discover a new world of visual storytelling and communication with Mind's AI today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
