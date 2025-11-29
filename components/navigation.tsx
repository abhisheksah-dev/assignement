"use client";

import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-neutral-medium">
      <div className="site-container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold">Y</div>
          <span className="font-semibold text-lg">YourBrand</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-neutral-muted hover:text-foreground transition">Features</a>
          <a href="#testimonials" className="text-sm text-neutral-muted hover:text-foreground transition">Testimonials</a>
          <a href="#contact" className="text-sm text-neutral-muted hover:text-foreground transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block px-4 py-2 bg-accent text-white rounded-full text-sm shadow-sm hover:bg-accent-dark transition">
            Get Started
          </button>

          <button
            className="md:hidden p-2 rounded-md border border-neutral-medium"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-neutral-medium">
          <div className="site-container py-4 flex flex-col gap-3">
            <a href="#features" className="text-sm text-neutral-muted hover:text-foreground">Features</a>
            <a href="#testimonials" className="text-sm text-neutral-muted hover:text-foreground">Testimonials</a>
            <a href="#contact" className="text-sm text-neutral-muted hover:text-foreground">Contact</a>
            <button className="mt-2 px-4 py-2 bg-accent text-white rounded-full text-sm">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
