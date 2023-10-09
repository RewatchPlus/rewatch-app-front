import "@app/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from '@components/Header/Signin/Header';
import Footer from '@components/Footer/Footer';
import BannerMain from "@components/Banner/BannerMain";

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
        <header className="w-full flex items-center justify-center bg-offblack mix-blend-plus-lighter shadow-lg backdrop-blur-sm absolute z-50">
          <Header />
        </header>
        <BannerMain />
        <div className="grow-1 pb-10">
          {children}
        </div>
        <footer className="flex items-center justify-center relative">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
