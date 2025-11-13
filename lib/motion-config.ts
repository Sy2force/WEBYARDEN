// Optimized Framer Motion configurations for better performance
export const motionConfig = {
  // Reduced motion for accessibility and performance
  reducedMotion: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  },

  // Page transitions optimized
  pageTransition: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] // Custom easing for smoother animation
    }
  },

  // Card animations with will-change optimization
  cardHover: {
    whileHover: { 
      y: -4,
      scale: 1.02,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    },
    whileTap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },

  // Stagger animations optimized
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  },

  // Modal animations with backdrop-filter optimization
  modal: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { 
        duration: 0.15,
        ease: "easeIn"
      }
    }
  },

  // Drawer slide animations
  drawer: {
    initial: { x: "100%" },
    animate: { 
      x: 0,
      transition: { 
        type: "spring", 
        damping: 30, 
        stiffness: 300,
        mass: 0.8
      }
    },
    exit: { 
      x: "100%",
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  },

  // Button animations optimized
  button: {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.1 }
    },
    whileTap: { 
      scale: 0.95,
      transition: { duration: 0.05 }
    }
  },

  // Loading spinner optimized
  spinner: {
    animate: { 
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }
}

// Performance optimization utilities
export const motionUtils = {
  // Throttled viewport detection
  viewport: {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  },

  // Optimized layout animations
  layout: {
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },

  // Reduced motion media query check
  prefersReducedMotion: () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  }
}

export default motionConfig
