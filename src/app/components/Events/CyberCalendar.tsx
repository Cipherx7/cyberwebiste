'use client'

import { useState } from 'react'
import { eventsData } from '@/app/utils/data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const START_YEAR = 2025
const END_YEAR = 2030

export const CyberCalendar = ({ onSelect }: { onSelect: (event: any) => void }) => {
  const today = new Date()

  // ✅ SAFE INITIAL MONTH
  const initialDate =
    today.getFullYear() < START_YEAR
      ? new Date(START_YEAR, 0, 1)
      : today.getFullYear() > END_YEAR
      ? new Date(END_YEAR, 11, 1)
      : new Date(today.getFullYear(), today.getMonth(), 1)

  const [currentMonth, setCurrentMonth] = useState(initialDate)

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // 🔹 Event lookup
  const eventsMap = new Map(
    eventsData.map(e => {
      const d = new Date(e.date)
      return [`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`, e]
    })
  )

  // 🔹 Navigation limits
  const canGoPrev = year > START_YEAR || (year === START_YEAR && month > 0)
  const canGoNext = year < END_YEAR || (year === END_YEAR && month < 11)

  // ✅ SIMPLE + RELIABLE MONTH SWITCH
  const goPrevMonth = () => {
    if (!canGoPrev) return
    const d = new Date(currentMonth)
    d.setMonth(d.getMonth() - 1)
    setCurrentMonth(d)
  }

  const goNextMonth = () => {
    if (!canGoNext) return
    const d = new Date(currentMonth)
    d.setMonth(d.getMonth() + 1)
    setCurrentMonth(d)
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[rgb(var(--color-secondary))] p-6 sm:p-8 shadow-2xl relative z-50">
      {/* HEADER */}
       <div className="flex items-center justify-between mb-8">
        <button
          onClick={goPrevMonth}
          disabled={!canGoPrev}
          className={`h-12 w-12 rounded-full flex items-center justify-center
            ${canGoPrev
              ? 'bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-secondary-hover))]'
              : 'bg-gray-700 opacity-40 cursor-not-allowed'
            }`}
        >
          <ChevronLeft />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold">
          {currentMonth.toLocaleString('en-US', {
            month: 'long',
            year: 'numeric'
          })}
        </h2>

        <button
          onClick={goNextMonth}
          disabled={!canGoNext}
          className={`h-12 w-12 rounded-full flex items-center justify-center
            ${canGoNext
              ? 'bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-secondary-hover))]'
              : 'bg-gray-700 opacity-40 cursor-not-allowed'
            }`}
        >
          <ChevronRight />
        </button>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 text-center text-gray-400 mb-3">
        {days.map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* CALENDAR GRID */}
      <div className="grid grid-cols-7 gap-3">
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={i} />
        ))}

        {Array(daysInMonth).fill(null).map((_, i) => {
          const day = i + 1
          const key = `${year}-${month}-${day}`
          const hasEvent = eventsMap.has(key)

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()

          return (
            <button
              key={day}
              onClick={() => hasEvent && onSelect(eventsMap.get(key))}
              className={`h-20 rounded-xl flex items-center justify-center relative
                ${hasEvent
                  ? 'bg-[rgb(var(--color-target))] text-black font-bold hover:scale-105'
                  : 'bg-[rgb(var(--color-primary))] text-gray-400'
                }
                ${isToday ? 'ring-2 ring-yellow-400' : ''}
              `}
            >
              {day}
              {hasEvent && (
                <span className="absolute bottom-2 h-2 w-2 bg-black rounded-full" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
