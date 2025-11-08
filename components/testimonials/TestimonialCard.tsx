'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 mb-6 italic">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={testimonial.avatar || '/images/default-avatar.png'}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-600">
            {testimonial.role}
          </div>
          <div className="text-sm text-primary-500 font-medium">
            {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
