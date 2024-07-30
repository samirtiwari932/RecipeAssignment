import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Project",
  description: "The ultimate cooking guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative h-full font-antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen">
          <MaxWidthWrapper className="relative">
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <div className=" relative flex-grow flex-1 min-h-[80vh] bg-gradient-custom">
              {children}
            </div>
            <Footer />
          </MaxWidthWrapper>
        </main>
      </body>
    </html>
  );
}
