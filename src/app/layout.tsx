import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DockMenu } from "@/components/dockMenu";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/app/themeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chloé Rnlt | Portfolio",
  description: "Chloe Renault's portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-hero bg-background dark:bg-blend-multiply bg-blend-color bg-center bg-cover bg-no-repeat`}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <DockMenu />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
