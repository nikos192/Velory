import React, { useEffect } from 'react'
import { siteConfig } from '../lib/siteConfig'

export default function StructuredData() {
  useEffect(() => {
    const baseUrl = 'https://velory.systems'
    const contactEmail = siteConfig.contactEmail
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "VELORY",
      "url": baseUrl,
      "logo": `${baseUrl}/velory-logo.png`,
      "image": `${baseUrl}/velory-logo.png`,
      "description": "VELORY designs fast, modern websites that make local businesses look established and generate more enquiries.",
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
        "email": contactEmail,
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
      },
      "email": contactEmail,
      "telephone": "+61497469408",
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design and Development",
            "description": "Custom website design and development for local businesses",
            "provider": {
              "@type": "LocalBusiness",
              "name": "VELORY"
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
              "name": "VELORY"
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
              "name": "VELORY"
            }
          }
        }
      ]
    }

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "VELORY Website Design",
      "serviceType": "Website design and development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "VELORY",
        "url": baseUrl
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
        "description": "Professional website design with clear timelines tailored to project scope."
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
