import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Energy Dashboard",
  description: "Monitor your energy consumption efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}

