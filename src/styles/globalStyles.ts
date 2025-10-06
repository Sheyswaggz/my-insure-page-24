/**
 * Global styles using Styled Components with CSS reset and base styles
 * Provides comprehensive styling foundation for insurance landing page
 */

import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

/**
 * Global styles component with CSS reset, base typography, and responsive design
 * Implements modern CSS reset and establishes consistent styling foundation
 */
export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  /* Modern CSS Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Remove default margins and paddings */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  /* Root element configuration */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 14px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 18px;
    }
  }

  /* Body base styles */
  body {
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* List styles reset */
  ol,
  ul {
    list-style: none;
  }

  /* Quote styles reset */
  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  /* Table styles reset */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Typography hierarchy with responsive scaling */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.extrabold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    }
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize.base};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl};
    }
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      font-size: ${({ theme }) => theme.typography.fontSize.lg};
    }
  }

  /* Paragraph and text styles */
  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    color: ${({ theme }) => theme.colors.text.secondary};
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Link styles */
  a {
    color: ${({ theme }) => theme.colors.primary[600]};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.easing.easeInOut};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary[700]};
      text-decoration: underline;
    }
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.border.focus};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
    
    &:active {
      color: ${({ theme }) => theme.colors.primary[800]};
    }
  }

  /* Strong and emphasis styles */
  strong,
  b {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  em,
  i {
    font-style: italic;
  }

  /* Code and preformatted text */
  code {
    font-family: ${({ theme }) => theme.typography.fontFamily.mono};
    font-size: 0.875em;
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: 1px solid ${({ theme }) => theme.colors.border.light};
  }

  pre {
    font-family: ${({ theme }) => theme.typography.fontFamily.mono};
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing[4]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 1px solid ${({ theme }) => theme.colors.border.light};
    overflow-x: auto;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    
    code {
      background: none;
      border: none;
      padding: 0;
    }
  }

  /* Form elements base styles */
  input,
  textarea,
  select,
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  input,
  textarea,
  select {
    background-color: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.border.medium};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    transition: border-color ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.easing.easeInOut},
                box-shadow ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.easing.easeInOut};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.border.focus};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[100]};
    }
    
    &:disabled {
      background-color: ${({ theme }) => theme.colors.background.tertiary};
      color: ${({ theme }) => theme.colors.text.disabled};
      cursor: not-allowed;
    }
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.text.tertiary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  /* Button base styles */
  button {
    cursor: pointer;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    transition: all ${({ theme }) => theme.transitions.duration.fast} ${({ theme }) => theme.transitions.easing.easeInOut};
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.border.focus};
      outline-offset: 2px;
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Image and media styles */
  img,
  video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  img {
    border-style: none;
  }

  /* SVG styles */
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Horizontal rule */
  hr {
    border: none;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border.light};
    margin: ${({ theme }) => theme.spacing[8]} 0;
  }

  /* Selection styles */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  ::-moz-selection {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  /* Scrollbar styles for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutral[400]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[500]};
    }
  }

  /* Focus visible for better accessibility */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }

  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    * {
      border-color: currentColor;
    }
  }

  /* Print styles */
  @media print {
    *,
    *::before,
    *::after {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a,
    a:visited {
      text-decoration: underline;
    }
    
    a[href]::after {
      content: " (" attr(href) ")";
    }
    
    abbr[title]::after {
      content: " (" attr(title) ")";
    }
    
    a[href^="#"]::after,
    a[href^="javascript:"]::after {
      content: "";
    }
    
    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }
    
    thead {
      display: table-header-group;
    }
    
    tr,
    img {
      page-break-inside: avoid;
    }
    
    img {
      max-width: 100% !important;
    }
    
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    
    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  /* Container query support for modern browsers */
  @supports (container-type: inline-size) {
    .container {
      container-type: inline-size;
    }
  }

  /* Utility classes for common patterns */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
    text-decoration: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    z-index: ${({ theme }) => theme.zIndex.skipLink};
    
    &:focus {
      top: 6px;
    }
  }

  /* Animation classes for enhanced UX */
  .fade-in {
    animation: fadeIn ${({ theme }) => theme.transitions.duration.normal} ${({ theme }) => theme.transitions.easing.easeOut};
  }

  .slide-up {
    animation: slideUp ${({ theme }) => theme.transitions.duration.normal} ${({ theme }) => theme.transitions.easing.easeOut};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyles;