import { animate } from "framer-motion";

// Enhanced easing curves for different scroll types
const EASING_CURVES = {
    gentle: [0.25, 0.46, 0.45, 0.94], // Smooth and professional
    dynamic: [0.68, -0.55, 0.265, 1.55], // Slight overshoot for playfulness
    quick: [0.4, 0, 0.2, 1], // Fast and snappy
} as const;

export const smoothScrollTo = (elementId: string, offset: number = 100, duration: number = 1.2) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;

    // Use different easing based on distance
    const scrollDistance = Math.abs(distance);
    let easing = EASING_CURVES.gentle;
    let scrollDuration = duration;

    if (scrollDistance > 2000) {
        // Long scroll - use faster duration and gentler easing
        scrollDuration = Math.min(duration * 1.5, 2);
        easing = EASING_CURVES.gentle;
    } else if (scrollDistance < 500) {
        // Short scroll - use quicker animation
        scrollDuration = Math.max(duration * 0.6, 0.4);
        easing = EASING_CURVES.quick;
    }

    animate(0, 1, {
        duration: scrollDuration,
        ease: easing,
        onUpdate: progress => {
            window.scrollTo(0, startPosition + distance * progress);
        },
    });
};

export const smoothScrollToTop = () => {
    const startPosition = window.pageYOffset;
    const scrollDistance = startPosition;

    // Adapt duration based on scroll distance
    const baseDuration = 1.2;
    const duration = Math.min(baseDuration + scrollDistance / 3000, 2.5);

    animate(0, 1, {
        duration,
        ease: EASING_CURVES.gentle,
        onUpdate: progress => {
            window.scrollTo(0, startPosition * (1 - progress));
        },
    });
};

// Enhanced hook with performance optimizations
export const useSmoothScroll = () => {
    const scrollToSection = (sectionId: string) => {
        // Cancel any ongoing animations
        window.requestAnimationFrame(() => {
            smoothScrollTo(sectionId, 100);
        });
    };

    const scrollToTop = () => {
        window.requestAnimationFrame(() => {
            smoothScrollToTop();
        });
    };

    return { scrollToSection, scrollToTop };
};
