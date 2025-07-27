"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Radio, Code, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Calendar,
    title: "Event Planning",
    description: "From concept to execution, we handle every aspect of your event with meticulous attention to detail.",
    features: [
      "Corporate conferences and seminars",
      "Cultural festivals and celebrations",
      "Product launches and brand activations",
      "Wedding and social events",
      "Venue selection and management",
      "Vendor coordination and logistics",
    ],
    stats: { projects: "20+", satisfaction: "98%" },
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Radio,
    title: "Production Services",
    description:
      "Professional live streaming and Production solutions with cutting-edge technology and expert production.",
    features: [
      "Multi-camera live streaming setup",
      "Professional audio engineering",
      "Real-time video switching and effects",
      "Social media integration",
      "Post-production and editing",
      "Equipment rental and technical support",
    ],
    stats: { projects: "50+", satisfaction: "99%" },
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Tailored IT Solution (Comming Soon)",
    description:
      "Custom IT solutions built with modern technologies, designed to elevate your digital presence and drive results.",
    features: [
      "Responsive website design",
      "E-commerce platforms",
      "Applications and portals",
      "Content management systems",
      "SEO optimization",
      "Performance optimization",
    ],
    stats: { projects: "Comming Soon", satisfaction: "Comming Soon" },
    color: "from-green-500 to-emerald-500",
  },
]

export function ServiceDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding py-20">
      <div className="container-width space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Content */}
            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-space-grotesk font-bold">{service.title}</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary mb-1">{service.stats.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary mb-1">{service.stats.satisfaction}</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Visual */}
            <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
              <div className="relative">
                <div
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${service.color} p-8 flex items-center justify-center`}
                >
                  <service.icon className="h-32 w-32 text-white/20" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/20" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
