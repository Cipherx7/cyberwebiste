'use client'

import { useState } from 'react'
import { SectionContainer } from '../SectionContainer'
import { CyberCalendar } from './CyberCalendar'
import { EventModal } from './EventModal'

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <SectionContainer id="events" title="CyberX Events Calendar">
      <CyberCalendar onSelect={setSelectedEvent} />

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </SectionContainer>
  )
}
