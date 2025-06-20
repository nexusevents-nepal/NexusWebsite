"use client"

import { motion } from "framer-motion"

export function ServicesHero() {
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
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive solutions across three core areas: event planning, Production services, and web
            development. Each service is delivered with precision, creativity, and attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
