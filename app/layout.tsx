import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { TelegramAuthContextProvider } from "@/context/TelegramAuthContext";
import Navbar from "@/components/Navbar";
import "../flow-config";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carpool",
  description: "Carpool is a platform for skill sharing and learning",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthContextProvider>
          <TelegramAuthContextProvider>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer/>
          </TelegramAuthContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
