'use client'

import Link from 'next/link'
import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'
import { Shield, Terminal, Radar, Users } from 'lucide-react'

export default function Team() {
  return (
    <SectionContainer id="team" title="Core Team">
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-6xl mx-auto px-4"
      >
        {/* PANEL FRAME */}
        <div className="relative border border-target/40 rounded-2xl p-8 sm:p-10 bg-secondary/60 backdrop-blur hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-500">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm tracking-widest text-target">
              CYBERX :: CORE OPS
            </p>
            <span className="text-xs text-green-400">● LIVE</span>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Core Team
                <br />
                <span className="text-target">
                  Running the System
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                CyberX operates through a small, focused core team responsible
                for strategy, security research, community operations, and
                real-world impact.
              </p>

              <p className="text-gray-400 text-sm">
                No hierarchy. No noise. Just execution.
              </p>
            </div>

            {/* RIGHT – OPS MODULES */}
            <div className="space-y-4">
              {[
                { icon: Shield, label: 'Security & Research Unit' },
                { icon: Terminal, label: 'CTF & Technical Operations' },
                { icon: Radar, label: 'Community & Outreach' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-4
                    border border-target/30
                    rounded-xl
                    px-5 py-4
                    text-gray-300
                    hover:border-target
                    transition
                  "
                >
                  <item.icon className="text-target" />
                  <span className="text-sm sm:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ACTION */}
          <div className="mt-12 flex justify-between items-center flex-wrap gap-6">
            <p className="text-xs text-gray-500">
              SYSTEM ACCESS :: RESTRICTED
            </p>

            <Link
              href="/team"
              className="
                inline-flex items-center gap-2
                px-8 py-3
                rounded-lg
                border border-target
                text-target
                font-semibold
                hover:bg-target
                hover:text-black
                transition
              "
            >
              <Users size={18} />
              View Team Profiles
            </Link>
          </div>
        </div>
      </MotionDiv>
    </SectionContainer>
  )
}
