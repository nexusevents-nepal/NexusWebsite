"use client"

import { motion } from "framer-motion"
import { Users, Target, Award } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative section-padding py-32 mt-16">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            About <span className="text-gradient">Nexus</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Nexus Event & I.T. Solution Pvt. Ltd. is a dynamic event management and technology company based in Nepal, dedicated to delivering top-tier esports experiences, live event production, and digital solutions. Specializing in LAN tournaments, broadcasting, branding, and technical operations, we bring together innovation, creativity, 
          and executional precision to power the future of competitive gaming and digital engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Our Team",
              description: "20 dedicated professionals with diverse expertise",
            },
            {
              icon: Target,
              title: "Our Mission",
              description: "To create memorable experiences that inspire and connect",
            },
            {
              icon: Award,
              title: "Our Values",
              description: "Excellence, creativity, and client satisfaction",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 rounded-2xl glass-effect"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
