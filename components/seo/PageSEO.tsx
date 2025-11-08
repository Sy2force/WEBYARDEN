'use client';

import Head from 'next/head';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const PageSEO = ({
  title,
  description,
  keywords,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  canonicalUrl,
  noIndex = false
}: PageSEOProps) => {
  const siteName = 'Web Yarden';
  const siteUrl = 'https://webyarden.co.il';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Shay Acoca - Web Yarden" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Additional Meta */}
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Web Yarden",
            "description": "Agence digitale spécialisée en développement web et marketing digital en Israël",
            "url": siteUrl,
            "logo": `${siteUrl}/images/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+972-53-370-0551",
              "contactType": "customer service",
              "email": "webyarden@gmail.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tel Aviv",
              "addressCountry": "IL"
            },
            "sameAs": [
              "https://www.linkedin.com/company/web-yarden",
              "https://www.facebook.com/webyarden",
              "https://www.instagram.com/webyarden"
            ]
          })
        }}
      />
    </Head>
  );
};

export default PageSEO;
