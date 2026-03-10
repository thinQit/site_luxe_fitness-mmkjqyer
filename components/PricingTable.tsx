'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export default function PricingTable({
  headline = 'MEMBERSHIP PLANS',
  subheadline = 'Choose the plan that matches your grind. No hidden fees. Cancel anytime.',
  tiers = [],
}: Partial<PricingTableProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-base md:text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map(function (tier, i) {
            return (
              <Card
                key={i}
                className={
                  'relative flex flex-col bg-background ' +
                  (tier.highlighted ? 'border-primary ring-2 ring-primary scale-[1.02]' : 'border-border')
                }
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="uppercase">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-extrabold uppercase">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-black text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full uppercase font-bold" variant={tier.highlighted ? 'default' : 'outline'} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
