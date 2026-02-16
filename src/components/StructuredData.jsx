import React, { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Nikosta Systems",
      "url": "https://www.nikosta.app",
      "logo": "https://www.nikosta.app/og.png",
      "image": "https://www.nikosta.app/og.png",
      "description": "Nikosta Systems designs and launches modern, professional websites for local businesses with fast turnaround (often 1–2 days).",
      "areaServed": [
        {
          "@type": "City",
          "name": "Gold Coast"
        },
        {
          "@type": "State",
          "name": "Queensland"
        },
        {
          "@type": "Country",
          "name": "Australia"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gold Coast",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61497469408",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
      },
      "telephone": "+61497469408",
      "priceRange": "$$",
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design and Development",
            "description": "Custom website design and development for local businesses",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nikosta Systems"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile-First Website Design",
            "description": "Responsive, mobile-optimized websites",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nikosta Systems"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domain and Hosting Setup",
            "description": "Complete domain registration and hosting configuration",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nikosta Systems"
            }
          }
        }
      ]
    }

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Nikosta Systems Website Design",
      "serviceType": "Website design and development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nikosta Systems",
        "url": "https://www.nikosta.app"
      },
      "areaServed": {
        "@type": "City",
        "name": "Gold Coast",
        "containedIn": {
          "@type": "State",
          "name": "Queensland"
        }
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Local businesses"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "description": "Professional website design with fast turnaround (1-2 days typical)"
      }
    }

    // Add organization schema
    const orgScript = document.createElement('script')
    orgScript.type = 'application/ld+json'
    orgScript.text = JSON.stringify(organizationSchema)
    document.head.appendChild(orgScript)

    // Add service schema
    const serviceScript = document.createElement('script')
    serviceScript.type = 'application/ld+json'
    serviceScript.text = JSON.stringify(serviceSchema)
    document.head.appendChild(serviceScript)

    // Cleanup function
    return () => {
      if (orgScript.parentNode) {
        document.head.removeChild(orgScript)
      }
      if (serviceScript.parentNode) {
        document.head.removeChild(serviceScript)
      }
    }
  }, [])

  return null
}
