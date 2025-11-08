export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3 text-sm text-zinc-400">
        <div>
          <div className="text-foreground font-semibold">Mastersolis Infotech</div>
          <p className="mt-2 max-w-sm">Designing and shipping modern products, intelligent automations, and delightful experiences.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-zinc-300 font-medium">Company</div>
            <ul className="mt-2 space-y-1">
              <li><a href="/about" className="hover:text-foreground">About</a></li>
              <li><a href="/services" className="hover:text-foreground">Services</a></li>
              <li><a href="/projects" className="hover:text-foreground">Projects</a></li>
              <li><a href="/careers" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="text-zinc-300 font-medium">Resources</div>
            <ul className="mt-2 space-y-1">
              <li><a href="/blog" className="hover:text-foreground">Blog</a></li>
              <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <div>© {new Date().getFullYear()} Mastersolis Infotech</div>
          <div className="mt-1">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
