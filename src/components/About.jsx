import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white">About Macargo</h2>
          <p className="mt-4 text-blue-100/90 leading-relaxed">
            With decades of experience, Macargo is a trusted partner to global brands, mid-sized companies, and fast-growing startups. Our integrated network spans every major trade lane with dedicated teams on the ground, providing dependable service, transparent communication, and end-to-end visibility.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
