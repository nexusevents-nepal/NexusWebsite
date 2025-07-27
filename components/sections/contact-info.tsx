"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Makwanpurgadhi-05, Makawanpur, Nepal, 44100", "Central Development Region"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+977-9767494370", "Mon-Fri 10AM-5PM"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["contact@nexusevent.com.np", "info@nexusevents.com.np"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 10AM - 5PM", "Saturday - Sunday: Closed"],
  },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/nexuseventsolutions", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/event.nexus/", label: "Instagram" },
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
        <div className="aspect-video rounded-lg overflow-hidden">
         <iframe
            title="Google Map"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.661522763675!2d85.07818660000001!3d27.4441714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4979a8456d83%3A0x32f9c4a740cf3c7e!2sNexus%20Event%20And%20I.T.%20Solutions%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1753637840338!5m2!1sen!2snp"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
       </div>
      </div>
    </motion.div>
  )
}
