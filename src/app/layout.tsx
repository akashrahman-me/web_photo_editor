import "../styles/globals.css";
import type {Metadata} from "next";
import {Roboto} from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Web Photo Editor",
  description:
    "A Web based photo editor. Whare you can edit your photos in the browser.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
