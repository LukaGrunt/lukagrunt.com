export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="font-body text-sm text-muted text-center md:text-left">
            © {currentYear} Luka Grunt. Built with React + Three.js + Framer Motion.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {/* Twitter Link */}
            <a
              href="https://x.com/LukaGrunt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-primary transition-colors group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="font-body text-sm group-hover:text-primary">@LukaGrunt</span>
            </a>

            {/* CV Download */}
            <a
              href="/assets/luka-grunt-cv.pdf"
              download
              className="font-body text-sm text-muted hover:text-primary transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
