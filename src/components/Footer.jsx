export default function Footer() {
  return (
    <footer className="border-t border-blue-900/30 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-600 ring-1 ring-white/10 flex items-center justify-center text-white font-bold">M</div>
            <p className="text-white font-semibold">Macargo</p>
          </div>
          <p className="text-blue-200/80">Trusted international freight forwarding and logistics partner.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-blue-200/80">
            <li>sales@macargo.com</li>
            <li>+1 800 555 1234</li>
            <li>24/7 Operations Desk</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-blue-200/80">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Operating Offices</h4>
          <ul className="space-y-2 text-blue-200/80">
            <li>New York • Miami • Los Angeles</li>
            <li>Rotterdam • Hamburg • London</li>
            <li>Dubai • Singapore • Shanghai</li>
            <li>São Paulo • Mexico City</li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-blue-200/60 border-t border-blue-900/30">
        © {new Date().getFullYear()} Macargo. All rights reserved.
      </div>
    </footer>
  )
}
