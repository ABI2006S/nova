import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.95,
      smoothWheel: true,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Allow anchor links to use Lenis scrolling
    const handleAnchorClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null
      if (!target) return
      const id = target.getAttribute("href")
      if (!id || id === "#") return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: -80 })
      }
    }
    document.addEventListener("click", handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("click", handleAnchorClick)
      lenis.destroy()
    }
  }, [])
}
