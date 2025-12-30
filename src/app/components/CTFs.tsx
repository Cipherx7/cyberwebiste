'use client'

import Image from 'next/image'
import { MotionDiv, MotionP } from '../lib/motion'
import Link from 'next/link'
import { SectionContainer } from './SectionContainer'
import { ArrowRight, Flag } from 'lucide-react'

export const CTFs = () => {
  return (
    <SectionContainer id="ctfs" title="CTFs">
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl px-4 text-center"
      >
        {/* Logos */}
        <div className="flex items-center justify-center gap-10 mb-10">
          <Image
            src="/cyberX.png"
            alt="CyberX"
            width={120}
            height={120}
            className="rounded"
          />
          <span className="text-4xl text-[rgb(var(--color-target))] font-bold">
            ×
          </span>
          <Image
            src="/ctf.jpeg"
            alt="CTF"
            width={120}
            height={120}
            className="rounded"
          />
        </div>

        {/* Heading Line */}
        <p className="mb-4 text-xl sm:text-2xl font-semibold text-white">
          Where learning turns into real-world cybersecurity battles.
        </p>

        {/* Description */}
        <MotionP
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mx-auto max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed"
        >
          At{' '}
          <span className="text-[rgb(var(--color-target))] font-semibold">
            CyberX
          </span>
          , CTFs are more than competitions — they’re hands-on playgrounds where
          skills are tested under pressure, teams collaborate, and curiosity
          turns into expertise.
        </MotionP>

        {/* CTF TYPES */}
        <ul className="mt-6 mb-8 space-y-2 text-sm sm:text-base text-gray-300">
          <li>
            <span className="text-[rgb(var(--color-target))]">▸</span>{' '}
            Jeopardy-style challenges (Web, Crypto, Forensics, Pwn)
          </li>
          <li>
            <span className="text-[rgb(var(--color-target))]">▸</span>{' '}
            Attack & Defense (Red vs Blue team scenarios)
          </li>
          <li>
            <span className="text-[rgb(var(--color-target))]">▸</span>{' '}
            Beginner-friendly & advanced level competitions
          </li>
        </ul>

        <p className="text-gray-400 text-sm sm:text-base">
          No matter your level, there’s always a flag waiting to be captured. 🚩
        </p>

        {/* CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-10"
        >
          <Link
            href="/ctfs"
            className="
    inline-flex items-center justify-center gap-2
    rounded-lg
    border border-[rgb(var(--color-target))]
    px-7 py-3
    font-semibold
    text-[rgb(var(--color-target))]
    hover:bg-[rgb(var(--color-target))]
    hover:text-black
    transition

    relative z-20 pointer-events-auto
  "
          >
            Explore Upcoming CTFs <ArrowRight size={18} />
          </Link>
        </MotionDiv>
      </MotionDiv>
    </SectionContainer>
  )
}
