'use client';

import { useEffect } from 'react';

export default function EmailJSLoader() {
  useEffect(() => {
    // Load EmailJS script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS when script loads
      if ((window as any).emailjs) {
        (window as any).emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}
