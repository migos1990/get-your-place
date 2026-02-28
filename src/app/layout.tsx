import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GetYourPlace - Furnished All-Inclusive Apartments",
  description: "Find furnished, all-inclusive apartments for students and young professionals in Montreal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
