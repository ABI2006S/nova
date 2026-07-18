import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/pics/1.png",
  "/pics/2.png",
  "/pics/3.png",
  "/pics/4.png",
  "/pics/5.png",
  "/pics/6.png",
  "/pics/7.png",
  "/pics/8.png",
  "/pics/9.png"
]

export function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const jumpTo = (index: number) => {
    setActiveIndex(index)
  }

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(timer)
  }, [isHovered])

  // Touch handlers for mobile swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div
      className="relative w-full aspect-[1672/941] overflow-hidden rounded-3xl border border-border bg-surface shadow-soft group touch-pan-y"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Wrapper */}
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(activeIndex * 100) / images.length}%)`
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{ width: `${100 / images.length}%` }}
            className="h-full shrink-0 relative overflow-hidden"
          >
            <img
              src={src}
              alt={`Project screenshot ${index + 1}`}
              className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-[2000ms] ease-out group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 z-10 backdrop-blur-md bg-black/35 border border-white/10 px-3 py-1 rounded-full text-[11px] font-medium text-white/80 select-none">
        {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          prevSlide()
        }}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/60 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          nextSlide()
        }}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-black/60 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
