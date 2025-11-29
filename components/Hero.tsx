// components/Hero.tsx
import React from "react";

export default function Hero(){
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-start gap-6 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">Your Product — Clear value in one line</h1>
      <p className="text-gray-600 max-w-xl">Short persuasive subtext that explains the benefit in one sentence.</p>
      <div className="flex gap-4">
        <a href="#pricing" className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium">Get started</a>
        <a href="#features" className="px-6 py-3 rounded-md border border-gray-200">Learn more</a>
      </div>
    </section>
  );
}
