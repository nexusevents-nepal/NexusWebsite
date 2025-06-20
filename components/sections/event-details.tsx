"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Users, Trophy, Zap, Clock, Gift } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "48 Hours of Coding",
    description: "Non-stop coding marathon with mentorship and support",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Form teams with like-minded developers and designers",
  },
  {
    icon: Trophy,
    title: "Amazing Prizes",
    description: "Win cash prizes, internships, and exclusive swag",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description: "Build solutions for real-world problems",
  },
  {
    icon: Clock,
    title: "Workshops",
    description: "Learn from industry experts and tech leaders",
  },
  {
    icon: Gift,
    title: "Networking",
    description: "Connect with startups, companies, and investors",
  },
]

const schedule = [
  {
    day: "Day 1",
    date: "March 15",
    events: [
      { time: "09:00", title: "Registration & Welcome" },
      { time: "10:00", title: "Opening Ceremony" },
      { time: "11:00", title: "Team Formation" },
      { time: "12:00", title: "Hacking Begins!" },
      { time: "18:00", title: "Dinner & Networking" },
    ],
  },
  {
    day: "Day 2",
    date: "March 16",
    events: [
      { time: "08:00", title: "Breakfast" },
      { time: "10:00", title: "Workshop: AI/ML" },
      { time: "14:00", title: "Lunch Break" },
      { time: "16:00", title: "Mentorship Sessions" },
      { time: "20:00", title: "Dinner" },
    ],
  },
  {
    day: "Day 3",
    date: "March 17",
    events: [
      { time: "08:00", title: "Breakfast" },
      { time: "10:00", title: "Final Sprint" },
      { time: "12:00", title: "Submission Deadline" },
      { time: "14:00", title: "Presentations" },
      { time: "16:00", title: "Awards Ceremony" },
    ],
  },
]

export function EventDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding py-20">
      <div className="container-width">
        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Why <span className="text-gradient">CyberUtsav 2.0?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the ultimate hackathon with cutting-edge challenges and amazing opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl glass-effect group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-space-grotesk font-bold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted/30 rounded-3xl p-8"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-center mb-12">
            Event <span className="text-gradient">Schedule</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedule.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + dayIndex * 0.2 }}
                className="space-y-4"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-space-grotesk font-bold text-primary">{day.day}</h3>
                  <p className="text-muted-foreground">{day.date}</p>
                </div>

                <div className="space-y-3">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex items-center p-3 rounded-lg bg-background/50 backdrop-blur-sm"
                    >
                      <div className="w-16 text-sm font-medium text-primary mr-4">{event.time}</div>
                      <div className="text-sm">{event.title}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
