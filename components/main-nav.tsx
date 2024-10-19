import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { useLanguage } from "./language/LanguageContext"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { t } = useLanguage()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href="/"
        className="flex items-center md:justify-center justify-start space-x-2"
      >
        <Icons.logo className="xl:size-6 md:size-5 size-4" />
        <span className="inline-block font-bold text-sm md:text-lg">
          {t("siteConfig.name")}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-4 md:gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground px-2 xl:px-0",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {t(`siteConfig.mainNav.${item.title}`)}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
