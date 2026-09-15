import type { TradeConfig } from '../types/config';

export const electricianConfig: TradeConfig = {
  tradeType: 'electrician',
  businessName: 'VoltPro Electrical Services',
  tagline: 'Dublin Certified Electricians & 24/7 Emergency Repairs',
  heroHeadline: 'Certified Dublin Electricians. Fast, Reliable & Safe.',
  heroSubheadline: 'Safe Electric registered domestic & commercial electrical contractors. From fuse board upgrades & EV home chargers to 24/7 emergency power outages across Dublin.',
  heroImage: '/images/hero-electrician.jpg',
  dutyPillText: 'Electrician On Duty Now — Dublin 15 & Surrounds',
  ownerName: 'Declan Byrne',
  yearEstablished: 2012,
  phone: '+35318905555',
  phoneDisplay: '(01) 890 5555',
  whatsappNumber: '353871234567',
  email: 'info@voltelectrical.ie',
  address: 'Unit 4, Blanchardstown Corporate Park, Dublin 15',
  eircode: 'D15 XY88',
  county: 'Dublin',
  emergencyAvailable247: true,
  emergencyResponseTime: 'Within 45 Mins',
  publicLiabilityInsurance: '€6,500,000 Fully Insured',
  certifications: [
    'Safe Electric Registered Contractor',
    'SEAI Approved EV Charger Installer',
    'RECI Certified Workmanship',
    'City & Guilds Qualified'
  ],
  trustBadges: [
    {
      title: 'Safe Electric Reg.',
      subtitle: 'Fully Certified & Compliant',
      icon: 'shield-check'
    },
    {
      title: '€6.5M Liability',
      subtitle: 'Complete Peace of Mind',
      icon: 'shield'
    },
    {
      title: '24/7 Emergency Response',
      subtitle: 'Average 45 Min Arrival',
      icon: 'clock'
    },
    {
      title: 'SEAI Grant Approved',
      subtitle: 'Up to €300 EV Grant',
      icon: 'zap'
    }
  ],
  beforeAfter: {
    badgeText: 'Safety & Compliance',
    title: 'Before & After: Fuse Board Transformation',
    subtitle: 'Slide to compare an obsolete, fire-hazard domestic fuse box with our certified, RCBO surge-protected installation.',
    beforeImage: '/images/fuseboard-old.jpg',
    beforeLabel: 'Dangerous 1970s Wire Fuse Box',
    afterImage: '/images/fuseboard-modern.jpg',
    afterLabel: 'Modern Safe Electric RCBO Unit',
    beforeDangerText: 'Old: No electric shock protection, brittle wiring, fire hazard',
    afterBenefitText: 'New: 30mA RCD shock prevention, Type 2 Surge Protection, Safe Electric Cert'
  },
  calculator: {
    badgeText: 'SEAI Grant Approved',
    title: 'EV Home Charger Price Calculator',
    subtitle: 'Accurate Irish market pricing: Hardware (€850–€995) + Certified Standard Install (€450–€550) minus the €300 SEAI Grant.',
    grantAmount: 300,
    grantLabel: 'SEAI Home Charger Grant',
    groups: [
      {
        label: '1. Select EV Charger Hardware (Supply Only)',
        options: [
          { title: 'Myenergi Zappi 7.4kW (Tethered 6.5m)', subtitle: 'Hardware €949 (Solar PV & App control)', cost: 949, name: 'Myenergi Zappi Tethered (€949)' },
          { title: 'Myenergi Zappi 7.4kW (Untethered Socket)', subtitle: 'Hardware €879 (Clean facade socket)', cost: 879, name: 'Myenergi Zappi Untethered (€879)' },
          { title: 'Wallbox Pulsar Max 7.4kW', subtitle: 'Hardware €850 (Compact Wi-Fi/Bluetooth)', cost: 850, name: 'Wallbox Pulsar Max (€850)' }
        ]
      },
      {
        label: '2. Certified Electrical Installation & Labour',
        options: [
          { title: 'Standard Certified Installation', subtitle: 'Cable run up to 10m + RCBO breaker (+€490)', cost: 490, name: 'Standard Installation (+€490)' },
          { title: 'Extended Cable Run (10m – 20m)', subtitle: 'Longer cable routing & clips (+€590)', cost: 590, name: 'Extended 10-20m Run (+€590)' },
          { title: 'Driveway Trenching / Heavy Armoured Run', subtitle: 'Over 20m armoured external cable (+€720)', cost: 720, name: 'Heavy Armoured Run (+€720)' }
        ]
      },
      {
        label: '3. Fuse Board Surge Protection (SPD)',
        options: [
          { title: 'Include Type 2 SPD (+€95)', subtitle: 'Recommended for Safe Electric certification', cost: 95, name: 'Type 2 SPD Included (+€95)' },
          { title: 'Existing Modern Board with SPD', subtitle: 'No additional hardware required', cost: 0, name: 'Board Already Has SPD' }
        ]
      }
    ],
    summaryNote: 'Safe Electric certification included. We supply the official receipt & compliance docs required to claim your €300 SEAI grant.'
  },
  services: [
    {
      id: 'emergency-callout',
      title: '24/7 Emergency Electrical Callouts',
      shortDesc: 'Immediate emergency fault finding, tripped switches, burning smells, and power restoration across Dublin.',
      fullDesc: 'Sudden power outages or dangerous burning odors demand urgent attention. Our rapid response master electricians arrive fully equipped with thermal diagnostics and circuit repair tools to make your home or business safe.',
      icon: 'zap',
      popular: true,
      priceGuide: 'Fixed Callout + Transparent Hourly Rate',
      features: [
        'Average arrival under 45 minutes',
        'Direct phone line to master electrician',
        'Tripped breakers & consumer unit diagnostics',
        'Safe isolation and immediate power restore'
      ]
    },
    {
      id: 'fuseboard-upgrade',
      title: 'Fuse Board & Consumer Unit Upgrades',
      shortDesc: 'Replace obsolete, dangerous wire fuse boards with modern RCBO & surge protection consumer units.',
      fullDesc: 'Older homes often have fuse boards that violate current Irish electrical safety regulations. We install state-of-the-art consumer units featuring individual RCBO protection, surge arrestors, and full Safe Electric compliance certificates.',
      icon: 'cpu',
      popular: true,
      priceGuide: 'From €550 (Includes Safe Electric Certificate)',
      features: [
        'RCBO shock protection on all circuits',
        'Type 2 Surge Protection Device (SPD)',
        'Full circuit labeling & load balancing',
        'Official Safe Electric Completion Certificate'
      ]
    },
    {
      id: 'ev-charger-installation',
      title: 'SEAI Approved Home EV Chargers',
      shortDesc: 'Smart 7.4kW EV car charger installation eligible for up to €300 SEAI government grants.',
      fullDesc: 'Charge your electric car overnight at the lowest domestic night-rate tariffs. We supply and install premium tethered and untethered chargers (Zappi, Wallbox, Easee) with automated solar integration.',
      icon: 'battery-charging',
      popular: true,
      priceGuide: 'SEAI Grant Eligible (Save up to €300)',
      features: [
        '7.4kW fast charging with dynamic load balancing',
        'Smart phone app scheduling for cheap night tariffs',
        'Solar PV integration capability',
        'Hassle-free SEAI grant paperwork guidance'
      ]
    },
    {
      id: 'rewiring-renovations',
      title: 'House Rewiring & Extensions',
      shortDesc: 'Full and partial rewiring for older Dublin properties, kitchen upgrades, and attic conversions.',
      fullDesc: 'Whether renovating a period property or adding an extension, our structured wiring service guarantees your electrical system will handle modern power demands reliably and safely for decades.',
      icon: 'home',
      features: [
        'Minimal wall disruption & clean chasing',
        'First and second fix wiring',
        'Outdoor garden lighting & waterproof power',
        'Compliant landlord safety certifications'
      ]
    },
    {
      id: 'periodic-inspection',
      title: 'Periodic Inspection Reports (PIR / Certs)',
      shortDesc: 'Comprehensive electrical testing and safety certification for landlords, homebuyers, and insurance.',
      fullDesc: 'Essential for rental compliance (RTB regulations) or before buying a home in Dublin. We carry out in-depth testing of all circuits, insulation resistance, and earthing to issue valid certs.',
      icon: 'file-text',
      priceGuide: 'From €180 for standard residential property',
      features: [
        'Detailed condition report with clear recommendations',
        'Landlord RTB tenancy compliance',
        'Mortgage & homebuyer valuation certificates',
        'Priority quote on any required remedial work'
      ]
    },
    {
      id: 'lighting-smart-home',
      title: 'LED Lighting & Smart Automation',
      shortDesc: 'Architectural LED downlights, energy-saving retrofits, smart dimmers, and garden security floodlights.',
      fullDesc: 'Cut your lighting bills by up to 80% while enhancing the ambiance of your living spaces. We install low-glare LED recessed spotlights, Philips Hue integration, and commercial high-bay illumination.',
      icon: 'sun',
      features: [
        'Fire-rated, energy-efficient LED fittings',
        'Warm white / cool white / dimmable setups',
        'Smart app & voice control (Alexa / Google)',
        'Dusk-to-dawn security PIR sensors'
      ]
    }
  ],
  serviceAreas: [
    { name: 'Blanchardstown', postcode: 'Dublin 15', county: 'Dublin', popular: true },
    { name: 'Castleknock', postcode: 'Dublin 15', county: 'Dublin', popular: true },
    { name: 'Mulhuddart & Ongar', postcode: 'Dublin 15', county: 'Dublin', popular: true },
    { name: 'Swords & Malahide', postcode: 'North County', county: 'Dublin', popular: true },
    { name: 'Lucan & Palmerstown', postcode: 'Dublin 20', county: 'Dublin', popular: true },
    { name: 'Clonsilla & Carpenterstown', postcode: 'Dublin 15', county: 'Dublin' },
    { name: 'Ashtown & Cabra', postcode: 'Dublin 7', county: 'Dublin' },
    { name: 'Finglas & Glasnevin', postcode: 'Dublin 11', county: 'Dublin' },
    { name: 'Drumcondra & Phibsborough', postcode: 'Dublin 9', county: 'Dublin' },
    { name: 'Dublin City Centre', postcode: 'Dublin 1 & 2', county: 'Dublin' }
  ],
  reviews: [
    {
      name: 'Niall Gallagher',
      location: 'Castleknock, Dublin 15',
      rating: 5,
      date: '2 weeks ago',
      service: 'Emergency Callout',
      text: 'Lost power to our entire ground floor on a Friday night with a fridge full of groceries. Declan was at our door within 35 minutes, found the shorted socket immediately, and had everything restored safely. First class service.'
    },
    {
      name: 'Sarah O’Connor',
      location: 'Blanchardstown, Dublin 15',
      rating: 5,
      date: '1 month ago',
      service: 'EV Charger Installation',
      text: 'Installed a Zappi EV charger for our new electric car. Super neat installation, cable hidden neatly along the side passage, and assisted with all the SEAI grant documentation. Out-of-pocket cost after the €300 grant was exactly as quoted.'
    },
    {
      name: 'Mark Hennessy',
      location: 'Swords, Co. Dublin',
      rating: 5,
      date: '3 weeks ago',
      service: 'Fuse Board Upgrade',
      text: 'Replaced an ancient wooden fuse board in our 1970s house. Work was completed in under 4 hours, left the place spotless, and handed over the official Safe Electric certificate on the spot. Very fair price.'
    },
    {
      name: 'Ciara Brennan',
      location: 'Lucan, Co. Dublin',
      rating: 5,
      date: '2 months ago',
      service: 'Downlight & Socket Rewire',
      text: 'Fitted 16 LED downlights in our kitchen and living room and added USB sockets. Extremely tidy tradesmen, polite, arrived exactly when promised, and gave an upfront price with zero hidden extras.'
    }
  ],
  googleRating: {
    score: 4.9,
    totalReviews: 148
  },
  pricingSnippet: {
    calloutFee: 'Transparent Callout Rates',
    hourlyRate: 'Upfront Quotes Before Any Work Begins',
    freeQuotes: true
  },
  theme: {
    primaryColor: '#0F1D36',    // Deep Navy Industrial
    primaryHover: '#091325',
    accentColor: '#F59E0B',     // High-Voltage Amber
    accentHover: '#D97706',
    surfaceBg: '#FFFFFF',
    lightBg: '#F8FAFC'
  }
};
