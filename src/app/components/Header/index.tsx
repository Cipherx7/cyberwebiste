import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

import { MotionHeader } from '@/app/lib/motion'

export const Header = () => {
  return (
    <MotionHeader
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full glass border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* MOBILE VIEW (< md) */}
        <div className="flex h-20 items-center justify-between md:hidden">
          <Logo />
          <MobileMenu />
        </div>

        {/* DESKTOP VIEW (>= md) */}
        <div className="hidden h-24 items-center justify-between md:flex">
          <Logo />
          <NavBar />
          <ThemeSwitcher />
        </div>
      </div>
    </MotionHeader>
  )
}
