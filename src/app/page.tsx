import { About } from './components/About'
import { CTFs } from './components/CTFs'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Events } from './components/Events'
import { SocialLinks } from './components/SocialLinks'
import { Partners } from './components/Partners'
import Team from './components/Team'

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-10 sm:px-6">
        <Hero />
        <About />
        <CTFs />
        <Events />
        <Partners />
        <Team />
        <Contact />
        <SocialLinks />
      </main>
    </>
  )
}
