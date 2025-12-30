'use client'

import { SectionContainer } from '../../components/SectionContainer'
import Link from 'next/link'
import { ArrowLeft, FileText, Loader2, HardDrive, Lock } from 'lucide-react'
import { MotionDiv } from '../../lib/motion'

export default function PDFsPage() {
    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(var(--color-target),0.05),_transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

            <SectionContainer id="pdfs-page" title="Knowledge Archive">
                {/* BACK BUTTON */}
                <Link
                    href="/"
                    className="relative z-10 inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-[rgb(var(--color-target))] hover:translate-x-[-5px] transition-all"
                >
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                {/* MAIN CONTENT AREA */}
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[50vh] text-center">

                    <MotionDiv
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative"
                    >
                        {/* Animated Icon Wrapper */}
                        <div className="w-32 h-32 rounded-full bg-[rgba(var(--color-target),0.1)] border border-[rgba(var(--color-target),0.3)] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 animate-spin-slow opacity-30">
                                <div className="w-full h-full border-t-2 border-[rgb(var(--color-target))] rounded-full" />
                            </div>
                            <FileText size={48} className="text-[rgb(var(--color-target))] relative z-10" />
                        </div>

                        {/* Floating Elements */}
                        <MotionDiv
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -top-2 bg-gray-800 p-2 rounded-lg border border-gray-700 text-blue-400"
                        >
                            <HardDrive size={20} />
                        </MotionDiv>
                        <MotionDiv
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-4 -bottom-2 bg-gray-800 p-2 rounded-lg border border-gray-700 text-red-400"
                        >
                            <Lock size={20} />
                        </MotionDiv>
                    </MotionDiv>

                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
                        Archiving <span className="text-[rgb(var(--color-target))]">Protocols</span>
                    </h2>

                    <div className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-xl p-6 sm:p-8 max-w-2xl w-full backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-3 text-[rgb(var(--color-target))] font-mono text-lg mb-4">
                            <Loader2 size={24} className="animate-spin" />
                            <span>UPLOADING RESOURCES...</span>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            We are currently curating a comprehensive library of cybersecurity cheat sheets, whitepapers, and research documents.
                        </p>

                        <div className="mt-8 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-[rgb(var(--color-target))] w-[60%] animate-pulse rounded-full" />
                        </div>
                        <p className="text-right text-xs text-gray-500 mt-2 font-mono">ESTIMATED COMPLETION: SOON</p>
                    </div>

                </div>
            </SectionContainer>
        </div>
    )
}
