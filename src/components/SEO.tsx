import Head from 'next/head';
import { seoConfig } from '@/lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = seoConfig.title,
  description = seoConfig.description,
  keywords = seoConfig.keywords,
  image = seoConfig.image,
  url = seoConfig.siteUrl,
  type = seoConfig.type
}: SEOProps) {
  const fullTitle = title === seoConfig.title ? title : `${title} | ${seoConfig.title}`;
  const fullUrl = url.startsWith('http') ? url : `${seoConfig.siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={seoConfig.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="EN" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="AK Events Deli" />
      <meta property="og:locale" content={seoConfig.locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags for Local SEO */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kasaragod, Kerala" />
      <meta name="geo.position" content="12.4996;74.9869" />
      <meta name="ICBM" content="12.4996, 74.9869" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${seoConfig.siteUrl}/#organization`,
                "name": "AK Events Deli",
                "alternateName": "AK Events",
                "founder": "Firoz Padinhar",
                "url": seoConfig.siteUrl,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${seoConfig.siteUrl}/logo.png`
                },
                "image": fullImage,
                "description": description,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Melparamba",
                  "addressLocality": "Kasaragod",
                  "addressRegion": "Kerala",
                  "postalCode": "671121",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-98765-43210",
                  "contactType": "customer service",
                  "areaServed": "Kerala",
                  "availableLanguage": ["English", "Malayalam", "Hindi"]
                },
                "sameAs": [
                  "https://www.facebook.com/akevents.deli",
                  "https://www.instagram.com/akevents_deli",
                  "https://twitter.com/akevents_deli"
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": `${seoConfig.siteUrl}/#localbusiness`,
                "name": "AK Events Deli",
                "image": fullImage,
                "url": seoConfig.siteUrl,
                "telephone": "+91-98765-43210",
                "priceRange": "₹₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Melparamba",
                  "addressLocality": "Kasaragod",
                  "addressRegion": "Kerala",
                  "postalCode": "671121",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 12.4996,
                  "longitude": 74.9869
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "10:00",
                    "closes": "18:00"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127"
                }
              },
              {
                "@type": "Service",
                "name": "Premium Event Rental Services",
                "provider": {
                  "@id": `${seoConfig.siteUrl}/#organization`
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Kerala"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Event Rental Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Luxury Furniture Rental"
                      }
                    },
                    {
                      "@type": "Offer", 
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sound System Rental"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service", 
                        "name": "Wedding Decoration Services"
                      }
                    }
                  ]
                }
              }
            ]
          })
        }}
      />
    </Head>
  );
}