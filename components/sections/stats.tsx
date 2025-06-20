"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Radio, Code, Users } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    value: "6+",
    label: "Events Planned",
    description: "Successful events delivered with precision",
  },
  {
    icon: Radio,
    value: "50+",
    label: "Broadcasting Projects",
    description: "Live events broadcasted flawlessly",
  },
  {
    icon: Code,
    value: "5+",
    label: "Websites Built",
    description: "Custom web solutions delivered",
  },
  {
    icon: Users,
    value: "22",
    label: "Expert Team",
    description: "Dedicated professionals at your service",
  },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding py-20 bg-muted/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. We've delivered exceptional results across multiple domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-primary to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>

              <div className="text-lg font-semibold mb-2">{stat.label}</div>

              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
