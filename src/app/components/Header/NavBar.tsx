'use client'

import Link from 'next/link'
import { navigationLinks } from '@/app/utils/data'
import { ChevronDown } from 'lucide-react'

export const NavBar = ({ mobile = false }: { mobile?: boolean }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1))
    if (section) {
      const header = document.querySelector('header')
      if (header) {
        const headerHeight = header.offsetHeight
        window.scrollTo({
          top: section.offsetTop - headerHeight,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav className={mobile ? 'w-full' : ''}>
      <ul className={`flex ${mobile ? 'flex-col items-start gap-6 w-full' : 'items-center gap-10'}`}>
        {navigationLinks.map((link, index) => {
          const isAnchorLink = link.path.startsWith('#')
          const hasSubItems = link.subItems && link.subItems.length > 0

          return (
            <li key={index} className={`relative group ${mobile ? 'w-full' : ''}`}>
              <Link
                className={`
                  relative flex items-center text-sm font-medium tracking-wide transition-all duration-300
                  ${mobile
                    ? 'text-xl justify-between w-full py-2 border-b border-white/5 text-gray-300 hover:text-target'
                    : 'text-gray-300 hover:text-white py-2'
                  }
                  ${!mobile && `
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 
                    after:bg-target after:transition-all after:duration-300 
                    group-hover:after:w-full
                  `}
                `}
                href={link.path}
                scroll={false}
                onClick={(e) => {
                  if (isAnchorLink && !hasSubItems) {
                    e.preventDefault()
                    scrollToSection(link.path)
                  }
                }}
              >
                <span className={!mobile ? 'group-hover:text-glow' : ''}>{link.label}</span>
                {hasSubItems && (
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${!mobile && 'group-hover:rotate-180'}`} />
                )}
              </Link>

              {/* DROPDOWN MENU */}
              {hasSubItems && (
                mobile ? (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-white/10 ml-2">
                    {link.subItems?.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link href={sub.path} className="block py-2 text-gray-400 hover:text-target text-base transition-colors">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block min-w-[220px] z-50">
                    <div className="glass-card rounded-xl p-2 overflow-hidden animate-fade-in-up">
                      {link.subItems?.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.path}
                          className="block px-4 py-3 rounded-lg hover:bg-white/5 hover:text-target text-gray-300 transition-all duration-200 text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
