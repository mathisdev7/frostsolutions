"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useForm } from "react-hook-form"

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

export default function IndexPage() {
  const form = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div>
      <section className="container flex h-full items-center gap-6 pb-8 pt-6 max-lg:flex-col md:py-10">
        <div className="flex flex-1 flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl ">
            Need a{" "}
            <span className="inline-block bg-foreground px-1 py-2 text-background">
              Custom
            </span>{" "}
            Solution? <u>Let's Talk</u>!
          </h1>
          <div className="flex items-center gap-4 max-lg:flex-col lg:gap-8">
            <div className="flex">
              {Array.from({ length: 8 }).map((_, i) => (
                <Avatar key={i} className="-mr-4">
                  <AvatarFallback>{i + 1}</AvatarFallback>
                  <AvatarImage src={`/images/review/${(i % 4) + 1}.png`} />
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col gap-0.5 text-yellow-500 dark:text-yellow-400">
              <p className="whitespace-nowrap font-extrabold">
                +500 LinkedIn users trust us
              </p>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
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
              <CardDescription>
                Tailor-made web applications designed to elevate your business
                and streamline your digital presence.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Typography className="font-bold underline">
                Tech Stack
              </Typography>
              <div className="flex flex-col gap-1">
                <p className="inline-flex items-center gap-1.5">
                  <Icons.react className="text-blue-400 size-5" />
                  <span> - React.js</span>
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <Icons.typescript className="text-blue-500 size-5" />
                  <span> - Typescript</span>
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <Icons.nextjs className="size-5" />
                  <span> - Next.js</span>
                </p>
                <p className="inline-flex items-center gap-1.5">
                  <Icons.tailwind className="size-5 text-blue-400" />
                  <span>- Tailwind.css</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container flex h-full gap-6 pb-8 pt-6 max-lg:flex-col md:py-10">
        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>1. Share Your Vision</CardTitle>
            <CardDescription>
              Tell us about your project ideas and business goals.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>2. Get a Custom Solution</CardTitle>
            <CardDescription>
              We’ll craft a tailor-made web application designed to meet your
              specific needs.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="h-full flex-1 pb-3">
          <CardHeader>
            <CardTitle>3. Review and Iterate</CardTitle>
            <CardDescription>
              Collaborate with us to refine and perfect your application,
              ensuring it exceeds your expectations.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="h-full flex-1">
          <CardHeader>
            <CardTitle>4. Launch with Confidence</CardTitle>
            <CardDescription>
              Once everything is ready, we’ll help you launch your application
              and ensure smooth operation from day one.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="container flex h-full max-w-2xl flex-col items-center gap-4 pb-8 pt-6 text-center md:py-10">
        <Typography variant="h3">
          Every month, businesses struggle with slow, outdated websites...
        </Typography>
        <Image
          src="https://img.freepik.com/premium-photo/sad-depressed-businessman-depression-working-inside-modern-office-building-man-business_321831-17531.jpg"
          alt="sad business man"
          width={500}
          height={300}
          className="max-w-full lg:max-w-xl rounded-lg"
        />
        <Typography variant="h3">
          But they don’t have the time or expertise to improve them.
        </Typography>

        <Typography variant="large">
          1. Because managing technical details is complex
        </Typography>
        <Typography variant="large">
          2. Because scaling a website takes experience
        </Typography>

        <Typography variant="h3">
          A high-performing website is a real opportunity to grow your business!
        </Typography>

        <Typography variant="h3">
          By optimizing your site’s performance and user experience, you’ll
          increase conversions and customer satisfaction.
        </Typography>
        <Image
          src="https://img.freepik.com/free-photo/businessman-excited-because-achievement-business_1163-5344.jpg"
          alt="Website growth stats"
          width={500}
          height={300}
          className="max-w-full lg:max-w-xl rounded-lg"
        />
        <Typography variant="small" className="italic text-muted-foreground">
          My clients see a steady growth in traffic and engagement after working
          with FrostSolutions.
        </Typography>

        <Typography variant="h3">
          This optimization saves my clients <b>hours of work</b> every month
          and boosts their revenue by <b>thousands of dollars</b>.
        </Typography>
      </section>

      <section
        id="contact"
        className="container flex flex-col items-center py-10 px-6"
      >
        <Typography variant="h1" as="h2" className="text-3xl font-bold mb-6">
          Get in Touch with FrostSolutions
        </Typography>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      required
                      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...field}
                      required
                      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message"
                      {...field}
                      required
                      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </section>

      <footer className="container flex items-center justify-center py-20">
        <Creator />
      </footer>
    </div>
  )
}
