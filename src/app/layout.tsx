import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { LeftBar } from "@/components/left-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "authTemplate by Sign0ret",
  description: "next auth  v5  template with  middleware and all routes protected  by default",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <LeftBar />
          <Toaster />
          <div className="pl-14">
          {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
