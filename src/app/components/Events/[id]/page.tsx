'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { eventsData } from '@/app/utils/data'
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Linkedin,
  Twitter
} from 'lucide-react'

export default function EventDetailPage() {
  const { id } = useParams()
  const router = useRouter()

  const event = eventsData.find(e => e.id === id)

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Event not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full hover:bg-black transition"
        >
          <ArrowLeft size={18} /> Back
        </button>

        {/* Hero Content */}
        <div className="absolute bottom-14 left-0 right-0 z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            {event.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} /> {event.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> {event.location}
            </span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* ABOUT */}
        <section>
          <h2 className="text-2xl font-bold mb-4">About This Event</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {event.description}
          </p>

          {/* Collaboration */}
          <p className="mt-4 text-target font-semibold">
            Organized by CyberX Community in collaboration with Industry Experts
          </p>
        </section>

        {/* SPEAKERS */}
        {event.speakers && (
          <section>
            <h2 className="text-2xl font-bold mb-10 text-center">
              Meet the Speakers
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {event.speakers.map((s, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-2xl p-6 text-center hover:scale-105 transition"
                >
                  {/* Speaker Image */}
                  <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={s.image || '/speaker-placeholder.png'}
                      alt={s.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="text-sm text-gray-400">{s.role}</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Topic: {s.topic || 'Cybersecurity Trends'}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mt-4">
                    {s.linkedin && (
                      <a href={s.linkedin} target="_blank">
                        <Linkedin className="hover:text-target" />
                      </a>
                    )}
                    {s.twitter && (
                      <a href={s.twitter} target="_blank">
                        <Twitter className="hover:text-target" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GALLERY */}
        {event.gallery && (
          <section>
            <h2 className="text-2xl font-bold mb-10 text-center">
              Event Gallery
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {event.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative h-40 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt="Event gallery"
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        {event.registration && (
          <section className="text-center">
            <a
              href={event.registration}
              target="_blank"
              className="inline-block bg-target text-black px-10 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition"
            >
              Register Now
            </a>
          </section>
        )}
      </main>
    </div>
  )
}
