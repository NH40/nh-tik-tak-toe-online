import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    absolute: "NH tik-tak-toe",
    template: "%s | NH tik-tak-toe",
  },
  icons: {
    icon: "/logo 2.png",
  },
  description:
    "Онлайн крестики нолики созданные компанией NH TEAM потому-что я могу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
