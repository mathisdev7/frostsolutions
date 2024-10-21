/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

import { Icons } from "./icons"
import { useLanguage } from "./language/LanguageContext"

export const Creator = () => {
  const { t } = useLanguage()
  return (
    <div className="flex w-fit items-center gap-2 rounded-full border bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-2  font-bold transition-all hover:brightness-110">
      <Image
        className="size-12 rounded-full border border-gray-500/50"
        width={48}
        height={48}
        src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
        alt="not me"
      />
      <div className="flex flex-col gap-0">
        <p className="text-lg">
          {t("creator.madeby")}{" "}
          <Link
            className="font-extrabold text-blue-500 hover:underline"
            href="https://mathisdev.pro"
            target="_blank"
          >
            Mathis
          </Link>
        </p>
        <Link
          href="https://github.com/mathisdev7"
          target="_blank"
          className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline flex flex-row items-center justify-start gap-1"
        >
          <Icons.gitHub className="size-5 mr-1 dark:text-white text-black" />
          {t("creator.follow")} GitHub
        </Link>
      </div>
    </div>
  )
}
