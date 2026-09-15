export type TradeType = 'electrician' | 'plumber' | 'carpenter' | 'builder' | 'painter';

export interface TrustBadge {
  title: string;
  subtitle: string;
  icon: string; // SVG path or identifier
}

export interface TradeService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  popular?: boolean;
  priceGuide?: string;
  features: string[];
}

export interface CustomerReview {
  name: string;
  location: string;
  rating: number; // usually 5
  date: string;
  text: string;
  service: string;
}

export interface ServiceArea {
  name: string;
  postcode?: string;
  county: string;
  popular?: boolean;
}

export interface CalculatorOption {
  title: string;
  subtitle: string;
  cost: number;
  name: string;
}

export interface CalculatorGroup {
  label: string;
  options: CalculatorOption[];
}

export interface TradeConfig {
  tradeType: TradeType;
  businessName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  dutyPillText: string;
  ownerName: string;
  yearEstablished: number;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string; // international format e.g. 353871234567
  email: string;
  address: string;
  eircode?: string;
  county: string;
  emergencyAvailable247: boolean;
  emergencyResponseTime: string; // e.g. "45 Mins Average"
  publicLiabilityInsurance: string; // e.g. "€6.5M Public Liability"
  certifications: string[]; // e.g. ["Safe Electric Registered", "RECI Certified", "SEAI Approved Installer"]
  trustBadges: TrustBadge[];
  beforeAfter: {
    badgeText: string;
    title: string;
    subtitle: string;
    beforeImage: string;
    beforeLabel: string;
    afterImage: string;
    afterLabel: string;
    beforeDangerText: string;
    afterBenefitText: string;
  };
  calculator: {
    badgeText: string;
    title: string;
    subtitle: string;
    grantAmount: number;
    grantLabel: string;
    groups: CalculatorGroup[];
    summaryNote: string;
  };
  services: TradeService[];
  serviceAreas: ServiceArea[];
  reviews: CustomerReview[];
  googleRating: {
    score: number;
    totalReviews: number;
  };
  pricingSnippet: {
    calloutFee: string;
    hourlyRate: string;
    freeQuotes: boolean;
  };
  theme: {
    primaryColor: string;
    primaryHover: string;
    accentColor: string;
    accentHover: string;
    surfaceBg: string;
    lightBg: string;
  };
}
