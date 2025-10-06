/**
 * Temporary homepage component for insurance landing page
 * Verifies Next.js, TypeScript, and Styled Components setup
 * Provides basic insurance company messaging with professional styling
 */

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

/**
 * Main container with responsive layout and professional styling
 */
const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[8]} ${theme.spacing[4]};
  background: linear-gradient(
    135deg,
    ${theme.colors.background.primary} 0%,
    ${theme.colors.background.secondary} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 20%,
      ${theme.colors.primary[50]} 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[6]} ${theme.spacing[4]};
  }
`;

/**
 * Content wrapper with proper z-index and max-width
 */
const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

/**
 * Main heading with insurance industry appropriate styling
 */
const MainHeading = styled.h1`
  font-family: ${theme.typography.fontFamily.secondary};
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[6]};
  line-height: ${theme.typography.lineHeight.tight};
  letter-spacing: ${theme.typography.letterSpacing.tight};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
    margin-bottom: ${theme.spacing[4]};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

/**
 * Subtitle with professional messaging
 */
const Subtitle = styled.p`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing[8]};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
    margin-bottom: ${theme.spacing[6]};
  }
`;

/**
 * Feature grid for insurance services
 */
const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[10]};
  width: 100%;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[4]};
    margin-bottom: ${theme.spacing[8]};
  }
`;

/**
 * Individual feature card with hover effects
 */
const FeatureCard = styled.div`
  background: ${theme.colors.background.primary};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[6]};
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.duration.normal} ${theme.transitions.easing.easeInOut};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
    border-color: ${theme.colors.primary[200]};
  }

  &:focus-within {
    outline: 2px solid ${theme.colors.border.focus};
    outline-offset: 2px;
  }
`;

/**
 * Feature icon container
 */
const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${theme.colors.primary[100]};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.primary[600]};
`;

/**
 * Feature title styling
 */
const FeatureTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[2]};
`;

/**
 * Feature description styling
 */
const FeatureDescription = styled.p`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

/**
 * Status indicator for setup verification
 */
const StatusIndicator = styled.div<{ status: 'loading' | 'success' | 'error' }>`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-top: ${theme.spacing[6]};

  ${({ status }) => {
    switch (status) {
      case 'loading':
        return `
          background: ${theme.colors.neutral[100]};
          color: ${theme.colors.text.secondary};
        `;
      case 'success':
        return `
          background: ${theme.colors.semantic.success}20;
          color: ${theme.colors.semantic.success};
        `;
      case 'error':
        return `
          background: ${theme.colors.semantic.error}20;
          color: ${theme.colors.semantic.error};
        `;
      default:
        return '';
    }
  }}
`;

/**
 * Status dot animation for loading state
 */
const StatusDot = styled.div<{ status: 'loading' | 'success' | 'error' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  
  ${({ status }) => {
    switch (status) {
      case 'loading':
        return `
          background: ${theme.colors.text.secondary};
          animation: pulse 2s infinite;
        `;
      case 'success':
        return `
          background: ${theme.colors.semantic.success};
        `;
      case 'error':
        return `
          background: ${theme.colors.semantic.error};
        `;
      default:
        return '';
    }
  }}

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

/**
 * Insurance service features data
 */
const insuranceFeatures = [
  {
    id: 'auto-insurance',
    icon: '🚗',
    title: 'Auto Insurance',
    description: 'Comprehensive coverage for your vehicle with competitive rates and excellent customer service.',
  },
  {
    id: 'home-insurance',
    icon: '🏠',
    title: 'Home Insurance',
    description: 'Protect your home and belongings with our comprehensive homeowners insurance policies.',
  },
  {
    id: 'life-insurance',
    icon: '👨‍👩‍👧‍👦',
    title: 'Life Insurance',
    description: 'Secure your family\'s financial future with our flexible life insurance options.',
  },
  {
    id: 'business-insurance',
    icon: '🏢',
    title: 'Business Insurance',
    description: 'Comprehensive business protection including liability, property, and workers compensation.',
  },
] as const;

/**
 * Setup verification status type
 */
type SetupStatus = 'loading' | 'success' | 'error';

/**
 * Homepage component with setup verification and insurance messaging
 * Demonstrates working Next.js, TypeScript, and Styled Components integration
 */
export default function HomePage(): JSX.Element {
  const [setupStatus, setSetupStatus] = useState<SetupStatus>('loading');
  const [mountTime, setMountTime] = useState<number>(0);

  /**
   * Verify setup and measure performance on component mount
   */
  useEffect(() => {
    const startTime = performance.now();
    setMountTime(startTime);

    // Simulate setup verification process
    const verifySetup = async (): Promise<void> => {
      try {
        // Check if theme is properly loaded
        if (!theme || !theme.colors || !theme.typography) {
          throw new Error('Theme configuration not loaded properly');
        }

        // Check if styled-components is working
        const testElement = document.createElement('div');
        if (!testElement) {
          throw new Error('DOM manipulation not available');
        }

        // Simulate async verification delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const endTime = performance.now();
        const loadTime = endTime - startTime;

        console.log('Homepage Setup Verification:', {
          status: 'success',
          loadTime: `${loadTime.toFixed(2)}ms`,
          themeLoaded: !!theme,
          styledComponentsWorking: true,
          timestamp: new Date().toISOString(),
        });

        setSetupStatus('success');
      } catch (error) {
        console.error('Homepage Setup Verification Failed:', {
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString(),
        });
        setSetupStatus('error');
      }
    };

    verifySetup().catch((error) => {
      console.error('Setup verification promise rejected:', error);
      setSetupStatus('error');
    });
  }, []);

  /**
   * Handle feature card interaction for accessibility
   */
  const handleFeatureClick = (featureId: string): void => {
    console.log('Feature interaction:', {
      featureId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    });
  };

  /**
   * Handle feature card keyboard navigation
   */
  const handleFeatureKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    featureId: string
  ): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFeatureClick(featureId);
    }
  };

  /**
   * Get status message based on current setup status
   */
  const getStatusMessage = (): string => {
    switch (setupStatus) {
      case 'loading':
        return 'Verifying setup...';
      case 'success':
        return 'Setup verified successfully';
      case 'error':
        return 'Setup verification failed';
      default:
        return 'Unknown status';
    }
  };

  return (
    <HomeContainer>
      <ContentWrapper>
        <MainHeading>
          Welcome to My Insure Page 24
        </MainHeading>
        
        <Subtitle>
          Your trusted partner for comprehensive insurance solutions. 
          Protecting what matters most with personalized coverage options 
          and exceptional customer service.
        </Subtitle>

        <FeatureGrid>
          {insuranceFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              onKeyDown={(event) => handleFeatureKeyDown(event, feature.id)}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${feature.title}`}
            >
              <FeatureIcon aria-hidden="true">
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>
                {feature.title}
              </FeatureTitle>
              <FeatureDescription>
                {feature.description}
              </FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>

        <StatusIndicator status={setupStatus} role="status" aria-live="polite">
          <StatusDot status={setupStatus} aria-hidden="true" />
          {getStatusMessage()}
        </StatusIndicator>
      </ContentWrapper>
    </HomeContainer>
  );
}