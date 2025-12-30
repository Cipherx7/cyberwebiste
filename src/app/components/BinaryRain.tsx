'use client'

import { useEffect, useRef } from 'react'

export const BinaryRain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas full screen
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const binary = '01'
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops: number[] = Array(Math.floor(columns)).fill(1)

    // Speed control: Lower FPS = slower animation, Higher FPS = faster animation
    const FPS = 30 // Adjust this value: try 15 (slow), 30 (medium), 60 (fast)
    const frameDelay = 1000 / FPS
    let lastFrameTime = 0

    const draw = () => {
      if (!ctx) return

      // Semi-transparent black background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00FF00' // green text
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length))
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        // reset drop
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const loop = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(loop)

      const elapsed = currentTime - lastFrameTime
      if (elapsed > frameDelay) {
        lastFrameTime = currentTime - (elapsed % frameDelay)
        draw()
      }
    }

    loop(0)

    // Resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current!)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-0 h-full w-full bg-black opacity-20"
    />
  )
}
