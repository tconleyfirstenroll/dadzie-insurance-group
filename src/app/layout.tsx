import type { Metadata } from "next";
import { Work_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dadzie Insurance Group | Health & Life Insurance",
  description:
    "Trusted health and life insurance brokerage guiding you through short-term medical, supplemental, ACA, and life insurance options. Licensed agents ready to help.",
  keywords: "health insurance, life insurance, ACA, short-term medical, supplemental insurance, insurance broker",
  openGraph: {
    title: "Dadzie Insurance Group | Health & Life Insurance",
    description: "Trusted health and life insurance guidance from licensed agents.",
    url: "https://dadzieinsurancegroup.com",
    siteName: "Dadzie Insurance Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
