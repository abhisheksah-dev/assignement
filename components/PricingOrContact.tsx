// components/PricingOrContact.tsx
import React from "react";

export default function PricingOrContact(){
  return (
    <section id="pricing" className="py-16 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <form className="max-w-xl grid gap-4">
        <input className="border p-3 rounded" placeholder="Your name" />
        <input className="border p-3 rounded" placeholder="Email" />
        <textarea className="border p-3 rounded" placeholder="Message" rows={4} />
        <button className="w-max px-6 py-3 bg-blue-600 text-white rounded">Send</button>
      </form>
    </section>
  );
}
