'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SectionContainer } from './SectionContainer'

const partners = [
  {
    name: 'TachyonByte Technologies',
    logo: '/partner-1.png',
    url: 'https://tachyonbyte.com/'
  },
  {
    name: 'CTF7',
    logo: '/partner-2.jpeg',
    url: 'https://ctf7.com/'
  },
  {
    name: 'Cyber Ambassador',
    logo: '/partner-3.png',
    url: 'https://www.cyberambassador.co.in/'
  },
  {
    name: 'TryNex',
    logo: '/trynex.jpg',
    url: 'https://trynexbysanket.vercel.app/'
  }
]

export const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // 🔁 Highlight next logo every 3 sec (ONLY ONE)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SectionContainer id="partners" title="Our Partners">
      <div className="relative overflow-hidden py-12" ref={containerRef}>

        {/* SLIDER */}
        <motion.div
          className="flex items-center gap-20"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: 'linear'
          }}
        >
          {[...partners, ...partners].map((partner, index) => {
            const isActive = index % partners.length === activeIndex

            return (
              <motion.a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-44 sm:w-56 text-center cursor-pointer"
                animate={{
                  scale: isActive ? 1.3 : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut'
                }}
              >
                {/* LOGO (NO BG) */}
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={140}
                  className="mx-auto object-contain"
                />

                {/* NAME */}
                <p className="mt-4 text-sm sm:text-base font-semibold text-[rgb(var(--color-target))]">
                  {partner.name}
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* EDGE FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* DESCRIPTION */}
      <p className="mx-auto mt-8 max-w-3xl text-center text-gray-300 text-base sm:text-lg leading-relaxed px-4">
        We collaborate with organizations that believe in{' '}
        <span className="text-[rgb(var(--color-target))] font-semibold">
          cybersecurity, innovation, and community-driven growth
        </span>.
        Together, we host events, build tools, and empower the next generation of
        ethical hackers.
      </p>

      {/* CTA */}
      <div className="mt-10 flex justify-center relative z-20">
        <a
          href="https://forms.gle/xVgSr1FRcV2PXgGu7"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-xl
            border border-[rgb(var(--color-target))]
            px-8 py-3
            font-semibold
            text-[rgb(var(--color-target))]
            hover:bg-[rgb(var(--color-target))]
            hover:text-black
            transition
            pointer-events-auto
          "
        >
          Become a Partner
        </a>
      </div>
    </SectionContainer>
  )
}
