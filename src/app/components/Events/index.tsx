'use client'

import Link from 'next/link'
import { MotionDiv } from '../../lib/motion'
import { SectionContainer } from '../SectionContainer'
import { Calendar, ArrowRight, Clock, Users, Trophy } from 'lucide-react'

export const Events = () => {
  return (
    <SectionContainer id="events" title="Upcoming Events">
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {/* PANEL FRAME */}
        <div className="relative border border-[rgba(var(--color-target),0.4)] rounded-2xl p-8 sm:p-10 bg-[rgba(var(--color-secondary),0.6)] backdrop-blur">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm tracking-widest text-[rgb(var(--color-target))]">
              CYBERX :: EVENTS CALENDAR
            </p>
            <span className="text-xs text-green-400">● ACTIVE</span>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Never Miss
                <br />
                <span className="text-[rgb(var(--color-target))]">
                  An Event
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                From hands-on workshops to intense CTF competitions, we host events
                that challenge your skills and expand your knowledge in cybersecurity.
              </p>

              <p className="text-gray-400 text-sm">
                Check our calendar for upcoming workshops, webinars, and community meetups.
              </p>
            </div>

            {/* RIGHT – EVENT TYPES */}
            <div className="space-y-4">
              {[
                { icon: Trophy, label: 'CTF Competitions & Challenges' },
                { icon: Users, label: 'Workshops & Training Sessions' },
                { icon: Clock, label: 'Webinars & Tech Talks' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-4
                    border border-[rgba(var(--color-target),0.3)]
                    rounded-xl
                    px-5 py-4
                    text-gray-300
                    hover:border-[rgb(var(--color-target))]
                    transition
                  "
                >
                  <item.icon className="text-[rgb(var(--color-target))]" />
                  <span className="text-sm sm:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ACTION */}
          <div className="mt-12 flex justify-between items-center flex-wrap gap-6">
            <p className="text-xs text-gray-500">
              CALENDAR :: UPDATED REGULARLY
            </p>

            <Link
              href="/events"
              className="
                inline-flex items-center gap-2
                px-8 py-3
                rounded-lg
                border border-[rgb(var(--color-target))]
                text-[rgb(var(--color-target))]
                font-semibold
                hover:bg-[rgb(var(--color-target))]
                hover:text-black
                transition
              "
            >
              <Calendar size={18} />
              View Full Calendar
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </MotionDiv>
    </SectionContainer>
  )
}
