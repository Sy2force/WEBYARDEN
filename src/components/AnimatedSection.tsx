'use client'

import React, { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const animationClasses = {
    fadeIn: 'animate-fadeIn',
    slideInLeft: 'animate-slideInLeft', 
    slideInRight: 'animate-slideInRight',
    scaleIn: 'animate-scaleIn'
  }

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? animationClasses[animation] : 'opacity-0'
      } transition-opacity duration-300`}
    >
      {children}
    </div>
  )
}
