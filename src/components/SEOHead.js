import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = '/og-image.jpg',
  ogType = 'website',
  schemaData = null,
  noIndex = false
}) => {
  const baseTitle = 'Blue Stud Engineering';
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Top Electrical Engineering Services in Kenya | Power Systems & Substations`;
  
  const defaultDescription = "Leading electrical engineering company in Kenya specializing in EPC services, power systems design, HV/MV/LV substations, testing & commissioning, and renewable energy solutions. Trusted by Mombasa Cement, Devki Group & Equator Energy.";
  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = "electrical engineering Kenya, power systems design Nairobi, substation construction Kenya, EPC electrical services, HV MV LV systems, electrical testing commissioning Kenya, renewable energy engineering, industrial electrical services Nairobi";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`https://bluestudengineering.com${ogImage}`} />
      <meta property="og:image:secure_url" content={`https://bluestudengineering.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title || 'Blue Stud Engineering'} - Leading electrical engineering services in Kenya`} />
      <meta property="og:site_name" content="Blue Stud Engineering" />
      <meta property="og:locale" content="en_KE" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BlueStudEng" />
      <meta name="twitter:creator" content="@BlueStudEng" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`https://bluestudengineering.com${ogImage}`} />
      <meta name="twitter:image:alt" content={`${title || 'Blue Stud Engineering'} - Leading electrical engineering services in Kenya`} />
      {canonical && <meta name="twitter:url" content={canonical} />}
      
      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;