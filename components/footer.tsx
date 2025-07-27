"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Event Planning", href: "/services#events" },
    { name: "Production", href: "/services#Production" },
    { name: "Web Development", href: "/services#web" },
    { name: "Consulting", href: "/services#consulting" },
  ],
  resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
  ],
}

const social = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/nexuseventsolutions/", icon: Linkedin },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/event.nexus/", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="section-padding py-16">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <img src="/nexus-no-text-logo.png" alt="Logo" className="w-7 h-7 object-contain" />
                <span className="font-space-grotesk font-bold text-xl">Nexus Events and IT Solutions</span>
              </Link>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Crafting digital experiences that inspire. From events to Production and web development, we bring
                your vision to life.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 text-primary" />
                  Hetauda, Makwanpurgadhi-05, Makawanpur, Nepal
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  contact@nexusevent.com.np
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  +977 9767494370
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-space-grotesk font-bold text-xl mb-2">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Get the latest news and updates from Nexus Event and IT Solutions.
                </p>
              </div>

              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 Nexus Event and I.T. Solutions Pvt Ltd. All rights reserved.</p>

            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
