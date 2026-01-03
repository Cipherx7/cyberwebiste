'use client'

import { motion } from 'framer-motion'
import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { BinaryRain } from './BinaryRain'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-primary text-white flex flex-col justify-center"
    >
      {/* Binary Background */}
      <div className="absolute inset-0 opacity-40">
        <BinaryRain />
      </div>

      {/* MASSIVE X — FULL DESKTOP DOMINANCE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="
            font-extrabold leading-none
            text-[60vw] lg:text-[40vw]
            text-target opacity-10
            font-orbitron
          "
        >
          X
        </span>
      </motion.div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90" />

      {/* HERO CONTENT — FULL WIDTH */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-5xl mx-auto mt-20">

        {/* WE ARE */}
        <MotionP
          initial={{ opacity: 0, y: -20, letterSpacing: '0em' }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: '0.5em' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 text-sm sm:text-base tracking-[0.5em] uppercase text-target font-medium"
        >
          We Are
        </MotionP>

        {/* CYBERX */}
        <MotionH1
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="font-extrabold leading-none font-orbitron tracking-tighter"
        >
          <span className="block text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 whitespace-nowrap">
            CYBER
            <span className="text-target inline-block animate-pulse-slow">X</span>
          </span>
        </MotionH1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="mt-6"
        >
          <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            Nashik's First <span className="text-target font-semibold">CyberSecurity</span> Community
          </span>
        </motion.div>

        {/* TAGLINE */}
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed"
        >
          Where{' '}
          <span className="text-white font-medium">
            cybersecurity
          </span>{' '}
          meets community, collaboration, and real-world skills.
        </MotionP>

        {/* CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link
            href="https://chat.whatsapp.com/JO3LjPpnU73JflUzzkOiY9"
            target="_blank"
            className="
              relative group
              inline-flex items-center justify-center
              px-8 py-4
              text-lg font-bold
              text-black bg-target
              rounded-full
              overflow-hidden
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]
            "
          >
            <span className="relative z-10">Join Community</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href="#about"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase border-b border-transparent hover:border-target"
          >
            Learn More
          </Link>
        </MotionDiv>

        {/* SOCIALS */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 flex gap-8 text-2xl text-gray-400"
        >
          {[
            { Icon: FaWhatsapp, href: "https://chat.whatsapp.com/JO3LjPpnU73JflUzzkOiY9" },
            { Icon: FaInstagram, href: "https://www.instagram.com/cyberx.nashik" },
            { Icon: FaLinkedin, href: "https://in.linkedin.com/company/cyberx-nashik-community" },
            { Icon: FaDiscord, href: "https://discord.gg/eTq4cnDQ" }
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              className="hover:text-target hover:scale-110 transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}
