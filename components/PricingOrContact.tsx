"use client";
import { useState } from "react";

export default function PricingOrContact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="site-container max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-accent text-sm font-semibold mb-2">Get in Touch</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Start your journey today</h2>
          <p className="text-neutral-muted">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="px-4 py-3 border border-neutral-medium rounded-lg" placeholder="Your name" required />
            <input className="px-4 py-3 border border-neutral-medium rounded-lg" placeholder="Email address" type="email" required />
          </div>

          <textarea className="px-4 py-3 border border-neutral-medium rounded-lg resize-none" rows={5} placeholder="Tell us about your project..." required />

          <div className="flex items-center justify-center">
            <button className="px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent-dark shadow" type="submit">
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
