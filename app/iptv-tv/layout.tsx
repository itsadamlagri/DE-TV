// app/iptv-tv/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/iptv-tv`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `IPTV TV Deutschland | 36.000 Live TVs in 4K & Filme`
);

const PAGE_DESCRIPTION = clampDescription(
  `IPTV TV Deutschland streamen: 36.000 Live TVs, 120.000 Filme & Serien in 4K. Kostenlos testen, WhatsApp Setup, ohne Vertrag.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv tv',
    'iptv tv deutschland',
    'iptv tv sender',
    'iptv tv streaming',
    'iptv tv anbieter',
    'besten iptv tv',
    'iptv deutschland',
    'iptv kaufen',
    'besten iptv anbieter',
    'iptv abonnement deutschland',
    'iptv service deutschland',
    '4k iptv',
    '4k iptv kaufen',
    'iptv extreme',
    'iptv ohne vertragslaufzeit',
    'kostenlos iptv test',
    'bundesliga iptv live',
    'champions league iptv stream',
    'formel 1 iptv deutschland',
    'german iptv',
    'iptv germany',
    'smart tv iptv anbieter',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'de-DE': PAGE_URL,
      'de-AT': PAGE_URL,
      'de-CH': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `IPTV TV Deutschland - 36.000 Live TVs in 4K IPTV Qualität`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'entertainment',
};

const IPTVTVPageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `IPTV TV Deutschland streamen: 36.000 Live TVs, 120.000 Filme & Serien in 4K. Kostenlos testen, WhatsApp Setup, ohne Vertrag.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },

      // WebSite
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - IPTV TV Anbieter Deutschland`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'de-DE',
      },

      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${PAGE_URL}/#product` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },

      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'IPTV TV', item: PAGE_URL },
        ],
      },

      // Product
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'IPTV TV Deutschland Abonnement',
        sku: 'IPTV-TV-DE',
        category: 'Streaming Service',
        description: `IPTV TV Deutschland streamen: 36.000 Live TVs, 120.000 Filme & Serien in 4K. Kostenlos testen, WhatsApp Setup, ohne Vertrag.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Gerät - 3 Monate',
            priceCurrency: 'EUR',
            price: '39.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 3-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 6 Monate',
            priceCurrency: 'EUR',
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 6-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 12 Monate',
            priceCurrency: 'EUR',
            price: '79.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 12-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 3 Monate',
            priceCurrency: 'EUR',
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 3-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 6 Monate',
            priceCurrency: 'EUR',
            price: '79.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 6-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 12 Monate',
            priceCurrency: 'EUR',
            price: '129.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 12-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 3 Monate',
            priceCurrency: 'EUR',
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 3-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 6 Monate',
            priceCurrency: 'EUR',
            price: '119.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 6-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 12 Monate',
            priceCurrency: 'EUR',
            price: '169.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV TV 12-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
        ],
      },

      // FAQPage
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist IPTV TV und wie funktioniert es?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IPTV TV (Internet Protocol Television) überträgt Fernsehsender und Videos über Ihre Internetverbindung statt über Kabel oder Satellit. Mit IPTV Deutschland streamen Sie 36.000 Live TVs und 120.000 Filme und Serien in 4K IPTV Qualität auf jedem Gerät.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Geräte unterstützen IPTV TV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IPTV TV funktioniert auf Amazon Firestick, Smart TVs (Samsung, LG), Android TV, Apple TV, iPhone, iPad, Windows PC, Mac und MAG/Formuler Boxen. Wir empfehlen IPTV Extreme oder IBO Player Pro für die beste Erfahrung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel kostet IPTV TV in Deutschland?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IPTV TV Pakete starten bei 39 € für 3 Monate auf 1 Gerät. Das 12-Monats-Paket kostet nur 79 € und ist der Bestseller. Multi-Screen Optionen sind verfügbar.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Sender kann ich mit IPTV TV schauen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alle deutschen Sender (ARD, ZDF, RTL, ProSieben, SAT.1, VOX), Live-Sport (Bundesliga, Champions League, Formel 1, DEL, Handball), Filme und Serien sowie tausende internationale Sender.',
            },
          },
          {
            '@type': 'Question',
            name: 'Brauche ich einen Vertrag für IPTV TV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. IPTV TV bei IPTV Deutschland läuft ohne Vertragslaufzeit. Sie wählen 3, 6 oder 12 Monate und entscheiden selbst, ob Sie verlängern. Keine automatische Verlängerung.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich IPTV TV kostenlos testen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Sie erhalten einen kostenlosen 24-Stunden IPTV Test. Schreiben Sie uns per WhatsApp und wir richten alles ein – ohne Kreditkarte, ohne Verpflichtung.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="iptv-tv-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function IPTVTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <IPTVTVPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}