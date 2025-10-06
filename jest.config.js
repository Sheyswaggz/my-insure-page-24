/**
 * Jest configuration for Next.js project with TypeScript and Styled Components
 * Configures testing environment, coverage thresholds, and module resolution
 */

import { createRequire } from 'module';
import { pathToFileURL } from 'url';

const require = createRequire(import.meta.url);

/** @type {import('jest').Config} */
const config = {
  // Test environment configuration
  testEnvironment: 'jsdom',
  
  // Setup files to run after Jest environment is set up
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  
  // Test file patterns
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
  
  // Ignore patterns for test discovery
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/out/',
    '<rootDir>/coverage/',
    '<rootDir>/.git/',
    '<rootDir>/public/',
  ],
  
  // Module file extensions
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  
  // Module name mapping for path aliases
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/config/(.*)$': '<rootDir>/src/config/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    
    // Mock static assets
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__tests__/__mocks__/fileMock.js',
  },
  
  // Transform configuration
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['next/babel', {
          'preset-env': {
            targets: {
              node: 'current',
            },
          },
        }],
      ],
      plugins: [
        ['styled-components', {
          ssr: true,
          displayName: true,
          preprocess: false,
        }],
      ],
    }],
  },
  
  // Transform ignore patterns
  transformIgnorePatterns: [
    '/node_modules/(?!(styled-components|styled-normalize)/)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  
  // Coverage configuration
  collectCoverage: false, // Enable via CLI flag
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.config.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
    '!src/**/node_modules/**',
    '!src/types/**',
    '!src/styles/globalStyles.ts',
    '!src/styles/theme.ts',
  ],
  
  // Coverage thresholds - enforces 90% coverage requirement
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    // Specific thresholds for critical paths
    'src/components/**/*.{js,jsx,ts,tsx}': {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
    'src/hooks/**/*.{js,jsx,ts,tsx}': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    'src/utils/**/*.{js,jsx,ts,tsx}': {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  
  // Coverage reporters
  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
    'html',
    'json',
    'clover',
  ],
  
  // Coverage directory
  coverageDirectory: '<rootDir>/coverage',
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Restore mocks after each test
  restoreMocks: true,
  
  // Reset modules between tests
  resetModules: false,
  
  // Verbose output for debugging
  verbose: false,
  
  // Test timeout (30 seconds)
  testTimeout: 30000,
  
  // Maximum number of concurrent workers
  maxWorkers: '50%',
  
  // Cache directory
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  
  // Error on deprecated features
  errorOnDeprecated: true,
  
  // Notify mode for watch
  notify: false,
  notifyMode: 'failure-change',
  
  // Watch plugins
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  
  // Global setup and teardown
  globalSetup: undefined,
  globalTeardown: undefined,
  
  // Reporters configuration
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: '<rootDir>/coverage',
      outputName: 'junit.xml',
      ancestorSeparator: ' › ',
      uniqueOutputName: 'false',
      suiteNameTemplate: '{filepath}',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
    }],
  ],
  
  // Snapshot serializers for styled-components
  snapshotSerializers: [
    'jest-styled-components/serializer',
  ],
  
  // Module directories
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
    '<rootDir>',
  ],
  
  // Resolver configuration
  resolver: undefined,
  
  // Root directory
  rootDir: '.',
  
  // Roots for test discovery
  roots: [
    '<rootDir>/src',
    '<rootDir>/__tests__',
  ],
  
  // Test environment options
  testEnvironmentOptions: {
    url: 'http://localhost:3000',
    userAgent: 'jest-test-runner',
  },
  
  // Unmocked module patterns
  unmockedModulePathPatterns: [
    'react',
    'react-dom',
    'styled-components',
  ],
  
  // Watch path ignore patterns
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/dist/',
    '<rootDir>/out/',
    '<rootDir>/coverage/',
    '<rootDir>/.git/',
  ],
  
  // Force exit after tests complete
  forceExit: false,
  
  // Detect open handles
  detectOpenHandles: true,
  
  // Detect leaked timers
  detectLeaks: false,
  
  // Bail on first test failure in CI
  bail: process.env.CI ? 1 : 0,
  
  // Silent mode
  silent: false,
  
  // Pass with no tests
  passWithNoTests: true,
  
  // Log heap usage
  logHeapUsage: false,
  
  // Collect coverage from untested files
  collectCoverageOnlyFrom: undefined,
  
  // Coverage path ignore patterns
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/coverage/',
    '/.next/',
    '/dist/',
    '/out/',
    '/public/',
    '\\.d\\.ts$',
    '\\.config\\.(js|ts)$',
    '\\.stories\\.(js|jsx|ts|tsx)$',
  ],
  
  // Dependency extractor
  dependencyExtractor: undefined,
  
  // Extra globals
  extraGlobals: [],
  
  // Find related tests
  findRelatedTests: false,
  
  // Force coverage collection
  forceCoverageMatch: [],
  
  // Global teardown timeout
  globalTeardownTimeout: 10000,
  
  // Haste configuration
  haste: {
    computeSha1: false,
    throwOnModuleCollision: false,
  },
  
  // Inject globals
  injectGlobals: true,
  
  // Last commit
  lastCommit: false,
  
  // List tests
  listTests: false,
  
  // Max concurrent tests
  maxConcurrency: 5,
  
  // No coverage
  noCoverage: false,
  
  // No stack trace
  noStackTrace: false,
  
  // Only changed
  onlyChanged: false,
  
  // Only failures
  onlyFailures: false,
  
  // Output file
  outputFile: undefined,
  
  // Preset
  preset: undefined,
  
  // Pretty format
  prettierPath: 'prettier',
  
  // Projects
  projects: undefined,
  
  // Random
  random: false,
  
  // Run in band
  runInBand: false,
  
  // Runtime
  runtime: undefined,
  
  // Seed
  seed: undefined,
  
  // Setup files
  setupFiles: [],
  
  // Shard
  shard: undefined,
  
  // Skip filter
  skipFilter: false,
  
  // Skip node resolution
  skipNodeResolution: false,
  
  // Slow test threshold
  slowTestThreshold: 5,
  
  // Test name pattern
  testNamePattern: undefined,
  
  // Test result processor
  testResultsProcessor: undefined,
  
  // Test runner
  testRunner: 'jest-circus/runner',
  
  // Test sequence
  testSequencer: '@jest/test-sequencer',
  
  // Timer
  timers: 'real',
  
  // Update snapshot
  updateSnapshot: false,
  
  // Use stderr
  useStderr: false,
  
  // Watch
  watch: false,
  
  // Watch all
  watchAll: false,
  
  // Watch man
  watchman: true,
};

export default config;