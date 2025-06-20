"use client"

import { motion } from "framer-motion"

export function PortfolioHero() {
  return (
    <section className="relative section-padding py-32 mt-16">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects across event planning, Production, and web development. Each project
            represents our commitment to excellence and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
