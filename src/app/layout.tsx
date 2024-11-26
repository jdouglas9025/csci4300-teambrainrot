import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {SessionProvider} from "next-auth/react";
import { DarkModeProvider } from "./components/DarkModeContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const caveat = localFont({
  src: "./fonts/Caveat.ttf",
  variable: "--font-caveat",
  weight: "100 900",
});
const nunitoSans = localFont({
  src: "./fonts/NunitoSans.ttf",
  variable: "--font-nunito-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SimpliQuiz",
  description: "A simple quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <SessionProvider>
        <html lang="en">
          <body
              className={`${caveat.variable} ${nunitoSans.variable} antialiased`}
          >
            <DarkModeProvider>
          {children}
          </DarkModeProvider>
          </body>
        </html>
      </SessionProvider>
  );
}
