import HeroSection from '@/components/home/HeroSection'
import FeaturedServices from '@/components/home/FeaturedServices'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedServices />
      <StatsSection />
      <TestimonialsCarousel />
    </div>
  )
}
