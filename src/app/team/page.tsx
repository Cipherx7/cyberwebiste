'use client'

import { SectionContainer } from '../components/SectionContainer'
import { ArrowLeft, User, Linkedin, Github, Instagram, Globe, Mail } from 'lucide-react'
import Link from 'next/link'
import { MotionDiv } from '../lib/motion'
import { SiMedium } from 'react-icons/si'

const teamMembers = [
  {
    id: 1,
    name: "Parth Bhandari",
    role: "Founder",
    bio: "Founder - Built CyberX to grow minds. Built CTF 7 to test them ",
    image: "/team/parth.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/parth-bhandari",
      instagram: "https://www.instagram.com/0xpartthh",
    },
    connectLink: "https://www.linkedin.com/in/parth-bhandari"
  },
  {
    id: 2,
    name: "Abhishek Pawar",
    role: "Co-founder",
    bio: "Co-founder of CyberX | Building the Future of Cyber Defense",
    image: "/team/abhishekh.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/pawar-abhishek17/",
      github: "https://github.com/cipherx7",
      instagram: "127.47.47.47",

      medium: "https://medium.com/@theartificialthinker",
    },
    connectLink: "https://www.linkedin.com/in/pawar-abhishek17/"
  },
  {
    id: 3,
    name: "Om Desale",
    role: "Founding Member and Event Manager ",
    bio: "Empowering communities through powerful events.",
    image: "/team/om_desale.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/omdesale04",
      github: "https://github.com/omdesale777",
      instagram: "https://www.instagram.com/ommdesale.me/profilecard/?igsh=MWpmZW5sYzkwMWV4MQ==",
      medium: "https://medium.com/@desaleom777",
    },
    connectLink: "https://www.linkedin.com/in/omdesale04",
  },
  {
    id: 4,
    name: "Sanika Pokharkar",
    role: "Technical & Outreach Manager ",
    bio: "More than just a “woman in tech.” I’m the threat actors should fear.",
    image: "/team/sanika.jpg",
    social: {
      linkedin: "https://linkedin.com/in/sanika-pokharkar",

      instagram: "https://www.instagram.com/sanikaa_pokharkar?igsh=MXRmbGlqMnV1MjlpbQ==",

    },
    connectLink: "https://linkedin.com/in/sanika-pokharkar"
  },
  {
    id: 5,
    name: "Sanket Bhamare",
    role: "Developer / Tech Advisor",
    bio: "I'm a Developer with a Cybersecurity Mindset — I Build Secure & Scalable Tech.",
    image: "/team/sanket.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/bhamare-sanket/",
      github: "https://github.com/sanketbhamare656",
      instagram: "https://www.instagram.com/iamsanketbhamare/",
      website: "https://sanketbhamare.vercel.app/"
    },
    connectLink: "https://www.linkedin.com/in/bhamare-sanket/"
  },
  {
    id: 6,
    name: "Pranit Chavan",
    role: "Social Media Head",
    bio: "Building bridges through every post.",
    image: "/team/pranit.jpg",
    social: {
      linkedin: "http://www.linkedin.com/in/pranit-chavan-217447291",



    },
    connectLink: "http://www.linkedin.com/in/pranit-chavan-217447291"
  },
  {
    id: 7,
    name: "Manav Mundada",
    role: "Community Manager ",
    bio: "Bringing people together, one conversation at a time",
    image: "/team/manav.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/manav-mundada-4381b028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/manav3009",
      instagram: "https://www.instagram.com/manav_mundada?igsh=MThwbHIyMXYxdXVucQ==",
      website: "http://flowcv.me/manav-mahesh-mundada-in",
    },
    connectLink: "https://www.linkedin.com/in/manav-mundada-4381b028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 8,
    name: "Pranav Patil ",
    role: "Core advisor  ",
    bio: "I Move in silence, but my Strategies speak volumes.",
    image: "/team/Pranv_patil.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/pranavpatil31706?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/pranav3714-ar",
      instagram: "https://www.instagram.com/pranavpatil_3106?igsh=MXIzYmVscGp5Y3Fxdg==",

    },
    connectLink: "https://www.linkedin.com/in/pranavpatil31706?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 9,
    name: "Sakshi Mehta",
    role: "Outreach Manager",
    bio: "Connecting the dots between talent and opportunity",
    image: "/team/Sakshi Mehta.png",
    social: {
      linkedin: "https://www.linkedin.com/in/sakshi-mehta-d-forensic?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",



    },
    connectLink: "https://www.linkedin.com/in/sakshi-mehta-d-forensic?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 10,
    name: "Om  Songire ",
    role: "PR Head",
    bio: "Build and manage brand image in the public and media",
    image: "/team/Om Songire.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/omsongire",
      github:"https://github.com/Omsongire23",
      instagram:"https://www.instagram.com/omsongire23?igsh=MWV3b3J3N25xNDZydQ=="

    },
    connectLink: "https://www.linkedin.com/in/omsongire"
  },
  {
    id: 11,
    name: "Rohit Lavre ",
    role: "Video editor",
    bio: "Turning moments into motion, for everyone to see.",
    image: "/team/Rohit.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/rohit-lavre",
      

    },
    connectLink: "https://www.linkedin.com/in/rohit-lavre"
  },
  {
    id: 12,
    name: "Yukta Geete",
    role: "Event manager",
    bio: "Yukta Geete, Ethical hacker/Entrepreneur, Turning Cyber Awareness into Unforgettable Events. ",
    image: "/team/Yukta Geete.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/yukta-geete-05b52b374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      

    },
    connectLink: "https://www.linkedin.com/in/yukta-geete-05b52b374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
]
const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  website: Globe,
  email: Mail,
  medium: SiMedium
} as const

