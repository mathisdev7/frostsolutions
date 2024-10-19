"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { Icons } from "./icons"
import { Language, useLanguage } from "./language/LanguageContext"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function SiteHeader() {
  const { t, setLanguage, language: currentLanguage } = useLanguage()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const languages = [
    { value: "en", icon: <Icons.english className="size-5" /> },
    { value: "fr", icon: <Icons.france className="size-5" /> },
    { value: "es", icon: <Icons.spain className="size-5" /> },
  ]

  const orderedLanguages = languages.sort((a, b) => {
    if (a.value === currentLanguage) return -1
    if (b.value === currentLanguage) return 1
    return 0
  })

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <Button
            className="sm:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="size-6 text-white transition-transform transform rotate-180" />
            ) : (
              <Icons.menu className="size-6 text-white" />
            )}
          </Button>

          <nav
            className={`absolute top-16 w-full right-8 p-4 bg-background transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block" : "hidden"
            } sm:w-full sm:p-0 sm:border-none sm:bg-transparent`}
          >
            <div className="flex flex-row items-center justify-evenly">
              <ul className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <li>
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={buttonVariants({
                        size: "icon",
                        variant: "ghost",
                      })}
                    >
                      <Icons.gitHub className="h-5 w-5" />
                      <span className="sr-only">Github</span>
                    </div>
                  </Link>
                </li>

                <li>
                  <ThemeToggle />
                </li>
              </ul>
              <Select onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger className="w-auto gap-2">
                  <SelectValue
                    placeholder={
                      orderedLanguages.find(
                        (lang) => lang.value === currentLanguage
                      )?.icon
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {orderedLanguages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.icon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </nav>
        </div>
        <div className="flex-1 items-center justify-end space-x-4 hidden md:flex">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <ThemeToggle />
            <Select onValueChange={(value) => setLanguage(value as Language)}>
              <SelectTrigger className="w-auto gap-2">
                <SelectValue
                  placeholder={
                    orderedLanguages.find(
                      (lang) => lang.value === currentLanguage
                    )?.icon
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {orderedLanguages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.icon}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </nav>
        </div>
      </div>
    </header>
  )
}
