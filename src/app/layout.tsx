import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Franchise Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center`}
      >
        <main className="flex items-center max-w-[1200px] w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
