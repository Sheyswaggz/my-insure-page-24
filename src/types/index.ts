/**
 * Core TypeScript type definitions for the insurance landing page application.
 * Provides comprehensive type safety for theme, company data, and component interfaces.
 * 
 * @fileoverview Central type definitions ensuring type safety across the application
 * @version 1.0.0
 * @since 2024-01-01
 */

// =============================================================================
// THEME TYPES
// =============================================================================

/**
 * Color palette interface defining all color tokens used throughout the application.
 * Supports both light and dark theme variants with semantic color naming.
 */
export interface ColorPalette {
  /** Primary brand colors */
  readonly primary: {
    readonly main: string;
    readonly light: string;
    readonly dark: string;
    readonly contrast: string;
  };
  
  /** Secondary accent colors */
  readonly secondary: {
    readonly main: string;
    readonly light: string;
    readonly dark: string;
    readonly contrast: string;
  };
  
  /** Semantic status colors */
  readonly success: {
    readonly main: string;
    readonly light: string;
    readonly dark: string;
    readonly contrast: string;
  };
  
  readonly warning: {
    readonly main: string;
    readonly light: string;
    readonly dark: string;
    readonly contrast: string;
  };
  
  readonly error: {
    readonly main: string;
    readonly light: string;
    readonly dark: string;
    readonly contrast: string;
  };
  
  readonly info: {
    readonly main: string;
    readonly light: string;
    readonly dark: string;
    readonly contrast: string;
  };
  
  /** Neutral grayscale colors */
  readonly neutral: {
    readonly white: string;
    readonly black: string;
    readonly gray100: string;
    readonly gray200: string;
    readonly gray300: string;
    readonly gray400: string;
    readonly gray500: string;
    readonly gray600: string;
    readonly gray700: string;
    readonly gray800: string;
    readonly gray900: string;
  };
  
  /** Background colors */
  readonly background: {
    readonly default: string;
    readonly paper: string;
    readonly elevated: string;
  };
  
  /** Text colors */
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly disabled: string;
    readonly hint: string;
  };
}

/**
 * Typography scale and font definitions.
 * Defines consistent text styling across the application.
 */
export interface Typography {
  /** Font family definitions */
  readonly fontFamily: {
    readonly primary: string;
    readonly secondary: string;
    readonly monospace: string;
  };
  
  /** Font weight scale */
  readonly fontWeight: {
    readonly light: number;
    readonly regular: number;
    readonly medium: number;
    readonly semibold: number;
    readonly bold: number;
  };
  
  /** Typography variants */
  readonly variants: {
    readonly h1: TypographyVariant;
    readonly h2: TypographyVariant;
    readonly h3: TypographyVariant;
    readonly h4: TypographyVariant;
    readonly h5: TypographyVariant;
    readonly h6: TypographyVariant;
    readonly subtitle1: TypographyVariant;
    readonly subtitle2: TypographyVariant;
    readonly body1: TypographyVariant;
    readonly body2: TypographyVariant;
    readonly caption: TypographyVariant;
    readonly overline: TypographyVariant;
    readonly button: TypographyVariant;
  };
}

/**
 * Individual typography variant definition.
 */
