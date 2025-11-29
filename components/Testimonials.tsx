const data = [
  { name: "Sarah Chen", role: "CEO, TechCorp", text: "This solution saved our team hours each week.", avatar: "SC" },
  { name: "Marcus Johnson", role: "Product Lead", text: "Beautifully designed and intuitive.", avatar: "MJ" },
  { name: "Elena Rodriguez", role: "Founder", text: "Exactly what we needed — great support.", avatar: "ER" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="site-container">
        <div className="text-center mb-8">
          <p className="text-accent text-sm font-semibold mb-2">Success Stories</p>
          <h2 className="text-2xl md:text-3xl font-bold">Loved by teams everywhere</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((t) => (
            <div key={t.name} className="p-6 bg-neutral-light rounded-2xl border border-neutral-medium">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-semibold">{t.avatar}</div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-neutral-muted">{t.role}</p>
                </div>
              </div>
              <p className="text-neutral-muted">&quot;{t.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
