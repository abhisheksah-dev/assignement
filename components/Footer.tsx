export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-medium bg-background">
      <div className="site-container flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold">Y</div>
            <div>
              <p className="font-semibold">YourBrand</p>
              <p className="text-sm text-neutral-muted">Transforming workflows, one team at a time.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-auto">
          <div>
            <p className="font-semibold mb-3">Product</p>
            <ul className="space-y-2 text-sm text-neutral-muted">
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Company</p>
            <ul className="space-y-2 text-sm text-neutral-muted">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-neutral-muted">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-neutral-muted">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
