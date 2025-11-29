const items = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Optimized performance that keeps pace with your ambitions.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    desc: "Bank-grade encryption and compliance to protect your data.",
  },
  {
    icon: "🚀",
    title: "Easy Integration",
    desc: "Connect seamlessly with your tools and workflows in minutes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-light">
      <div className="site-container">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Powerful Features, Simple Experience</h2>
          <p className="text-neutral-muted max-w-2xl mx-auto">Everything you need to succeed, thoughtfully designed for your workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 bg-card rounded-2xl border border-neutral-medium hover:shadow-md transition">
              <div className="text-3xl mb-4">{it.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-neutral-muted">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
