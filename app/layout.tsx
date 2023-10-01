import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ToasterProvider from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-providers";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import LoadingPage from "./loading";

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
          <NextTopLoader color="#4DB300" height={6} showSpinner={false} />
          <Suspense fallback={<LoadingPage />}>
            <ConfettiProvider />
            <ToasterProvider />
            {children}
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
