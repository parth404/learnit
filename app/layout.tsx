import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ToasterProvider from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-providers";
import NextProgressProvider from "@/components/providers/nextProgress-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learnit | online learning and teaching",
  description:
    "Learnit is an online learning and teaching marketplace created with  built with Next 13, React, Stripe, Mux, Prisma, Tailwind, MySQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToasterProvider />
          <NextProgressProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
