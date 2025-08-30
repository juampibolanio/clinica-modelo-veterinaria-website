import { useState, useEffect } from "react";

export function useInView(ref, options = { threshold: 0.2 }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, options);

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, options]);

    return isVisible;
}
