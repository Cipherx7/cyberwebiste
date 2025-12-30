'use client'

import Link from 'next/link'

import { navigationLinks } from '@/app/utils/data'

export const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1))
    if (section) {
      const header = document.querySelector('header')

      if (header) {
        const headerHeight = window.getComputedStyle(header).height
        const headerHeightNumber = parseFloat(headerHeight)

        window.scrollTo({
          top: section.offsetTop - headerHeightNumber, // Ajuste para a altura do header
          behavior: 'smooth' // Rolagem suave
        })
      }
    }
  }

  return (
    <nav>
      <ul className="flex items-center gap-8 md:gap-5 sm:flex-col sm:gap-3">
        {navigationLinks.map((link, index) => {
          const isAnchorLink = link.path.startsWith('#')
          const hasSubItems = link.subItems && link.subItems.length > 0

          return (
            <li key={index} className="relative group">
              <Link
                className={`relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100 ${hasSubItems ? 'gap-1' : ''}`}
                href={link.path}
                scroll={false}
                onClick={(e) => {
                  if (isAnchorLink && !hasSubItems) {
                    e.preventDefault()
                    scrollToSection(link.path)
                  }
                }}
              >
                {link.label}
                {hasSubItems && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-180 transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>

              {/* DROPDOWN MENU */}
              {hasSubItems && (
                <ul className="absolute left-0 top-full pt-4 hidden group-hover:block min-w-[200px] z-50">
                  <div className="bg-[rgb(var(--color-secondary))] border border-[rgba(var(--color-target),0.2)] rounded-xl p-2 shadow-2xl backdrop-blur-md">
                    {link.subItems?.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={sub.path}
                          className="block px-4 py-3 rounded-lg hover:bg-[rgba(var(--color-target),0.1)] hover:text-[rgb(var(--color-target))] text-gray-300 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
