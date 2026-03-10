"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = 'MEET YOUR COACHES',
  subheadline = 'Certified trainers focused on strength, conditioning, and real transformation.',
  members = [],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-base md:text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(function (member, i) {
            return (
              <Card key={i} className="overflow-hidden border-0 bg-background shadow-md text-center">
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={600}
                      height={600}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold uppercase text-foreground">{member.name}</h3>
                  <Badge variant="secondary" className="mt-2 uppercase">
                    {member.title}
                  </Badge>
                  {member.bio && <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
