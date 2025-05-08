import type { Metadata } from "next";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { esMX } from '@clerk/localizations'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TomaBien",
  description: "Organiza y entiende tus medicamentos fácilmente. TomaBien te ayuda a registrar tratamientos, recibir recordatorios inteligentes y acceder a información médica clara. Mejora tu salud y tu tranquilidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esMX}>
      <html lang="es">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
