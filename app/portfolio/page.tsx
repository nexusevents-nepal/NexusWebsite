import type { Metadata } from "next"
import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { PortfolioGrid } from "@/components/sections/portfolio-grid"

export const metadata: Metadata = {
  title: "Portfolio | Nexus Event and IT Solutions",
  description: "Explore our successful projects: 60+ events planned and 70+ broadcasting services delivered.",
}

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  )
}
