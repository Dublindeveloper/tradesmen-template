import type { TradeConfig } from '../types/config';

export const contractorConfig: TradeConfig = {
  tradeType: 'electrician',
  businessName: 'Apex Commercial Electrical Contractors',
  tagline: 'Dublin Commercial Electrical Fit-Outs & Industrial Maintenance',
  heroHeadline: 'Commercial Electrical & Fit-Out Contractors Dublin.',
  heroSubheadline: 'Safe Electric & ISO certified commercial electrical engineering. Office fit-outs, sub-station switchgear, structured data cabling, emergency lighting & annual maintenance contracts across Ireland.',
  heroImage: '/images/hero-contractor.jpg',
  dutyPillText: 'Commercial On-Duty Engineering Team — Active Across Dublin',
  ownerName: 'Sean MacNamara',
  yearEstablished: 2008,
  phone: '+35318907777',
  phoneDisplay: '(01) 890 7777',
  whatsappNumber: '353871112233',
  email: 'tenders@apexelectrical.ie',
  address: 'Apex House, Ballycoolin Business Park, Dublin 15',
  eircode: 'D15 AP88',
  county: 'Dublin',
  emergencyAvailable247: true,
  emergencyResponseTime: 'Priority Commercial Response',
  publicLiabilityInsurance: '€10,000,000 Commercial Liability',
  certifications: [
    'Safe Electric Commercial Contractor',
    'ISO 9001 Quality Management',
    'ISO 45001 Health & Safety Certified',
    'Certified Structure Cabling Installer'
  ],
  trustBadges: [
    {
      title: 'Safe Electric Reg.',
      subtitle: 'Commercial & Industrial',
      icon: 'shield-check'
    },
    {
      title: '€10M Liability',
      subtitle: 'Comprehensive Coverage',
      icon: 'shield'
    },
    {
      title: 'ISO 9001 Certified',
      subtitle: 'Audited Quality Control',
      icon: 'clock'
    },
    {
      title: 'Dedicated Account PM',
      subtitle: 'Single Point of Contact',
      icon: 'zap'
    }
  ],
  beforeAfter: {
    badgeText: 'Compliance & Safety Audit',
    title: 'Before & After: Commercial Switchgear & Main Distribution Retrofit',
    subtitle: 'Slide to compare an out-dated non-compliant commercial 3-phase panel with our certified Schneider/Siemens smart distribution upgrade.',
    beforeImage: '/images/switchgear-old.jpg',
    beforeLabel: 'Non-Compliant Commercial Panel',
    afterImage: '/images/switchgear-modern.jpg',
    afterLabel: 'Smart Schneider Distribution Unit',
    beforeDangerText: 'Old: High fire risk, no digital power metering, insurance audit failure',
    afterBenefitText: 'New: Real-time digital power monitoring, surge protection, Safe Electric cert'
  },
  calculator: {
    badgeText: 'ROI & Energy Efficiency',
    title: 'Commercial LED & Energy Efficiency Calculator',
    subtitle: 'Estimate annual energy savings for your office, retail, or industrial building LED retrofit.',
    grantAmount: 1200,
    grantLabel: 'SEAI Commercial Energy Efficiency Subsidy',
    groups: [
      {
        label: '1. Select Facility Type & Scale',
        options: [
          { title: 'Commercial Office Fit-out', subtitle: 'Modern architectural LED linear profiles', cost: 3500, name: 'Office Fit-out Package' },
          { title: 'Retail / Showroom Illumination', subtitle: 'High CRI track lights & display panels', cost: 4200, name: 'Retail Showroom Package' },
          { title: 'Industrial / Warehouse High-Bay', subtitle: 'Heavy-duty IP65 LED high-bay fixtures', cost: 5800, name: 'Warehouse High-Bay Package' }
        ]
      },
      {
        label: '2. Smart Lighting Control Systems',
        options: [
          { title: 'DALI / Daylight Harvesting Sensors', subtitle: 'Auto-dimming based on natural light (+€850)', cost: 850, name: 'DALI Sensors Included' },
          { title: 'Standard PIR Occupancy Motion Sensors', subtitle: 'Auto turn-off in unoccupied areas (+€450)', cost: 450, name: 'PIR Sensors Included' }
        ]
      },
      {
        label: '3. Emergency Lighting & Testing Compliance',
        options: [
          { title: 'Self-Test Emergency Lighting Upgrade', subtitle: 'IS 3217 compliant battery backup (+€650)', cost: 650, name: 'IS 3217 Self-Test Emergency Lighting' },
          { title: 'Standard Emergency Light Fittings', subtitle: 'Basic compliance fittings (+€350)', cost: 350, name: 'Standard Emergency Lighting' }
        ]
      }
    ],
    summaryNote: 'SEAI Commercial Energy grants apply. LED retrofits typically pay for themselves within 14–18 months in electricity savings.'
  },
  services: [
    {
      id: 'commercial-fitouts',
      title: 'Commercial & Office Electrical Fit-Outs',
      shortDesc: 'Turnkey electrical engineering for new office spaces, retail outlets, and commercial refurbishments across Dublin.',
      fullDesc: 'From initial CAD design to final commissioning, we deliver complete electrical fit-outs on time and within budget. Working closely with main contractors, project managers, and interior architects.',
      icon: 'home',
      popular: true,
      priceGuide: 'Itemized Tender / Bill of Quantities',
      features: [
        '3-phase main distribution & sub-boards',
        'Architectural LED linear profiles & lighting controls',
        'Floor box power feeds & perimeter trunking',
        'Full Safe Electric Completion Certification'
      ]
    },
    {
      id: 'data-cabling',
      title: 'Structured Data & Fibre Optic Cabling',
      shortDesc: 'Cat6, Cat6A, and Fibre Optic network installation, server rack patching, and fluke testing certification.',
      fullDesc: 'High-speed structured cabling infrastructure for modern tech offices and data environments. Fully tested and certified using Fluke Networks equipment.',
      icon: 'cpu',
      popular: true,
      priceGuide: 'Per Drop Rate / Project Pricing',
      features: [
        'Cat6 & Cat6A LSZH network cable drops',
        'Comms cabinet & server rack installation',
        'Fibre optic backbone splicing',
        '25-year manufacturer cabling warranty'
      ]
    },
    {
      id: 'emergency-lighting-fire',
      title: 'Emergency Lighting & Fire Alarm (IS 3217)',
      shortDesc: 'Certified design, installation, and annual testing of emergency escape lighting and L1/L2 fire alarm systems.',
      fullDesc: 'Guaranteed compliance with Irish fire safety building regulations (IS 3217 & IS 3218). We issue official logbooks and quarterly inspection certificates.',
      icon: 'zap',
      popular: true,
      priceGuide: 'Annual Maintenance Contracts Available',
      features: [
        '3-hour battery backup escape fittings',
        'Quarterly & annual testing logbooks',
        'Addressable fire alarm panel commissioning',
        'Disability access refuge call points'
      ]
    }
  ],
  serviceAreas: [
    { name: 'Dublin Docklands & D2', postcode: 'Dublin 2', county: 'Dublin', popular: true },
    { name: 'Ballycoolin & Blanchardstown', postcode: 'Dublin 15', county: 'Dublin', popular: true },
    { name: 'Sandyford Business District', postcode: 'Dublin 18', county: 'Dublin', popular: true },
    { name: 'Citywest & South County', postcode: 'Dublin 24', county: 'Dublin', popular: true }
  ],
  reviews: [
    {
      name: 'David Kavanagh',
      location: 'Dublin Docklands (D2)',
      rating: 5,
      date: '1 month ago',
      service: 'Office Electrical Fit-Out',
      text: 'Apex handled the 12,000 sq ft office fit-out for our tech firm. On budget, completed 3 days ahead of schedule, and passed all compliance inspections on first go. Outstanding commercial contractor.'
    }
  ],
  googleRating: {
    score: 4.9,
    totalReviews: 96
  },
  pricingSnippet: {
    calloutFee: 'Commercial Account Rates',
    hourlyRate: 'Tender & Fixed Contract Quotes',
    freeQuotes: true
  },
  theme: {
    primaryColor: '#0B132B',    // Dark Corporate Slate
    primaryHover: '#050A19',
    accentColor: '#10B981',     // High-Vis Emerald Green
    accentHover: '#059669',
    surfaceBg: '#FFFFFF',
    lightBg: '#F1F5F9'
  }
};
