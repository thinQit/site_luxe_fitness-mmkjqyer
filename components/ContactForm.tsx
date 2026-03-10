'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export default function ContactForm({
  headline = 'CONTACT US',
  subheadline = 'Questions about memberships, classes, or your first session? Reach out now.',
  contactInfo = [],
}: Partial<ContactFormProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-base md:text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us your fitness goals..." rows={5} />
                </div>
                <Button type="submit" className="w-full uppercase font-bold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="font-semibold uppercase text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
