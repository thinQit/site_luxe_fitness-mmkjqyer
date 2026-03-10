"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Trainers", href: "/trainers" },
  { label: "Memberships", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-lg border-b border-border w-full">
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-2xl font-black uppercase tracking-wider text-primary" style={{ fontFamily: "var(--font-heading)" }}>
          Luxe Fitness
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "uppercase font-semibold text-sm tracking-wide hover:text-primary transition-colors",
                "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-bold uppercase px-6 py-2"
          >
            <Link href="/free-trial">Free Trial</Link>
          </Button>
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-muted transition"
          aria-label="Open Navigation Menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden w-full flex flex-col bg-background border-t border-border shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 px-6 uppercase font-semibold text-sm border-b border-border text-foreground hover:bg-muted transition"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="m-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-bold uppercase"
            onClick={() => setOpen(false)}
          >
            <Link href="/free-trial">Free Trial</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
