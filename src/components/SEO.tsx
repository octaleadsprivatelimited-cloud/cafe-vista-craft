import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = "Sardar Cafe - Authentic Chai & Coffee in Hyderabad | Miyapur",
  description = "Experience authentic Indian chai and premium coffee at Sardar Cafe in Miyapur, Hyderabad. Traditional masala chai, Irani chai, kulhad chai, and more. Visit us or order via WhatsApp!",
  keywords = "Sardar Cafe, chai cafe Hyderabad, masala chai, Irani chai, kulhad chai, coffee shop Miyapur, best chai in Hyderabad, traditional Indian chai, cafe near me, Hafeezpet cafe, chai delivery, coffee delivery, Sardar Cafe franchise, authentic chai, Hyderabad cafe",
  image,
  url = "https://sardarcafe.com",
  type = "website",
}: SEOProps) => {
  const fullTitle = title.includes("Sardar Cafe") ? title : `${title} | Sardar Cafe`;
  const fullUrl = url.startsWith("https://") ? url : `https://sardarcafe.com${url}`;
  // Always use logo as default image, unless explicitly overridden
  const defaultImage = "https://sardarcafe.com/logo.png";
  const fullImage = image 
    ? (image.startsWith("https://") ? image : `https://sardarcafe.com${image}`)
    : defaultImage;

  return (
    <Helmet>
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/logo.png?t=20241210" />
      <link rel="shortcut icon" type="image/png" href="/logo.png?t=20241210" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png?t=20241210" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png?t=20241210" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.png?t=20241210" />
      <link rel="icon" href="/favicon.ico?t=20241210" />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sardar Cafe" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sardar Cafe" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#8B4513" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.4909;78.3363" />
      <meta name="ICBM" content="17.4909, 78.3363" />
    </Helmet>
  );
};

