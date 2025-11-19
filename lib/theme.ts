import config from '@/site-config.json'

export interface SiteConfig {
  meta: {
    projectName: string
    version: string
    createdBy: string
    description: string
  }
  branding: {
    siteTitle: string
    tagline: string
    logo: string
    favIcon: string
  }
  colors: {
    primary: string
    primaryDark: string
    accent: string
    accentAlt: string
    mutedGreen: string
    background: string
    heroOverlay: string
    cardBg: string
    textPrimary: string
    textSecondary: string
    gold: string
  }
  typography: {
    brandFonts: {
      heading: string
      body: string
    }
    fontSizes: {
      h1: string
      h2: string
      h3: string
      bodyLarge: string
      body: string
      small: string
    }
    weights: {
      heading: number
      subheading: number
      body: number
    }
  }
  layout: {
    pageWidth: {
      max: string
      padding: string
    }
    grid: {
      columns: number
      gutter: string
    }
  }
  sections: string[]
  assets: {
    hero?: string
    aboutBackground?: string
    testimonials?: string
    contactMapFallback?: string
    footerBg?: string
  }
  hero?: {
    title?: string
    subtitle?: string
    images?: string[]
  }
  about?: {
    title?: string
    content?: string
    images?: string[]
  }
  cottages?: Array<{
    name: string
    description: string
    image: string
    price?: string
    features?: string[]
  }>
  testimonials?: Array<{
    name: string
    text: string
    rating: number
    location?: string
  }>
  contact?: {
    address?: string
    phone?: string
    email?: string
    mapUrl?: string
    mapEmbed?: string
  }
  footer?: {
    description?: string
    socialLinks?: Array<{
      name: string
      url: string
      icon?: string
    }>
    copyright?: string
  }
}

export const siteConfig: SiteConfig = config as SiteConfig

export const getConfig = (): SiteConfig => siteConfig

export const getColor = (key: keyof SiteConfig['colors']): string => {
  return siteConfig.colors[key] || ''
}

export const getTypography = () => siteConfig.typography

export const getBranding = () => siteConfig.branding

export const getAssets = () => {
  const assets = { ...siteConfig.assets }
  
  // Normalize asset paths to start with / for Next.js Image component
  if (assets.hero && !assets.hero.startsWith('/') && !assets.hero.startsWith('http')) {
    assets.hero = '/' + assets.hero
  }
  if (assets.aboutBackground && !assets.aboutBackground.startsWith('/') && !assets.aboutBackground.startsWith('http')) {
    assets.aboutBackground = '/' + assets.aboutBackground
  }
  if (assets.testimonials && !assets.testimonials.startsWith('/') && !assets.testimonials.startsWith('http')) {
    assets.testimonials = '/' + assets.testimonials
  }
  if (assets.contactMapFallback && !assets.contactMapFallback.startsWith('/') && !assets.contactMapFallback.startsWith('http')) {
    assets.contactMapFallback = '/' + assets.contactMapFallback
  }
  if (assets.footerBg && !assets.footerBg.startsWith('/') && !assets.footerBg.startsWith('http')) {
    assets.footerBg = '/' + assets.footerBg
  }
  
  return assets
}

