export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import PricingTable from "@/components/PricingTable"
import TeamGrid from "@/components/TeamGrid"
import GalleryMasonry from "@/components/GalleryMasonry"
import ContactForm from "@/components/ContactForm"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroAurora
        badge="LUXE FITNESS STUDIO • DOWNTOWN AUSTIN"
        title="TRAIN HARD. LOOK LUXE."
        subtitle="Luxe Fitness Studio is a premium training space in Downtown Austin—strength, conditioning, and performance classes led by elite coaches. First class is on us."
        primaryCta={{ label: "Claim Free Trial", href: "/free-trial" }}
        secondaryCta={{ label: "View Class Schedule", href: "/schedule" }}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
          <Card className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Location</p>
            <p className="mt-2 text-sm md:text-base">501 W 2nd St, Austin, TX 78701</p>
          </Card>
          <Card className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Hours</p>
            <p className="mt-2 text-sm md:text-base">
              Mon–Fri 5:30am–8:30pm • Sat 7:00am–2:00pm • Sun 8:00am–1:00pm
            </p>
          </Card>
          <Card className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Phone</p>
            <p className="mt-2 text-sm md:text-base">(512) 555-0199</p>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8">
            <Badge className="bg-[#FF2E00] text-white hover:bg-[#FF2E00]">Signature Classes</Badge>
            <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              Built for Results
            </h2>
            <p className="mt-3 max-w-3xl text-zinc-300">
              Pick your lane—or mix them. Every class is coach-led, timed, and scalable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "LUXE STRENGTH",
                desc: "Progressive barbell + dumbbell strength with structured blocks. Track PRs, build lean muscle.",
                badge: "Most Popular",
              },
              {
                title: "REDLINE HIIT",
                desc: "Intervals that hit hard without burning you out. Row, sled, bike, and bodyweight finishers.",
                badge: "High Energy",
              },
              {
                title: "ATHLETE ENGINE",
                desc: "Performance training: speed, agility, core, and unilateral strength for real-world athleticism.",
                badge: "Performance",
              },
              {
                title: "SCULPT + CORE",
                desc: "Low-impact burn with high control. Glutes, shoulders, and core with tempo and bands.",
                badge: "Low Impact",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                  <Badge variant="secondary" className="bg-zinc-800 text-zinc-100">
                    {item.badge}
                  </Badge>
                </div>
                <p className="mt-3 text-zinc-300">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-zinc-800" />

      <TeamGrid
        headline="Coached by the Best"
        subheadline="Certified, experienced, and obsessed with your progress."
        members={[
          {
            name: "Jordan Reyes",
            title: "Head Coach • Strength",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1771576911/site-images/corporate/11408874.jpg",
            bio: "Former collegiate strength coach specializing in progressive overload and technique.",
          },
          {
            name: "Maya Chen",
            title: "Coach • HIIT & Conditioning",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1771576911/site-images/corporate/11408874.jpg",
            bio: "Endurance background with a love for intervals and sustainable conditioning.",
          },
          {
            name: "Samira El-Amin",
            title: "Coach • Performance",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1771576911/site-images/corporate/11408874.jpg",
            bio: "Performance coach focused on speed, agility, and resilient movement.",
          },
          {
            name: "Avery Patel",
            title: "Coach • Sculpt & Core",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1771576911/site-images/corporate/11408874.jpg",
            bio: "Technique-first sculpt training with a focus on posture and core strength.",
          },
        ]}
      />

      <PricingTable
        headline="Memberships That Match Your Pace"
        subheadline="No contracts. Upgrade, pause, or cancel anytime."
        tiers={[
          {
            name: "Starter",
            price: "$89",
            period: "per month",
            description: "Perfect for 1–2 classes per week.",
            features: ["4 classes / month", "7-day booking window", "Free intro form check"],
            ctaLabel: "Choose Starter",
            ctaHref: "/contact?plan=starter",
          },
          {
            name: "Unlimited",
            price: "$169",
            period: "per month",
            description: "Train as often as you want—our best value.",
            features: [
              "Unlimited classes",
              "14-day booking window",
              "1 complimentary recovery session / month",
            ],
            ctaLabel: "Choose Unlimited",
            ctaHref: "/contact?plan=unlimited",
            highlighted: true,
          },
          {
            name: "Elite",
            price: "$249",
            period: "per month",
            description: "Unlimited classes plus personal coaching support.",
            features: [
              "Unlimited classes",
              "Monthly goal-setting consult (30 min)",
              "Priority waitlist",
            ],
            ctaLabel: "Choose Elite",
            ctaHref: "/contact?plan=elite",
          },
        ]}
      />

      <GalleryMasonry
        headline="The Space. The Energy. The Results."
        subheadline="A premium facility designed for performance—plus real member wins."
        images={[
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1771576910/site-images/corporate/1181360.jpg",
            alt: "Strength area with racks and red accent lighting",
            caption: "Facility",
          },
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1771576910/site-images/corporate/1181360.jpg",
            alt: "Indoor turf lane with sleds and kettlebells",
            caption: "Facility",
          },
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1771576910/site-images/corporate/1181360.jpg",
            alt: "Coach-led HIIT class using rowers and sled pushes",
            caption: "Classes",
          },
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1771576910/site-images/corporate/1181360.jpg",
            alt: "Small-group strength class with barbells",
            caption: "Classes",
          },
        ]}
      />

      <TestimonialsAnimated
        title="Members Who Don’t Miss"
        subtitle="High standards, high support. Here’s what people say after 30 days at Luxe."
        testimonials={[
          {
            quote:
              "The coaching is unreal—my squat form finally clicked. The vibe is premium but not intimidating.",
            name: "Jen R.",
            designation: "Unlimited Member",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1771576911/site-images/corporate/11408874.jpg",
          },
          {
            quote:
              "REDLINE is the perfect amount of brutal. I’m down two belt notches and my 5K time improved.",
            name: "Marcus D.",
            designation: "Elite Member",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1771576911/site-images/corporate/11408874.jpg",
          },
          {
            quote:
              "I only do 4 classes a month and still see progress because the coaches actually coach.",
            name: "Sofia K.",
            designation: "Starter Member",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1771576911/site-images/corporate/11408874.jpg",
          },
        ]}
        autoplay
      />

      <CTASparkles
        title="Your First Class Is Free"
        subtitle="Pick a class, show up 10 minutes early, and we’ll handle the rest."
        ctaLabel="Get Free Trial Pass"
        ctaHref="/free-trial"
        secondaryCtaLabel="Call (512) 555-0199"
        secondaryCtaHref="tel:+15125550199"
      />

      <ContactForm
        headline="Visit Luxe Fitness Studio"
        subheadline="Questions about memberships or which class to start with? Send a message."
        contactInfo={[
          { icon: "MapPin", label: "Address", value: "501 W 2nd St, Austin, TX 78701" },
          { icon: "Phone", label: "Phone", value: "(512) 555-0199" },
          { icon: "Mail", label: "Email", value: "hello@luxefitnessstudio.com" },
          { icon: "Clock3", label: "Hours", value: "Mon–Fri 5:30am–8:30pm • Sat–Sun Limited Hours" },
        ]}
      />
    </main>
  )
}