type SocialPlatform = keyof typeof socialIcons

export default function TeamPage() {
  return (
    <div className="bg-[rgb(var(--color-primary))]">
      {/* 🟡 TITLE COLOR FIXED */}
      <SectionContainer
        id="team"
        title={
          <span className="text-[rgb(var(--color-target))]">
            The Faces Behind CyberX
          </span>
        }
      >
        {/* BACK BUTTON */}
        <Link
          href="/"
          className="
            flex items-center gap-2 mb-10
            text-gray-400
            hover:text-[rgb(var(--color-target))]
            transition
          "
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <MotionDiv
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="
                relative
                bg-[rgba(var(--color-secondary),0.75)]
                backdrop-blur
                border border-[rgba(var(--color-target),0.25)]
                rounded-2xl
                p-5
                hover:border-[rgb(var(--color-target))]
                transition
              "
            >
              {/* IMAGE */}
              <div className="w-full aspect-square mb-4 rounded-xl overflow-hidden border border-[rgba(var(--color-target),0.3)]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-1/3 h-1/3 text-gray-500" />
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">
                  {member.name}
                </h3>

                <p className="text-[rgb(var(--color-target))] text-xs mt-1 mb-3">
                  {member.role}
                </p>

                <p className="text-gray-400 text-sm mb-5">
                  {member.bio}
                </p>
              </div>

              {/* SOCIALS */}
              <div className="flex justify-center gap-2 mb-5">
                {(Object.entries(member.social) as [SocialPlatform, string][]).map(([platform, url]) => {
                  const IconComponent = socialIcons[platform]
                  return (
                    <a
                      key={platform}
                      href={platform === 'email' ? `mailto:${url}` : url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-2 rounded-full
                        bg-[rgb(var(--color-primary))]
                        border border-[rgba(var(--color-target),0.3)]
                        text-gray-300
                        hover:bg-[rgb(var(--color-target))]
                        hover:text-black
                        transition
                      "
                    >
                      <IconComponent size={14} />
                    </a>
                  )
                })}
              </div>

              {/* 🔘 CONNECT BUTTON — BLACK BG */}
              {member.connectLink ? (
                <a
                  href={member.connectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button
                    className="
                      w-full py-2 rounded-lg
                      bg-black
                      text-[rgb(var(--color-target))]
                      font-bold
                      border border-[rgb(var(--color-target))]
                      hover:bg-[rgb(var(--color-target))]
                      hover:text-black
                      transition
                    "
                  >
                    CONNECT
                  </button>
                </a>
              ) : (
                <button
                  disabled
                  className="
                    w-full py-2 rounded-lg
                    bg-gray-700
                    text-gray-400
                    font-bold
                    cursor-not-allowed
                  "
                >
                  CONNECT
                </button>
              )}
            </MotionDiv>
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}