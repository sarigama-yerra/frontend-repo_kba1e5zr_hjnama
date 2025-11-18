import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-24 w-[680px] h-[680px] rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-24 w-[560px] h-[560px] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-blue-200/80 mb-3">Global Freight Forwarding</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
            Reliable logistics for a moving world
          </h1>
          <p className="mt-5 text-blue-100/90 text-lg leading-relaxed">
            Macargo connects your supply chain across air, ocean, and land with precision, visibility, and care—so your cargo arrives safely and on time, anywhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-colors">
              Request a Quote
            </a>
            <a href="#track" className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold border border-blue-400/40 text-blue-100 hover:bg-white/5 transition-colors">
              Track Your Shipment
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-1 md:order-2 relative"
        >
          <div className="aspect-[5/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1586521995568-39aba1a3c342?q=80&w=1600&auto=format&fit=crop"
              alt="Ships being loaded at a container terminal"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
