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
      "Dr. Mudasar Latif Memon - AI Researcher | %s | UMS Pakistan",
    default:
      "Dr. Mudasar Latif Memon - Professor of Applied AI, University of Modern Sciences",
  },
  description:
    "Professional portfolio of Dr. Mudasar Latif Memon, Professor of Applied Artificial Intelligence at University of Modern Sciences, Pakistan. PhD from Sungkyunkwan University (SKKU), South Korea. Specializing in Applied AI, 5G Wireless Networks, Healthcare AI, and Emerging Technologies. Former CEO of Lyceumerce and leader of SAINCUBE AI Initiative. 14+ international publications in SCI, ESCI, and Scopus indexed journals. Research collaborations with MediaTek Inc. USA and Samsung, South Korea.",
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
