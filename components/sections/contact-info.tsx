"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Makwanpur, Nepal", "Central Development Region"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+977 XXX-XXX-XXXX", "Mon-Fri 9AM-6PM"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["hello@nexus-events.com", "info@nexus-events.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
  },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-space-grotesk font-bold mb-4">Get in touch</h2>
        <p className="text-muted-foreground">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start space-x-4 p-4 rounded-lg glass-effect"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <info.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="pt-6 border-t">
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="pt-6">
        <h3 className="font-semibold mb-4">Find Us</h3>
        <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
