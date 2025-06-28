"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Calendar, Radio, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const categories = [
  { id: "all", name: "All Projects", icon: null },
  { id: "events", name: "Events", icon: Calendar },
  { id: "Production", name: "Production", icon: Radio },
  /*{ id: "web", name: "Web Development", icon: Code },*/
]

const projects = [
  {
    id: 1,
    title: "Tech Summit 2024",
    category: "events",
    description: "A comprehensive technology summit featuring international speakers and cutting-edge innovations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Corporate", "Technology", "International"],
    year: "2024",
  },
  {
    id: 2,
    title: "Cultural Festival Live Stream",
    category: "Production",
    description: "Multi-camera live streaming of Nepal's largest cultural festival, reaching 50K+ viewers.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Live Stream", "Cultural", "Multi-Camera"],
    year: "2024",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Production",
    description: "Modern e-commerce solution with advanced features and seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["E-commerce", "React", "Modern"],
    year: "2024",
  },
  {
    id: 4,
    title: "Corporate Conference",
    category: "events",
    description: "Annual corporate conference with 500+ attendees and international speakers.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Corporate", "Conference", "Large Scale"],
    year: "2023",
  },
  {
    id: 5,
    title: "Sports Event Production",
    category: "Production",
    description: "Professional Production of national sports championship with multiple camera angles.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Sports", "Live", "Professional"],
    year: "2023",
  },
  {
    id: 6,
    title: "Restaurant Website",
    category: "Production",
    description: "Beautiful restaurant website with online ordering and reservation system.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Restaurant", "Booking", "Modern"],
    year: "2023",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section ref={ref} className="section-padding py-20">
      <div className="container-width">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="group"
            >
              {category.icon && <category.icon className="h-4 w-4 mr-2" />}
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full capitalize">
                        {project.category}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded">
                        {project.year}
                      </span>
                    </div>

                    {/* External link icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-space-grotesk font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
