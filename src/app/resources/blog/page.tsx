'use client'

import { SectionContainer } from '../../components/SectionContainer'
import { MotionDiv } from '../../lib/motion'
import Link from 'next/link'
import { ArrowLeft, Terminal, Activity, FileWarning } from 'lucide-react'

// Sample Blog Data - EMPTY
const blogPosts: any[] = []

export default function BlogPage() {
    return (
        <div className="bg-black min-h-screen relative overflow-hidden flex flex-col">
            {/* ANIMATED BACKGROUND GRID */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* GLOW EFFECTS */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-target opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-20">
                <SectionContainer id="blog-page" title="CyberX Blog">

                    {/* TOP NAVIGATION */}
                    <div className="max-w-7xl mx-auto w-full mb-12 px-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-target transition-colors text-sm uppercase tracking-widest font-mono"
                        >
                            <ArrowLeft size={16} /> // RETURN_ROOT
                        </Link>
                    </div>

                    {/* HERO SECTION - CENTERED */}
                    <div className="max-w-5xl mx-auto text-center mb-20 px-4">
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                                <Activity size={14} className="text-target animate-pulse" />
                                <span className="text-xs font-bold text-gray-300 tracking-wider">LIVE FEED :: ENCRYPTED</span>
                            </div>

                            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 mb-8">
                                INSIGHTS
                            </h1>

                            <div className="h-px w-24 mx-auto bg-target mb-8" />

                            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                                Decoded transmissions from the frontline of cybersecurity.
                                <br className="hidden sm:block" />
                                Vulnerability analysis, CTF teardowns, and threat intelligence.
                            </p>
                        </MotionDiv>
                    </div>

                    {/* EMPTY STATE - TERMINAL STYLE */}
                    <div className="max-w-3xl mx-auto px-4">
                        <MotionDiv
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl"
                        >
                            {/* Terminal Header */}
                            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-xs font-mono text-gray-600">bash -- CyberX-Server</div>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-12 text-center font-mono">
                                <div className="mb-6 opacity-80">
                                    <FileWarning size={48} className="mx-auto text-gray-600 mb-4" />
                                </div>

                                <div className="space-y-2 text-sm sm:text-base">
                                    <p className="text-gray-500">
                                        <span className="text-target">root@cyberx:~$</span> ./fetch_logs.sh --latest<span className="animate-pulse">_</span>
                                    </p>
                                    <p className="text-gray-400">
                                        [+] Establishing secure connection... <span className="text-green-500">Done</span>
                                    </p>
                                    <p className="text-gray-400">
                                        [+] Scanning database for artifacts...
                                    </p>
                                    <p className="text-red-400 pt-4">
                                        Error: No entries found in the active directory.
                                    </p>
                                    <p className="text-gray-600 italic pt-2">
                              // The system is awaiting new transmissions.
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <Link
                                        href="mailto:Cyberx.nashik@gmail.com"
                                        className="inline-flex items-center gap-3 px-6 py-3 border border-target text-target hover:bg-target hover:text-black transition-all duration-300 rounded text-sm uppercase tracking-wider font-bold"
                                    >
                                        <Terminal size={16} /> Initialize Input Stream
                                    </Link>
                                </div>
                            </div>
                        </MotionDiv>
                    </div>

                </SectionContainer>
            </div>
        </div>
    )
}
