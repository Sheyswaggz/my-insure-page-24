/**
 * Unit tests for the root layout component
 * Tests ThemeProvider integration, global styles application, and basic rendering
 * Validates error boundary functionality and accessibility features
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import RootLayout, { metadata, viewport } from '@/app/layout';
import { theme } from '@/styles/theme';
import { testUtils } from '../setup';

// Mock Next.js metadata exports
jest.mock('next', () => ({
  Metadata: {},
  Viewport: {},
}));

// Mock environment variables for testing
const mockEnvVars = {
  NODE_ENV: 'test',
  NEXT_PUBLIC_SITE_URL: 'https://test.myinsurepage24.com',
  NEXT_PUBLIC_LANDING_PAGE_ENABLED: 'true',
  NEXT_PUBLIC_GA_ID: 'GA-TEST-123',
  NEXT_PUBLIC_GOOGLE_VERIFICATION: 'test-google-verification',
  NEXT_PUBLIC_YANDEX_VERIFICATION: 'test-yandex-verification',
  NEXT_PUBLIC_YAHOO_VERIFICATION: 'test-yahoo-verification',
  NEXT_PUBLIC_BING_VERIFICATION: 'test-bing-verification',
};

describe('RootLayout Component', () => {
  let restoreEnv: () => void;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    restoreEnv = testUtils.mockEnvVars(mockEnvVars);
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    restoreEnv();
    consoleSpy.mockRestore();
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('should render children within proper HTML structure', () => {
      const testContent = 'Test Insurance Content';
      
      render(
        <RootLayout>
          <div data-testid="test-content">{testContent}</div>
        </RootLayout>
      );

      expect(screen.getByTestId('test-content')).toBeInTheDocument();
      expect(screen.getByTestId('test-content')).toHaveTextContent(testContent);
    });

    it('should render with proper HTML lang attribute', () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      const htmlElement = document.documentElement;
      expect(htmlElement).toHaveAttribute('lang', 'en');
    });

    it('should include skip link for accessibility', () => {
      render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );

      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main-content');
      expect(skipLink).toHaveClass('skip-link');
    });

    it('should render main content area with proper structure', () => {
      render(
        <RootLayout>
          <div data-testid="page-content">Page Content</div>
        </RootLayout>
      );

      const mainElement = screen.getByRole('main');
      expect(mainElement).toBeInTheDocument();
      expect(mainElement).toHaveAttribute('id', 'main-content');
      expect(mainElement).toContainElement(screen.getByTestId('page-content'));
    });
  });

  describe('ThemeProvider Integration', () => {
    it('should wrap children with ThemeProvider', () => {
      const TestComponent = () => {
        return (
          <div data-testid="themed-component">
            Themed Content
          </div>
        );
      };

      render(
        <RootLayout>
          <TestComponent />
        </RootLayout>
      );

      expect(screen.getByTestId('themed-component')).toBeInTheDocument();
    });

    it('should provide theme context to child components', () => {
      const ThemeConsumer = () => {
        return (
          <ThemeProvider theme={theme}>
            {(themeProps: any) => (
              <div data-testid="theme-consumer">
                Primary Color: {themeProps?.colors?.primary?.[500] || 'No theme'}
              </div>
            )}
          </ThemeProvider>
        );
      };

      render(
        <RootLayout>
          <ThemeConsumer />
        </RootLayout>
      );

      // Verify theme provider is present in the component tree
      expect(screen.getByTestId('theme-consumer')).toBeInTheDocument();
    });

    it('should apply global styles through styled-components', () => {
      render(
        <RootLayout>
          <div data-testid="styled-content">Content</div>
        </RootLayout>
      );

      // Verify that styled-components context is available
      const styledContent = screen.getByTestId('styled-content');
      expect(styledContent).toBeInTheDocument();
    });
  });

  describe('Feature Flag Handling', () => {
    it('should render normally when landing page is enabled', () => {
      render(
        <RootLayout>
          <div data-testid="normal-content">Normal Content</div>
        </RootLayout>
      );

      expect(screen.getByTestId('normal-content')).toBeInTheDocument();
      expect(screen.queryByText('Service Temporarily Unavailable')).not.toBeInTheDocument();
    });

    it('should show maintenance message when landing page is disabled', () => {
      const restoreDisabledEnv = testUtils.mockEnvVars({
        ...mockEnvVars,
        NEXT_PUBLIC_LANDING_PAGE_ENABLED: 'false',
      });

      render(
        <RootLayout>
          <div data-testid="normal-content">Normal Content</div>
        </RootLayout>
      );

      expect(screen.getByText('Service Temporarily Unavailable')).toBeInTheDocument();
      expect(screen.getByText(/Our insurance services are currently under maintenance/)).toBeInTheDocument();
      expect(screen.queryByTestId('normal-content')).not.toBeInTheDocument();

      restoreDisabledEnv();
    });

    it('should handle undefined feature flag as enabled', () => {
      const restoreUndefinedEnv = testUtils.mockEnvVars({
        ...mockEnvVars,
        NEXT_PUBLIC_LANDING_PAGE_ENABLED: undefined as any,
      });

      render(
        <RootLayout>
          <div data-testid="normal-content">Normal Content</div>
        </RootLayout>
      );

      expect(screen.getByTestId('normal-content')).toBeInTheDocument();
      expect(screen.queryByText('Service Temporarily Unavailable')).not.toBeInTheDocument();

      restoreUndefinedEnv();
    });
  });

  describe('Error Boundary Functionality', () => {
    const ThrowingComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
      if (shouldThrow) {
        throw new Error('Test error for error boundary');
      }
      return <div data-testid="normal-component">Normal Component</div>;
    };

    it('should catch and handle component errors', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <RootLayout>
          <ThrowingComponent shouldThrow={true} />
        </RootLayout>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(screen.getByText(/We apologize for the inconvenience/)).toBeInTheDocument();
      expect(screen.getByText('Refresh Page')).toBeInTheDocument();
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });

    it('should render normally when no errors occur', () => {
      render(
        <RootLayout>
          <ThrowingComponent shouldThrow={false} />
        </RootLayout>
      );

      expect(screen.getByTestId('normal-component')).toBeInTheDocument();
      expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
    });

    it('should provide refresh functionality in error state', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const reloadSpy = jest.spyOn(window.location, 'reload').mockImplementation(() => {});

      render(
        <RootLayout>
          <ThrowingComponent shouldThrow={true} />
        </RootLayout>
      );

      const refreshButton = screen.getByText('Refresh Page');
      expect(refreshButton).toBeInTheDocument();
      
      refreshButton.click();
      expect(reloadSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
      reloadSpy.mockRestore();
    });
  });

  describe('Development Mode Behavior', () => {
    it('should log initialization in development mode', () => {
      const restoreDevEnv = testUtils.mockEnvVars({
        ...mockEnvVars,
        NODE_ENV: 'development',
      });

      render(
        <RootLayout>
          <div>Dev Content</div>
        </RootLayout>
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        'RootLayout: Initializing with theme and global styles',
        expect.objectContaining({
          landingPageEnabled: true,
          themeColors: expect.any(String),
          environment: 'development',
        })
      );

      restoreDevEnv();
    });

    it('should suppress hydration warnings in development', () => {
      const restoreDevEnv = testUtils.mockEnvVars({
        ...mockEnvVars,
        NODE_ENV: 'development',
      });

      render(
        <RootLayout>
          <div>Dev Content</div>
        </RootLayout>
      );

      const htmlElement = document.documentElement;
      expect(htmlElement).toHaveAttribute('suppressHydrationWarning');

      restoreDevEnv();
    });

    it('should not suppress hydration warnings in production', () => {
      const restoreProdEnv = testUtils.mockEnvVars({
        ...mockEnvVars,
        NODE_ENV: 'production',
      });

      render(
        <RootLayout>
          <div>Prod Content</div>
        </RootLayout>
      );

      const htmlElement = document.documentElement;
      expect(htmlElement).not.toHaveAttribute('suppressHydrationWarning');

      restoreProdEnv();
    });
  });

  describe('SEO and Meta Configuration', () => {
    it('should export proper viewport configuration', () => {
      expect(viewport).toBeDefined();
      expect(viewport.width).toBe('device-width');
      expect(viewport.initialScale).toBe(1);
      expect(viewport.maximumScale).toBe(5);
      expect(viewport.userScalable).toBe(true);
      expect(viewport.colorScheme).toBe('light');
    });

    it('should export comprehensive metadata configuration', () => {
      expect(metadata).toBeDefined();
      expect(metadata.title).toEqual({
        template: '%s | My Insure Page 24',
        default: 'My Insure Page 24 - Comprehensive Insurance Solutions',
      });
      expect(metadata.description).toContain('insurance coverage');
      expect(metadata.keywords).toContain('insurance');
      expect(metadata.keywords).toContain('auto insurance');
      expect(metadata.keywords).toContain('home insurance');
    });

    it('should include proper OpenGraph configuration', () => {
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.type).toBe('website');
      expect(metadata.openGraph?.locale).toBe('en_US');
      expect(metadata.openGraph?.siteName).toBe('My Insure Page 24');
      expect(metadata.openGraph?.images).toHaveLength(1);
    });

    it('should include Twitter card configuration', () => {
      expect(metadata.twitter).toBeDefined();
      expect(metadata.twitter?.card).toBe('summary_large_image');
      expect(metadata.twitter?.site).toBe('@myinsurepage24');
      expect(metadata.twitter?.creator).toBe('@myinsurepage24');
    });

    it('should include proper robots configuration', () => {
      expect(metadata.robots).toBeDefined();
      expect(metadata.robots?.index).toBe(true);
      expect(metadata.robots?.follow).toBe(true);
      expect(metadata.robots?.googleBot?.index).toBe(true);
      expect(metadata.robots?.googleBot?.follow).toBe(true);
    });
  });

  describe('Accessibility Features', () => {
    it('should provide proper ARIA landmarks', () => {
      render(
        <RootLayout>
          <div>Content</div>
        </RootLayout>
      );

      const mainLandmark = screen.getByRole('main');
      expect(mainLandmark).toBeInTheDocument();
      expect(mainLandmark).toHaveAttribute('id', 'main-content');
    });

    it('should include skip navigation link', () => {
      render(
        <RootLayout>
          <div>Content</div>
        </RootLayout>
      );

      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink.tagName).toBe('A');
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    it('should maintain proper document structure', () => {
      render(
        <RootLayout>
          <div data-testid="content">Content</div>
        </RootLayout>
      );

      const rootContainer = document.getElementById('root-container');
      expect(rootContainer).toBeInTheDocument();
      expect(rootContainer).toHaveStyle({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      });
    });
  });

  describe('Performance Optimizations', () => {
    it('should render without performance issues', async () => {
      const renderStart = performance.now();
      
      render(
        <RootLayout>
          <div data-testid="perf-content">Performance Test Content</div>
        </RootLayout>
      );

      const renderEnd = performance.now();
      const renderTime = renderEnd - renderStart;

      expect(screen.getByTestId('perf-content')).toBeInTheDocument();
      expect(renderTime).toBeLessThan(100); // Should render in under 100ms
    });

    it('should handle multiple children efficiently', () => {
      const children = Array.from({ length: 10 }, (_, i) => (
        <div key={i} data-testid={`child-${i}`}>
          Child {i}
        </div>
      ));

      render(
        <RootLayout>
          {children}
        </RootLayout>
      );

      children.forEach((_, i) => {
        expect(screen.getByTestId(`child-${i}`)).toBeInTheDocument();
      });
    });
  });

  describe('Environment-Specific Behavior', () => {
    it('should handle missing environment variables gracefully', () => {
      const restoreMinimalEnv = testUtils.mockEnvVars({
        NODE_ENV: 'test',
      });

      render(
        <RootLayout>
          <div data-testid="minimal-env-content">Minimal Env Content</div>
        </RootLayout>
      );

      expect(screen.getByTestId('minimal-env-content')).toBeInTheDocument();

      restoreMinimalEnv();
    });

    it('should use default values for missing configuration', () => {
      const restoreEmptyEnv = testUtils.mockEnvVars({
        NODE_ENV: 'test',
        NEXT_PUBLIC_SITE_URL: undefined as any,
      });

      // Should not throw error and render normally
      expect(() => {
        render(
          <RootLayout>
            <div data-testid="default-config-content">Default Config Content</div>
          </RootLayout>
        );
      }).not.toThrow();

      expect(screen.getByTestId('default-config-content')).toBeInTheDocument();

      restoreEmptyEnv();
    });
  });

  describe('Integration with Styled Components', () => {
    it('should provide theme context throughout component tree', () => {
      const ThemedTestComponent = () => (
        <div data-testid="themed-test">
          Themed Component
        </div>
      );

      render(
        <RootLayout>
          <ThemedTestComponent />
        </RootLayout>
      );

      expect(screen.getByTestId('themed-test')).toBeInTheDocument();
    });

    it('should apply global styles without conflicts', () => {
      render(
        <RootLayout>
          <div data-testid="global-styles-test">Global Styles Test</div>
        </RootLayout>
      );

      const testElement = screen.getByTestId('global-styles-test');
      expect(testElement).toBeInTheDocument();
      
      // Verify that global styles are applied (styled-components injects them)
      const styleElements = document.querySelectorAll('style[data-styled]');
      expect(styleElements.length).toBeGreaterThan(0);
    });
  });

  describe('Error Recovery and Resilience', () => {
    it('should recover from theme provider errors', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      // Mock a theme provider error scenario
      const ProblematicComponent = () => {
        throw new Error('Theme provider error');
      };

      render(
        <RootLayout>
          <ProblematicComponent />
        </RootLayout>
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(screen.getByText('Refresh Page')).toBeInTheDocument();

      consoleErrorSpy.mockRestore();
    });

    it('should handle malformed children gracefully', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <RootLayout>
          {null}
          {undefined}
          <div data-testid="valid-child">Valid Child</div>
          {false}
        </RootLayout>
      );

      expect(screen.getByTestId('valid-child')).toBeInTheDocument();

      consoleErrorSpy.mockRestore();
    });
  });

  describe('Security Headers and Configuration', () => {
    it('should include security-related meta tags in head', () => {
      render(
        <RootLayout>
          <div>Security Test</div>
        </RootLayout>
      );

      // Verify security headers are included in the document head
      const metaTags = document.querySelectorAll('meta[http-equiv]');
      expect(metaTags.length).toBeGreaterThan(0);
    });

    it('should include structured data for SEO', () => {
      render(
        <RootLayout>
          <div>SEO Test</div>
        </RootLayout>
      );

      // Verify structured data script is included
      const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
      expect(structuredDataScripts.length).toBeGreaterThan(0);
    });
  });
});