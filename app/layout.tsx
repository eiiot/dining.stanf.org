import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Stanford Dining Hours",
  description: "Which Stanford dining halls are open right now?",
  icons: "https://emojicdn.elk.sh/🍔"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="dining.stanf.org" src="https://analytics.eliothertenstein.com/js/script.js"></script>
      </head>
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
