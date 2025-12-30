'use client'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const Contact = () => {
  return (
    <SectionContainer id="contact" title="Connect with CyberX">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl px-4 text-center"
      >
        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[rgba(var(--color-target),0.08)] blur-[120px]" />

        {/* CONTENT */}
        <div className="relative z-10 space-y-6">

          {/* TAGLINE */}
          <p className="text-sm tracking-widest uppercase text-[rgb(var(--color-target))]">
            Join the Network
          </p>

          {/* MAIN TEXT */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Build, Learn & Defend
            <br />
            <span className="text-[rgb(var(--color-target))]">
              with CyberX
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed">
            CyberX is a community of cybersecurity enthusiasts, ethical hackers,
            developers, and defenders working together to learn real-world
            security, share knowledge, and build a safer digital future.
          </p>

          {/* VALUE POINTS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
            {[
              'Hands-on Learning',
              'CTFs & Workshops',
              'Community & Mentorship'
            ].map((item, i) => (
              <div
                key={i}
                className="
                  rounded-xl
                  border border-[rgba(var(--color-target),0.3)]
                  px-4 py-3
                  bg-[rgba(var(--color-secondary),0.6)]
                  text-gray-300
                "
              >
                <span className="text-[rgb(var(--color-target))]">▸</span>{' '}
                {item}
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="https://chat.whatsapp.com/JO3LjPpnU73JflUzzkOiY9"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                rounded-xl
                bg-black
                border border-[rgb(var(--color-target))]
                px-10 py-4
                font-bold
                text-[rgb(var(--color-target))]
                hover:bg-[rgb(var(--color-target))]
                hover:text-black
                transition-all
              "
            >
              <MessageCircle size={20} />
              Join the Community
              <ArrowRight size={20} />
            </a>
          </MotionDiv>

          {/* FOOT NOTE */}
          <p className="mt-6 text-xs text-gray-500">
            No spam. No noise. Just cybersecurity.
          </p>
        </div>
      </MotionDiv>
    </SectionContainer>
  )
}
