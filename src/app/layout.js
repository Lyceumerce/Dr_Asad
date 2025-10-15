import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Dr. Asad Ali Shaikh - Professor of IT | %s | TUMS",
    default:
      "Dr. Asad Ali Shaikh - Professor, Department of IT, The University of Modern Sciences",
  },
  description:
    "Professional portfolio of Dr. Asad Ali Shaikh, Professor in the Department of Information Technology at The University of Modern Sciences, Tando Muhammad Khan. Specializing in modern web technologies, software engineering, and computer science education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
