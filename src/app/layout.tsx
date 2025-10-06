/**
 * Root layout component for insurance landing page
 * Provides ThemeProvider, global styles, and HTML metadata configuration
 * Implements responsive design with proper SEO and accessibility foundations
 */

import React from 'react';
import { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/globalStyles';

/**
 * Viewport configuration for responsive design
 * Optimized for mobile-first approach with proper scaling
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  colorScheme: 'light',
};

/**
 * SEO metadata configuration for insurance landing page
 * Comprehensive meta tags for search engines and social media
 */
export const metadata: Metadata = {
  title: {
    template: '%s | My Insure Page 24',
    default: 'My Insure Page 24 - Comprehensive Insurance Solutions',
  },
  description: 'Find the perfect insurance coverage for your needs. Compare quotes, get expert advice, and secure your future with our comprehensive insurance solutions.',
  keywords: [
    'insurance',
    'auto insurance',
    'home insurance',
    'life insurance',
    'health insurance',
    'business insurance',
    'insurance quotes',
    'coverage comparison',
    'insurance agents',
    'policy management',
  ],
  authors: [{ name: 'My Insure Page 24 Team' }],
  creator: 'My Insure Page 24',
  publisher: 'My Insure Page 24',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://myinsurepage24.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'My Insure Page 24',
    title: 'My Insure Page 24 - Comprehensive Insurance Solutions',
    description: 'Find the perfect insurance coverage for your needs. Compare quotes, get expert advice, and secure your future with our comprehensive insurance solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Insure Page 24 - Insurance Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@myinsurepage24',
    creator: '@myinsurepage24',
    title: 'My Insure Page 24 - Comprehensive Insurance Solutions',
    description: 'Find the perfect insurance coverage for your needs. Compare quotes, get expert advice, and secure your future.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  category: 'insurance',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  applicationName: 'My Insure Page 24',
  appleWebApp: {
    capable: true,
    title: 'My Insure Page 24',
    statusBarStyle: 'default',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3b82f6',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#3b82f6',
  },
};

/**
 * Root layout component interface
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Error boundary component for layout-level error handling
 */
class LayoutErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('Layout Error Boundary caught an error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Layout Error Boundary - Component stack:', errorInfo.componentStack);
    console.error('Layout Error Boundary - Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <html lang="en">
            <body>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100vh',
                  padding: '2rem',
                  fontFamily: 'system-ui, sans-serif',
                  backgroundColor: '#f9fafb',
                  color: '#111827',
                }}
              >
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Something went wrong
                </h1>
                <p style={{ fontSize: '1.125rem', marginBottom: '2rem', textAlign: 'center' }}>
                  We apologize for the inconvenience. Please refresh the page or try again later.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.375rem',
                    border: 'none',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontWeight: '500',
                  }}
                >
                  Refresh Page
                </button>
              </div>
            </body>
          </html>
        )
      );
    }

    return this.props.children;
  }
}

/**
 * Root layout component with comprehensive setup
 * Provides theme context, global styles, and proper HTML structure
 * 
 * @param children - Child components to render within the layout
 * @returns Complete HTML document structure with theme and styles
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  // Environment-based configuration
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Feature flag check for landing page
  const landingPageEnabled = process.env.NEXT_PUBLIC_LANDING_PAGE_ENABLED !== 'false';

  // Log layout initialization in development
  if (isDevelopment) {
    console.log('RootLayout: Initializing with theme and global styles', {
      landingPageEnabled,
      themeColors: theme.colors.primary,
      environment: process.env.NODE_ENV,
    });
  }

  // Handle feature flag disabled state
  if (!landingPageEnabled) {
    return (
      <html lang="en">
        <body>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              padding: '2rem',
              fontFamily: 'system-ui, sans-serif',
              backgroundColor: '#f9fafb',
              color: '#111827',
            }}
          >
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Service Temporarily Unavailable
            </h1>
            <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
              Our insurance services are currently under maintenance. Please check back soon.
            </p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning={isDevelopment}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for common external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          />
        </noscript>
        
        {/* Preload Merriweather for headings */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
          />
        </noscript>

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance hints */}
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        
        {/* Structured data for insurance business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InsuranceAgency',
              name: 'My Insure Page 24',
              description: 'Comprehensive insurance solutions for all your coverage needs',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://myinsurepage24.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://myinsurepage24.com'}/images/logo.png`,
              sameAs: [
                'https://www.facebook.com/myinsurepage24',
                'https://www.twitter.com/myinsurepage24',
                'https://www.linkedin.com/company/myinsurepage24',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-800-INSURE-24',
                contactType: 'customer service',
                availableLanguage: ['English'],
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              serviceType: [
                'Auto Insurance',
                'Home Insurance',
                'Life Insurance',
                'Health Insurance',
                'Business Insurance',
              ],
            }),
          }}
        />
      </head>
      <body>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <LayoutErrorBoundary>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div id="root-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <main id="main-content" style={{ flex: 1 }}>
                {children}
              </main>
            </div>
          </ThemeProvider>
        </LayoutErrorBoundary>

        {/* Development-only scripts */}
        {isDevelopment && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                console.log('My Insure Page 24 - Development Mode');
                console.log('Theme loaded:', ${JSON.stringify({
                  primaryColor: theme.colors.primary[500],
                  fontFamily: theme.typography.fontFamily.primary,
                })});
              `,
            }}
          />
        )}

        {/* Production analytics placeholder */}
        {isProduction && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}