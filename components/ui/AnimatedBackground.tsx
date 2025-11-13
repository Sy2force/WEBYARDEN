'use client'

import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  variant?: 'gradient' | 'particles' | 'geometric' | 'minimal'
  intensity?: 'low' | 'medium' | 'high'
  colors?: {
    primary: string
    secondary: string
    accent?: string
  }
  className?: string
  animate?: boolean
}

const AnimatedBackground = memo(({ 
  variant = 'gradient',
  intensity = 'medium', 
  colors = { primary: 'indigo', secondary: 'purple', accent: 'pink' },
  className = '',
  animate = true 
}: AnimatedBackgroundProps) => {

  // Optimized animation variants based on intensity
  const animationConfig = useMemo(() => {
    const baseConfig = {
      low: { duration: 20, scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] },
      medium: { duration: 15, scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] },
      high: { duration: 10, scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }
    }
    return baseConfig[intensity]
  }, [intensity])

  // Generate geometric shapes based on variant
  const geometricShapes = useMemo(() => {
    if (variant !== 'geometric') return []
    
    return Array.from({ length: intensity === 'low' ? 3 : intensity === 'medium' ? 5 : 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 2
    }))
  }, [variant, intensity])

  // Generate particles
  const particles = useMemo(() => {
    if (variant !== 'particles') return []
    
    const count = intensity === 'low' ? 15 : intensity === 'medium' ? 25 : 40
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 10 + 10
    }))
  }, [variant, intensity])

  const renderGradientBackground = () => (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-${colors.primary}-500/20 via-${colors.secondary}-500/10 to-${colors.accent || colors.primary}-500/20`}
        animate={animate ? {
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        } : {}}
        transition={{
          duration: animationConfig.duration,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tl from-${colors.secondary}-400/15 via-transparent to-${colors.primary}-400/15`}
        animate={animate ? {
          scale: animationConfig.scale,
          opacity: animationConfig.opacity,
        } : {}}
        transition={{
          duration: animationConfig.duration * 0.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )

  const renderParticles = () => (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-${colors.primary}-400/30`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={animate ? {
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          } : {}}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )

  const renderGeometric = () => (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {geometricShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute border border-${colors.primary}-300/20 rounded-xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={animate ? {
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          } : {}}
          transition={{
            duration: animationConfig.duration + shape.delay,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )

  const renderMinimal = () => (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b from-${colors.primary}-50/30 to-${colors.secondary}-50/20`}
        animate={animate ? {
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{
          duration: animationConfig.duration,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )

  const backgroundRenderers = {
    gradient: renderGradientBackground,
    particles: renderParticles,
    geometric: renderGeometric,
    minimal: renderMinimal
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {backgroundRenderers[variant]()}
    </div>
  )
})

AnimatedBackground.displayName = 'AnimatedBackground'

export default AnimatedBackground
