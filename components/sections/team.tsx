"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Facebook } from "lucide-react"
import Image from "next/image"

// -------------------------
// Team Data with Priority
// -------------------------
const team = [
  {
    name: "Sajwal Chaulagain",
    role: "Founder / C.E.O",
    image: "/sajwal.png",
    social: {
      linkedin: "https://www.linkedin.com/in/desajwal/",
      facebook: "https://x.com/sajwal02",
    },
    priority: "core",
  },
  {
    name: "Suhas Belbase",
    role: "Founder / Chief Technical Director",
    image: "/suha.png",
    social: { linkedin: "#", facebook: "#" },
    priority: "core",
  },
  {
    name: "Gyalchen Lama",
    role: "Indian Administrative Head",
    image: "/gyalchenlama.png",
    social: { linkedin: "#", facebook: "#" },
    priority: "core",
  },
  {
    name: "Mingsho Subba Limbu",
    role: "Co-founder / Advisor",
    image: "/mhingso.png",
    social: { linkedin: "#", facebook: "#" },
    priority: "core",
  },
  {
    name: "Deepak Shah",
    role: "Co-Founder / Operational Lead",
    image: "/deepak.png",
    social: { linkedin: "#", facebook: "#" },
    priority: "core",
  },
  {
    name: "Siddhanth Raj Pokarel",
    role: "Software Developer",
    image: "/siddhanth.png",
    social: { linkedin: "#", facebook: "#" },
    priority: "nexus",
  },
  {
    name: "Sharad Bhandari",
    role: "Senior Web Developer",
    image: "/sharad.png",
    social: { linkedin: "#", facebook: "#" },
    priority: "nexus",
  },
  {
    name: "Saphal Bartaula",
    role: "Marketing Lead",
    image: "/saphal.png",
    bio: "Marketing strategist driving brand growth",
    social: { linkedin: "#", facebook: "#" },
    priority: "nexus",
  },
    {
    name: "Ekraj Wasti",
    role: "Marketing Strategist",
    image: "/rochak.png",
    bio: "Marketing strategist driving brand growth",
    social: { linkedin: "#", facebook: "#" },
    priority: "nexus",
  },
]

// -------------------------
// Individual Member Card
// -------------------------
const MemberCard = ({ member, index }: { member: typeof team[number]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
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

      {/*  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={member.social.linkedin}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={member.social.facebook}
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>*/}
      </div>

      <h3 className="text-xl font-space-grotesk font-bold mb-1">{member.name}</h3>
      <p className="text-primary font-medium mb-3">{member.role}</p>
      {/*<p className="text-sm text-muted-foreground">{member.bio}</p>*/}
    </motion.div>
  )
}

// -------------------------
// Grid Wrapper (Responsive with 4 Columns)
// -------------------------
const TeamGrid = ({ members }: { members: typeof team }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8"
    >
      {members.map((member, index) => (
        <MemberCard key={member.name} member={member} index={index} />
      ))}
    </div>
  )
}

// -------------------------
// Main Team Section
// -------------------------
export function Team() {
  const coreTeam = team.filter((member) => member.priority === "core").slice(0, 5)
  const nexusMembers = team.filter((member) => member.priority === "nexus").slice(0, 3)

  return (
    <section className="section-padding py-20">
      <div className="container-width">
        {/* Core Team Section */}
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

        {/* Nexus Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center my-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Nexus <span className="text-gradient">Members</span>
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
