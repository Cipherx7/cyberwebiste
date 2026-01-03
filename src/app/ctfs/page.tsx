'use client'

import { SectionContainer } from '../components/SectionContainer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Flag, Shield, Terminal, AlertTriangle, Lock } from 'lucide-react'
import { MotionDiv } from '../lib/motion'

export default function CTFsPage() {
    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

            <SectionContainer id="ctfs-page" title="Capture The Flag">
                {/* BACK BUTTON */}
                <Link
                    href="/"
                    className="relative z-10 inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-target hover:translate-x-[-5px] transition-all"
                >
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                {/* MAIN CONTENT AREA */}
                <div className="relative z-10 max-w-5xl mx-auto">

                    {/* HEADER SECTION */}
                    <div className="text-center mb-16">
                        <MotionDiv
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            <div className="relative mb-6">
                                <div className="absolute -inset-4 bg-target opacity-20 blur-xl rounded-full" />
                                <Flag size={64} className="text-target relative z-10" />
                            </div>
                        </MotionDiv>

                        <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
                            CyberX <span className="text-target">CTF Arena</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Where learning turns into real-world cybersecurity battles.
                        </p>
                    </div>

                    {/* COMING SOON ALERT */}
                    <MotionDiv
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-target/5 border border-target/30 p-8 sm:p-12 text-center">
                            {/* Stripe Pattern */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_10px,rgba(250,204,21,0.03)_10px,rgba(250,204,21,0.03)_20px)] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-target text-black font-bold text-sm mb-6 animate-pulse">
                                    <AlertTriangle size={16} />
                                    SYSTEM UPGRADE IN PROGRESS
                                </div>

                                <h3 className="text-3xl sm:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-wider glitch-text">
                                    New CTFs Coming Soon
                                </h3>

                                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                                    We are currently architecting the next generation of challenges.
                                    Prepare your tools, sharpen your skills, and get ready to breach the perimeter.
                                </p>

                                {/* VISUAL DIVIDER */}
                                <div className="flex items-center justify-center gap-2 opacity-50">
                                    <div className="h-1 w-12 bg-target" />
                                    <div className="h-1 w-2 bg-target" />
                                    <div className="h-1 w-12 bg-target" />
                                </div>
                            </div>
                        </div>
                    </MotionDiv>

                    {/* WHAT TO EXPECT SECTION */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-secondary/60 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-target transition-colors"
                        >
                            <div className="mb-4 bg-blue-500/10 w-fit p-3 rounded-lg text-blue-400">
                                <Terminal size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Jeopardy Style</h4>
                            <p className="text-sm text-gray-400">
                                Classic challenges across Web, Crypto, Forensics, Reverse Engineering, and Pwn categories.
                            </p>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-secondary/60 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-target transition-colors"
                        >
                            <div className="mb-4 bg-red-500/10 w-fit p-3 rounded-lg text-red-400">
                                <Shield size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Attack & Defense</h4>
                            <p className="text-sm text-gray-400">
                                Defend your infrastructure while exploiting others. Real-time Red vs Blue scenarios.
                            </p>
                        </MotionDiv>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-secondary/60 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-target transition-colors"
                        >
                            <div className="mb-4 bg-purple-500/10 w-fit p-3 rounded-lg text-purple-400">
                                <Lock size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Diverse Difficulty</h4>
                            <p className="text-sm text-gray-400">
                                From beginner-friendly intro challenges to insane-level exploits for seasoned veterans.
                            </p>
                        </MotionDiv>
                    </div>

                </div>
            </SectionContainer>
        </div>
    )
}
