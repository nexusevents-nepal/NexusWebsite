"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Radio, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Calendar,
    title: "Event Planning",
    description:
      "From corporate conferences to cultural celebrations, we orchestrate memorable experiences that leave lasting impressions.",
    features: ["Corporate Events", "Cultural Programs", "Product Launches", "Conferences"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Radio,
    title: "Production Services",
    description:
      "Professional live streaming and Production solutions that connect your audience with crystal-clear quality.",
    features: ["Live Streaming", "Multi-Camera Setup", "Audio Engineering", "Post Production"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web solutions built with modern technologies, designed to elevate your digital presence.",
    features: ["Custom Websites", "E-commerce", "Web Applications", "SEO Optimization"],
    color: "from-green-500 to-emerald-500",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding py-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in three core areas, delivering excellence in every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl glass-effect hover:shadow-2xl transition-all duration-300 h-full">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-space-grotesk font-bold mb-4">{service.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
