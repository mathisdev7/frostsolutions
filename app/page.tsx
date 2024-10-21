"use client"

import AOS from "aos"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Typography } from "@/components/ui/typography"
import { Creator } from "@/components/Creator"
import { Icons } from "@/components/icons"
import { useLanguage } from "@/components/language/LanguageContext"

import "aos/dist/aos.css"

import { useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { useForm } from "react-hook-form"

export default function IndexPage() {
  const form = useForm()
  const { t, language } = useLanguage()

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert(t("successMessage"))
      console.log(t("successMessage"))
    } else {
      alert(t("errorMessage"))
      console.error(t("errorMessage"))
    }
  }

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <div>
      <section className="container flex h-full items-center gap-6 pb-8 pt-6 max-lg:flex-col md:py-10">
        <div className="flex flex-1 flex-col items-start gap-4">
          <h1
            data-aos="flip-up"
            className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {t("header.needA")}{" "}
            <span className="inline-block bg-foreground px-1 py-2 text-background">
              {t("header.customSolution")}
            </span>{" "}
            {t("header.solution")} <u>{t("header.letTalk")}</u>
          </h1>
          <div className="flex items-center gap-4 max-lg:flex-col lg:gap-8">
            <div className="flex">
              {Array.from({ length: 8 }).map((_, i) => (
                <Avatar
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                  key={i}
                  className="-mr-4"
                >
                  <AvatarFallback>{i + 1}</AvatarFallback>
                  <AvatarImage src={`/images/review/${(i % 4) + 1}.png`} />
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col gap-0.5 text-yellow-500 dark:text-yellow-400">
              <p className="whitespace-nowrap font-extrabold">
                {t("header.helpingBusinesses")}
              </p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    key={i}
                    size={24}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div
            className="dot-pattern absolute inset-0 -translate-x-4 translate-y-4"
            style={
              {
                "--dot-background": "hsl(var(--background))",
                "--dot-color": "hsl(var(--primary))",
              } as any
            }
          />
          <Card className="relative h-auto w-full max-w-full">
            <CardHeader>
              <CardTitle>FrostSolutions</CardTitle>
              <CardDescription>{t("description")}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Typography className="font-bold underline text-xl mb-2">
                Tech Stack
              </Typography>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-500">
                  <Icons.react className="text-blue-400 size-5" />
                  React.js
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-500">
                  <Icons.typescript className="text-blue-500 size-5" />
                  Typescript
                </span>
                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-black">
                  <Icons.nextjs className="size-5" />
                  Next.js
                </span>
                <span className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-500">
                  <Icons.tailwind className="text-blue-400 size-5" />
                  Tailwind CSS
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container flex h-full gap-6 pb-8 pt-6 max-lg:flex-col md:py-10">
        <Card
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="h-full flex-1"
        >
          <CardHeader>
            <CardTitle>{t("cards.shareVision.title")}</CardTitle>
            <CardDescription>
              {t("cards.shareVision.description")}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          className="h-full flex-1"
        >
          <CardHeader>
            <CardTitle>{t("cards.getCustomSolution.title")}</CardTitle>
            <CardDescription>
              {t("cards.getCustomSolution.description")}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="700"
          data-aos-offset="0"
          className="h-full flex-1"
        >
          <CardHeader>
            <CardTitle>{t("cards.reviewIterate.title")}</CardTitle>
            <CardDescription>
              {t("cards.reviewIterate.description")}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          className={`h-full flex-1 ${language === "en" || language === "es" ? "pb-5" : ""}`}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="900"
          data-aos-offset="0"
        >
          <CardHeader>
            <CardTitle>{t("cards.launchConfidence.title")}</CardTitle>
            <CardDescription>
              {t("cards.launchConfidence.description")}
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="container flex h-full max-w-2xl flex-col items-center gap-4 pb-8 pt-6 text-center md:py-10">
        <Typography variant="h3">{t("struggles.header")}</Typography>
        <Image
          src="https://img.freepik.com/premium-photo/sad-depressed-businessman-depression-working-inside-modern-office-building-man-business_321831-17531.jpg"
          alt="sad business man"
          width={500}
          height={300}
          priority
          className="max-w-full lg:max-w-xl rounded-lg"
          data-aos="fade-left"
        />
        <Typography variant="h3">{t("struggles.noTime")}</Typography>

        <Typography variant="large">
          1. {t("struggles.challenges.0")}
        </Typography>
        <Typography variant="large">
          2. {t("struggles.challenges.1")}
        </Typography>

        <Typography variant="h3">{t("struggles.opportunity")}</Typography>

        <Typography variant="h3">{t("struggles.benefits")}</Typography>
        <Image
          src="https://img.freepik.com/free-photo/businessman-excited-because-achievement-business_1163-5344.jpg"
          alt="Website growth stats"
          width={500}
          height={300}
          className="max-w-full lg:max-w-xl rounded-lg"
          data-aos="fade-right"
        />
        <Typography variant="small">{t("struggles.clientGrowth")}</Typography>
      </section>

      <section className="container flex flex-col items-center pb-8 pt-6 max-lg:flex-col md:py-10">
        <Typography variant="h3">{t("contact.title")}</Typography>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem data-aos="fade-up" data-aos-delay="200">
                  <FormLabel>{t("contact.form.name")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem data-aos="fade-up" data-aos-delay="400">
                  <FormLabel>{t("contact.form.email")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem data-aos="fade-up" data-aos-delay="600">
                  <FormLabel>{t("contact.form.message")}</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              {t("contact.form.sendButton")}
            </Button>
          </form>
        </Form>
      </section>

      <section className="container flex h-full max-w-2xl flex-col items-center gap-4 pb-8 pt-6 text-center md:py-10">
        <Creator />
      </section>
    </div>
  )
}
