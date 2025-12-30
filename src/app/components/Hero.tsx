'use client'

import { motion } from 'framer-motion'
import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import { FaDiscord, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { BinaryRain } from './BinaryRain'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Binary Background */}
      <BinaryRain />

      {/* MASSIVE X — FULL DESKTOP DOMINANCE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="
            font-extrabold leading-none
            text-[65vw] sm:text-[50vw] lg:text-[40vw]
            text-[rgb(var(--color-target))]
          "
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          X
        </motion.span>
      </motion.div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />

      {/* HERO CONTENT — FULL WIDTH */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* WE ARE */}
        <MotionP
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm tracking-[0.4em] uppercase text-gray-400"
        >
          We Are
        </MotionP>

        {/* CYBERX */}
        <MotionH1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold leading-none"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <span className="block text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem]">
            <span className="text-white">Cyber</span>
            <span className="text-[rgb(var(--color-target))]">X</span>
          </span>
          <br></br>
          <span className="mt-4 block text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold">
           <br></br> Nashik's First <span className="text-[rgb(var(--color-target))]">CyberSecurity</span> Community
          </span>
        </MotionH1>

        {/* TAGLINE */}
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl text-gray-300"
        >
          Where{' '}
          <span className="text-[rgb(var(--color-target))] font-semibold">
            cybersecurity
          </span>{' '}
          meets community, collaboration, and real-world skills.
        </MotionP>

        {/* CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-14"
        >
          <Link
            href="https://chat.whatsapp.com/JO3LjPpnU73JflUzzkOiY9"
            target="_blank"
            className="
              inline-flex items-center justify-center
              rounded-2xl
              border-2 border-[rgb(var(--color-target))]
              px-12 py-4
              text-lg font-bold
              text-[rgb(var(--color-target))]
              hover:bg-[rgb(var(--color-target))]
              hover:text-black
              transition
              shadow-[0_0_40px_rgba(255,196,0,0.35)]
            "
          >
            Join CyberX Community
          </Link>
        </MotionDiv>

        {/* SOCIALS */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex gap-8 text-2xl text-[rgb(var(--color-target))]"
        >
          <a href="https://chat.whatsapp.com/JO3LjPpnU73JflUzzkOiY9" target="_blank">
            <FaWhatsapp className="hover:scale-125 hover:text-[rgb(var(--color-accent))] transition" />
          </a>
          <a href="https://www.instagram.com/cyberx.nashik" target="_blank">
            <FaInstagram className="hover:scale-125 hover:text-[rgb(var(--color-accent))] transition" />
          </a>
          <a href="https://in.linkedin.com/company/cyberx-nashik-community" target="_blank">
            <FaLinkedin className="hover:scale-125 hover:text-[rgb(var(--color-accent))] transition" />
          </a>
          <a href="https://discord.gg/eTq4cnDQ" target="_blank">
            <FaDiscord className="hover:scale-125 hover:text-[rgb(var(--color-accent))] transition" />
          </a>
        </MotionDiv>
      </div>
    </section>
  )
}
