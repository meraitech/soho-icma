import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/page-hero";
import { officers } from "@/data/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch"
        intro="Reach the ICMA Indonesia branch secretariat or any board officer directly."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-5">
          <div id="board" className="scroll-mt-24 lg:col-span-3">
            <h2 className="text-[28px] font-bold tracking-[0px] text-foreground">CMA Indonesia Branch</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {officers.map((o) => (
                <Card key={o.email}>
                  <CardHeader>
                    <p className="text-xs font-bold tracking-[0px] text-brand-core uppercase">
                      {o.role}
                    </p>
                    <CardTitle className="text-lg">{o.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${o.email}`}
                      className="inline-flex items-center gap-1.5 text-sm break-all text-muted-foreground hover:text-electric hover:underline"
                    >
                      <Mail className="size-4 shrink-0" /> {o.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              className="rounded-none bg-canvas p-8 text-white"
              action="mailto:anasopanah@gmail.com"
              method="post"
            >
              <h2 className="text-lg font-bold tracking-[0px]">Send an enquiry</h2>
              <p className="mt-1 text-sm font-normal text-body-dark">
                Membership, programs, events or partnerships.
              </p>
              <FieldGroup className="mt-5">
                <Field>
                  <FieldLabel htmlFor="name" className="text-sm font-normal text-white">
                    Name
                  </FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="rounded-[3px]"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email" className="text-sm font-normal text-white">
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-[3px]"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message" className="text-sm font-normal text-white">
                    Message
                  </FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can the branch help?"
                    className="rounded-[3px]"
                  />
                </Field>
                <Field orientation="horizontal">
                  <Button type="submit" variant="highlight" className="w-full">
                    Send enquiry
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