export interface TypographyVariant {
  readonly fontSize: string;
  readonly fontWeight: number;
  readonly lineHeight: string;
  readonly letterSpacing?: string;
  readonly textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

/**
 * Spacing scale for consistent layout spacing.
 */
export interface Spacing {
  readonly xs: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
  readonly xxl: string;
  readonly xxxl: string;
}

/**
 * Breakpoint definitions for responsive design.
 */
export interface Breakpoints {
  readonly xs: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
  readonly xxl: string;
}

/**
 * Shadow definitions for elevation and depth.
 */
export interface Shadows {
  readonly none: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
  readonly xxl: string;
}

/**
 * Border radius scale for consistent rounded corners.
 */
export interface BorderRadius {
  readonly none: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
  readonly full: string;
}

/**
 * Z-index scale for layering components.
 */
export interface ZIndex {
  readonly hide: number;
  readonly auto: number;
  readonly base: number;
  readonly docked: number;
  readonly dropdown: number;
  readonly sticky: number;
  readonly banner: number;
  readonly overlay: number;
  readonly modal: number;
  readonly popover: number;
  readonly skipLink: number;
  readonly toast: number;
  readonly tooltip: number;
}

/**
 * Complete theme interface combining all design tokens.
 */
export interface Theme {
  readonly colors: ColorPalette;
  readonly typography: Typography;
  readonly spacing: Spacing;
  readonly breakpoints: Breakpoints;
  readonly shadows: Shadows;
  readonly borderRadius: BorderRadius;
  readonly zIndex: ZIndex;
}

// =============================================================================
// COMPANY & BUSINESS TYPES
// =============================================================================

/**
 * Company contact information structure.
 */
export interface ContactInfo {
  readonly phone: string;
  readonly email: string;
  readonly address: {
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly zipCode: string;
    readonly country: string;
  };
  readonly businessHours: {
    readonly monday: string;
    readonly tuesday: string;
    readonly wednesday: string;
    readonly thursday: string;
    readonly friday: string;
    readonly saturday: string;
    readonly sunday: string;
  };
}

/**
 * Social media links and handles.
 */
export interface SocialMedia {
  readonly facebook?: string;
  readonly twitter?: string;
  readonly linkedin?: string;
  readonly instagram?: string;
  readonly youtube?: string;
}

/**
 * Company information and branding data.
 */
export interface CompanyInfo {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly foundedYear: number;
  readonly licenseNumber: string;
  readonly contact: ContactInfo;
  readonly socialMedia: SocialMedia;
  readonly logo: {
    readonly primary: string;
    readonly secondary?: string;
    readonly favicon: string;
  };
}

/**
 * Insurance product category definitions.
 */
export type InsuranceCategory = 
  | 'auto'
  | 'home'
  | 'life'
  | 'health'
  | 'business'
  | 'travel'
  | 'pet'
  | 'disability'
  | 'umbrella';

/**
 * Individual insurance product information.
 */
export interface InsuranceProduct {
  readonly id: string;
  readonly name: string;
  readonly category: InsuranceCategory;
  readonly description: string;
  readonly features: readonly string[];
  readonly startingPrice?: string;
  readonly coverageAmount?: string;
  readonly icon: string;
  readonly isPopular?: boolean;
  readonly isNew?: boolean;
}

// =============================================================================
// COMPONENT PROP TYPES
// =============================================================================

/**
 * Standard size variants used across components.
 */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Color variant types for components.
 */
export type ComponentVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral';

/**
 * Loading state interface for async components.
 */
export interface LoadingState {
  readonly isLoading: boolean;
  readonly loadingText?: string;
  readonly error?: string | null;
}

/**
 * Base props that all components should extend.
 */
export interface BaseComponentProps {
  readonly className?: string;
  readonly testId?: string;
  readonly id?: string;
  readonly 'aria-label'?: string;
  readonly 'aria-describedby'?: string;
}

/**
 * Props for clickable/interactive components.
 */
export interface InteractiveProps extends BaseComponentProps {
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  readonly onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  readonly disabled?: boolean;
  readonly tabIndex?: number;
  readonly role?: string;
}

/**
 * Form field base props.
 */
export interface FormFieldProps extends BaseComponentProps {
  readonly name: string;
  readonly label?: string;
  readonly placeholder?: string;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly error?: string;
  readonly helperText?: string;
  readonly value?: string;
  readonly onChange?: (value: string) => void;
  readonly onBlur?: () => void;
  readonly onFocus?: () => void;
}

// =============================================================================
// FORM & VALIDATION TYPES
// =============================================================================

/**
 * Contact form data structure.
 */
export interface ContactFormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly insuranceType: InsuranceCategory;
  readonly message: string;
  readonly preferredContact: 'email' | 'phone';
  readonly agreeToTerms: boolean;
  readonly subscribeNewsletter: boolean;
}

/**
 * Quote request form data.
 */
