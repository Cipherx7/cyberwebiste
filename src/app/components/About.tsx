'use client'

import Image from 'next/image'
import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'
import { MoveRight } from 'lucide-react'

export const About = () => {
  return (
    <SectionContainer id="about" title="About CyberX">
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-4"
      >
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* LEFT — LOGO */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/CyberX_about.gif"
              alt="CyberX Community Logo"
              width={180}
              height={180}
              className="rounded-full border border-[rgb(var(--color-target))]"
              priority
            />
          </div>

          {/* RIGHT — CONTENT */}
          <div className="space-y-6 text-center md:text-left text-gray-300 text-base sm:text-lg leading-relaxed">

            <p className="text-xl sm:text-2xl font-semibold text-white">
              Cyber<span className="text-[rgb(var(--color-target))]">X</span> is a
              community built to shape the next generation of cybersecurity professionals.
            </p>

            <p>
              Based in Nashik, CyberX connects students, professionals, and
              security enthusiasts who believe in learning by doing — not just
              theory.
            </p>

            {/* WHAT WE DO */}
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <span className="text-[rgb(var(--color-target))]">▸</span>{' '}
                Hands-on workshops & cybersecurity sessions
              </li>
              <li>
                <span className="text-[rgb(var(--color-target))]">▸</span>{' '}
                Capture The Flag (CTF) competitions & challenges
              </li>
              <li>
                <span className="text-[rgb(var(--color-target))]">▸</span>{' '}
                Open community learning & collaboration
              </li>
            </ul>

            <p>
              Our mission is simple —
              <span className="text-white font-medium">
                {' '}help individuals grow into confident digital defenders.
              </span>
            </p>

            {/* CTA */}
            <div className="pt-3 flex justify-center md:justify-start">
              <a
                href="https://chat.whatsapp.com/JO3LjPpnU73JflUzzkOiY9"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                rounded-lg
                border border-[rgb(var(--color-target))]
                px-6 py-3
                font-semibold
                text-[rgb(var(--color-target))]
                hover:bg-[rgb(var(--color-target))]
                hover:text-black
                transition

                relative z-20 pointer-events-auto
  "
              >
                Join the Community <MoveRight size={18} />
              </a>


            </div>

          </div>
        </div>
      </MotionDiv>
    </SectionContainer >
  )
}
