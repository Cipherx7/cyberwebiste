'use client'

import { getEventStatus } from '@/app/utils/data'
import Link from 'next/link'

export const EventModal = ({ event, onClose }: any) => {
  const status = getEventStatus(event.date)

  const color =
    status === 'Live'
      ? 'bg-red-500'
      : status === 'Upcoming'
        ? 'bg-green-600'
        : 'bg-gray-500'

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-secondary rounded-2xl max-w-md w-full p-6"
      >
        {/* Status */}
        <span
          className={`inline-block mb-3 px-3 py-1 text-xs rounded-full text-white ${color}`}
        >
          {status}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold">{event.name}</h2>
        <p className="text-gray-400 text-sm">
          {event.date} • {event.location}
        </p>

        {/* Description */}
        <p className="mt-4">{event.description}</p>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          {/* Register Button */}
          {event.registration && (
            <a
              href={event.registration}
              target="_blank"
              className="block text-center bg-target text-black py-2 rounded-xl font-semibold hover:scale-105 transition"
            >
              Register Now
            </a>
          )}

          {/* Learn More / Explore More */}
          <Link
            href={`/components/Events/${event.id}`}
            className="block text-center border border-target text-target py-2 rounded-xl font-semibold hover:bg-target hover:text-black transition"
          >
            Explore More
          </Link>

        </div>
      </div>
    </div>
  )
}
