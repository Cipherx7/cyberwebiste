'use client'

import { MotionDiv } from '../../lib/motion'
import { Camera, Maximize2, ChevronRight, ChevronLeft } from 'lucide-react'
import { useState, useRef } from 'react'
import Image from 'next/image'

const galleryImages = [
    { src: '/events/event-ai.jpeg', alt: 'AI Security Workshop', id: 1 },
    { src: '/events/iot.jpeg', alt: 'IoT Security Session', id: 2 },
    { src: '/events/event-2.jpeg', alt: 'Cyber Career Guidance', id: 3 },
    { src: '/events/b2b-poster.png', alt: 'Build 2 Break CTF', id: 4 },
    { src: '/events/event-ai.jpeg', alt: 'Community Meetup', id: 5 },
    { src: '/events/iot.jpeg', alt: 'Hardware Hacking', id: 6 },
    { src: '/events/event-2.jpeg', alt: 'Networking Night', id: 7 },
]

export const EventGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef
            const scrollAmount = direction === 'left' ? -400 : 400
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <>
            <div className="mt-16 mb-12 relative z-10 w-full max-w-[95vw] mx-auto">
                <div className="flex items-center justify-between mb-6 px-4">
                    <div className="flex items-center gap-3">
                        <Camera className="text-[rgb(var(--color-target))]" size={28} />
                        <h2 className="text-3xl font-bold">
                            Mission <span className="text-[rgb(var(--color-target))]">Gallery</span>
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-[rgb(var(--color-target))] transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-[rgb(var(--color-target))] transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* HORIZONTAL SCROLL CONTAINER */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 px-4 scrollbar-custom snap-x snap-mandatory"
                >
                    {galleryImages.map((img, i) => (
                        <MotionDiv
                            key={img.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] group overflow-hidden rounded-2xl cursor-pointer snap-center border border-white/10 hover:border-[rgb(var(--color-target))]"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-lg mb-1">{img.alt}</h3>
                                    <div className="flex items-center gap-2 text-[rgb(var(--color-target))] text-sm">
                                        <Maximize2 size={14} />
                                        <span>View Fullscreen</span>
                                    </div>
                                </div>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-6xl w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                        <Image
                            src={selectedImage}
                            alt="Gallery Preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
                        onClick={() => setSelectedImage(null)}
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    )
}
