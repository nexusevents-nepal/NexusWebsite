import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { Portfolio } from "@/components/sections/portfolio"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <CTA />
    </>
  )
}
