export const generateLocalBusinessSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "AK Events Deli",
      "alternateName": ["AK Events", "Shalimar Events"],
      "description": "Premium event rental services in Kasaragod, Kerala. Luxury furniture, sound systems, and complete event management by Firoz Padinhar.",
      "url": "https://www.akevents-deli.com",
      "telephone": "+91-98765-43210",
      "email": "info@akevents-deli.com",
      "founder": {
        "@type": "Person",
        "name": "Firoz Padinhar"
      },
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
        "latitude": "12.4996",
        "longitude": "74.9869"
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
      "priceRange": "₹₹₹",
      "servesCuisine": "Event Management",
      "acceptsReservations": true,
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Card, UPI, Bank Transfer",
      "areaServed": [
        {
          "@type": "City",
          "name": "Kasaragod"
        },
        {
          "@type": "State", 
          "name": "Kerala"
        },
        {
          "@type": "City",
          "name": "Mangalore"
        },
        {
          "@type": "City",
          "name": "Kannur"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "12.4996",
          "longitude": "74.9869"
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Event Rental Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Luxury Furniture Rental",
              "description": "Premium chairs, sofas, buffet counters for weddings and events"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "price": "150-2000"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Sound System Rental",
              "description": "Professional audio equipment by Shalimar Sounds"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Event Decoration Services",
              "description": "Complete decoration and setup for all types of celebrations"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Priya Sharma"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Exceptional service by AK Events Deli. Firoz bhai made our wedding absolutely perfect with beautiful decorations and premium furniture. Highly recommended!"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/akevents.deli",
        "https://www.instagram.com/akevents_deli",
        "https://twitter.com/akevents_deli"
      ],
      "keywords": "AK Events Deli, Firoz Padinhar, Melparamba, Kasaragod events, Kerala wedding planners, Shalimar Sounds, luxury furniture rental, event management"
    };
  };
  