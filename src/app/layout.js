import { Nunito_Sans  } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ['latin'],
  weight: ['300', '600', '800'],
});

export const metadata = {
  title: "Where in the world?",
  description: "Search and filter countries by region, name, or capital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}
