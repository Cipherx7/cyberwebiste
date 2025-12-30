'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { MoonStar } from 'lucide-react'

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark') 
  }, [setTheme])

  return (
    <div className="text-target">
      <MoonStar />
    </div>
  )
}
