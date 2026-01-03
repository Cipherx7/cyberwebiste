'use client'

import { useState } from 'react'
import { SectionContainer } from '../components/SectionContainer'
import { CyberCalendar } from '../components/Events/CyberCalendar'
import { EventModal } from '../components/Events/EventModal'
import { EventGallery } from '../components/Events/EventGallery'
import { eventsData, getEventStatus, eventType } from '../utils/data'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, ExternalLink, Activity } from 'lucide-react'
import { MotionDiv } from '../lib/motion'

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<eventType | null>(null)

    // Sort events by date (upcoming first, then past)
    const sortedEvents = [...eventsData].sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return dateB - dateA // Most recent first
    })

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Live':
                return 'bg-green-500/10 text-green-400 border-green-500/50'
            case 'Upcoming':
                return 'bg-blue-500/10 text-blue-400 border-blue-500/50'
            case 'Completed':
                return 'bg-gray-600/10 text-gray-400 border-gray-600/50'
            default:
                return 'bg-gray-500/10 text-white'
        }
    }

    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.05),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            <SectionContainer id="events" title="CyberX Events Calendar">
                {/* BACK BUTTON */}
                <Link
                    href="/"
                    className="relative z-10 inline-flex items-center gap-2 mb-10 text-gray-400 hover:text-target hover:translate-x-[-5px] transition-all"
                >
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                {/* INTRO TEXT */}
                <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 rounded-full border border-target/30 bg-target/5">
                        <Calendar className="text-target" size={20} />
                        <span className="text-target font-semibold tracking-wide uppercase text-sm">
                            Community Events & Workshops
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
                        Stay Updated with our <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-white via-target to-target bg-clip-text text-transparent">
                            Latest Operations
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Browse upcoming workshops, CTF competitions, webinars, and community meetups.
                        Click on highlighted dates or cards to view operational details.
                    </p>
                </div>

                {/* TWO COLUMN LAYOUT */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10 mb-20">

                    {/* LEFT: EVENT CARDS */}
                    <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 scrollbar-custom pb-20">
                        <div className="sticky top-0 bg-black/95 backdrop-blur-xl py-4 z-20 border-b border-white/10 mb-4">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <Activity size={24} className="text-target" />
                                Event Logs
                            </h3>
                        </div>

                        {sortedEvents.map((event, index) => {
                            const status = getEventStatus(event.date)
                            const eventDate = new Date(event.date)

                            return (
                                <MotionDiv
                                    key={event.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <button
                                        onClick={() => setSelectedEvent(event)}
                                        className="
                      w-full text-left
                      bg-secondary/60
                      backdrop-blur-md
                      border border-white/10
                      rounded-2xl
                      p-5
                      hover:border-target
                      hover:bg-target/5
                      hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
                      hover:scale-[1.01]
                      transition-all duration-300
                      group
                      relative
                      overflow-hidden
                    "
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-target/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                                        <div className="flex items-start justify-between gap-5 relative z-10">
                                            {/* DATE BADGE */}
                                            <div className="flex-shrink-0 text-center bg-black/40 border border-white/10 rounded-xl p-3 min-w-[30px] group-hover:border-target transition-colors">
                                                <div className="text-2xl font-black text-target leading-none mb-1">
                                                    {eventDate.getDate()}
                                                </div>
                                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                                    {eventDate.toLocaleString('en-US', { month: 'short' })}
                                                </div>
                                                <div className="text-[10px] text-gray-600 mt-1">
                                                    {eventDate.getFullYear()}
                                                </div>
                                            </div>

                                            {/* EVENT INFO */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                                    <h4 className="text-lg font-bold text-white group-hover:text-target transition-colors line-clamp-1 pr-2">
                                                        {event.name}
                                                    </h4>
                                                    <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider border ${getStatusColor(status)}`}>
                                                        {status}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                                    <MapPin size={12} />
                                                    <span>{event.location}</span>
                                                </div>

                                                <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                                                    {event.description}
                                                </p>

                                                {event.registration && status === 'Upcoming' && (
                                                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-target opacity-80 group-hover:opacity-100 transition-opacity">
                                                        <ExternalLink size={12} />
                                                        <span>OPEN FOR REGISTRATION</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                </MotionDiv>
                            )
                        })}
                    </div>

                    {/* RIGHT: CALENDAR */}
                    <div className="lg:sticky lg:top-8 h-fit">
                        <MotionDiv
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative">
                                {/* Decorative Elements around calendar */}
                                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-target/20 to-transparent opacity-50 blur-lg" />
                                <CyberCalendar onSelect={setSelectedEvent} />
                            </div>
                        </MotionDiv>
                    </div>
                </div>

                {/* GALLERY SECTION */}
                <EventGallery />

                {/* EVENT MODAL */}
                {selectedEvent && (
                    <EventModal
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
            </SectionContainer>
        </div>
    )
}
