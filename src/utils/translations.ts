import { LanguageCode } from '../types';

export interface TranslationDictionary {
  brandName: string;
  brandTagline: string;
  nav: {
    topBanner: string;
    zeroCommission: string;
    directPayout: string;
    welfareFund: string;
    marketplace: string;
    workerPortal: string;
    adminPanel: string;
    city: string;
    language: string;
    register: string;
    registerRole: string;
    sos: string;
    quickPortals: string;
    expertSection: string;
    biddingMarketplace: string;
    radiusMeter: string;
    workersDirectory: string;
  };
  hero: {
    initiativeBadge: string;
    federationBadge: string;
    commissionBadge: string;
    title: string;
    subtitle: string;
    bookService: string;
    joinAsWorker: string;
    coopRateCard: string;
    eShramVerified: string;
    esicShield: string;
  };
  ticker: string[];
  expertSection: {
    badge: string;
    discount: string;
    title: string;
    subtitle: string;
    hourlyBundle: string;
    saving: string;
    bookCombo: string;
    viewWork: string;
    completedCombos: string;
    specialties: string;
  };
  biddingMarketplace: {
    badge: string;
    liveLabel: string;
    title: string;
    subtitle: string;
    postTender: string;
    allTenders: string;
    openBids: string;
    budget: string;
    lowestBid: string;
    bidsCount: string;
    awardTender: string;
    placeBid: string;
    tenderAwarded: string;
    filterAll: string;
    filterOpen: string;
    filterAwarded: string;
    teamPlan: string;
    daysToComplete: string;
  };
  bidding?: {
    badge: string;
    liveLabel: string;
    title: string;
    subtitle: string;
    postTender: string;
    postRequirement?: string;
    allTenders: string;
    openBids: string;
    budget: string;
    lowestBid: string;
    bidsCount: string;
    awardTender: string;
    placeBid: string;
    tenderAwarded: string;
    filterAll: string;
    filterOpen: string;
    filterAwarded: string;
    teamPlan: string;
    daysToComplete: string;
  };
  radiusSection: {
    badge: string;
    title: string;
    heading: string;
    description: string;
    currentRadius: string;
    workersInRange: string;
    selectedSector: string;
    quickPresets: string;
    meters: string;
    kilometers: string;
  };
  categories: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allSectors: string;
    resetAll: string;
    highDemand: string;
    bookNow: string;
    hourlyBase: string;
  };
  categoryGrid?: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allSectors: string;
    resetAll: string;
    highDemand: string;
    bookNow: string;
    hourlyBase: string;
    zeroSurge?: string;
    rateCard?: string;
    welfareFund?: string;
  };
  workerDirectory: {
    badge: string;
    title: string;
    subtitle: string;
    workersFound: string;
    hourlyRate: string;
    reviews: string;
    experience: string;
    completedJobs: string;
    bookSpecialist: string;
    reviewsAndWork: string;
    noWorkersFound: string;
    expandRadar: string;
    searchPlaceholder?: string;
    allSectors?: string;
    resetFilter?: string;
    verifiedJobs?: string;
    directWage?: string;
    bookNow?: string;
  };
  hourlyBooking?: {
    title: string;
    slotTitle: string;
    oneHour: string;
    twoHours: string;
    threeHours: string;
    fourHours: string;
    eightHours: string;
    customHours: string;
    hourUnit: string;
    hoursUnit: string;
    timeSlotMorning: string;
    timeSlotAfternoon: string;
    timeSlotEvening: string;
    baseWageLabel: string;
    welfareLabel: string;
    zeroCommissionLabel: string;
    totalLabel: string;
    bookNowWithHours: string;
    fareCalculation?: string;
  };
  filterBar?: {
    federationTitle: string;
    filterSpecialists: string;
    activeRoster: string;
    searchPlaceholder: string;
    allSectors: string;
    allTrades: string;
  };
  statutory?: {
    eshramVerified: string;
    esicCovered: string;
    policeVerified: string;
    directSociety: string;
  };
  workerDetails?: {
    completedJobs: string;
    experience: string;
    overallRating: string;
    insurance: string;
    activeShield: string;
    coopVerified: string;
    seniorJourneyman: string;
    acrossReviews: string;
    bioHeading: string;
    specialtiesHeading: string;
    statutoryHeading: string;
    satisfactionBreakdown: string;
    punctuality: string;
    workmanship: string;
    fairPricing: string;
    cleanliness: string;
    recentFeedback: string;
    pastProjects: string;
  };
  societyProcurement: {
    badge: string;
    title: string;
    description: string;
    sla: string;
    zeroBrokerage: string;
    gstInvoice: string;
    requestQuote: string;
    workerJoin: string;
  };
  bookingModal: {
    title: string;
    subtitle: string;
    serviceTrade: string;
    specialist: string;
    appointmentDate: string;
    address: string;
    problemDesc: string;
    problemPlaceholder: string;
    voiceMemo: string;
    recordVoice: string;
    recording: string;
    mediaUpload: string;
    dragDrop: string;
    confirmBooking: string;
    bookingSuccess: string;
    fairWageNote: string;
  };
  registrationModal: {
    title: string;
    subtitle: string;
    employer: string;
    employee: string;
    fullName: string;
    phone: string;
    email: string;
    city: string;
    sector: string;
    trade: string;
    secondaryTrade: string;
    coopSociety: string;
    eshramUan: string;
    experience: string;
    hourlyWage: string;
    submitEmployer: string;
    submitEmployee: string;
    roleActive: string;
  };
  workerPortal: {
    title: string;
    statusOnline: string;
    incomingRequests: string;
    acceptJob: string;
    declineJob: string;
    earningsToday: string;
    welfareContribution: string;
    simulateJob: string;
    emergencySos: string;
    directPayNote: string;
  };
  adminPortal: {
    title: string;
    tabAllocation: string;
    tabSocieties: string;
    tabDisputes: string;
    tabWelfare: string;
    aiDemandHeading: string;
    societiesHeading: string;
    disputesHeading: string;
    welfareHeading: string;
  };
  sos: {
    title: string;
    subtitle: string;
    triggerSos: string;
    sosTriggered: string;
    helpline: string;
  };
  footer: {
    brandDesc: string;
    initiativeNotice: string;
    rights: string;
    privacy: string;
    terms: string;
    fairWageStandard: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    brandName: 'RojgaarX',
    brandTagline: 'National Digital Cooperative Labour Federation Platform',
    nav: {
      topBanner: 'SIH 26089: Cooperative Labour Digital Federation',
      zeroCommission: '0% COMMISSION',
      directPayout: '100% DIRECT PAYOUT',
      welfareFund: '5% WELFARE FUND',
      marketplace: 'Public Market',
      workerPortal: 'Worker Portal',
      adminPanel: 'Admin Panel',
      city: 'City / Hub',
      language: 'Language',
      register: 'Register',
      registerRole: 'Register Role',
      sos: 'Safety Support',
      quickPortals: 'Quick Portals',
      expertSection: 'Expert Combos',
      biddingMarketplace: 'Bidding Tenders',
      radiusMeter: 'Radius Radar',
      workersDirectory: 'Workers Directory',
    },
    hero: {
      initiativeBadge: 'SIH 26089 NATIONAL INITIATIVE',
      federationBadge: 'LABOUR FEDERATION OWNED',
      commissionBadge: '0% MIDDLEMAN COMMISSION',
      title: 'Cooperative Owned. 0% Middleman Cut. 100% Fair Wage.',
      subtitle:
        'Directly connect with certified labour cooperative societies for electrical, plumbing, masonry, and essential trades. 100% directly to the skilled shramik, with 5% automatically reserved for their retirement, health cover & child education fund.',
      bookService: 'Book a Verified Specialist',
      joinAsWorker: 'Join as a Co-Owner Worker',
      coopRateCard: 'Cooperative Rate Card',
      eShramVerified: 'e-Shram & Aadhaar Verified',
      esicShield: '₹5,00,000 ESIC Shield',
    },
    ticker: [
      '0% Middleman Platform Commission',
      '100% Direct Payout to Cooperative Workers',
      '₹5,00,000 ESIC & Accident Shield Active',
      'Government e-Shram & NSQF Certified',
      'AI Predictive Demand Allocation Grid',
      'Smart India Hackathon SIH 26089',
    ],
    expertSection: {
      badge: 'Dual & Multi-Skilled Master Guild',
      discount: 'SAVE UP TO 26%',
      title: 'Expert Section: Multi-Skill Job Combos',
      subtitle:
        'Need an Electrician & Plumber at the same time? Book certified multi-skill masters in a single visit with 0% middleman fees.',
      hourlyBundle: 'Combo Rate / hr',
      saving: 'Bundle Savings',
      bookCombo: 'Book Combo Specialist',
      viewWork: 'Reviews & Portfolio',
      completedCombos: 'Completed Combos',
      specialties: 'Core Skill Combinations',
    },
    biddingMarketplace: {
      badge: 'Community Reverse-Auction Tenders',
      liveLabel: 'LIVE TENDERS & BULK WORK',
      title: 'Bidding Marketplace: Community Work Tenders',
      subtitle:
        'Post society repairs, multi-day renovation or event catering tenders. Cooperative crews bid transparently with certified minimum wage audits.',
      postTender: 'Post a New Tender',
      allTenders: 'All Active Tenders',
      openBids: 'Open for Bids',
      budget: 'Society Budget',
      lowestBid: 'Lowest Live Bid',
      bidsCount: 'Cooperative Bids',
      awardTender: 'Award Tender',
      placeBid: 'Place Cooperative Bid',
      tenderAwarded: 'Tender Awarded',
      filterAll: 'All Tenders',
      filterOpen: 'Open for Bidding',
      filterAwarded: 'Awarded Tenders',
      teamPlan: 'Crew Strategy & SLA',
      daysToComplete: 'Turnaround Days',
    },
    radiusSection: {
      badge: 'LIVE GEO-FENCE',
      title: 'Hyperlocal Proximity Radar',
      heading: 'Proximity Radius Meter: 500m to 10km',
      description:
        'Calibrate your search distance. Directly scans verified cooperative members within your immediate neighbourhood with live GPS accuracy.',
      currentRadius: 'Scan Distance',
      workersInRange: 'Cooperative Members in Range',
      selectedSector: 'Verified GPS Sector',
      quickPresets: 'Quick Distance Presets',
      meters: 'meters',
      kilometers: 'km',
    },
    categories: {
      badge: 'Federation Service Roster',
      title: 'Government Accredited Trade Guilds',
      subtitle:
        'All services operate under standardized cooperative rate cards with statutory worker social security.',
      searchPlaceholder: 'Search specialists by name, trade, or cooperative society...',
      allSectors: 'All Sectors',
      resetAll: 'Reset All Filters',
      highDemand: 'HIGH DEMAND',
      bookNow: 'Book Guild Member',
      hourlyBase: '/ hr standard base',
    },
    workerDirectory: {
      badge: 'Accredited Member Directory',
      title: 'Verified Cooperative Specialists',
      subtitle:
        'Click "Reviews & Work" on any card to view detailed ratings, citizen feedback, and past project photos.',
      workersFound: 'Specialists in Range',
      hourlyRate: '/ hr',
      reviews: 'reviews',
      experience: 'yrs experience',
      completedJobs: 'jobs completed',
      bookSpecialist: 'Book Specialist',
      reviewsAndWork: 'Reviews & Work',
      noWorkersFound: 'No specialists found in this radius',
      expandRadar: 'Expand Radar to 10km & Reset',
    },
    societyProcurement: {
      badge: 'INSTITUTIONAL & BULK FACILITY MANAGEMENT',
      title: 'Are you a RWA, Hospital, or Educational Campus?',
      description:
        'Source dedicated cooperative maintenance crews under formal government tender compliance. Guaranteed minimum wage audit logs, complete statutory PF/ESIC compliance, and dedicated federation oversight.',
      sla: 'Direct Society SLA',
      zeroBrokerage: 'Zero Middleman Brokerage',
      gstInvoice: 'Full Tax Invoice with GST',
      requestQuote: 'Request Society Bulk Quote',
      workerJoin: 'Are you a Worker? Join Here',
    },
    bookingModal: {
      title: 'Book Certified Cooperative Specialist',
      subtitle: 'Standardized Fair Wage Guarantee. Zero middleman markup.',
      serviceTrade: 'Service Trade / Category',
      specialist: 'Assigned Specialist',
      appointmentDate: 'Preferred Date & Time',
      address: 'Service Location / Flat / House No.',
      problemDesc: 'Problem Description',
      problemPlaceholder:
        'Explain your requirements or specific issue (e.g. leaking sink pipe, MCB tripping, wall plaster repair)...',
      voiceMemo: 'Voice Audio Memo (Optional)',
      recordVoice: 'Record Voice Note',
      recording: 'Recording Audio...',
      mediaUpload: 'Photos / Video of Problem',
      dragDrop: 'Drag & drop photos/video or click to browse',
      confirmBooking: 'Confirm & Dispatch Request',
      bookingSuccess: 'Booking Confirmed! Cooperative Specialist Notified.',
      fairWageNote: '100% of payment goes directly to worker with 5% welfare contribution.',
    },
    registrationModal: {
      title: 'RojgaarX Portal Registration',
      subtitle: 'Select your account type to access specialized tools and cooperative rate protections.',
      employer: 'Employer / Citizen',
      employee: 'Worker / Cooperative Member',
      fullName: 'Full Name',
      phone: 'Mobile Phone Number',
      email: 'Email Address (Optional)',
      city: 'City / Operational Hub',
      sector: 'Locality / Sector',
      trade: 'Primary Trade Skill',
      secondaryTrade: 'Secondary Trade Skill (Optional)',
      coopSociety: 'Affiliated Labour Cooperative Society',
      eshramUan: 'e-Shram UAN (Universal Account Number)',
      experience: 'Experience (Years)',
      hourlyWage: 'Base Hourly Wage Expectation (₹)',
      submitEmployer: 'Register as Employer',
      submitEmployee: 'Register as Verified Worker',
      roleActive: 'Active Role',
    },
    workerPortal: {
      title: 'Worker Dispatch Radar & Cooperative Ledger',
      statusOnline: 'Live On Dispatch Radar',
      incomingRequests: 'Real-Time Incoming Job Requests',
      acceptJob: 'Accept Dispatch',
      declineJob: 'Decline',
      earningsToday: "Today's Direct Earnings",
      welfareContribution: 'Welfare Fund Reserved (5%)',
      simulateJob: 'Simulate New Dispatch Alert',
      emergencySos: 'Emergency Safety Support',
      directPayNote: 'All payments deposited directly into your linked bank account.',
    },
    adminPortal: {
      title: 'Federation Governance & AI Allocation Grid',
      tabAllocation: 'AI Demand Allocation',
      tabSocieties: 'Affiliated Societies',
      tabDisputes: 'Dispute Resolution & Grievances',
      tabWelfare: 'Welfare & Social Security',
      aiDemandHeading: 'AI Predictive Demand Allocation Grid',
      societiesHeading: 'Affiliated Cooperative Societies & Verification',
      disputesHeading: 'Dispute Arbitration & Safety Escalation Log',
      welfareHeading: 'Cooperative Welfare Fund Ledger & DBTs',
    },
    sos: {
      title: 'Emergency Worker Safety Helpline',
      subtitle: 'Instant safety beacon dispatches nearest federation supervisor and safety team to your coordinates.',
      triggerSos: 'TRIGGER SAFETY ASSISTANCE',
      sosTriggered: 'SAFETY ALERT ACTIVE - Dispatched to Control Room',
      helpline: '24x7 Cooperative Federation Helpline: 1800-419-7788',
    },
    footer: {
      brandDesc:
        'RojgaarX is a cooperative-owned digital service platform connecting certified Labour Cooperative Federations with households and institutions under Fair Wage standards.',
      initiativeNotice:
        'Developed under Smart India Hackathon SIH 26089 initiative for fair labour digitisation and elimination of platform middleman fees.',
      rights: 'All rights reserved. National Federation of Labour Cooperatives.',
      privacy: 'Privacy & Data Protection',
      terms: 'Cooperative Bylaws & Terms',
      fairWageStandard: 'Statutory Fair Wage Standard Certified',
    },
  },

  hi: {
    brandName: 'RojgaarX',
    brandTagline: 'राष्ट्रीय डिजिटल सहकारी श्रम महासंघ मंच',
    nav: {
      topBanner: 'SIH 26089: सहकारी श्रम डिजिटल महासंघ',
      zeroCommission: '0% कमीशन',
      directPayout: '100% सीधा भुगतान',
      welfareFund: '5% कल्याण कोष',
      marketplace: 'सार्वजनिक बाज़ार',
      workerPortal: 'श्रमिक पोर्टल',
      adminPanel: 'प्रशासन पैनल',
      city: 'शहर / केंद्र',
      language: 'भाषा',
      register: 'पंजीकरण',
      registerRole: 'भूमिका चुनें',
      sos: 'सुरक्षा हेल्पलाइन',
      quickPortals: 'त्वरित पोर्टल',
      expertSection: 'विशेषज्ञ कॉम्बो',
      biddingMarketplace: 'निविदा व बोली',
      radiusMeter: 'दूरी रडार',
      workersDirectory: 'श्रमिक निर्देशिका',
    },
    hero: {
      initiativeBadge: 'SIH 26089 राष्ट्रीय पहल',
      federationBadge: 'श्रम महासंघ के स्वामित्व में',
      commissionBadge: '0% बिचौलिया कटौती',
      title: 'सहकारी स्वामित्व। 0% बिचौलिया कटौती। 100% उचित पारिश्रमिक।',
      subtitle:
        'बिजली, प्लंबिंग, बढ़ईगीरी और आवश्यक सेवाओं के लिए सीधे प्रमाणित श्रमिक सहकारी समितियों से जुड़ें। 100% राशि सीधे कुशल श्रमिक को, 5% स्वतः पेंशन, स्वास्थ्य और बाल शिक्षा कल्याण कोष में सुरक्षित।',
      bookService: 'प्रमाणित कारीगर बुक करें',
      joinAsWorker: 'सह-स्वामी श्रमिक के रूप में जुड़ें',
      coopRateCard: 'सहकारी मानक दर सूची',
      eShramVerified: 'ई-श्रम और आधार सत्यापित',
      esicShield: '₹5,00,000 ESIC सुरक्षा कवच',
    },
    ticker: [
      '0% बिचौलिया प्लेटफ़ॉर्म कमीशन',
      '100% सीधे सहकारी श्रमिकों को भुगतान',
      '₹5,00,000 ESIC व दुर्घटना बीमा सक्रिय',
      'सरकारी ई-श्रम और NSQF प्रमाणित कारीगर',
      'AI भविष्यसूचक मांग आवंटन ग्रिड',
      'स्मार्ट इंडिया हैकथॉन SIH 26089',
    ],
    expertSection: {
      badge: 'दोहरी व बहु-कुशल मास्टर गिल्ड',
      discount: '26% तक बचत',
      title: 'विशेषज्ञ अनुभाग: बहु-कौशल जॉब कॉम्बो',
      subtitle:
        'क्या आपको एक ही समय में इलेक्ट्रीशियन और प्लंबर दोनों की आवश्यकता है? एक ही विज़िट में 0% बिचौलिया शुल्क पर प्रमाणित बहु-कुशल विशेषज्ञों को बुक करें।',
      hourlyBundle: 'कॉम्बो दर / घंटा',
      saving: 'कॉम्बो बचत',
      bookCombo: 'कॉम्बो विशेषज्ञ बुक करें',
      viewWork: 'समीक्षाएं व कार्य नमूने',
      completedCombos: 'पूर्ण किए गए कॉम्बो',
      specialties: 'संयुक्त कौशल विशेषताएँ',
    },
    biddingMarketplace: {
      badge: 'सामुदायिक रिवर्स-ऑक्शन निविदा',
      liveLabel: 'सक्रिय निविदाएं व थोक कार्य',
      title: 'बोली बाज़ार: सामुदायिक कार्य निविदाएं',
      subtitle:
        'सोसायटी मरम्मत, बहु-दिवसीय नवीनीकरण या कार्यक्रम खानपान निविदाएं पोस्ट करें। सहकारी टीमें न्यूनतम वेतन ऑडिट के साथ पारदर्शी बोली लगाती हैं।',
      postTender: 'नई निविदा पोस्ट करें',
      allTenders: 'सभी सक्रिय निविदाएं',
      openBids: 'बोली लगाने के लिए खुली',
      budget: 'सोसायटी बजट',
      lowestBid: 'न्यूनतम सक्रिय बोली',
      bidsCount: 'सहकारी बोलियां',
      awardTender: 'निविदा सौंपें',
      placeBid: 'सहकारी बोली लगाएं',
      tenderAwarded: 'निविदा स्वीकृत',
      filterAll: 'सभी निविदाएं',
      filterOpen: 'बोली के लिए उपलब्ध',
      filterAwarded: 'स्वीकृत निविदाएं',
      teamPlan: 'कार्य दल योजना व SLA',
      daysToComplete: 'पूरा करने के दिन',
    },
    radiusSection: {
      badge: 'लाइव जिओ-फेंस',
      title: 'अति-स्थानीय निकटता रडार',
      heading: 'दूरी रडार मीटर: 500 मीटर से 10 किमी',
      description:
        'अपनी खोज दूरी तय करें। अपने निकटतम क्षेत्र में सत्यापित सहकारी सदस्यों को वास्तविक समय GPS सटीकता के साथ तुरंत खोजें।',
      currentRadius: 'खोज दूरी',
      workersInRange: 'क्षेत्र में उपलब्ध सहकारी सदस्य',
      selectedSector: 'सत्यापित GPS सेक्टर',
      quickPresets: 'त्वरित दूरी विकल्प',
      meters: 'मीटर',
      kilometers: 'किमी',
    },
    categories: {
      badge: 'महासंघ सेवा रोस्टर',
      title: 'सरकारी मान्यता प्राप्त शिल्प संघ',
      subtitle:
        'सभी सेवाएं वैधानिक श्रमिक सामाजिक सुरक्षा के साथ मानकीकृत सहकारी दर सूची के तहत संचालित होती हैं।',
      searchPlaceholder: 'कारीगर के नाम, कौशल या सहकारी समिति से खोजें...',
      allSectors: 'सभी सेक्टर',
      resetAll: 'सभी फ़िल्टर हटाएं',
      highDemand: 'अत्यधिक मांग',
      bookNow: 'सहकारी सदस्य बुक करें',
      hourlyBase: '/ घंटा आधार दर',
    },
    workerDirectory: {
      badge: 'प्रत्यायित सदस्य निर्देशिका',
      title: 'सत्यापित सहकारी विशेषज्ञ',
      subtitle:
        'विस्तृत रेटिंग, नागरिकों की प्रतिक्रिया और पिछले काम की तस्वीरें देखने के लिए किसी भी कार्ड पर "समीक्षाएं व कार्य" पर क्लिक करें।',
      workersFound: 'दूरी में उपलब्ध विशेषज्ञ',
      hourlyRate: '/ घंटा',
      reviews: 'समीक्षाएं',
      experience: 'वर्ष अनुभव',
      completedJobs: 'पूर्ण कार्य',
      bookSpecialist: 'विशेषज्ञ बुक करें',
      reviewsAndWork: 'समीक्षाएं व कार्य',
      noWorkersFound: 'इस दूरी में कोई विशेषज्ञ नहीं मिला',
      expandRadar: 'रडार को 10 किमी तक बढ़ाएं और रीसेट करें',
    },
    societyProcurement: {
      badge: 'संस्थागत एवं थोक सुविधा प्रबंधन',
      title: 'क्या आप RWA, अस्पताल या शैक्षणिक संस्थान हैं?',
      description:
        'सरकारी निविदा अनुपालन के तहत समर्पित सहकारी रखरखाव दल प्राप्त करें। गारंटीकृत न्यूनतम मजदूरी ऑडिट, पूर्ण वैधानिक PF/ESIC अनुपालन और समर्पित महासंघ पर्यवेक्षण।',
      sla: 'प्रत्यक्ष सोसायटी SLA',
      zeroBrokerage: 'शून्य बिचौलिया दलाली',
      gstInvoice: 'GST सहित पूर्ण कर चालान',
      requestQuote: 'सोसायटी थोक कोटेशन का अनुरोध करें',
      workerJoin: 'क्या आप श्रमिक हैं? यहां जुड़ें',
    },
    bookingModal: {
      title: 'प्रमाणित सहकारी विशेषज्ञ बुक करें',
      subtitle: 'मानकीकृत उचित पारिश्रमिक गारंटी। शून्य बिचौलिया मुनाफा।',
      serviceTrade: 'सेवा श्रेणी / ट्रेड',
      specialist: 'आवंटित विशेषज्ञ',
      appointmentDate: 'पसंदीदा दिनांक और समय',
      address: 'सेवा स्थल / फ्लैट / मकान संख्या',
      problemDesc: 'समस्या का विवरण',
      problemPlaceholder:
        'अपनी आवश्यकता या विशिष्ट समस्या विस्तार से बताएं (जैसे सिंक पाइप रिसाव, MCB ट्रिपिंग, दीवार प्लास्टर)...',
      voiceMemo: 'वॉयस ऑडियो संदेश (वैकल्पिक)',
      recordVoice: 'वॉयस नोट रिकॉर्ड करें',
      recording: 'ऑडियो रिकॉर्ड हो रहा है...',
      mediaUpload: 'समस्या की फोटो / वीडियो',
      dragDrop: 'फ़ोटो/वीडियो यहां खींचें या चुनने के लिए क्लिक करें',
      confirmBooking: 'पुष्टि करें और अनुरोध भेजें',
      bookingSuccess: 'बुकिंग सफल! सहकारी विशेषज्ञ को सूचित कर दिया गया है।',
      fairWageNote: '100% भुगतान सीधे श्रमिक को जाता है, 5% कल्याण कोष योगदान सहित।',
    },
    registrationModal: {
      title: 'RojgaarX पोर्टल पंजीकरण',
      subtitle: 'विशेष सुविधाओं और सहकारी दर सुरक्षा तक पहुंचने के लिए अपने खाते का प्रकार चुनें।',
      employer: 'नियोक्ता / नागरिक',
      employee: 'श्रमिक / सहकारी सदस्य',
      fullName: 'पूरा नाम',
      phone: 'मोबाइल फ़ोन नंबर',
      email: 'ईमेल पता (वैकल्पिक)',
      city: 'शहर / परिचालन केंद्र',
      sector: 'इलाका / सेक्टर',
      trade: 'प्राथमिक कौशल / ट्रेड',
      secondaryTrade: 'द्वितीयक ट्रेड कौशल (वैकल्पिक)',
      coopSociety: 'संबद्ध श्रम सहकारी समिति',
      eshramUan: 'ई-श्रम UAN (सार्वभौमिक खाता संख्या)',
      experience: 'अनुभव (वर्ष)',
      hourlyWage: 'अपेक्षित प्रति घंटा पारिश्रमिक (₹)',
      submitEmployer: 'नियोक्ता के रूप में पंजीकृत हों',
      submitEmployee: 'सत्यापित श्रमिक के रूप में पंजीकृत हों',
      roleActive: 'सक्रिय भूमिका',
    },
    workerPortal: {
      title: 'श्रमिक डिस्पैच रडार और सहकारी बहीखाता',
      statusOnline: 'डिस्पैच रडार पर ऑनलाइन',
      incomingRequests: 'रीयल-टाइम नए कार्य अनुरोध',
      acceptJob: 'कार्य स्वीकार करें',
      declineJob: 'अस्वीकार करें',
      earningsToday: 'आज की कुल सीधी कमाई',
      welfareContribution: 'कल्याण कोष में जमा (5%)',
      simulateJob: 'नया डिस्पैच अलर्ट सिमुलेट करें',
      emergencySos: 'आपातकालीन सुरक्षा सहायता',
      directPayNote: 'सभी भुगतान सीधे आपके बैंक खाते में जमा होते हैं।',
    },
    adminPortal: {
      title: 'महासंघ शासन और AI मांग आवंटन ग्रिड',
      tabAllocation: 'AI मांग आवंटन',
      tabSocieties: 'संबद्ध समितियां',
      tabDisputes: 'विवाद समाधान व शिकायतें',
      tabWelfare: 'कल्याण व सामाजिक सुरक्षा',
      aiDemandHeading: 'AI भविष्यसूचक मांग आवंटन ग्रिड',
      societiesHeading: 'संबद्ध सहकारी समितियां एवं सत्यापन स्थिति',
      disputesHeading: 'विवाद मध्यस्थता और सुरक्षा लॉग',
      welfareHeading: 'सहकारी कल्याण कोष बहीखाता व DBT हस्तांतरण',
    },
    sos: {
      title: 'आपातकालीन श्रमिक सुरक्षा सहायता',
      subtitle: 'त्वरित सुरक्षा बीकन आपके निर्देशांकों पर निकटतम महासंघ पर्यवेक्षक और सुरक्षा दल को तुरंत भेजता है।',
      triggerSos: 'आपातकालीन सुरक्षा सहायता सक्रिय करें',
      sosTriggered: 'सुरक्षा सिग्नल सक्रिय - नियंत्रण कक्ष को सूचना भेजी गई',
      helpline: '24x7 सहकारी महासंघ हेल्पलाइन: 1800-419-7788',
    },
    footer: {
      brandDesc:
        'RojgaarX एक सहकारी-स्वामित्व वाला डिजिटल सेवा मंच है जो प्रमाणित श्रम सहकारी महासंघों को उचित मजदूरी मानकों के तहत परिवारों और संस्थानों से जोड़ता है।',
      initiativeNotice:
        'उचित श्रम डिजिटलीकरण और प्लेटफ़ॉर्म बिचौलिया शुल्क समाप्त करने के लिए स्मार्ट इंडिया हैकथॉन SIH 26089 पहल के तहत विकसित।',
      rights: 'सर्वाधिकार सुरक्षित। राष्ट्रीय श्रम सहकारी महासंघ।',
      privacy: 'गोपनीयता और डेटा सुरक्षा',
      terms: 'सहकारी उपनियम और शर्तें',
      fairWageStandard: 'वैधानिक उचित मजदूरी मानक प्रमाणित',
    },
  },

  ta: {
    brandName: 'RojgaarX',
    brandTagline: 'தேசிய டிஜிட்டல் கூட்டுறவு தொழிலாளர் கூட்டமைப்பு',
    nav: {
      topBanner: 'SIH 26089: கூட்டுறவு தொழிலாளர் டிஜிட்டல் கூட்டமைப்பு',
      zeroCommission: '0% கமிஷன்',
      directPayout: '100% நேரடி ஊதியம்',
      welfareFund: '5% நல நிதி',
      marketplace: 'பொது சந்தை',
      workerPortal: 'தொழிலாளர் போர்டல்',
      adminPanel: 'நிர்வாக குழு',
      city: 'நகரம் / மையம்',
      language: 'மொழி',
      register: 'பதிவு',
      registerRole: 'பங்கு தேர்வு',
      sos: 'பாதுகாப்பு உதவி',
      quickPortals: 'விரைவு போர்டல்கள்',
      expertSection: 'மல்டி-ஸ்கில் காம்போ',
      biddingMarketplace: 'டெண்டர் ஏலம்',
      radiusMeter: 'தொலைவு ரேடார்',
      workersDirectory: 'தொழிலாளர் பட்டியல்',
    },
    hero: {
      initiativeBadge: 'SIH 26089 தேசிய முன்முயற்சி',
      federationBadge: 'தொழிலாளர் கூட்டுறவு உரிமை',
      commissionBadge: '0% இடைத்தரகர் கட்டணம்',
      title: 'கூட்டுறவு உரிமை. 0% தரகு வெட்டு. 100% நியாயமான ஊதியம்.',
      subtitle:
        'மின்சாரம், பிளம்பிங் மற்றும் கட்டுமான பணிகளுக்கு சான்றளிக்கப்பட்ட தொழிலாளர் கூட்டுறவு சங்கங்களுடன் நேரடியாக இணையுங்கள். 100% நேரடி ஊதியம், ஓய்வூதியம் மற்றும் மருத்துவ காப்பீட்டிற்கு 5% நல நிதியுடன்.',
      bookService: 'தொழிலாளரை முன்பதிவு செய்க',
      joinAsWorker: 'கூட்டுறவு உறுப்பினராக இணையுங்கள்',
      coopRateCard: 'கூட்டுறவு நிலையான கட்டண அட்டை',
      eShramVerified: 'இ-ஷ்ரம் மற்றும் ஆதார் சரிபார்க்கப்பட்டது',
      esicShield: '₹5,00,000 ESIC பாதுகாப்பு கவசம்',
    },
    ticker: [
      '0% இடைத்தரகர் தளம் கமிஷன்',
      '100% தொழிலாளர்களுக்கு நேரடி ஊதியம்',
      '₹5,00,000 ESIC விபத்து காப்பீடு செயலில் உள்ளது',
      'அரசு இ-ஷ்ரம் மற்றும் NSQF சான்றளிக்கப்பட்டவர்கள்',
      'AI முன்னறிவிப்பு தேவை ஒதுக்கீடு கட்டமைப்பு',
      'ஸ்மார்ட் இந்தியா ஹேக்கத்தான் SIH 26089',
    ],
    expertSection: {
      badge: 'இரட்டை மற்றும் பல திறன் நிபுணர் சங்கம்',
      discount: '26% வரை சேமிப்பு',
      title: 'நிபுணர் பிரிவு: பல திறன் வேலை சேர்க்கைகள்',
      subtitle:
        'ஒரே நேரத்தில் எலக்ட்ரீஷியன் மற்றும் பிளம்பர் தேவையா? 0% இடைத்தரகர் கட்டணத்தில் ஒரே வருகையில் சான்றளிக்கப்பட்ட பல திறன் நிபுணர்களை முன்பதிவு செய்யுங்கள்.',
      hourlyBundle: 'காம்போ விகிதம் / மணி',
      saving: 'காம்போ சேமிப்பு',
      bookCombo: 'காம்போ நிபுணரை முன்பதிவு செய்க',
      viewWork: 'மதிப்பாய்வுகள் & வேலை படங்கள்',
      completedCombos: 'முடிக்கப்பட்ட காம்போ வேலைகள்',
      specialties: 'திறன் சேர்க்கைகள்',
    },
    biddingMarketplace: {
      badge: 'சமூக தலைகீழ் ஏல டெண்டர்கள்',
      liveLabel: 'செயலில் உள்ள டெண்டர்கள் & மொத்த வேலை',
      title: 'ஏலச் சந்தை: சமூக வேலை டெண்டர்கள்',
      subtitle:
        'குடியிருப்பு பழுதுபார்ப்பு, புதுப்பித்தல் அல்லது உணவு தயாரிப்பு டெண்டர்களை இடுங்கள். கூட்டுறவு குழுக்கள் வெளிப்படையான குறைந்தபட்ச ஊதிய தணிக்கையுடன் ஏலம் எடுக்கின்றன.',
      postTender: 'புதிய டெண்டர் இடுக',
      allTenders: 'அனைத்து டெண்டர்கள்',
      openBids: 'ஏலத்திற்கு திறந்துள்ளது',
      budget: 'சமூக பட்ஜெட்',
      lowestBid: 'குறைந்தபட்ச ஏலத் தொகை',
      bidsCount: 'கூட்டுறவு ஏலங்கள்',
      awardTender: 'டெண்டர் வழங்குக',
      placeBid: 'கூட்டுறவு ஏலம் வைக்க',
      tenderAwarded: 'டெண்டர் வழங்கப்பட்டது',
      filterAll: 'அனைத்து டெண்டர்கள்',
      filterOpen: 'ஏலத்திற்கு உள்ளவை',
      filterAwarded: 'வழங்கப்பட்டவை',
      teamPlan: 'குழு உத்தி & SLA',
      daysToComplete: 'முடிக்கும் நாட்கள்',
    },
    radiusSection: {
      badge: 'நேரலை புவி எல்லை',
      title: 'அருகாமை தொலைவு ரேடார்',
      heading: 'தொலைவு ரேடார் மீட்டர்: 500மீ முதல் 10கிமீ வரை',
      description:
        'உங்கள் தேடல் தூரத்தை அமைத்துக் கொள்ளுங்கள். உங்கள் அருகிலுள்ள சரிபார்க்கப்பட்ட கூட்டுறவு உறுப்பினர்களை நேரலை ஜிபிஎஸ் துல்லியத்துடன் உடனடியாகக் கண்டறியலாம்.',
      currentRadius: 'தேடல் தூரம்',
      workersInRange: 'கிடைக்கும் கூட்டுறவு உறுப்பினர்கள்',
      selectedSector: 'சரிபார்க்கப்பட்ட GPS பகுதி',
      quickPresets: 'விரைவு தொலைவு தேர்வுகள்',
      meters: 'மீட்டர்',
      kilometers: 'கிமீ',
    },
    categories: {
      badge: 'கூட்டமைப்பு சேவை பட்டியல்',
      title: 'அரசு அங்கீகாரம் பெற்ற தொழில் சங்கங்கள்',
      subtitle:
        'அனைத்து சேவைகளும் சட்டப்பூர்வ தொழிலாளர் சமூக பாதுகாப்புடன் கூடிய நிலையான கட்டண விகிதங்களின் கீழ் செயல்படுகின்றன.',
      searchPlaceholder: 'பெயர், தொழில் அல்லது கூட்டுறவு சங்கம் மூலம் தேடுங்கள்...',
      allSectors: 'அனைத்து பகுதிகள்',
      resetAll: 'அனைத்து வடிப்பான்களையும் மீட்டமை',
      highDemand: 'அதிக தேவை',
      bookNow: 'உறுப்பினரை பதிவு செய்க',
      hourlyBase: '/ மணி அடிப்படை கட்டணம்',
    },
    workerDirectory: {
      badge: 'அங்கீகரிக்கப்பட்ட உறுப்பினர் அடைவு',
      title: 'சரிபார்க்கப்பட்ட கூட்டுறவு வல்லுநர்கள்',
      subtitle:
        'மதிப்பீடுகள், குடிமக்கள் கருத்துக்கள் மற்றும் முந்தைய வேலை படங்களைக் காண "மதிப்பாய்வுகள் & வேலை" என்பதை கிளிக் செய்க.',
      workersFound: 'அருகில் உள்ள வல்லுநர்கள்',
      hourlyRate: '/ மணி',
      reviews: 'மதிப்பாய்வுகள்',
      experience: 'ஆண்டு அனுபவம்',
      completedJobs: 'முடித்த வேலைகள்',
      bookSpecialist: 'வல்லுநரை பதிவு செய்க',
      reviewsAndWork: 'மதிப்பாய்வுகள் & வேலை',
      noWorkersFound: 'இந்த தொலைவில் வல்லுநர்கள் எவரும் கிடைக்கவில்லை',
      expandRadar: 'ரேடாரை 10கிமீ வரை விரிவுபடுத்துங்கள்',
    },
    societyProcurement: {
      badge: 'நிறுவன & மொத்த வசதி மேலாண்மை',
      title: 'நீங்கள் RWA, மருத்துவமனை அல்லது கல்வி நிறுவனமா?',
      description:
        'அரசு டெண்டர் இணக்கத்தின் கீழ் அர்ப்பணிப்புள்ள கூட்டுறவு பராமரிப்பு குழுக்களைப் பெறுங்கள். உத்தரவாதமான குறைந்தபட்ச ஊதிய தணிக்கை மற்றும் PF/ESIC இணக்கம்.',
      sla: 'நேரடி சமூக SLA',
      zeroBrokerage: 'பூஜ்ஜிய இடைத்தரகர் தரகு',
      gstInvoice: 'GST உடன் முழு வரி விலைப்பட்டியல்',
      requestQuote: 'மொத்த விலைப்பட்டியலை கோருங்கள்',
      workerJoin: 'நீங்கள் தொழிலாளியா? இங்கே இணையுங்கள்',
    },
    bookingModal: {
      title: 'கூட்டுறவு வல்லுநரை முன்பதிவு செய்க',
      subtitle: 'நிலையான நியாயமான ஊதிய உத்தரவாதம். இடைத்தரகர் கூடுதல் கட்டணம் இல்லை.',
      serviceTrade: 'சேவை பிரிவு / தொழில்',
      specialist: 'ஒதுக்கப்பட்ட வல்லுநர்',
      appointmentDate: 'விருப்பமான தேதி & நேரம்',
      address: 'இடம் / முகவரி / கதவு எண்',
      problemDesc: 'பிரச்சனை விளக்கம்',
      problemPlaceholder:
        'உங்கள் தேவைகள் அல்லது குறிப்பிட்ட சிக்கலை விவரிக்கவும் (எ.கா. குழாய் கசிவு, சுவிட்ச் போர்டு பழுது)...',
      voiceMemo: 'குரல் ஆடியோ குறிப்பு (விருப்பம்)',
      recordVoice: 'குரல் குறிப்பை பதிவு செய்க',
      recording: 'ஆடியோ பதிவு செய்யப்படுகிறது...',
      mediaUpload: 'பிரச்சனையின் புகைப்படம் / வீடியோ',
      dragDrop: 'படங்களை இங்கே இழுத்துப் போடுங்கள் அல்லது கிளிக் செய்யவும்',
      confirmBooking: 'உறுதிசெய்து கோரிக்கையை அனுப்புக',
      bookingSuccess: 'முன்பதிவு உறுதி செய்யப்பட்டது! கூட்டுறவு வல்லுநருக்கு தெரிவிக்கப்பட்டது.',
      fairWageNote: '100% கட்டணம் தொழிலாளிக்கு நேரடியாக செல்கிறது (5% நல நிதி உட்பட).',
    },
    registrationModal: {
      title: 'RojgaarX போர்டல் பதிவு',
      subtitle: 'சிறப்பு வசதிகள் மற்றும் கூட்டுறவு கட்டண பாதுகாப்பை பெற கணக்கு வகையைத் தேர்ந்தெடுக்கவும்.',
      employer: 'பணியமர்த்துபவர் / குடிமகன்',
      employee: 'தொழிலாளி / கூட்டுறவு உறுப்பினர்',
      fullName: 'முழு பெயர்',
      phone: 'மொபைல் எண்',
      email: 'மின்னஞ்சல் முகவரி (விருப்பம்)',
      city: 'நகரம் / மையம்',
      sector: 'பகுதி / செக்டர்',
      trade: 'முதன்மை தொழில் திறன்',
      secondaryTrade: 'இரண்டாம் நிலை திறன் (விருப்பம்)',
      coopSociety: 'இணைக்கப்பட்ட தொழிலாளர் கூட்டுறவு சங்கம்',
      eshramUan: 'இ-ஷ்ரம் UAN எண்',
      experience: 'அனுபவம் (ஆண்டுகள்)',
      hourlyWage: 'எதிர்பார்க்கும் மணிநேர ஊதியம் (₹)',
      submitEmployer: 'பணியமர்த்துபவராக பதிவு செய்க',
      submitEmployee: 'சரிபார்க்கப்பட்ட தொழிலாளியாக பதிவு செய்க',
      roleActive: 'செயலில் உள்ள பங்கு',
    },
    workerPortal: {
      title: 'தொழிலாளர் அனுப்புதல் ரேடார் மற்றும் கூட்டுறவு கணக்கு',
      statusOnline: 'ரேடாரில் ஆன்லைனில் உள்ளீர்கள்',
      incomingRequests: 'உடனடி புதிய வேலை கோரிக்கைகள்',
      acceptJob: 'ஏற்கவும்',
      declineJob: 'நிராகரிக்கவும்',
      earningsToday: 'இன்றைய நேரடி வருவாய்',
      welfareContribution: 'நல நிதியில் ஒதுக்கப்பட்டது (5%)',
      simulateJob: 'புதிய வேலை எச்சரிக்கையை உருவகப்படுத்துக',
      emergencySos: 'அவசர பாதுகாப்பு உதவி',
      directPayNote: 'அனைத்து கொடுப்பனவுகளும் உங்கள் வங்கிக் கணக்கில் நேரடியாக வரவு வைக்கப்படும்.',
    },
    adminPortal: {
      title: 'கூட்டமைப்பு நிர்வாகம் மற்றும் AI தேவை ஒதுக்கீடு கட்டமைப்பு',
      tabAllocation: 'AI தேவை ஒதுக்கீடு',
      tabSocieties: 'இணைக்கப்பட்ட சங்கங்கள்',
      tabDisputes: 'சர்ச்சை தீர்வு & புகார்கள்',
      tabWelfare: 'நலத்திட்டம் & சமூக பாதுகாப்பு',
      aiDemandHeading: 'AI முன்னறிவிப்பு தேவை ஒதுக்கீடு கட்டமைப்பு',
      societiesHeading: 'இணைக்கப்பட்ட கூட்டுறவு சங்கங்கள் & சரிபார்ப்பு',
      disputesHeading: 'சர்ச்சை மத்தியஸ்தம் & பாதுகாப்பு பதிவு',
      welfareHeading: 'கூட்டுறவு நல நிதி லெட்ஜர் & DBT பரிமாற்றம்',
    },
    sos: {
      title: 'அவசர தொழிலாளர் பாதுகாப்பு உதவி',
      subtitle: 'உடனடி எச்சரிக்கை அருகிலுள்ள கூட்டுறவு மேற்பார்வையாளர் மற்றும் பாதுகாப்பு குழுவை உங்கள் இடத்திற்கு அனுப்புகிறது.',
      triggerSos: 'அவசர பாதுகாப்பு உதவியைத் தொடங்குங்கள்',
      sosTriggered: 'பாதுகாப்பு சிக்னல் செயலில் உள்ளது - கட்டுப்பாட்டு அறைக்கு அனுப்பப்பட்டது',
      helpline: '24x7 கூட்டுறவு கூட்டமைப்பு உதவி எண்: 1800-419-7788',
    },
    footer: {
      brandDesc:
        'RojgaarX என்பது சான்றளிக்கப்பட்ட தொழிலாளர் கூட்டுறவு சங்கங்களை நியாயமான ஊதியத் தரங்களின் கீழ் வீடுகள் மற்றும் நிறுவனங்களுடன் இணைக்கும் கூட்டுறவு உரிமையுடைய டிஜிட்டல் தளமாகும்.',
      initiativeNotice:
        'நியாயமான உழைப்பு டிஜிட்டல் மயமாக்கல் மற்றும் இடைத்தரகர் கட்டணங்களை ஒழிப்பதற்காக ஸ்மார்ட் இந்தியா ஹேக்கத்தான் SIH 26089 முன்முயற்சியின் கீழ் உருவாக்கப்பட்டது.',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. தேசிய தொழிலாளர் கூட்டுறவு கூட்டமைப்பு.',
      privacy: 'தனியுரிமை மற்றும் தரவு பாதுகாப்பு',
      terms: 'கூட்டுறவு விதிகள் மற்றும் நிபந்தனைகள்',
      fairWageStandard: 'சட்டப்பூர்வ நியாயமான ஊதியத் தரம் சான்றளிக்கப்பட்டது',
    },
  },

  mr: {
    brandName: 'RojgaarX',
    brandTagline: 'राष्ट्रीय डिजिटल सहकारी कामगार महासंघ मंच',
    nav: {
      topBanner: 'SIH 26089: सहकारी कामगार डिजिटल महासंघ',
      zeroCommission: '0% कमिशन',
      directPayout: '100% थेट मोबदला',
      welfareFund: '5% कल्याण निधी',
      marketplace: 'सार्वजनिक बाजार',
      workerPortal: 'कामगार पोर्टल',
      adminPanel: 'प्रशासन पॅनेल',
      city: 'शहर / केंद्र',
      language: 'भाषा',
      register: 'नोंदणी',
      registerRole: 'भूमिका निवडा',
      sos: 'सुरक्षा हेल्पलाइन',
      quickPortals: 'जलद पोर्टल',
      expertSection: 'तज्ज्ञ कॉम्बो',
      biddingMarketplace: 'निविदा व लिलाव',
      radiusMeter: 'अंतर रडार',
      workersDirectory: 'कामगार यादी',
    },
    hero: {
      initiativeBadge: 'SIH 26089 राष्ट्रीय उपक्रम',
      federationBadge: 'कामगार महासंघाच्या मालकीचे',
      commissionBadge: '0% दलाली',
      title: 'सहकारी मालकी. 0% दलाली. 100% न्याय्य मोबदला.',
      subtitle:
        'प्लंबिंग, वायरिंग, सुतारकाम आणि आवश्यक कामांसाठी थेट अधिकृत कामगार सहकारी सोसायट्यांशी जोडा. 100% मोबदला थेट कुशल कामगाराला, 5% भविष्यनिर्वाह, आरोग्य आणि मुलांच्या शिक्षणासाठी कल्याण निधीत सुरक्षित.',
      bookService: 'प्रमाणित कारागीर बुक करा',
      joinAsWorker: 'सहकारी कामगार म्हणून नोंदणी करा',
      coopRateCard: 'सहकारी दर सूची',
      eShramVerified: 'ई-श्रम व आधार प्रमाणित',
      esicShield: '₹5,00,000 ESIC सुरक्षा कवच',
    },
    ticker: [
      '0% मध्यस्थ प्लॅटफॉर्म कमिशन',
      '100% थेट सहकारी कामगारांना मोबदला',
      '₹5,00,000 ESIC व अपघात विमा संरक्षण सक्रिय',
      'शासकीय ई-श्रम आणि NSQF प्रमाणित कुशल कारागीर',
      'AI भविष्यसूचक मागणी वाटप प्रणाली',
      'स्मार्ट इंडिया हॅकेथॉन SIH 26089',
    ],
    expertSection: {
      badge: 'द्वि-कुशल व बहु-कुशल मास्टर गिल्ड',
      discount: '26% पर्यंत बचत',
      title: 'तज्ज्ञ विभाग: बहु-कौशल्य जॉब कॉम्बो',
      subtitle:
        'एकाच वेळी इलेक्ट्रिशियन आणि प्लंबर हवा आहे का? एकाच भेटीत 0% दलाली शुल्कासह प्रमाणित बहु-कौशल्य तज्ज्ञांना बुक करा.',
      hourlyBundle: 'कॉम्बो दर / तास',
      saving: 'कॉम्बो बचत',
      bookCombo: 'कॉम्बो तज्ज्ञ बुक करा',
      viewWork: 'अभिप्राय व कामे',
      completedCombos: 'पूर्ण केलेले कॉम्बो कामे',
      specialties: 'कौशल्य वैशिष्ट्ये',
    },
    biddingMarketplace: {
      badge: 'सामुदायिक रिव्हर्स-ऑक्शन निविदा',
      liveLabel: 'थेट निविदा व मोठी कामे',
      title: 'लिलाव बाजार: समुदाय कार्य निविदा',
      subtitle:
        'सोसायटी दुरुस्ती, नूतनीकरण किंवा केटरिंग निविदा प्रसिद्ध करा. सहकारी संघ किमान वेतनाच्या ऑडिटसह पारदर्शकपणे बोली लावतात.',
      postTender: 'नवीन निविदा प्रसिद्ध करा',
      allTenders: 'सर्व सक्रिय निविदा',
      openBids: 'बोलीसाठी खुल्या',
      budget: 'सोसायटी अंदाजपत्रक',
      lowestBid: 'किमान थेट बोली',
      bidsCount: 'सहकारी बोल्या',
      awardTender: 'निविदा मंजूर करा',
      placeBid: 'सहकारी बोली लावा',
      tenderAwarded: 'निविदा मंजूर',
      filterAll: 'सर्व निविदा',
      filterOpen: 'बोलीसाठी उपलब्ध',
      filterAwarded: 'मंजूर निविदा',
      teamPlan: 'संघ योजना व SLA',
      daysToComplete: 'पूर्ण करण्याचे दिवस',
    },
    radiusSection: {
      badge: 'लाइव्ह जिओ-फेन्स',
      title: 'अति-स्थानिक अंतर रडार',
      heading: 'अंतर रडार मीटर: 500 मी ते 10 किमी',
      description:
        'आपले शोध अंतर ठरवा. आपल्या जवळच्या प्रमाणित सहकारी कामगारांना थेट GPS अचूकतेने त्वरित शोधा.',
      currentRadius: 'शोध अंतर',
      workersInRange: 'परिसरातील सहकारी सदस्य',
      selectedSector: 'प्रमाणित GPS सेक्टर',
      quickPresets: 'जलद अंतर पर्याय',
      meters: 'मीटर',
      kilometers: 'किमी',
    },
    categories: {
      badge: 'महासंघ सेवा यादी',
      title: 'शासकीय मान्यताप्राप्त कामगार संघटना',
      subtitle:
        'सर्व सेवा वैधानिक कामगार सामाजिक सुरक्षेसह प्रमाणित सहकारी दरपत्रकानुसार पुरविल्या जातात.',
      searchPlaceholder: 'नाव, कौशल्य किंवा सहकारी संस्थेनुसार शोधा...',
      allSectors: 'सर्व सेक्टर',
      resetAll: 'सर्व फिल्टर्स रीसेट करा',
      highDemand: 'उच्च मागणी',
      bookNow: 'सहकारी कारागीर बुक करा',
      hourlyBase: '/ तास मूळ दर',
    },
    workerDirectory: {
      badge: 'प्रमाणित सदस्य निर्देशिका',
      title: 'सत्यापित सहकारी तज्ज्ञ',
      subtitle:
        'सविस्तर रेटिंग्ज, नागरिकांचे अभिप्राय आणि आधीच्या कामांची छायाचित्रे पाहण्यासाठी कोणत्याही कार्डवर "अभिप्राय व कामे" वर क्लिक करा.',
      workersFound: 'अंतरातील उपलब्ध कारागीर',
      hourlyRate: '/ तास',
      reviews: 'अभिप्राय',
      experience: 'वर्षे अनुभव',
      completedJobs: 'पूर्ण झालेली कामे',
      bookSpecialist: 'कारागीर बुक करा',
      reviewsAndWork: 'अभिप्राय व कामे',
      noWorkersFound: 'या अंतरात कोणतेही कारागीर आढळले नाहीत',
      expandRadar: 'रडार 10 किमी पर्यंत वाढवा व रीसेट करा',
    },
    societyProcurement: {
      badge: 'संस्थात्मक व गृहनिर्माण सुविधा व्यवस्थापन',
      title: 'आपण RWA, रुग्णालय किंवा शैक्षणिक संस्था आहात का?',
      description:
        'शासकीय निविदा नियमांनुसार समर्पित सहकारी देखभाल पथके मिळवा. हमी किमान वेतन ऑडिट, पूर्ण वैधानिक PF/ESIC अनुपालन आणि महासंघाचे थेट पर्यवेक्षण.',
      sla: 'थेट सोसायटी SLA',
      zeroBrokerage: 'शून्य मध्यस्थ दलाली',
      gstInvoice: 'GST सह संपूर्ण कर चलन',
      requestQuote: 'सोसायटी घाऊक कोटेशन मागा',
      workerJoin: 'आपण कामगार आहात का? येथे जोडा',
    },
    bookingModal: {
      title: 'प्रमाणित सहकारी कारागीर बुक करा',
      subtitle: 'प्रमाणित न्याय्य मोबदला हमी. शून्य मध्यस्थ नफेखोरी.',
      serviceTrade: 'सेवा श्रेणी / ट्रेड',
      specialist: 'नेमलेले कारागीर',
      appointmentDate: 'पसंतीची तारीख व वेळ',
      address: 'सेवेचे ठिकाण / फ्लॅट / घर क्र.',
      problemDesc: 'समस्येचे स्वरूप',
      problemPlaceholder:
        'आपल्या गरजेची किंवा समस्येची सविस्तर माहिती द्या (उदा. नळ गळती, वायरिंग शॉर्ट सर्किट, भिंत दुरुस्ती)...',
      voiceMemo: 'व्हॉइस ऑडिओ संदेश (पर्यायी)',
      recordVoice: 'व्हॉइस नोट रेकॉर्ड करा',
      recording: 'ऑडिओ रेकॉर्डिंग सुरू आहे...',
      mediaUpload: 'समस्येचा फोटो / व्हिडिओ',
      dragDrop: 'फोटो/व्हिडिओ येथे ड्रॅग करा किंवा निवडण्यासाठी क्लिक करा',
      confirmBooking: 'निश्चित करा व विनंती पाठवा',
      bookingSuccess: 'बुकिंग यशस्वी! सहकारी कारागिरास सूचना पाठवली आहे.',
      fairWageNote: '100% मोबदला थेट कामगारास मिळतो (5% कल्याण निधी योगदानासह).',
    },
    registrationModal: {
      title: 'RojgaarX पोर्टल नोंदणी',
      subtitle: 'विशेष सुविधा आणि सहकारी दर संरक्षणासाठी आपल्या खात्याचा प्रकार निवडा.',
      employer: 'नियोक्ता / नागरिक',
      employee: 'कामगार / सहकारी सदस्य',
      fullName: 'पूर्ण नाव',
      phone: 'मोबाईल फोन नंबर',
      email: 'ईमेल पत्ता (पर्यायी)',
      city: 'शहर / केंद्र',
      sector: 'परिसर / सेक्टर',
      trade: 'प्राथमिक कौशल्य / ट्रेड',
      secondaryTrade: 'दुय्यम ट्रेड कौशल्य (पर्यायी)',
      coopSociety: 'संलग्न कामगार सहकारी संस्था',
      eshramUan: 'ई-श्रम UAN नंबर',
      experience: 'अनुभव (वर्षे)',
      hourlyWage: 'अपेक्षित प्रति तास मोबदला (₹)',
      submitEmployer: 'नियोक्ता म्हणून नोंदणी करा',
      submitEmployee: 'प्रमाणित कामगार म्हणून नोंदणी करा',
      roleActive: 'सक्रिय भूमिका',
    },
    workerPortal: {
      title: 'कामगार डिस्पॅच रडार व सहकारी खातेवही',
      statusOnline: 'डिस्पॅच रडारवर ऑनलाइन',
      incomingRequests: 'थेट नवीन कामाच्या विनंत्या',
      acceptJob: 'काम स्वीकारा',
      declineJob: 'नाकारा',
      earningsToday: 'आजची थेट एकूण कमाई',
      welfareContribution: 'कल्याण निधीत जमा (5%)',
      simulateJob: 'नवीन डिस्पॅच अलर्ट सिम्युलेट करा',
      emergencySos: 'आपत्कालीन सुरक्षा मदत',
      directPayNote: 'सर्व मोबदला थेट आपल्या बँक खात्यात जमा होतो.',
    },
    adminPortal: {
      title: 'महासंघ प्रशासन व AI मागणी वाटप प्रणाली',
      tabAllocation: 'AI मागणी वाटप',
      tabSocieties: 'संलग्न संस्था',
      tabDisputes: 'तक्रार निवारण व लवाद',
      tabWelfare: 'कल्याण व सामाजिक सुरक्षा',
      aiDemandHeading: 'AI भविष्यसूचक मागणी वाटप प्रणाली',
      societiesHeading: 'संलग्न सहकारी संस्था व पडताळणी',
      disputesHeading: 'तक्रार लवाद व सुरक्षा नोंद',
      welfareHeading: 'सहकारी कल्याण निधी खातेवही व DBT',
    },
    sos: {
      title: 'आपत्कालीन कामगार सुरक्षा मदत',
      subtitle: 'त्वरित सिग्नल जवळच्या महासंघ पर्यवेक्षक व सुरक्षा पथकास आपल्या स्थानावर पाठवतो.',
      triggerSos: 'आपत्कालीन सुरक्षा सक्रिय करा',
      sosTriggered: 'सुरक्षा सिग्नल सक्रिय - नियंत्रण कक्षास माहिती पाठविली',
      helpline: '24x7 सहकारी महासंघ हेल्पलाइन: 1800-419-7788',
    },
    footer: {
      brandDesc:
        'RojgaarX हे प्रमाणित कामगार सहकारी महासंघांना न्याय्य वेतन मानकांनुसार कुटुंबे आणि संस्थांशी जोडणारे सहकारी मालकीचे डिजिटल व्यासपीठ आहे.',
      initiativeNotice:
        'न्याय्य श्रम डिजिटलायझेशन आणि मध्यस्थ शुल्क हटवण्यासाठी स्मार्ट इंडिया हॅकेथॉन SIH 26089 उपक्रमांतर्गत विकसित.',
      rights: 'सर्व हक्क राखीव. राष्ट्रीय कामगार सहकारी महासंघ.',
      privacy: 'गोपनीयता आणि डेटा सुरक्षा',
      terms: 'सहकारी उपविधी आणि अटी',
      fairWageStandard: 'वैधानिक न्याय्य वेतन मानक प्रमाणित',
    },
  },
};

