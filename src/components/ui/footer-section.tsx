
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Github } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-teal/10 bg-navy text-slate transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-lightSlate">Let's Connect</h2>
            <p className="mb-6 text-slate">
              Join the newsletter for updates on my latest projects and tech articles.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 border-teal/20 bg-navy text-lightSlate backdrop-blur-sm focus:border-teal focus-visible:ring-teal/30"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-teal text-navy transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-teal/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Navigation</h3>
            <nav className="space-y-2 text-sm">
              <a href="#home" className="block transition-colors hover:text-teal">
                Home
              </a>
              <a href="#about" className="block transition-colors hover:text-teal">
                About Me
              </a>
              <a href="#projects" className="block transition-colors hover:text-teal">
                Projects
              </a>
              <a href="#blog" className="block transition-colors hover:text-teal">
                Blog
              </a>
              <a href="#contact" className="block transition-colors hover:text-teal">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Contact</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Bangalore, India</p>
              <p>Email: pradhanadarsh001@gmail.com</p>
              <p>GitHub: code0adarsh</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-lightSlate">Follow Me</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-teal/20 hover:border-teal hover:bg-teal/10">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-teal/20 hover:border-teal hover:bg-teal/10">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-teal/20 hover:border-teal hover:bg-teal/10">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-teal/20 hover:border-teal hover:bg-teal/10">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with me on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-teal" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-teal data-[state=unchecked]:bg-slate/30"
              />
              <Moon className="h-4 w-4 text-teal" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-teal/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-slate">
            © 2024 Adarsh Pradhan. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-teal">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-teal">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
