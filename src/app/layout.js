import { Providers } from "./provider";
import Header from "../components/Header/Header";
import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars Wiki",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          <main className="flex min-h-screen flex-col items-center bg-gray-900">
            <section className="flex flex-col items-center min-w-full ">
              {children}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
