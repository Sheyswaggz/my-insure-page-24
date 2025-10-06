/**
 * Styled Components theme configuration for insurance landing page
 * Provides comprehensive design system with insurance industry appropriate styling
 */

export interface ThemeColors {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  semantic: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    overlay: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };
  border: {
    light: string;
    medium: string;
    dark: string;
    focus: string;
  };
}

export interface ThemeTypography {
  fontFamily: {
    primary: string;
    secondary: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
}

export interface ThemeSpacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
  40: string;
  48: string;
  56: string;
  64: string;
  72: string;
  80: string;
  96: string;
}

export interface ThemeBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface ThemeShadows {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
}

export interface ThemeBorderRadius {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

export interface ThemeTransitions {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    linear: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
}

export interface ThemeZIndex {
  hide: number;
  auto: string;
  base: number;
  docked: number;
  dropdown: number;
  sticky: number;
  banner: number;
  overlay: number;
  modal: number;
  popover: number;
  skipLink: number;
  toast: number;
  tooltip: number;
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  shadows: ThemeShadows;
  borderRadius: ThemeBorderRadius;
  transitions: ThemeTransitions;
  zIndex: ThemeZIndex;
}

/**
 * Insurance industry themed color palette
 * Primary: Professional blue conveying trust and stability
 * Secondary: Complementary teal for accents
 * Neutral: Comprehensive grayscale for text and backgrounds
 */
const colors: ThemeColors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main brand blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Accent teal
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  background: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    tertiary: '#f3f4f6',
    overlay: 'rgba(17, 24, 39, 0.5)',
  },
  text: {
    primary: '#111827',
    secondary: '#374151',
    tertiary: '#6b7280',
    inverse: '#ffffff',
    disabled: '#9ca3af',
  },
  border: {
    light: '#e5e7eb',
    medium: '#d1d5db',
    dark: '#9ca3af',
    focus: '#3b82f6',
  },
};

/**
 * Typography system optimized for insurance content
 * Professional fonts with excellent readability
 */
const typography: ThemeTypography = {
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    secondary: '"Merriweather", Georgia, "Times New Roman", serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

/**
 * Consistent spacing scale based on 4px grid system
 */
const spacing: ThemeSpacing = {
  0: '0px',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
  32: '8rem',    // 128px
  40: '10rem',   // 160px
  48: '12rem',   // 192px
  56: '14rem',   // 224px
  64: '16rem',   // 256px
  72: '18rem',   // 288px
  80: '20rem',   // 320px
  96: '24rem',   // 384px
};

/**
 * Responsive breakpoints for mobile-first design
 */
const breakpoints: ThemeBreakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/**
 * Professional shadow system for depth and hierarchy
 */
const shadows: ThemeShadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '2xl': '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

/**
 * Border radius scale for consistent rounded corners
 */
const borderRadius: ThemeBorderRadius = {
  none: '0px',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
};

/**
 * Smooth transitions for interactive elements
 */
const transitions: ThemeTransitions = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

/**
 * Z-index scale for proper layering
 */
const zIndex: ThemeZIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

/**
 * Complete theme configuration for insurance landing page
 * Provides comprehensive design system with professional styling
 */
export const theme: Theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  shadows,
  borderRadius,
  transitions,
  zIndex,
};

/**
 * Media query helpers for responsive design
 */
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  maxXs: `@media (max-width: ${parseInt(breakpoints.xs) - 1}px)`,
  maxSm: `@media (max-width: ${parseInt(breakpoints.sm) - 1}px)`,
  maxMd: `@media (max-width: ${parseInt(breakpoints.md) - 1}px)`,
  maxLg: `@media (max-width: ${parseInt(breakpoints.lg) - 1}px)`,
  maxXl: `@media (max-width: ${parseInt(breakpoints.xl) - 1}px)`,
  max2xl: `@media (max-width: ${parseInt(breakpoints['2xl']) - 1}px)`,
};

/**
 * Utility functions for theme usage
 */
export const themeUtils = {
  /**
   * Get color value with fallback
   */
  getColor: (colorPath: string, fallback = colors.neutral[500]): string => {
    try {
      const keys = colorPath.split('.');
      let value: any = colors;
      
      for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
          value = value[key];
        } else {
          return fallback;
        }
      }
      
      return typeof value === 'string' ? value : fallback;
    } catch {
      return fallback;
    }
  },

  /**
   * Get spacing value with fallback
   */
  getSpacing: (spaceKey: keyof ThemeSpacing, fallback = spacing[4]): string => {
    return spacing[spaceKey] || fallback;
  },

  /**
   * Get font size with fallback
   */
  getFontSize: (sizeKey: keyof ThemeTypography['fontSize'], fallback = typography.fontSize.base): string => {
    return typography.fontSize[sizeKey] || fallback;
  },

  /**
   * Generate box shadow with custom opacity
   */
  getShadowWithOpacity: (shadowKey: keyof ThemeShadows, opacity = 1): string => {
    const shadow = shadows[shadowKey];
    if (shadow === 'none' || opacity === 1) {
      return shadow;
    }
    
    // Replace rgba opacity values
    return shadow.replace(/rgba\(([^)]+)\)/g, (match, values) => {
      const [r, g, b] = values.split(',').map((v: string) => v.trim());
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    });
  },
};

export default theme;