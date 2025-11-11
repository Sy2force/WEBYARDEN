const fs = require('fs');
const path = require('path');

// Create placeholder images for all services
const serviceImages = [
  'website-vitrine.jpg',
  'website-corporate.jpg',
  'landing-page.jpg',
  'web-app.jpg',
  'portfolio.jpg',
  'blog.jpg',
  'ecommerce-basic.jpg',
  'ecommerce-premium.jpg',
  'ecommerce-mobile.jpg',
  'marketplace.jpg',
  'subscription.jpg',
  'logo-design.jpg',
  'brand-identity.jpg',
  'ui-ux.jpg',
  'print-design.jpg',
  'packaging.jpg',
  'seo-audit.jpg',
  'seo-optimization.jpg',
  'google-ads.jpg',
  'social-media.jpg',
  'email-marketing.jpg',
  'content-marketing.jpg',
  'ios-app.jpg',
  'android-app.jpg',
  'react-native.jpg',
  'flutter-app.jpg',
  'pwa.jpg',
  'maintenance.jpg',
  'hosting.jpg',
  'domain.jpg',
  'ssl.jpg',
  'backup.jpg',
  'security.jpg',
  'performance.jpg',
  'analytics.jpg',
  'consulting.jpg',
  'training.jpg',
  'audit.jpg',
  'migration.jpg',
  'integration.jpg',
  'api.jpg',
  'database.jpg',
  'devops.jpg',
  'cloud.jpg',
  'monitoring.jpg',
  'testing.jpg',
  'documentation.jpg',
  'support.jpg'
];

// Create SVG placeholder for each image
const createSVGPlaceholder = (filename, width = 400, height = 300) => {
  const name = filename.replace('.jpg', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${filename.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad${filename.replace(/[^a-zA-Z0-9]/g, '')})" />
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">${name}</text>
  <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="rgba(255,255,255,0.8)">Service Image</text>
</svg>`;
};

// Ensure directory exists
const servicesDir = path.join(__dirname, '..', 'public', 'images', 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Create placeholder images
serviceImages.forEach(filename => {
  const svgContent = createSVGPlaceholder(filename);
  const svgPath = path.join(servicesDir, filename.replace('.jpg', '.svg'));
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created placeholder: ${filename.replace('.jpg', '.svg')}`);
});

console.log(`\nCreated ${serviceImages.length} placeholder images in public/images/services/`);
console.log('Note: Update data/services.ts to use .svg extensions instead of .jpg');
