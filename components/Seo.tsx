import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  canonical?: string; // optional absolute canonical override
}

const siteUrlFallback = 'https://apexaestheticsbyliv.co.uk';

const Seo: React.FC<SeoProps> = ({ title, description, path, image, type = 'website', canonical }) => {
  const baseFromEnv = import.meta.env.VITE_SITE_URL as string | undefined;
  const baseUrl = (baseFromEnv || siteUrlFallback).replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path || ''}`;
  const url = canonical || `${baseUrl}${normalizedPath}`;
  const imageUrl = image || `${baseUrl}/images/apex.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Apex Clinic" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Seo;
