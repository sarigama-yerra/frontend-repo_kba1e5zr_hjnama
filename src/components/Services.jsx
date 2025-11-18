import { motion } from "framer-motion"
import { Plane, Ship, Truck, ShieldCheck, PackageSearch, Boxes } from "lucide-react"

const services = [
  { title: "Air Freight", icon: Plane, desc: "Time-definite solutions with global capacity and door-to-door delivery." },
  { title: "Ocean Freight", icon: Ship, desc: "FCL/LCL services, reliable schedules, and flexible carrier options." },
  { title: "Overland", icon: Truck, desc: "Road and rail transport across regions with seamless cross-border handling." },
  { title: "Customs Brokerage", icon: ShieldCheck, desc: "Compliance-first clearance with proactive documentation support." },
  { title: "Project Cargo", icon: Boxes, desc: "Oversized and complex moves engineered by specialized project teams." },
  { title: "Supply Chain Solutions", icon: PackageSearch, desc: "Control tower visibility, warehousing, and value-added logistics." },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Key Services</h2>
          <p className="mt-3 text-blue-100/90">Tailored solutions across modes to match your timelines, budgets, and risk profile.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl p-6 bg-slate-900/60 ring-1 ring-white/10 hover:ring-blue-400/30 hover:bg-slate-900/70 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-blue-100/80 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
