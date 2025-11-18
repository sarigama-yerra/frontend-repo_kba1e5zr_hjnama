import { motion } from "framer-motion"

export default function Network() {
  return (
    <section id="network" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Global Network</h2>
          <p className="mt-3 text-blue-100/90">Coverage across 120+ countries, with strategic hubs near major airports, seaports, and industrial zones. Local experts, global standards.</p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden bg-slate-900/60 ring-1 ring-white/10">
          <div className="aspect-[16/8]">
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1600&auto=format&fit=crop"
              alt="Stylized world map"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-fuchsia-400/70 shadow-[0_0_0_6px_rgba(217,70,239,0.15)] animate-ping"
                  style={{
                    top: `${15 + (i * 9)}%`,
                    left: `${10 + (i * 10)}%`,
                    animationDuration: `${2.5 + i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
