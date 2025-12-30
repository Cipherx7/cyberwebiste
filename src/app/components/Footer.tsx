'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Mail, Github } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-white/10 bg-black pt-16 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* BRAND */}
          <div className="max-w-md">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tighter mb-6 group">
              Cyber<span className="text-[rgb(var(--color-target))] group-hover:text-white transition-colors">X</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              A community-driven platform for cybersecurity enthusiasts.
              Bridging the gap between theory and real-world exploitation through CTFs, workshops, and research.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-[rgb(var(--color-target))] hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-[rgb(var(--color-target))] hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-[rgb(var(--color-target))] hover:text-black transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* LINKS GROUP */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            {/* LINK COLUMN 1 */}
            <div>
              <h3 className="font-bold text-white mb-6 tracking-wider uppercase text-sm">Navigation</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-[rgb(var(--color-target))] transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[rgb(var(--color-target))] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[rgb(var(--color-target))] transition-colors">Events</Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[rgb(var(--color-target))] transition-colors">Team</Link>
                </li>
              </ul>
            </div>

            {/* LINK COLUMN 2 */}
            <div>
              <h3 className="font-bold text-white mb-6 tracking-wider uppercase text-sm">Resources</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link href="/ctfs" className="hover:text-[rgb(var(--color-target))] transition-colors">CTF Arena</Link>
                </li>
                <li>
                  <Link href="/resources/tools" className="hover:text-[rgb(var(--color-target))] transition-colors">Tools Library</Link>
                </li>
                <li>
                  <Link href="/resources/blog" className="hover:text-[rgb(var(--color-target))] transition-colors">Security Blog</Link>
                </li>
                <li>
                  <Link href="/resources/pdfs" className="hover:text-[rgb(var(--color-target))] transition-colors">Archives</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} CyberX. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="mailto:Cyberx.nashik@gmail.com" className="hover:text-[rgb(var(--color-target))] transition-colors flex items-center gap-2">
              <Mail size={14} /> Cyberx.nashik@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
