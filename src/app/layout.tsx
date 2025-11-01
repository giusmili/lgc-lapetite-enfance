import type { Metadata } from "next";
import "../index.css";
import "@/styles/globals.css";
import "@/styles/semantic.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "La grande classe — Petite enfance",
  description: "Actualités et dossiers de la petite enfance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <div className="min-h-screen bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
