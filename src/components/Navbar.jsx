import { Menu, Phone, Mail } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 group">
          <div className="w-9 h-9 rounded bg-gradient-to-br from-blue-500 to-blue-600 ring-1 ring-white/10 flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Macargo</p>
            <p className="text-xs text-blue-200/70">Global Logistics</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-blue-100/80 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-blue-100/80 hover:text-white transition-colors">Services</a>
          <a href="#industries" className="text-blue-100/80 hover:text-white transition-colors">Industries</a>
          <a href="#network" className="text-blue-100/80 hover:text-white transition-colors">Network</a>
          <a href="#why" className="text-blue-100/80 hover:text-white transition-colors">Why Us</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:sales@macargo.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-blue-100/90 hover:text-white hover:bg-white/5 transition-colors">
            <Mail size={16} /> sales@macargo.com
          </a>
          <a href="tel:+18005551234" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-blue-100/90 hover:text-white hover:bg-white/5 transition-colors">
            <Phone size={16} /> +1 800 555 1234
          </a>
          <a href="#quote" className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-colors">
            Request a Quote
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-white/5">
          <Menu />
        </button>
      </div>
    </header>
  )
}
