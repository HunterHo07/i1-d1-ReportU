import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ReportU - Cross-Border Offense Reporting Platform",
  description: "Revolutionary platform for Malaysia and Singapore citizens to submit offense reports efficiently. Automatic department routing, real-time tracking, and evidence upload support.",
  keywords: "offense reporting, Malaysia, Singapore, government, civic duty, public safety, cross-border",
  authors: [{ name: "ReportU Team" }],
  creator: "ReportU",
  publisher: "ReportU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reportu.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ReportU - Cross-Border Offense Reporting Platform",
    description: "Revolutionary platform for Malaysia and Singapore citizens to submit offense reports efficiently.",
    url: "https://reportu.vercel.app",
    siteName: "ReportU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ReportU - Cross-Border Offense Reporting Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReportU - Cross-Border Offense Reporting Platform",
    description: "Revolutionary platform for Malaysia and Singapore citizens to submit offense reports efficiently.",
    images: ["/twitter-image.jpg"],
    creator: "@reportu_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    shortcut: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    apple: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gray-900 text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
