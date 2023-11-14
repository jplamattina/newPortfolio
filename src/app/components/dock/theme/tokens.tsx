import { mediaQueries } from './breakpoints'

const MD_SPACE_UNIT = 0.25
const BASE_SPACE_UNIT = MD_SPACE_UNIT * 0.8

export const semanticTokens = {
  colors: {
    'bg-body': {
      default: 'white',
      _dark: 'gray.900'
    },
    'bg-card': {
      default: '#f2f2f2',
      _dark: '#1C1C1C'
    },
    'bg-contrast-xs': {
      default: 'rgba(0, 0, 0, 0.025)',
      _dark: 'rgba(255, 255, 255, 0.0125)'
    },
    'bg-contrast-sm': {
      default: 'rgba(0, 0, 0, 0.05)',
      _dark: 'rgba(255, 255, 255, 0.025)'
    },
    'bg-contrast-md': {
      default: 'rgba(0, 0, 0, 0.1)',
      _dark: 'rgba(255, 255, 255, 0.05)'
    },
    'bg-contrast-lg': {
      default: 'rgba(0, 0, 0, 0.15)',
      _dark: 'rgba(255, 255, 255, 0.075)'
    },
    'bg-contrast-xl': {
      default: 'rgba(0, 0, 0, 0.2)',
      _dark: 'rgba(255, 255, 255, 0.1)'
    },
    'text-contrast-xs': {
      default: 'blackAlpha.500',
      _dark: 'whiteAlpha.500'
    },
    'text-contrast-sm': {
      default: 'blackAlpha.600',
      _dark: 'whiteAlpha.600'
    },
    'text-contrast-md': {
      default: 'blackAlpha.700',
      _dark: 'whiteAlpha.700'
    },
    'text-contrast-lg': {
      default: 'blackAlpha.800',
      _dark: 'whiteAlpha.800'
    },
    'text-contrast-xl': {
      default: 'blackAlpha.900',
      _dark: 'whiteAlpha.900'
    },
    'border-contrast-xs': {
      default: 'rgba(0, 0, 0, 0.1)',
      _dark: 'rgba(255, 255, 255, 0.05)'
    },
    'border-contrast-sm': {
      default: 'rgba(0, 0, 0, 0.2)',
      _dark: 'rgba(255, 255, 255, 0.1)'
    },
    'border-contrast-md': {
      default: 'rgba(0, 0, 0, 0.3)',
      _dark: 'rgba(255, 255, 255, 0.15)'
    },
    'border-contrast-lg': {
      default: 'rgba(0, 0, 0, 0.4)',
      _dark: 'rgba(255, 255, 255, 0.2)'
    },
    'border-contrast-xl': {
      default: 'rgba(0, 0, 0, 0.5)',
      _dark: 'rgba(255, 255, 255, 0.25)'
    },
    'focus-ring': {
      default: 'purple.200',
      _dark: 'purple.200'
    }
  },
  space: {
    xs: {
      [mediaQueries.base]: 1 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 1 * MD_SPACE_UNIT + 'rem'
    },
    sm: {
      [mediaQueries.base]: 2 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 2 * MD_SPACE_UNIT + 'rem'
    },
    md: {
      [mediaQueries.base]: 4 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 4 * MD_SPACE_UNIT + 'rem'
    },
    lg: {
      [mediaQueries.base]: 6 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 6 * MD_SPACE_UNIT + 'rem'
    },
    xl: {
      [mediaQueries.base]: 8 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 8 * MD_SPACE_UNIT + 'rem'
    },
    '2xl': {
      [mediaQueries.base]: 12 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 12 * MD_SPACE_UNIT + 'rem'
    },
    '3xl': {
      [mediaQueries.base]: 16 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 16 * MD_SPACE_UNIT + 'rem'
    },
    '4xl': {
      [mediaQueries.base]: 24 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 24 * MD_SPACE_UNIT + 'rem'
    },
    '5xl': {
      [mediaQueries.base]: 32 * BASE_SPACE_UNIT + 'rem',
      [mediaQueries.md]: 32 * MD_SPACE_UNIT + 'rem'
    }
  },
  borders: {
    sm: '1px solid var(--chakra-colors-border-contrast-sm)',
    md: '2px solid var(--chakra-colors-border-contrast-sm)',
    lg: '3px solid var(--chakra-colors-border-contrast-sm)'
  }
}
