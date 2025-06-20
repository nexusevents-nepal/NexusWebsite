import type { Metadata } from "next"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServiceDetails } from "@/components/sections/service-details"

export const metadata: Metadata = {
  title: "Our Services | Nexus Event and IT Solutions",
  description: "Discover our comprehensive services: Event Planning, Production, and Web Development solutions.",
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
    </>
  )
}
