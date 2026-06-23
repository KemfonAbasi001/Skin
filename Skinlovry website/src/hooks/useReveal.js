import { useState, useEffect, useRef } from "react"

function useReveal(threshold = 0.15) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(node) // only reveal once
                }
            },
            { threshold }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [threshold])

    return [ref, isVisible]
}

export default useReveal