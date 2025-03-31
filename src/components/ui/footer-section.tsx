"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa"

function Footerdemo() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const encodedEmail = encodeURIComponent(email)
    window.location.href = `https://bitbrewlabs.substack.com/subscribe?just_signed_up=true&skip_redirect_check=true&utm_medium=web&utm_source=embed&freeSignupEmail=${encodedEmail}`
  }

  return (
    <footer id="footer" className="relative border-t bg-navy text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-slate">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-12 backdrop-blur-sm bg-navy/80 border-teal/20 text-white"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-teal transition-transform hover:scale-105"
              >
                <FaPaperPlane className="h-4 w-4 text-navy" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-teal">
                Home
              </a>
              <a href="#about" className="block transition-colors hover:text-teal">
                About
              </a>
              <a href="#projects" className="block transition-colors hover:text-teal">
                Projects
              </a>
              <a href="#blog" className="block transition-colors hover:text-teal">
                Blog
              </a>
              <a
                href="https://github.com/code0adarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-teal"
              >
                GitHub
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Contact Me</h3>
            <address className="space-y-2 text-sm not-italic text-slate">
              <p>India</p>
              <p>Phone: (+91) 8018041789</p>
              <p>Email: pradhanadarsh001@gmail.com</p>
            </address>
          </div>

          {/* Social Media */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Follow Me</h3>
            <div className="mb-6 flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/adarshpradhan/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/code0adarsh" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/whos.adarsh" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/codedemon5" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-6 w-6" />
                  <span className="sr-only">X</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-slate">© 2025 Adarsh Pradhan. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-teal text-slate">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-teal text-slate">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-teal text-slate">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
