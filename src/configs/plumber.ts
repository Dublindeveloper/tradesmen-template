import type { TradeConfig } from '../types/config';

export const plumberConfig: TradeConfig = {
  tradeType: 'plumber',
  businessName: 'FlowPro Plumbing & Heating',
  tagline: 'Dublin RGII Registered Gas Installers & 24/7 Emergency Plumbers',
  heroHeadline: 'Certified Dublin Plumbers & Boiler Specialists.',
  heroSubheadline: 'RGII certified gas boiler servicing, burst pipe repairs, bathroom renovations, and 24/7 rapid emergency plumbing callouts throughout Dublin.',
  heroImage: '/images/hero-plumber.jpg',
  dutyPillText: 'Emergency Plumber On Duty Now — Dublin 15 & Surrounds',
  ownerName: 'Liam Kavanagh',
  yearEstablished: 2014,
  phone: '+35318906666',
  phoneDisplay: '(01) 890 6666',
  whatsappNumber: '353879876543',
  email: 'info@flowproplumbing.ie',
  address: 'Main Street, Blanchardstown Village, Dublin 15',
  eircode: 'D15 KH92',
  county: 'Dublin',
  emergencyAvailable247: true,
  emergencyResponseTime: 'Within 45 Mins',
  publicLiabilityInsurance: '€6,500,000 Fully Insured',
  certifications: [
    'RGII Registered Gas Installer',
    'SEAI Heating Controls Approved',
    'City & Guilds Plumbing Certified',
    'OFTEC Oil Heating Technician'
  ],
  trustBadges: [
    {
      title: 'RGII Gas Certified',
      subtitle: 'Registered & Fully Insured',
      icon: 'shield-check'
    },
    {
      title: '€6.5M Liability',
      subtitle: 'Guaranteed Workmanship',
      icon: 'shield'
    },
    {
      title: '24/7 Emergency Response',
      subtitle: 'Burst Pipes & Leaks',
      icon: 'clock'
    },
    {
      title: 'SEAI Grant Approved',
      subtitle: 'Heating Controls Grants',
      icon: 'zap'
    }
  ],
  beforeAfter: {
    badgeText: 'Home Heating Efficiency',
    title: 'Before & After: Condensing Boiler Replacement',
    subtitle: 'Slide to compare an obsolete, leaking 1980s back boiler with a surgical modern A-rated Worcester Bosch combi system.',
    beforeImage: '/images/boiler-old.jpg',
    beforeLabel: 'Corroded 1980s Inefficient Boiler',
    afterImage: '/images/boiler-modern.jpg',
    afterLabel: 'A-Rated Worcester Bosch System',
    beforeDangerText: 'Old: High gas bills, carbon monoxide hazard, leaking valves',
    afterBenefitText: 'New: 94% efficiency, digital smartphone controls, RGII safety cert'
  },
  calculator: {
    badgeText: 'Transparent Quotation',
    title: 'New Boiler & Heating Controls Price Calculator',
    subtitle: 'Estimate your A-rated gas boiler replacement cost including SEAI grant eligibility.',
    grantAmount: 700,
    grantLabel: 'SEAI Heating Controls Grant',
    groups: [
      {
        label: '1. Select A-Rated Boiler Brand',
        options: [
          { title: 'Worcester Bosch 30kW', subtitle: 'German engineering, 10-year warranty', cost: 1850, name: 'Worcester Bosch 30kW' },
          { title: 'Viessmann Vitodens 100-W', subtitle: 'Stainless steel Inox-Radial exchanger', cost: 1750, name: 'Viessmann Vitodens' },
          { title: 'Ideal Logic Max Combi', subtitle: 'British compact, 10-year parts guarantee', cost: 1550, name: 'Ideal Logic Max' }
        ]
      },
      {
        label: '2. System Power Flush & Cleansing',
        options: [
          { title: 'Chemical Power Flush (+€290)', subtitle: 'Clears black sludge & protects warranty', cost: 290, name: 'Chemical Power Flush Included' },
          { title: 'Basic System Inhibitor Dose', subtitle: 'Standard refill', cost: 60, name: 'Basic Inhibitor Only' }
        ]
      },
      {
        label: '3. Smart Heating Controls Upgrade',
        options: [
          { title: 'Climote / Nest Smart Thermostat', subtitle: 'App control & room zoning (+€250)', cost: 250, name: 'Smart Thermostat & Zoning' },
          { title: 'Keep Existing Mechanical Thermostat', subtitle: 'No controls upgrade', cost: 0, name: 'Existing Controls' }
        ]
      }
    ],
    summaryNote: 'SEAI Heating Controls grants of up to €700 apply when installing smart room zoning.'
  },
  services: [
    {
      id: 'emergency-plumbing',
      title: '24/7 Emergency Burst Pipe & Leak Repairs',
      shortDesc: 'Immediate emergency isolation of burst pipes, ceiling leaks, flooding, and overflowing tanks across Dublin.',
      fullDesc: 'Water leaks cause thousands of euros in structural damage within minutes. Our emergency response team arrives fast with commercial pipe freezing and repair equipment.',
      icon: 'droplet',
      popular: true,
      priceGuide: 'Fixed Callout + Transparent Hourly Rate',
      features: [
        'Average response under 45 minutes',
        'Burst radiator & pipe freezing repairs',
        'Ceiling leak tracing & containment',
        'Direct contact with master plumber'
      ]
    },
    {
      id: 'gas-boiler-service',
      title: 'Gas Boiler Servicing & Replacement',
      shortDesc: 'Certified RGII annual boiler servicing, efficiency tune-ups, and A-rated combi boiler installations.',
      fullDesc: 'Lower your gas heating bills and prevent dangerous carbon monoxide hazards. We service all major brands (Worcester Bosch, Viessmann, Ideal, Baxi) with official RGII certification.',
      icon: 'flame',
      popular: true,
      priceGuide: 'Boiler Service from €99',
      features: [
        'RGII safety certificate issued',
        'Combustion efficiency & flue gas test',
        'Pump, heat exchanger & thermostat checks',
        'A-rated high efficiency replacements'
      ]
    },
    {
      id: 'bathroom-renovations',
      title: 'Complete Bathroom Renovations',
      shortDesc: 'Turnkey luxury bathroom fitouts, walk-in wet rooms, shower installations, and vanity plumbing.',
      fullDesc: 'From plumbing rough-ins to precision tiling and sanitaryware, we handle your bathroom makeover from start to finish with zero subcontracting headaches.',
      icon: 'home',
      features: [
        'Full strip-out and waste disposal',
        'Power shower & pumped systems',
        'Underfloor heating installation',
        'Comprehensive 5-year workmanship guarantee'
      ]
    }
  ],
  serviceAreas: [
    { name: 'Blanchardstown', postcode: 'Dublin 15', county: 'Dublin', popular: true },
    { name: 'Castleknock', postcode: 'Dublin 15', county: 'Dublin', popular: true },
    { name: 'Swords', postcode: 'North County', county: 'Dublin', popular: true },
    { name: 'Lucan', postcode: 'Dublin 20', county: 'Dublin', popular: true }
  ],
  reviews: [
    {
      name: 'Eoin O’Mahony',
      location: 'Castleknock, Dublin 15',
      rating: 5,
      date: '1 week ago',
      service: 'Boiler Repair',
      text: 'Woke up to no heat or hot water on a freezing Monday. Liam was out within an hour, had the replacement fan in his van, and got the system running perfectly. Extremely fair price.'
    },
    {
      name: 'Sinead Kelly',
      location: 'Blanchardstown, Dublin 15',
      rating: 5,
      date: '3 weeks ago',
      service: 'Emergency Burst Pipe',
      text: 'Had water pouring through our kitchen ceiling from an upstairs radiator valve. Liam arrived in 25 minutes, froze the pipe without draining the system, and fixed it with zero fuss. Life saver.'
    }
  ],
  googleRating: {
    score: 4.9,
    totalReviews: 132
  },
  pricingSnippet: {
    calloutFee: 'Transparent Callout Rates',
    hourlyRate: 'Upfront Quotes Before Any Work Begins',
    freeQuotes: true
  },
  theme: {
    primaryColor: '#0E3A53',    // Deep Marine Navy
    primaryHover: '#072435',
    accentColor: '#0284C7',     // High-Vis Sky Cyan
    accentHover: '#0369A1',
    surfaceBg: '#FFFFFF',
    lightBg: '#F0F9FF'
  }
};
