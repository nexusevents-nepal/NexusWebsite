"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize event planning in Nepal",
  },
  {
    year: "2021",
    title: "First Major Event",
    description: "Successfully organized our first large-scale corporate conference",
  },
  {
    year: "2022",
    title: "Production Expansion",
    description: "Launched professional Production services with state-of-the-art equipment",
  },
  {
    year: "2023",
    title: "Web Development",
    description: "Added web development services to our portfolio",
  },
  {
    year: "2024",
    title: "CyberUtsav Launch",
    description: "Organizing Nepal's premier hackathon event",
  },
]

export function Timeline() {
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
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming a trusted name in the industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-purple-500" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1 px-8">
                  <div className={`${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-space-grotesk font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
