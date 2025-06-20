"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Sajwal Chaulagain",
    role: "CEO & Founder",
    image: "/sajwal-chaulagain.jpg",
    bio: "Visionary leader with 10+ years in event management",
    social: {
      linkedin: "https://www.linkedin.com/in/desajwal/",
      twitter: "https://x.com/sajwal02",
    },
  },
  {
    name: "Suhas Belbas",
    role: "Creative Director",
    image: "/suha.png",
    bio: "Award-winning designer specializing in event experiences",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Amit Kumar",
    role: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer and Production technology expert",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Experienced project manager ensuring seamless execution",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "David Chen",
    role: "Production Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Professional broadcaster with expertise in live streaming",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Maya Singh",
    role: "Marketing Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Digital marketing strategist driving brand growth",
    social: { linkedin: "#", twitter: "#" },
  },
]

const TeamGrid = ({ members }: { members: typeof team }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group text-center"
        >
          <div className="relative mb-6">
            <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={member.social.linkedin}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={member.social.twitter}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <h3 className="text-xl font-space-grotesk font-bold mb-1">{member.name}</h3>
          <p className="text-primary font-medium mb-3">{member.role}</p>
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function Team() {
  const coreTeam = team.slice(0, 3)
  const nexusMembers = team.slice(3)

  return (
    <section className="section-padding py-20">
      <div className="container-width">
        {/* Core Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Meet Our <span className="text-gradient">Core Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The leadership behind Nexus Event and IT Solutions
          </p>
        </motion.div>
        <TeamGrid members={coreTeam} />

        {/* Nexus Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center my-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
          Nexus <span className="text-gradient"> Members</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate team members driving day-to-day success
          </p>
        </motion.div>
        <TeamGrid members={nexusMembers} />
      </div>
    </section>
  )
}
