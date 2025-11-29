// components/Features.tsx
import React from "react";

const items = [
  {title: "Fast", desc: "Lightning fast performance."},
  {title: "Reliable", desc: "99.99% uptime."},
  {title: "Secure", desc: "Top-grade security."},
];

export default function Features(){
  return (
    <section id="features" className="py-16 px-6 md:px-16">
      <h2 className="text-3xl font-semibold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it)=>(
          <div key={it.title} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
            <p className="text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
