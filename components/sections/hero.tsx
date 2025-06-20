"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative section-padding py-32">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-medium"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for new projects
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold leading-tight">
              <span className="block">Powering Events,</span>
              <span className="block text-gradient">Turning Plans</span>
              <span className="block">Into Experiences</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              From unforgettable events to cutting-edge Production and web development, we bring your vision to life
              with precision and creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="group bg-background/50 backdrop-blur-sm">
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Our Story
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">60+</div>
                <div className="text-sm text-muted-foreground">Events Planned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">70+</div>
                <div className="text-sm text-muted-foreground">Broadcasts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">6</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
