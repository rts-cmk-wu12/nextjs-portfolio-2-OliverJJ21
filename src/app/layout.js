import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Jonas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
