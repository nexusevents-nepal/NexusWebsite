"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const projects = [
  {
    title: "Gorkhali Cup",
    category: "Production Partner",
    description: "Nexus Event was proud to be a Production Partner for Gorkhali Cup, a FreeFire Esports tournament hosted by Tonde Nepal Esports, organisation under Tonde Gamer.",
    image: "/gorkhalicup_production.jpg",
    tags: ["Production", "Technology", "FreeFire"],
  },
  {
    title: "Bagmati Esports Championship",
    category: "Management",
    description: "Bagmati Esports Championship was a high scale Esports tournament organised by Esports Association of Nepal (ESAN) where Nexus Event was proudly the Event Management Team.",
    image: "/bagmati-esports-championship.jpeg",
    tags: ["Esports", "Management", "Bagmati"],
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced features and seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["E-commerce", "React", "Modern"],
  },
]

const brandLogos = [
  "/esan.png",
  "/hetaudacitycollege.png",
  "/texas.png",
  "/globalnotes.png",
  "/tekgurkha.png",
  "/daruma.png",
  "/wfa.png",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding py-20 bg-muted/30">
      <div className="container-width">
        <h2 className="brand-title font-weight-bold h1 mb-5 text-3xl md:text-4xl font-space-grotesk font-bold text-center">
          Brands We've Worked With
        </h2>
        <hr className="mx-auto w-24 border-primary mb-8" />

        {/* ✅ Fixed Logo Carousel */}
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {brandLogos.map((src, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Brand Logo ${index + 1}`}
                  className="w-32 h-16 object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* 🔽 Featured Projects Section */}
      <div className="container-width mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our most successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {/* External link icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
