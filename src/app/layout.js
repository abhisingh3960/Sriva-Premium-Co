import { Antonio } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sriva Premium Co",
  description:
    " A global relocation and moving services provider headquartered in Oakbrook Terrace, Illinois, USA. SIRVA offers a range of services, including relocation, moving, and mortgage solutions, with operations in over 1,400 cities across more than 170 countries. They own well-known van lines such as Allied Van Lines and North American Van Lines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${antonio.variable} antialiased`}>{children}</body>
    </html>
  );
}
