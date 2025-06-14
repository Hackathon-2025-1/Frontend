import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";

export const metadata: Metadata = {
  title: "devRush",
  description: "AI application for educational",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <ToastProvider>
        {children}
        </ToastProvider>
      </body>
    </html>
  );
}
