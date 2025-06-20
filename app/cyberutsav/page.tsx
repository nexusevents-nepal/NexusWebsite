import type { Metadata } from "next"
import { CyberUtsavHero } from "@/components/sections/cyberutsav-hero"
import { EventDetails } from "@/components/sections/event-details"

export const metadata: Metadata = {
  title: "CyberUtsav 2.0 | Nexus Event and IT Solutions",
  description: "Join CyberUtsav 2.0 - The ultimate hackathon experience. Register now for an unforgettable tech event.",
}

export default function CyberUtsav() {
  return (
    <>
      <CyberUtsavHero />
      <EventDetails />
    </>
  )
}
