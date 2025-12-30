import { MotionDiv } from '../lib/motion'

import { Github, Linkedin } from 'lucide-react'

const iconSize = { width: 28, height: 28 }

const socialData = [
  {
    link: '',
    icon: <Github width={iconSize.width} height={iconSize.height} />
  },
  {
    link: '',
    icon: <Linkedin width={iconSize.width} height={iconSize.height} />
  }
]

export const Footer = () => {
  return (
    <footer className="px-10 sm:px-6">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="mx-auto flex w-full max-w-5xl items-center justify-between border-t py-8 text-lg sm:flex-col sm:gap-y-6"
      >
        <div className="relative z-50">
  <p className="text-sm text-gray-400">
    © 2026 / Developed by{' '}
    <a
      href="https://sanketbhamare.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:underline"
      style={{ pointerEvents: 'auto' }}
    >
      Sanket Bhamare
    </a>
  </p>
</div>



      </MotionDiv>
    </footer>
  )
}
