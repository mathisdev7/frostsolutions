import "@/styles/globals.css"

import type { ReactNode } from "react"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { FloatingLegalFooter } from "@/components/FloatingLegalFooter"
import { LanguageProvider } from "@/components/language/LanguageContext"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://frostsolutions.pro"),
}

interface LayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            GeistMono.variable,
            GeistSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Analytics />
            <LanguageProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
            </LanguageProvider>
            <FloatingLegalFooter />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
