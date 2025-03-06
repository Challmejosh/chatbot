// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Context from "./components/Context";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Chatgem AI",
  description: "Generate your text with AI to easily get your work done in minutes",
};
// ${geistSans.variable} ${geistMono.variable}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        <Context>
        {children}
        </Context>
      </body>
    </html>
  );
}
