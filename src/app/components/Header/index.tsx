import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

import { MotionHeader } from '@/app/lib/motion'

export const Header = () => {
  return (
    <MotionHeader
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="fixed z-30 w-full bg-primary px-10 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        {/* MOBILE VIEW (< md) */}
        <div className="flex h-20 items-center justify-between md:hidden">
          <Logo />
          <MobileMenu />
        </div>

        {/* DESKTOP VIEW (>= md) */}
        <div className="hidden h-28 items-center justify-between md:flex">
          <Logo />
          <NavBar />
          <ThemeSwitcher />
        </div>
      </div>
    </MotionHeader>
  )
}
