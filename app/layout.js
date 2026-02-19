// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import { Providers } from "../store/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ReUseSL",
  description: "Second-hand marketplace platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          <div className="min-vh-100">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
