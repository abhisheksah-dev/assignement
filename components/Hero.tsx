import Navigation from "./navigation";

export default function Hero() {
  return (
    <>
      <Navigation />
      <section className="relative overflow-hidden">
        {/* decorative blobs */}
        <div className="hero-decor left-0 top-8 w-72 h-72 rounded-full bg-accent/60" style={{left: "-6rem", top: "2rem"}} />
        <div className="hero-decor right-0 top-24 w-96 h-96 rounded-full bg-accent-dark/60" style={{right: "-8rem", top: "8rem"}} />

        <div className="site-container min-h-[72vh] flex flex-col items-center justify-center text-center py-16 lg:py-24">
          <p className="text-accent text-sm font-semibold mb-4">Welcome to Innovation</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            Transform your workflow — faster, simpler, together.
          </h1>

          <p className="text-neutral-muted max-w-2xl mb-8">
            Powerful features and thoughtful design to help teams move faster. Built for collaboration and scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="inline-block px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-lg hover:bg-accent-dark transition" href="#contact">Get Started Free</a>
            <a className="inline-block px-6 py-3 rounded-full border border-neutral-medium text-foreground hover:bg-neutral-light transition" href="#features">Explore Features</a>
          </div>

          <div className="mt-8 text-sm text-neutral-muted">Trusted by teams at companies worldwide</div>
        </div>
      </section>
    </>
  );
}
