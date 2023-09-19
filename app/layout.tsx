import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rewatch",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="h-full scroll-smooth">
      <body className={inter.className + " h-full"}>
        <header className="flex items-center justify-center">
          <div>Header</div>
        </header>
        {children}
        <footer className="flex items-center justify-center">
          <div>Footer</div>
        </footer>
      </body>
    </html>
  );
}
