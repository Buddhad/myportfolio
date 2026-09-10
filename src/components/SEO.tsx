import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({
  title = 'Buddhadeb Chhetri — A Developer. A Creator. Always Building.',
  description = 'Hi, I’m Buddhadeb Chhetri, an independent developer and creator passionate about building games, interactive experiences, and digital products.',
  canonical,
}: SEOProps) {
  const siteUrl = 'https://buddhadebchhetri.in';
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