export const getTranslation = (language: LanguageCode): TranslationDictionary => {
  const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
  return {
    ...dict,
    bidding: {
      ...(dict.bidding || dict.biddingMarketplace),
      postRequirement: dict.biddingMarketplace.postTender,
    },
    categoryGrid: {
      ...(dict.categoryGrid || dict.categories),
      zeroSurge: language === 'hi' ? '0% कमीशन • शून्य सर्ज मूल्य निर्धारण' : language === 'ta' ? '0% தரகு கட்டணம் • கூடுதல் கட்டணம் இல்லை' : language === 'mr' ? '0% कमिशन • शून्य सर्ज दर' : '0% Commission • Zero Surge Pricing',
      rateCard: language === 'hi' ? 'मानक दर सूची' : language === 'ta' ? 'நிலையான கட்டண அட்டை' : language === 'mr' ? 'प्रमाणित दर पत्रक' : 'Standard Rate Card',
      welfareFund: language === 'hi' ? 'समाज कल्याण कोष' : language === 'ta' ? 'சமூக நல நிதி' : language === 'mr' ? 'कल्याण निधी' : 'Society Welfare Fund',
    },
    workerDirectory: {
      ...dict.workerDirectory,
      searchPlaceholder: dict.workerDirectory.searchPlaceholder || dict.categories.searchPlaceholder,
      allSectors: dict.workerDirectory.allSectors || dict.categories.allSectors,
      resetFilter: dict.workerDirectory.resetFilter || dict.categories.resetAll,
      verifiedJobs: dict.workerDirectory.verifiedJobs || dict.workerDirectory.completedJobs,
      directWage: dict.workerDirectory.directWage || (language === 'hi' ? '100% सीधे कारीगर को' : language === 'ta' ? '100% தொழிலாளிக்கு' : language === 'mr' ? '100% थेट कामगाराला' : '100% Direct to Worker'),
      bookNow: dict.workerDirectory.bookNow || dict.workerDirectory.bookSpecialist,
    },
    hourlyBooking: {
      title: language === 'hi' ? 'घंटे के स्लॉट में बुक करें' : language === 'ta' ? 'மணிநேர இடைவெளியில் பதிவு செய்க' : language === 'mr' ? 'तासांच्या स्लॉटनुसार बुक करा' : 'Book in Hourly Slots',
      slotTitle: language === 'hi' ? 'सुविधाजनक समय स्लॉट चुनें' : language === 'ta' ? 'நேர இடைவெளியைத் தேர்ந்தெடுக்கவும்' : language === 'mr' ? 'सोयीस्कर वेळ स्लॉट निवडा' : 'Select Preferred Time Slot',
      oneHour: language === 'hi' ? '1 घंटा (त्वरित कार्य)' : language === 'ta' ? '1 மணிநேரம் (விரைவு பணி)' : language === 'mr' ? '१ तास (तातडीचे काम)' : '1 Hour (Quick Fix)',
      twoHours: language === 'hi' ? '2 घंटे (मानक कार्य)' : language === 'ta' ? '2 மணிநேரம் (நிலையான பணி)' : language === 'mr' ? '२ तास (प्रमाणित काम)' : '2 Hours (Standard Job)',
      threeHours: language === 'hi' ? '3 घंटे' : language === 'ta' ? '3 மணிநேரம்' : language === 'mr' ? '३ तास' : '3 Hours',
      fourHours: language === 'hi' ? '4 घंटे (आधा दिन)' : language === 'ta' ? '4 மணிநேரம் (அரை நாள்)' : language === 'mr' ? '४ तास (अर्धा दिवस)' : '4 Hours (Half Day)',
      eightHours: language === 'hi' ? '8 घंटे (पूरा दिन)' : language === 'ta' ? '8 மணிநேரம் (முழு நாள்)' : language === 'mr' ? '८ तास (पूर्ण दिवस)' : '8 Hours (Full Day)',
      customHours: language === 'hi' ? 'कस्टम घंटे' : language === 'ta' ? 'விருப்ப மணிநேரம்' : language === 'mr' ? 'इतर तास' : 'Custom Hours',
      hourUnit: language === 'hi' ? 'घंटा' : language === 'ta' ? 'மணி' : language === 'mr' ? 'तास' : 'hr',
      hoursUnit: language === 'hi' ? 'घंटे' : language === 'ta' ? 'மணி' : language === 'mr' ? 'तास' : 'hrs',
      timeSlotMorning: language === 'hi' ? 'सुबह (09:00 AM - 12:00 PM)' : language === 'ta' ? 'காலை (09:00 AM - 12:00 PM)' : language === 'mr' ? 'सकाळ (०९:०० AM - १२:०० PM)' : 'Morning (09:00 AM - 12:00 PM)',
      timeSlotAfternoon: language === 'hi' ? 'दोपहर (12:00 PM - 04:00 PM)' : language === 'ta' ? 'மதியம் (12:00 PM - 04:00 PM)' : language === 'mr' ? 'दुपार (१२:०० PM - ०४:०० PM)' : 'Afternoon (12:00 PM - 04:00 PM)',
      timeSlotEvening: language === 'hi' ? 'शाम (04:00 PM - 08:00 PM)' : language === 'ta' ? 'மாலை (04:00 PM - 08:00 PM)' : language === 'mr' ? 'संध्याकाळ (०४:०० PM - ०८:०० PM)' : 'Evening (04:00 PM - 08:00 PM)',
      baseWageLabel: language === 'hi' ? 'मूल श्रम मजदूरी' : language === 'ta' ? 'அடிப்படை தொழிலாளர் கூலி' : language === 'mr' ? 'मूळ मजुरी दर' : 'Base Labour Wage',
      welfareLabel: language === 'hi' ? '5% सहकारी कल्याण कोष' : language === 'ta' ? '5% கூட்டுறவு நல நிதி' : language === 'mr' ? '५% सहकारी कल्याण निधी' : '5% Cooperative Welfare Fund',
      zeroCommissionLabel: language === 'hi' ? '0% प्लेटफॉर्म कमीशन (बचत' : language === 'ta' ? '0% தள கட்டணம் (சேமிப்பு' : language === 'mr' ? '०% कमिशन (बचत' : '0% Platform Cut (You Saved',
      totalLabel: language === 'hi' ? 'कुल अनुमानित किराया' : language === 'ta' ? 'மொத்த மதிப்பிடப்பட்ட கட்டணம்' : language === 'mr' ? 'एकूण अंदाजित भाडे' : 'Total Estimated Fare',
      bookNowWithHours: language === 'hi' ? 'कारीगर बुक करें' : language === 'ta' ? 'முன்பதிவு செய்க' : language === 'mr' ? 'कारागीर बुक करा' : 'Book Specialist Now',
      fareCalculation: language === 'hi' ? 'पारदर्शी सहकारी मूल्य निर्धारण व प्रति घंटा किराया' : language === 'ta' ? 'வெளிப்படையான கூட்டுறவு கட்டணம் & மணிநேர வாடகை' : language === 'mr' ? 'पारदर्शक सहकारी दर व ताशी भाडे' : 'Transparent Cooperative Pricing & Hourly Fare',
    },
    filterBar: {
      federationTitle: language === 'hi' ? 'महासंघ सेवा रोस्टर' : language === 'ta' ? 'கூட்டமைப்பு சேவை பட்டியல்' : language === 'mr' ? 'महासंघ सेवा रोस्टर' : 'Federation Service Roster',
      filterSpecialists: language === 'hi' ? 'विशेषज्ञ कारीगर खोजें व फ़िल्टर करें' : language === 'ta' ? 'தொழிலாளர்களை வடிகட்டவும்' : language === 'mr' ? 'विशेषज्ञ कारागीर शोधा व फिल्टर करा' : 'Filter Specialists by Sector & Trade',
      activeRoster: language === 'hi' ? 'सक्रिय सदस्य उपलब्ध' : language === 'ta' ? 'உறுப்பினர்கள் தயார்' : language === 'mr' ? 'सक्रिय सदस्य उपलब्ध' : 'Specialists Active on Duty',
      searchPlaceholder: language === 'hi' ? 'कारीगर का नाम, ट्रेड या सहकारी समिति खोजें...' : language === 'ta' ? 'பெயர், தொழில் அல்லது சங்கத்தை தேடுங்கள்...' : language === 'mr' ? 'नाव, काम किंवा संस्था शोधा...' : 'Search specialists by name, trade, or cooperative society...',
      allSectors: language === 'hi' ? 'सभी सेक्टर' : language === 'ta' ? 'அனைத்து பகுதிகள்' : language === 'mr' ? 'सर्व सेक्टर' : 'All Sectors',
      allTrades: language === 'hi' ? 'सभी ट्रेड / श्रेणियां' : language === 'ta' ? 'அனைத்து தொழில்கள்' : language === 'mr' ? 'सर्व कामे / प्रकार' : 'All Trades / Categories',
    },
    statutory: {
      eshramVerified: language === 'hi' ? 'ई-श्रम UAN प्रमाणित' : language === 'ta' ? 'இ-ஷ்ரம் UAN சரிபார்க்கப்பட்டது' : language === 'mr' ? 'ई-श्रम UAN प्रमाणित' : 'e-Shram UAN Verified',
      esicCovered: language === 'hi' ? '₹5,00,000 ईएसआईसी स्वास्थ्य बीमा सक्रिय' : language === 'ta' ? '₹5,00,000 ESIC காப்பீடு செயலில் உள்ளது' : language === 'mr' ? '₹५,००,००० ईएसआयसी आरोग्य सुरक्षा' : '₹5,00,000 ESIC Cover Active',
      policeVerified: language === 'hi' ? 'पुलिस सत्यापन प्रमाणपत्र सत्यापित' : language === 'ta' ? 'காவல்துறை சான்றிதழ் சரிபார்க்கப்பட்டது' : language === 'mr' ? 'पोलीस पडताळणी प्रमाणपत्र पूर्ण' : 'Police Clearance Certificate On-File',
      directSociety: language === 'hi' ? 'सीधा सहकारी महासंघ सदस्य' : language === 'ta' ? 'நேரடி கூட்டுறவு சங்க உறுப்பினர்' : language === 'mr' ? 'थेट सहकारी संस्था सदस्य' : 'Direct Cooperative Federation Member',
    },
    workerDetails: {
      completedJobs: language === 'hi' ? 'पूर्ण कार्य' : language === 'ta' ? 'முடிக்கப்பட்ட பணிகள்' : language === 'mr' ? 'पूर्ण कामे' : 'Completed Jobs',
      experience: language === 'hi' ? 'कार्य अनुभव' : language === 'ta' ? 'அனுபவம்' : language === 'mr' ? 'कामाचा अनुभव' : 'Experience',
      overallRating: language === 'hi' ? 'समग्र रेटिंग' : language === 'ta' ? 'ஒட்டுமொத்த மதிப்பீடு' : language === 'mr' ? 'एकूण रेटिंग' : 'Overall Rating',
      insurance: language === 'hi' ? 'ईएसआईसी बीमा' : language === 'ta' ? 'ESIC காப்பீடு' : language === 'mr' ? 'ईएसआयसी विमा' : 'ESIC Insurance',
      activeShield: language === 'hi' ? 'सक्रिय स्वास्थ्य सुरक्षा' : language === 'ta' ? 'செயலில் உள்ள நல காப்பீடு' : language === 'mr' ? 'सक्रिय आरोग्य सुरक्षा' : 'Active Health Shield',
      coopVerified: language === 'hi' ? '100% सहकारी सत्यापित' : language === 'ta' ? '100% கூட்டுறவு சான்றளிக்கப்பட்டது' : language === 'mr' ? '१००% सहकारी प्रमाणित' : '100% Cooperative Verified',
      seniorJourneyman: language === 'hi' ? 'वरिष्ठ कुशल कारीगर' : language === 'ta' ? 'மூத்த கைவினைஞர்' : language === 'mr' ? 'वरिष्ठ कुशल कारागीर' : 'Senior Journeyman',
      acrossReviews: language === 'hi' ? 'समीक्षाओं के आधार पर' : language === 'ta' ? 'விமர்சனங்களின்படி' : language === 'mr' ? 'पुनरावलोकनांनुसार' : 'Across Reviews',
      bioHeading: language === 'hi' ? 'व्यावसायिक परिचय एवं कार्यशैली' : language === 'ta' ? 'தொழில்முறை பின்னணி & அணுகுமுறை' : language === 'mr' ? 'व्यावसायिक पार्श्वभूमी आणि कार्यपद्धती' : 'Professional Background & Philosophy',
      specialtiesHeading: language === 'hi' ? 'विशेष दक्षता एवं प्रमुख कौशल:' : language === 'ta' ? 'சிறப்பு திறன்கள் & தகுதிகள்:' : language === 'mr' ? 'विशेष कौशल्ये आणि कार्यक्षमता:' : 'Trade Specialties & Core Competencies:',
      statutoryHeading: language === 'hi' ? 'वैधानिक प्रमाण पत्र एवं सुरक्षा जांच:' : language === 'ta' ? 'சட்டப்பூர்வ சான்றிதழ்கள் & சரிபார்ப்பு:' : language === 'mr' ? 'वैधानिक कागदपत्रे व पडताळणी:' : 'Statutory Credentials & Compliance Checklist:',
      satisfactionBreakdown: language === 'hi' ? 'ग्राहक संतुष्टि एवं गुणवत्ता विश्लेषण' : language === 'ta' ? 'வாடிக்கையாளர் திருப்தி விவரம்' : language === 'mr' ? 'ग्राहक समाधान व दर्जा विश्लेषण' : 'Customer Satisfaction & Quality Breakdown',
      punctuality: language === 'hi' ? 'समयबद्धता व आगमन' : language === 'ta' ? 'நேரந்தவறாமை' : language === 'mr' ? 'वेळेचे पालन' : 'Punctuality & Arrival',
      workmanship: language === 'hi' ? 'तकनीकी कार्यकुशलता' : language === 'ta' ? 'தொழில்நுட்ப தரம்' : language === 'mr' ? 'कामाचा दर्जा' : 'Technical Workmanship',
      fairPricing: language === 'hi' ? 'उचित मानक दरें' : language === 'ta' ? 'நியாயமான கட்டணம்' : language === 'mr' ? 'रास्त प्रमाणित दर' : 'Fair Standard Pricing',
      cleanliness: language === 'hi' ? 'कार्यस्थल स्वच्छता व शिष्टाचार' : language === 'ta' ? 'பணி தூய்மை & பாதுகாப்பு' : language === 'mr' ? 'स्वच्छता व शिष्टाचार' : 'Site Cleanliness & Safety',
      recentFeedback: language === 'hi' ? 'सत्यापित ग्राहक समीक्षाएं' : language === 'ta' ? 'சரிபார்க்கப்பட்ட வாடிக்கையாளர் மதிப்புரைகள்' : language === 'mr' ? 'प्रमाणित ग्राहकांची मते' : 'Verified Customer Reviews',
      pastProjects: language === 'hi' ? 'पिछले पूर्ण किए गए कार्य व गैलरी' : language === 'ta' ? 'முந்தைய திட்டங்களின் தொகுப்பு' : language === 'mr' ? 'यापूर्वी पूर्ण केलेले प्रकल्प' : 'Past Projects & Completed Work Portfolio',
    },
  };
};
