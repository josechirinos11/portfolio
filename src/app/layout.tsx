import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Chirinos — Desarrollador Full Stack",
  description:
    "Portafolio de Jose Chirinos, desarrollador Full Stack con +5 años de experiencia en MERN, React Native, Delphi y PL/SQL (Oracle).",
  keywords: [
    "Jose Chirinos",
    "desarrollador full stack",
    "MERN",
    "React",
    "Node.js",
    "Delphi",
    "PL/SQL",
    "Oracle",
    "portafolio",
  ],
  authors: [{ name: "Jose Chirinos" }],
  openGraph: {
    title: "Jose Chirinos — Desarrollador Full Stack",
    description:
      "Portafolio de Jose Chirinos, desarrollador Full Stack con +5 años de experiencia en MERN, React Native, Delphi y PL/SQL (Oracle).",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
