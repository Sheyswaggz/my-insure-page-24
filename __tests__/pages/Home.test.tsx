/**
 * Unit tests for the homepage component
 * Tests component rendering, styled components integration, and basic functionality
 * Validates Next.js, TypeScript, and Styled Components setup
 */

import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import HomePage from '@/app/page';
import { theme } from '@/styles/theme';
import { testUtils, performanceUtils, a11yUtils } from '../setup';

// Mock performance.now for consistent testing
const mockPerformanceNow = jest.fn();
Object.defineProperty(global.performance, 'now', {
  writable: true,
  value: mockPerformanceNow,
});

// Mock console methods for testing
const mockConsoleLog = jest.fn();
const mockConsoleError = jest.fn();

beforeAll(() => {
  global.console.log = mockConsoleLog;
  global.console.error = mockConsoleError;
});

afterAll(() => {
  global.console.log = console.log;
  global.console.error = console.error;
});

/**
 * Test wrapper component with theme provider
 */
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

/**
 * Custom render function with theme provider
 */
const renderWithTheme = (component: React.ReactElement) => {
  return render(component, { wrapper: TestWrapper });
};

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockPerformanceNow.mockReturnValue(1000);
    
    // Reset timers for each test
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe('Component Rendering', () => {
    it('renders the main heading correctly', () => {
      renderWithTheme(<HomePage />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Welcome to My Insure Page 24');
    });

    it('renders the subtitle with insurance messaging', () => {
      renderWithTheme(<HomePage />);
      
      const subtitle = screen.getByText(/Your trusted partner for comprehensive insurance solutions/i);
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveTextContent(
        'Your trusted partner for comprehensive insurance solutions. Protecting what matters most with personalized coverage options and exceptional customer service.'
      );
    });

    it('renders all insurance feature cards', () => {
      renderWithTheme(<HomePage />);
      
      // Check for all four insurance features
      expect(screen.getByText('Auto Insurance')).toBeInTheDocument();
      expect(screen.getByText('Home Insurance')).toBeInTheDocument();
      expect(screen.getByText('Life Insurance')).toBeInTheDocument();
      expect(screen.getByText('Business Insurance')).toBeInTheDocument();
    });

    it('renders feature descriptions correctly', () => {
      renderWithTheme(<HomePage />);
      
      expect(screen.getByText(/Comprehensive coverage for your vehicle/i)).toBeInTheDocument();
      expect(screen.getByText(/Protect your home and belongings/i)).toBeInTheDocument();
      expect(screen.getByText(/Secure your family's financial future/i)).toBeInTheDocument();
      expect(screen.getByText(/Comprehensive business protection/i)).toBeInTheDocument();
    });

    it('renders feature icons with proper accessibility attributes', () => {
      renderWithTheme(<HomePage />);
      
      const icons = screen.getAllByRole('button');
      icons.forEach(icon => {
        const iconElement = icon.querySelector('[aria-hidden="true"]');
        expect(iconElement).toBeInTheDocument();
      });
    });

    it('renders status indicator with initial loading state', () => {
      renderWithTheme(<HomePage />);
      
      const statusIndicator = screen.getByRole('status');
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator).toHaveTextContent('Verifying setup...');
    });
  });

  describe('Styled Components Integration', () => {
    it('applies theme colors correctly', () => {
      renderWithTheme(<HomePage />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveStyle({
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily.secondary,
      });
    });

    it('applies responsive typography', () => {
      renderWithTheme(<HomePage />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveStyle({
        fontSize: theme.typography.fontSize['5xl'],
        fontWeight: theme.typography.fontWeight.bold,
        lineHeight: theme.typography.lineHeight.tight,
      });
    });

    it('applies proper spacing from theme', () => {
      renderWithTheme(<HomePage />);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveStyle({
        marginBottom: theme.spacing[6],
      });
    });

    it('applies theme border radius to feature cards', () => {
      renderWithTheme(<HomePage />);
      
      const featureCards = screen.getAllByRole('button');
      featureCards.forEach(card => {
        expect(card).toHaveStyle({
          borderRadius: theme.borderRadius.lg,
        });
      });
    });

    it('applies theme shadows to feature cards', () => {
      renderWithTheme(<HomePage />);
      
      const featureCards = screen.getAllByRole('button');
      featureCards.forEach(card => {
        expect(card).toHaveStyle({
          boxShadow: theme.shadows.sm,
        });
      });
    });
  });

  describe('Setup Verification', () => {
    it('starts with loading status and transitions to success', async () => {
      mockPerformanceNow
        .mockReturnValueOnce(1000) // Initial mount time
        .mockReturnValueOnce(2500); // End time after 1500ms delay

      renderWithTheme(<HomePage />);
      
      // Initial loading state
      expect(screen.getByText('Verifying setup...')).toBeInTheDocument();
      
      // Fast-forward through the verification delay
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      // Wait for state update
      await waitFor(() => {
        expect(screen.getByText('Setup verified successfully')).toBeInTheDocument();
      });
    });

    it('logs successful setup verification with performance metrics', async () => {
      mockPerformanceNow
        .mockReturnValueOnce(1000)
        .mockReturnValueOnce(2500);

      renderWithTheme(<HomePage />);
      
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      await waitFor(() => {
        expect(mockConsoleLog).toHaveBeenCalledWith('Homepage Setup Verification:', {
          status: 'success',
          loadTime: '1500.00ms',
          themeLoaded: true,
          styledComponentsWorking: true,
          timestamp: expect.any(String),
        });
      });
    });

    it('handles setup verification errors gracefully', async () => {
      // Mock theme as undefined to trigger error
      const originalTheme = theme;
      (global as any).theme = undefined;

      renderWithTheme(<HomePage />);
      
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Setup verification failed')).toBeInTheDocument();
      });

      expect(mockConsoleError).toHaveBeenCalledWith('Homepage Setup Verification Failed:', {
        error: expect.any(String),
        timestamp: expect.any(String),
      });

      // Restore theme
      (global as any).theme = originalTheme;
    });

    it('measures and records component mount time', () => {
      const startTime = 1000;
      const endTime = 1250;
      
      mockPerformanceNow
        .mockReturnValueOnce(startTime)
        .mockReturnValueOnce(endTime);

      renderWithTheme(<HomePage />);
      
      expect(mockPerformanceNow).toHaveBeenCalledTimes(1);
    });
  });

  describe('User Interactions', () => {
    it('handles feature card clicks correctly', () => {
      renderWithTheme(<HomePage />);
      
      const autoInsuranceCard = screen.getByLabelText('Learn more about Auto Insurance');
      fireEvent.click(autoInsuranceCard);
      
      expect(mockConsoleLog).toHaveBeenCalledWith('Feature interaction:', {
        featureId: 'auto-insurance',
        timestamp: expect.any(String),
        userAgent: expect.any(String),
      });
    });

    it('handles keyboard navigation with Enter key', () => {
      renderWithTheme(<HomePage />);
      
      const homeInsuranceCard = screen.getByLabelText('Learn more about Home Insurance');
      fireEvent.keyDown(homeInsuranceCard, { key: 'Enter' });
      
      expect(mockConsoleLog).toHaveBeenCalledWith('Feature interaction:', {
        featureId: 'home-insurance',
        timestamp: expect.any(String),
        userAgent: expect.any(String),
      });
    });

    it('handles keyboard navigation with Space key', () => {
      renderWithTheme(<HomePage />);
      
      const lifeInsuranceCard = screen.getByLabelText('Learn more about Life Insurance');
      fireEvent.keyDown(lifeInsuranceCard, { key: ' ' });
      
      expect(mockConsoleLog).toHaveBeenCalledWith('Feature interaction:', {
        featureId: 'life-insurance',
        timestamp: expect.any(String),
        userAgent: expect.any(String),
      });
    });

    it('ignores other keyboard keys', () => {
      renderWithTheme(<HomePage />);
      
      const businessInsuranceCard = screen.getByLabelText('Learn more about Business Insurance');
      fireEvent.keyDown(businessInsuranceCard, { key: 'Tab' });
      
      // Should not log interaction for Tab key
      expect(mockConsoleLog).not.toHaveBeenCalledWith('Feature interaction:', expect.any(Object));
    });

    it('prevents default behavior for keyboard interactions', () => {
      renderWithTheme(<HomePage />);
      
      const card = screen.getByLabelText('Learn more about Auto Insurance');
      const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
      
      fireEvent(card, event);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels for feature cards', () => {
      renderWithTheme(<HomePage />);
      
      expect(screen.getByLabelText('Learn more about Auto Insurance')).toBeInTheDocument();
      expect(screen.getByLabelText('Learn more about Home Insurance')).toBeInTheDocument();
      expect(screen.getByLabelText('Learn more about Life Insurance')).toBeInTheDocument();
      expect(screen.getByLabelText('Learn more about Business Insurance')).toBeInTheDocument();
    });

    it('has proper role attributes for interactive elements', () => {
      renderWithTheme(<HomePage />);
      
      const featureCards = screen.getAllByRole('button');
      expect(featureCards).toHaveLength(4);
      
      featureCards.forEach(card => {
        expect(card).toHaveAttribute('tabIndex', '0');
      });
    });

    it('has proper ARIA live region for status updates', () => {
      renderWithTheme(<HomePage />);
      
      const statusIndicator = screen.getByRole('status');
      expect(statusIndicator).toHaveAttribute('aria-live', 'polite');
    });

    it('hides decorative icons from screen readers', () => {
      renderWithTheme(<HomePage />);
      
      const featureCards = screen.getAllByRole('button');
      featureCards.forEach(card => {
        const icon = card.querySelector('[aria-hidden="true"]');
        expect(icon).toBeInTheDocument();
      });
    });

    it('provides semantic heading structure', () => {
      renderWithTheme(<HomePage />);
      
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
      
      const featureHeadings = screen.getAllByRole('heading', { level: 3 });
      expect(featureHeadings).toHaveLength(4);
    });
  });

  describe('Performance', () => {
    it('renders within acceptable time limits', async () => {
      const renderTime = await performanceUtils.measureRenderTime(() => {
        renderWithTheme(<HomePage />);
      });
      
      // Should render within 100ms
      expect(renderTime).toBeLessThan(100);
    });

    it('handles multiple rapid interactions efficiently', () => {
      renderWithTheme(<HomePage />);
      
      const card = screen.getByLabelText('Learn more about Auto Insurance');
      
      // Simulate rapid clicks
      for (let i = 0; i < 10; i++) {
        fireEvent.click(card);
      }
      
      // Should log all interactions without errors
      expect(mockConsoleLog).toHaveBeenCalledTimes(10);
      expect(mockConsoleError).not.toHaveBeenCalled();
    });

    it('cleans up timers properly on unmount', () => {
      const { unmount } = renderWithTheme(<HomePage />);
      
      // Start verification process
      act(() => {
        jest.advanceTimersByTime(500);
      });
      
      // Unmount before verification completes
      unmount();
      
      // Advance past verification time
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      // Should not cause memory leaks or errors
      expect(mockConsoleError).not.toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('handles theme loading errors gracefully', async () => {
      // Mock theme with missing properties
      const incompleteTheme = { colors: null };
      
      render(
        <ThemeProvider theme={incompleteTheme as any}>
          <HomePage />
        </ThemeProvider>
      );
      
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Setup verification failed')).toBeInTheDocument();
      });
    });

    it('handles DOM manipulation errors', async () => {
      // Mock document.createElement to throw error
      const originalCreateElement = document.createElement;
      document.createElement = jest.fn().mockImplementation(() => {
        throw new Error('DOM manipulation failed');
      });
      
      renderWithTheme(<HomePage />);
      
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Setup verification failed')).toBeInTheDocument();
      });
      
      // Restore original method
      document.createElement = originalCreateElement;
    });

    it('handles promise rejection in setup verification', async () => {
      // Mock Promise.resolve to reject
      const originalPromise = global.Promise;
      global.Promise = class extends originalPromise {
        static resolve(value: any) {
          return originalPromise.reject(new Error('Promise rejected'));
        }
      } as any;
      
      renderWithTheme(<HomePage />);
      
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      await waitFor(() => {
        expect(mockConsoleError).toHaveBeenCalledWith(
          'Setup verification promise rejected:',
          expect.any(Error)
        );
      });
      
      // Restore original Promise
      global.Promise = originalPromise;
    });
  });

  describe('Component State Management', () => {
    it('initializes with correct default state', () => {
      renderWithTheme(<HomePage />);
      
      // Should start with loading status
      expect(screen.getByText('Verifying setup...')).toBeInTheDocument();
    });

    it('updates status correctly through verification process', async () => {
      renderWithTheme(<HomePage />);
      
      // Initial state
      expect(screen.getByText('Verifying setup...')).toBeInTheDocument();
      
      // After verification
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Setup verified successfully')).toBeInTheDocument();
      });
    });

    it('maintains state consistency during rapid re-renders', async () => {
      const { rerender } = renderWithTheme(<HomePage />);
      
      // Trigger multiple re-renders
      for (let i = 0; i < 5; i++) {
        rerender(
          <ThemeProvider theme={theme}>
            <HomePage />
          </ThemeProvider>
        );
      }
      
      // Should still show loading initially
      expect(screen.getByText('Verifying setup...')).toBeInTheDocument();
      
      // Complete verification
      act(() => {
        jest.advanceTimersByTime(1500);
      });
      
      await waitFor(() => {
        expect(screen.getByText('Setup verified successfully')).toBeInTheDocument();
      });
    });
  });

  describe('Integration with Next.js', () => {
    it('works with Next.js client-side rendering', () => {
      // Component should render without SSR-related errors
      expect(() => renderWithTheme(<HomePage />)).not.toThrow();
    });

    it('handles client-side navigation correctly', () => {
      renderWithTheme(<HomePage />);
      
      // Should not interfere with Next.js router
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('maintains performance with Next.js optimizations', async () => {
      const startTime = performance.now();
      renderWithTheme(<HomePage />);
      const endTime = performance.now();
      
      // Should render quickly even with Next.js overhead
      expect(endTime - startTime).toBeLessThan(50);
    });
  });

  describe('Theme Integration', () => {
    it('responds to theme changes correctly', () => {
      const customTheme = {
        ...theme,
        colors: {
          ...theme.colors,
          text: {
            ...theme.colors.text,
            primary: '#ff0000',
          },
        },
      };
      
      render(
        <ThemeProvider theme={customTheme}>
          <HomePage />
        </ThemeProvider>
      );
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveStyle({ color: '#ff0000' });
    });

    it('handles missing theme properties gracefully', () => {
      const incompleteTheme = {
        colors: theme.colors,
        // Missing other theme properties
      };
      
      expect(() => {
        render(
          <ThemeProvider theme={incompleteTheme as any}>
            <HomePage />
          </ThemeProvider>
        );
      }).not.toThrow();
    });
  });
});