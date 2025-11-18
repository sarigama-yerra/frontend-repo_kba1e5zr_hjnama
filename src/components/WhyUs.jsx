import { motion } from "framer-motion"
import { ShieldCheck, Clock, LineChart, Users2, Globe2, Headphones } from "lucide-react"

const items = [
  { title: "Proven Reliability", icon: ShieldCheck, desc: "98% on-time performance backed by tier-one carriers and SLAs." },
  { title: "Time-Critical Expertise", icon: Clock, desc: "Expedited solutions and 24/7 control tower for urgent shipments." },
  { title: "Visibility & Data", icon: LineChart, desc: "Real-time milestone tracking and predictive ETAs across modes." },
  { title: "Global + Local", icon: Globe2, desc: "Local compliance knowledge with a unified global quality system." },
  { title: "Human Support", icon: Headphones, desc: "Dedicated account teams that pick up the phone and own outcomes." },
  { title: "Collaborative Approach", icon: Users2, desc: "We integrate with your processes, systems, and KPIs." },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Why Choose Macargo</h2>
          <p className="mt-3 text-blue-100/90">We keep it simple: consistent quality, clear communication, measurable results.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-slate-900/60 ring-1 ring-white/10"
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
