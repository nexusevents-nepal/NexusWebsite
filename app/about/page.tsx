import type { Metadata } from "next"
import { AboutHero } from "@/components/sections/about-hero"
import { Timeline } from "@/components/sections/timeline"
import { Team } from "@/components/sections/team"

export const metadata: Metadata = {
  title: "About Us | Nexus Event and IT Solutions",
  description: "Learn about our journey, mission, and the talented team behind Nexus Event and IT Solutions.",
}

export default function About() {
  return (
    <>
      <AboutHero />
      {/* <Timeline /> */}
      <Team />
    </>
  )
}
