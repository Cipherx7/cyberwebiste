'use client'

import { MotionDiv } from '../lib/motion'
import { FaWhatsapp, FaInstagram, FaDiscord, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export const socialData = [
  {
    link: 'https://chat.whatsapp.com/BWn6IAb6CS7ETceveQKneO',
    icon: <FaWhatsapp size={24} />
  },
  {
    link: 'https://www.instagram.com/cyberx.nashik/?hl=en',
    icon: <FaInstagram size={24} />
  },
  // {
  //   link: 'https://discord.gg/eTq4cnDQ',
  //   icon: <FaDiscord size={24} />
  // },
  {
    link: 'https://www.linkedin.com/company/cyberx-nashik-community/',
    icon: <FaLinkedin size={24} />
  },
  {
    link: 'mailto:Cyberx.nashik@gmail.com',
    icon: <MdEmail size={24} />
  }
]

export const SocialLinks = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-4 flex flex-col items-center gap-y-4 md:hidden z-50"
    >
      {socialData.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:scale-110 transition-transform duration-300"
        >
          {social.icon}
        </a>
      ))}
      <div className="mt-4 h-24 w-[2px] origin-bottom bg-white" />
    </MotionDiv>
  )
}
