// components/Testimonials.tsx
import React from "react";

const data = [
  {name: "Suman", text: "This product saved our team hours each week."},
  {name: "Riya", text: "Super easy to use and great support."}
];

export default function Testimonials(){
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6">What customers say</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {data.map((t)=> (
          <blockquote key={t.name} className="p-6 bg-white rounded-lg shadow-sm">
            <p className="text-gray-700">“{t.text}”</p>
            <footer className="mt-4 text-sm text-gray-500">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
