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
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[rgba(var(--color-secondary),0.6)] backdrop-blur-md border border-[rgba(var(--color-target),0.2)] p-6 sm:p-8 shadow-2xl relative z-50">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={goPrevMonth}
          disabled={!canGoPrev}
          className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center border transition-all duration-300
            ${canGoPrev
              ? 'bg-[rgba(var(--color-primary),0.5)] border-[rgba(var(--color-target),0.3)] hover:border-[rgb(var(--color-target))] hover:text-[rgb(var(--color-target))]'
              : 'bg-transparent border-transparent opacity-20 cursor-not-allowed'
            }`}
        >
          <ChevronLeft />
        </button>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
            {currentMonth.toLocaleString('en-US', { month: 'long' })}
            <span className="text-[rgb(var(--color-target))] ml-2">
              {year}
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-transparent via-[rgb(var(--color-target))] to-transparent opacity-50" />
        </div>

        <button
          onClick={goNextMonth}
          disabled={!canGoNext}
          className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center border transition-all duration-300
            ${canGoNext
              ? 'bg-[rgba(var(--color-primary),0.5)] border-[rgba(var(--color-target),0.3)] hover:border-[rgb(var(--color-target))] hover:text-[rgb(var(--color-target))]'
              : 'bg-transparent border-transparent opacity-20 cursor-not-allowed'
            }`}
        >
          <ChevronRight />
        </button>
      </div>

      {/* WEEK DAYS */}
      <div className="grid grid-cols-7 text-center mb-4">
        {days.map(d => (
          <div key={d} className="text-sm font-semibold text-gray-500 uppercase tracking-widest py-2">
            {d}
          </div>
        ))}
      </div>

      {/* CALENDAR GRID */}
      <div className="grid grid-cols-7 gap-2 sm:gap-3">
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={`empty-${i}`} />
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
              className={`
                aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all duration-300 group
                ${hasEvent
                  ? 'bg-[rgba(var(--color-target),0.15)] border border-[rgba(var(--color-target),0.5)] text-[rgb(var(--color-target))] hover:bg-[rgb(var(--color-target))] hover:text-black hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--color-target),0.4)]'
                  : 'bg-[rgba(var(--color-primary),0.4)] border border-transparent text-gray-400 hover:border-gray-700'
                }
                ${isToday ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''}
              `}
            >
              <span className={`text-sm sm:text-lg ${hasEvent ? 'font-bold' : ''}`}>
                {day}
              </span>

              {hasEvent && (
                <span className="absolute bottom-2 h-1.5 w-1.5 bg-[rgb(var(--color-target))] rounded-full group-hover:bg-black transition-colors" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
