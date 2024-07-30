import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Project",
  description: "The ultimate cooking guide ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font- antialiased ",inter.className)}
      >
        <main className=" relative flex flex-col min-h-screen">
           <div className="flex-grow flex-1 min-h-[80vh]">{children}</div>
        </main>
      </body>
    </html>
  );
}
