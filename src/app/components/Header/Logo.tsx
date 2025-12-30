import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/cyberx-logo.png"
        alt="CyberX Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </Link>
  )
}
