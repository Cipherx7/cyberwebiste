'use client'

import { useState } from 'react'
import { SectionContainer } from '../../components/SectionContainer'
import { MotionDiv } from '../../lib/motion'
import Link from 'next/link'
import { ArrowLeft, Search, Terminal, ExternalLink, Shield, Cpu, Wifi, Database, Lock, Eye, Network, Code } from 'lucide-react'

// Sample Data
const toolsData = [
    {
        id: 1,
        name: 'Nmap',
        description: 'Network Scanner used for network discovery and security auditing. It detects open ports, running services, and OS details.',
        category: 'Network Styling',
        icon: Network,
        url: 'https://nmap.org/'
    },
    {
        id: 2,
        name: 'Metasploit',
        description: 'The world’s most used penetration testing framework. It helps security teams verify vulnerabilities and manage security assessments.',
        category: 'Exploitation',
        icon: Terminal,
        url: 'https://www.metasploit.com/'
    },
    {
        id: 3,
        name: 'Wireshark',
        description: 'The world’s foremost and widely-used network protocol analyzer. It lets you see what’s happening on your network at a microscopic level.',
        category: 'Analysis',
        icon: Eye,
        url: 'https://www.wireshark.org/'
    },
    {
        id: 4,
        name: 'Burp Suite',
        description: 'The class-leading tool for web security testing. It creates a seamless process for testing the security of your web applications.',
        category: 'Web Security',
        icon: Code,
        url: 'https://portswigger.net/burp'
    },
    {
        id: 5,
        name: 'Aircrack-ng',
        description: 'A complete suite of tools to assess WiFi network security. Focuses on Monitoring, Attacking, Testing, and Cracking.',
        category: 'Wireless',
        icon: Wifi,
        url: 'https://www.aircrack-ng.org/'
    },
    {
        id: 6,
        name: 'John the Ripper',
        description: 'A fast password cracker, currently available for many flavors of Unix, Windows, DOS, and OpenVMS. Its primary purpose is to detect weak Unix passwords.',
        category: 'Cracking',
        icon: Lock,
        url: 'https://www.openwall.com/john/'
    },
    {
        id: 7,
        name: 'SQLMap',
        description: 'An open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws.',
        category: 'Database',
        icon: Database,
        url: 'https://sqlmap.org/'
    },
    {
        id: 8,
        name: 'Hydra',
        description: 'A parallelized login cracker which supports numerous protocols to attack. It is very fast and flexible, and new modules are easy to add.',
        category: 'Brute Force',
        icon: Cpu,
        url: 'https://github.com/vanhauser-thc/thc-hydra'
    },
    {
        id: 9,
        name: 'Nikto',
        description: 'An Open Source (GPL) web server scanner which performs comprehensive tests against web servers for multiple items.',
        category: 'Web Scanning',
        icon: Search,
        url: 'https://cirt.net/Nikto2'
    },
    {
        id: 10,
        name: 'Snort',
        description: 'An open source network intrusion prevention system (NIPS) and network intrusion detection system (NIDS).',
        category: 'Defense',
        icon: Shield,
        url: 'https://www.snort.org/'
    }
]

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'Network Styling': return 'text-blue-400 border-blue-500/30 bg-blue-500/10'
        case 'Exploitation': return 'text-red-400 border-red-500/30 bg-red-500/10'
        case 'Analysis': return 'text-purple-400 border-purple-500/30 bg-purple-500/10'
        case 'Web Security': return 'text-orange-400 border-orange-500/30 bg-orange-500/10'
        case 'Wireless': return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
        case 'Cracking': return 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10'
        case 'Database': return 'text-green-400 border-green-500/30 bg-green-500/10'
        default: return 'text-gray-400 border-gray-700 bg-gray-800/50'
    }
}

export default function ToolsPage() {
    const [searchTerm, setSearchTerm] = useState('')

    // Filter Logic
    const filteredTools = toolsData.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="bg-black min-h-screen relative overflow-hidden">
            {/* BACKGROUND ELEMENTS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.05),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <SectionContainer id="tools-page" title="Cyber Security Tools">
                {/* HEADER & SEARCH */}
                <div className="max-w-7xl mx-auto mb-16 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-target hover:translate-x-[-5px] transition-all"
                    >
                        <ArrowLeft size={18} /> Back to Home
                    </Link>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                                Essential <span className="text-target">Arsenal</span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                A curated collection of industry-standard tools for penetration testing, forensic analysis, and security auditing.
                            </p>
                        </div>

                        {/* SEARCH BAR */}
                        <div className="w-full md:w-auto min-w-[300px] relative group">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-target transition-colors">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search tools..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-target focus:bg-target/5 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* TOOLS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
                    {filteredTools.map((tool, index) => {
                        const Icon = tool.icon
                        return (
                            <MotionDiv
                                key={tool.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className="h-full bg-secondary/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-target hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] hover:-translate-y-1 transition-all duration-300 md:hover:scale-[1.02] group flex flex-col">

                                    {/* CARD HEADER */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-lg bg-target/10 text-target group-hover:bg-target group-hover:text-black transition-colors">
                                            <Icon size={28} />
                                        </div>
                                        <span className={`text-xs font-mono px-2 py-1 rounded border ${getCategoryColor(tool.category)}`}>
                                            {tool.category}
                                        </span>
                                    </div>

                                    {/* CONTENT */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-target transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {tool.description}
                                    </p>

                                    {/* FOOTER */}
                                    <a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-target transition-colors mt-auto"
                                    >
                                        <span>Visit Official Site</span>
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </MotionDiv>
                        )
                    })}
                </div>

                {/* EMPTY STATE */}
                {filteredTools.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <Terminal size={48} className="mx-auto mb-4 opacity-50" />
                        <p className="text-xl">No tools found matching "{searchTerm}"</p>
                    </div>
                )}

            </SectionContainer>
        </div>
    )
}
