"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export function CyberUtsavHero() {
  return (
    <section className="relative section-padding py-32 mt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Registration Now Open
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold leading-tight mb-6">
            <span className="block">CyberUtsav</span>
            <span className="block text-gradient">2.0</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Nepal's premier hackathon experience. Join developers, designers, and innovators for 48 hours of coding,
            creativity, and collaboration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group glow-effect">
              Register Now
              <Trophy className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            </Button>

            <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
              Learn More
            </Button>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg glass-effect">
              <Calendar className="h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold">March 15-17</div>
                <div className="text-sm text-muted-foreground">2024</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg glass-effect">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Kathmandu</div>
                <div className="text-sm text-muted-foreground">Nepal</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg glass-effect">
              <Users className="h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold">500+ Hackers</div>
                <div className="text-sm text-muted-foreground">Expected</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CountdownTimer targetDate="2024-03-15T00:00:00" />
        </motion.div>
      </div>
    </section>
  )
}
