import { Antonio } from "next/font/google"; 
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio", 
  subsets: ["latin"],
});



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${antonio.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
