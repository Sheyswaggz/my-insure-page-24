/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Enable SWC minification for better performance
  swcMinify: true,

  // Styled Components configuration
  compiler: {
    styledComponents: {
      // Enable display names in development for better debugging
      displayName: process.env.NODE_ENV === 'development',
      // Enable SSR support
      ssr: true,
      // Add file name and line number to component names in development
      fileName: process.env.NODE_ENV === 'development',
      // Remove dead code in production
      minify: process.env.NODE_ENV === 'production',
      // Transpile styled-components for better performance
      transpileTemplateLiterals: true,
      // Enable pure annotation for better tree shaking
      pure: true,
    },
  },

  // Image optimization configuration
  images: {
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    // Configure image domains for external images
    domains: [],
    // Enable image optimization
    unoptimized: false,
    // Configure image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Set minimum cache TTL for optimized images
    minimumCacheTTL: 60,
  },

  // Performance optimizations
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: ['styled-components'],
    // Enable turbo mode for faster builds
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },

  // Bundle optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Create separate chunk for styled-components
          styledComponents: {
            name: 'styled-components',
            test: /[\/]node_modules[\/](styled-components)[\/]/,
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          // Create separate chunk for React
          react: {
            name: 'react',
            test: /[\/]node_modules[\/](react|react-dom)[\/]/,
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
        },
      };
    }

    // Add bundle analyzer in analyze mode
    if (process.env.ANALYZE === 'true') {
      // Dynamic import for bundle analyzer to avoid ES module issues
      import('@next/bundle-analyzer').then(({ default: bundleAnalyzer }) => {
        const { BundleAnalyzerPlugin } = bundleAnalyzer();
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: isServer
              ? '../analyze/server.html'
              : './analyze/client.html',
          })
        );
      }).catch(() => {
        // Fallback if bundle analyzer is not available
        console.warn('Bundle analyzer not available');
      });
    }

    // Optimize for production builds
    if (!dev) {
      // Enable tree shaking for styled-components
      config.resolve.alias = {
        ...config.resolve.alias,
        'styled-components': 'styled-components/dist/styled-components.browser.esm.js',
      };
    }

    return config;
  },

  // Environment variables configuration
  env: {
    // Feature flag for landing page
    LANDING_PAGE_ENABLED: process.env.LANDING_PAGE_ENABLED || 'true',
    // Build information
    BUILD_ID: process.env.BUILD_ID || 'development',
    BUILD_TIME: new Date().toISOString(),
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // Redirects configuration
  async redirects() {
    return [
      // Add any necessary redirects here
    ];
  },

  // Rewrites configuration
  async rewrites() {
    return [
      // Add any necessary rewrites here
    ];
  },

  // Output configuration
  output: 'standalone',

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Configure trailing slash behavior
  trailingSlash: false,

  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Development configuration
  ...(process.env.NODE_ENV === 'development' && {
    // Enable fast refresh
    fastRefresh: true,
    // Disable type checking in development for faster builds
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
  }),

  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    // Enable static optimization
    generateEtags: true,
    // Optimize fonts
    optimizeFonts: true,
    // Enable build-time optimizations
    typescript: {
      ignoreBuildErrors: false,
    },
    eslint: {
      ignoreDuringBuilds: false,
    },
  }),
};

// Conditional bundle analyzer setup
let config = nextConfig;

if (process.env.ANALYZE === 'true') {
  // Use dynamic import for ES module compatibility
  const { default: withBundleAnalyzer } = await import('@next/bundle-analyzer').then(mod => mod.default({
    enabled: true,
    openAnalyzer: true,
  })).catch(() => {
    console.warn('Bundle analyzer not available, using default config');
    return { default: (config) => config };
  });
  config = withBundleAnalyzer ? withBundleAnalyzer(nextConfig) : nextConfig;
}

export default config;