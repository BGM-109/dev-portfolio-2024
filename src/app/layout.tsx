import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";

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
  title: "Myoung Seon Site",
  description:
    "Frontend Developer portfolio showcasing projects, skills, and passion for web development and athletics",
};

const routes = ["About", "Work", "Articles", "Uses/Stack"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-secondary dark:bg-black w-full h-full">
            <div className="max-w-[1000px] mx-auto h-full gap-y-10 flex flex-col bg-white dark:bg-black">
              <header className="flex justify-between items-center pt-10 px-5">
                <div />
                <nav className="flex gap-x-4 border rounded-full px-6 py-3 shadow-lg">
                  {routes.map((route) => (
                    <Link
                      key={route}
                      href={route.toLowerCase()}
                      className="hover:text-primary transition-colors duration-300 ease-in-out"
                    >
                      {route}
                    </Link>
                  ))}
                </nav>
                <div>
                  <ModeToggle />
                </div>
              </header>

              <main className="flex-1 px-5">{children}</main>

              <footer className="flex justify-between items-center py-10 px-5 border-t ">
                <div className="flex gap-x-4">
                  {routes.map((route, index) => (
                    <Link href={route} key={index}>
                      {route}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    © 2024 Myoung Seon
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