export interface QuoteFormData {
  readonly personalInfo: {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly dateOfBirth: string;
    readonly zipCode: string;
  };
  readonly insuranceInfo: {
    readonly type: InsuranceCategory;
    readonly currentProvider?: string;
    readonly currentPremium?: string;
    readonly coverageAmount?: string;
    readonly deductible?: string;
  };
  readonly additionalInfo: {
    readonly hasClaimsHistory: boolean;
    readonly claimsDetails?: string;
    readonly preferredStartDate: string;
    readonly additionalNotes?: string;
  };
}

/**
 * Form validation error structure.
 */
export interface ValidationError {
  readonly field: string;
  readonly message: string;
  readonly code: string;
}

/**
 * Form submission state.
 */
export interface FormSubmissionState {
  readonly isSubmitting: boolean;
  readonly isSubmitted: boolean;
  readonly errors: readonly ValidationError[];
  readonly successMessage?: string;
}

// =============================================================================
// API & DATA TYPES
// =============================================================================

/**
 * Standard API response wrapper.
 */
export interface ApiResponse<T = unknown> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: {
    readonly message: string;
    readonly code: string;
    readonly details?: Record<string, unknown>;
  };
  readonly timestamp: string;
  readonly requestId: string;
}

/**
 * Pagination metadata for list responses.
 */
export interface PaginationMeta {
  readonly page: number;
  readonly limit: number;
  readonly total: number;
  readonly totalPages: number;
  readonly hasNext: boolean;
  readonly hasPrev: boolean;
}

/**
 * Paginated API response.
 */
export interface PaginatedResponse<T = unknown> extends ApiResponse<readonly T[]> {
  readonly meta: PaginationMeta;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Make all properties of T optional recursively.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Make all properties of T required recursively.
 */
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * Extract keys from T that have values assignable to U.
 */
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

/**
 * Create a type with only the properties of T that have values assignable to U.
 */
export type PickByType<T, U> = Pick<T, KeysOfType<T, U>>;

/**
 * Create a type with all properties of T except those that have values assignable to U.
 */
export type OmitByType<T, U> = Omit<T, KeysOfType<T, U>>;

/**
 * Environment configuration type.
 */
export interface EnvironmentConfig {
  readonly NODE_ENV: 'development' | 'production' | 'test';
  readonly NEXT_PUBLIC_API_URL: string;
  readonly NEXT_PUBLIC_SITE_URL: string;
  readonly NEXT_PUBLIC_ANALYTICS_ID?: string;
  readonly NEXT_PUBLIC_FEATURE_FLAGS?: string;
  readonly LANDING_PAGE_ENABLED: boolean;
}

// =============================================================================
// FEATURE FLAG TYPES
// =============================================================================

/**
 * Feature flag configuration.
 */
export interface FeatureFlag {
  readonly name: string;
  readonly enabled: boolean;
  readonly description?: string;
  readonly rolloutPercentage?: number;
  readonly conditions?: Record<string, unknown>;
}

/**
 * Feature flags collection.
 */
export interface FeatureFlags {
  readonly LANDING_PAGE_ENABLED: FeatureFlag;
  readonly QUOTE_FORM_ENABLED: FeatureFlag;
  readonly LIVE_CHAT_ENABLED: FeatureFlag;
  readonly ANALYTICS_ENABLED: FeatureFlag;
}

// =============================================================================
// EXPORTS
// =============================================================================

/**
 * Re-export all types for convenient importing.
 */
export type {
  // Theme types
  ColorPalette,
  Typography,
  TypographyVariant,
  Spacing,
  Breakpoints,
  Shadows,
  BorderRadius,
  ZIndex,
  Theme,
  
  // Company types
  ContactInfo,
  SocialMedia,
  CompanyInfo,
  InsuranceCategory,
  InsuranceProduct,
  
  // Component types
  ComponentSize,
  ComponentVariant,
  LoadingState,
  BaseComponentProps,
  InteractiveProps,
  FormFieldProps,
  
  // Form types
  ContactFormData,
  QuoteFormData,
  ValidationError,
  FormSubmissionState,
  
  // API types
  ApiResponse,
  PaginationMeta,
  PaginatedResponse,
  
  // Utility types
  DeepPartial,
  DeepRequired,
  KeysOfType,
  PickByType,
  OmitByType,
  EnvironmentConfig,
  
  // Feature flag types
  FeatureFlag,
  FeatureFlags,
};