import "./globals.css";

export const metadata = {
  title: "ReportU - Cross-Border Reporting Platform",
  description: "Secure, anonymous reporting platform for Malaysia-Singapore cross-border incidents with AI-powered routing and real-time tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
