import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Stanford Dining Hours",
  description: "Which dining halls are open right now?",
  icons: "https://emojicdn.elk.sh/🍔"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
