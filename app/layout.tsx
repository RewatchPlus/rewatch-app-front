import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from '../src/components/Header/Signin/Header';

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className + " h-full bg-offblack"}>
        <header className="w-full flex items-center justify-center bg-gray bg-blend-multiply backdrop-blur-sm">
          <Header/>
        </header>
        {children}
        <footer className="flex items-center justify-center">
          <div>Footer</div>
        </footer>
      </body>
    </html>
  );
}
