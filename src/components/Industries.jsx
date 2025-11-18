import { motion } from "framer-motion"
import { Car, Factory, Leaf, Pill, Cpu, ShoppingBag, Plane } from "lucide-react"

const industries = [
  { title: "Automotive", icon: Car },
  { title: "Aerospace", icon: Plane },
  { title: "Food & Perishables", icon: Leaf },
  { title: "Pharma", icon: Pill },
  { title: "Industrial Machinery", icon: Factory },
  { title: "Consumer Electronics", icon: Cpu },
  { title: "Retail & E‑commerce", icon: ShoppingBag },
]

export default function Industries() {
  return (
    <section id="industries" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Industries We Serve</h2>
          <p className="mt-3 text-blue-100/90">Specialized handling and compliance for sensitive, high-value, and time-critical cargo.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl p-5 bg-slate-900/60 ring-1 ring-white/10 hover:ring-blue-400/30 hover:bg-slate-900/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center">
                  <ind.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white">{ind.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
