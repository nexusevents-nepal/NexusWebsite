import type { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Nexus Event and IT Solutions",
  description:
    "Get in touch with Nexus Event and IT Solutions. Located in Hetauda, Makwanpurgadhi-05, Makawanpur, Nepal. Ready to bring your vision to life.",
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="section-padding py-20">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}
