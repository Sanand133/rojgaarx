import React, { useState, useMemo, useEffect } from 'react';
import {
  Users,
  Search,
  MapPin,
  Calendar,
  Sparkles,
  Info,
  Building,
  Radar,
  Gavel,
  CheckCircle2,
  Clock,
  Award,
  Layers,
  Zap,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  WorkerProfile,
  ServiceCategory,
  BookingDetails,
  LanguageCode,
  ComboExpert,
  TenderPost,
  TenderBid,
  WorkerReview,
} from '../../types';
import { ServiceCategoryGrid } from './ServiceCategoryGrid';
import { WorkerProfileCard } from './WorkerProfileCard';
import { WorkerCardSkeleton } from './WorkerCardSkeleton';
import { ExpertSection } from './ExpertSection';
import { BookingModal } from './BookingModal';
import { WorkerProfileDetailsModal } from './WorkerProfileDetailsModal';
import { WorkerFeedbackModal } from './WorkerFeedbackModal';
import { RadiusMeterSection } from './RadiusMeterSection';
import { BiddingMarketplace } from './BiddingMarketplace';
import { ProjectAboutView } from './ProjectAboutView';
import { MarqueeTicker } from '../common/MarqueeTicker';
import {
  WORKER_PROFILES,
  SERVICE_CATEGORIES,
  SECTORS,
  COMBO_EXPERTS,
  INITIAL_TENDER_POSTS,
} from '../../data/mockData';
import { getTranslation } from '../../utils/translations';
import {
  getLocalizedWorkers,
  getLocalizedCategories,
  getLocalizedCombos,
  getLocalizedTenders,
} from '../../utils/localizedData';
import { workerMatchesSearch } from '../../utils/searchUtils';

export type MarketplaceTab = 'home' | 'directory' | 'combos' | 'radar' | 'bidding' | 'overview';

interface MarketplaceViewProps {
  language: LanguageCode;
  selectedCity: string;
  onBookConfirmed: (booking: BookingDetails) => void;
  onSwitchToWorkerPortal: () => void;
  onOpenRegistration?: () => void;
  userRole?: 'employer' | 'employee';
  searchQuery?: string;
  onSearchQueryChange?: (q: string) => void;
  activeMarketplaceTab?: MarketplaceTab;
  onMarketplaceTabChange?: (tab: MarketplaceTab) => void;
  selectedWorkerFromSearch?: WorkerProfile | null;
  onClearSelectedWorkerFromSearch?: () => void;
  selectedCategoryFromSearch?: string | null;
  onClearSelectedCategoryFromSearch?: () => void;
  homeRefreshKey?: number;
}

export const MarketplaceView: React.FC<MarketplaceViewProps> = ({
  language,
  selectedCity,
  onBookConfirmed,
  onSwitchToWorkerPortal,
  onOpenRegistration,
  userRole = 'employer',
  searchQuery: externalSearchQuery,
  onSearchQueryChange,
  activeMarketplaceTab: externalActiveTab,
  onMarketplaceTabChange,
  selectedWorkerFromSearch,
  onClearSelectedWorkerFromSearch,
  selectedCategoryFromSearch,
  onClearSelectedCategoryFromSearch,
  homeRefreshKey,
}) => {
  const t = getTranslation(language);

  // Active section tab (defaults to 'home' for Charter & Mission Homepage)
  const [internalActiveTab, setInternalActiveTab] = useState<MarketplaceTab>('home');
  const activeTab = externalActiveTab || internalActiveTab;
  const setActiveTab = (tab: MarketplaceTab) => {
    if (onMarketplaceTabChange) {
      onMarketplaceTabChange(tab);
    } else {
      setInternalActiveTab(tab);
    }
  };

  // Search, Sector, Category, and Quick Filter state
  const [internalSearchQuery, setInternalSearchQuery] = useState('');
  const searchQuery = externalSearchQuery !== undefined ? externalSearchQuery : internalSearchQuery;
  const setSearchQuery = (q: string) => {
    if (onSearchQueryChange) {
      onSearchQueryChange(q);
    } else {
      setInternalSearchQuery(q);
    }
  };

  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [quickFilter, setQuickFilter] = useState<'all' | 'topRated' | 'nearest' | 'affordable'>('all');

  // Loading animation state (smooth skeleton transitions)
  const [isLoadingWorkers, setIsLoadingWorkers] = useState(true);

  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingWorkers(false);
    }, 380);
    return () => clearTimeout(timer);
  }, []);

  // Smooth shimmer effect whenever filters or search query change
  useEffect(() => {
    setIsLoadingWorkers(true);
    const timer = setTimeout(() => {
      setIsLoadingWorkers(false);
    }, 240);
    return () => clearTimeout(timer);
  }, [selectedCategoryId, selectedSector, searchQuery, quickFilter]);

  // Handle category selected from top search bar
  useEffect(() => {
    if (selectedCategoryFromSearch) {
      setSelectedCategoryId(selectedCategoryFromSearch);
      setActiveTab('directory');
      if (onClearSelectedCategoryFromSearch) {
        onClearSelectedCategoryFromSearch();
      }
    }
  }, [selectedCategoryFromSearch, onClearSelectedCategoryFromSearch]);

  // Proximity Radius Meter State (500m to 10km)
  const [radiusKm, setRadiusKm] = useState<number>(5.0);

  // Dynamic workers state allowing reviews & ratings
  const [workersListState, setWorkersListState] = useState<WorkerProfile[]>(WORKER_PROFILES);

  // Feedback & Star Rating Modal State
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [activeWorkerForFeedback, setActiveWorkerForFeedback] = useState<WorkerProfile | null>(null);

  // Details Modal State
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [activeWorkerForDetails, setActiveWorkerForDetails] = useState<WorkerProfile | null>(null);

  // If user searched a worker from the top bar and clicked it, open their details
  useEffect(() => {
    if (selectedWorkerFromSearch) {
      setActiveWorkerForDetails(selectedWorkerFromSearch);
      setIsDetailsModalOpen(true);
      if (onClearSelectedWorkerFromSearch) {
        onClearSelectedWorkerFromSearch();
      }
    }
  }, [selectedWorkerFromSearch, onClearSelectedWorkerFromSearch]);

  // When top bar search query changes and is non-empty, ensure we're viewing 'directory'
  useEffect(() => {
    if (searchQuery.trim()) {
      setActiveTab('directory');
    }
  }, [searchQuery]);

  // Whenever homeRefreshKey changes (e.g. user clicks the RojgaarX brand logo)
  const [showRefreshToast, setShowRefreshToast] = useState(false);
  useEffect(() => {
    if (homeRefreshKey && homeRefreshKey > 0) {
      setActiveTab('home');
      setSelectedCategoryId(null);
      setSelectedSector('All Sectors');
      setQuickFilter('all');
      setIsBookingModalOpen(false);
      setIsDetailsModalOpen(false);
      setIsFeedbackModalOpen(false);
      setShowRefreshToast(true);
      const timer = setTimeout(() => setShowRefreshToast(false), 2200);
      return () => clearTimeout(timer);
    }
  }, [homeRefreshKey]);

  // Dynamic multilingual localized data sets
  const localizedWorkersList = useMemo(() => {
    return getLocalizedWorkers(workersListState, language);
  }, [workersListState, language]);

  const localizedCategoriesList = useMemo(() => {
    return getLocalizedCategories(SERVICE_CATEGORIES, language);
  }, [language]);

  const localizedCombosList = useMemo(() => {
    return getLocalizedCombos(COMBO_EXPERTS, language);
  }, [language]);

  // Tenders Bidding Marketplace State
  const [tenders, setTenders] = useState<TenderPost[]>(() =>
    getLocalizedTenders(INITIAL_TENDER_POSTS, language)
  );

  // Re-sync localized tenders when language changes
  useMemo(() => {
    setTenders((prev) =>
      prev.map((tender) => {
        const matchingOriginal = INITIAL_TENDER_POSTS.find((it) => it.id === tender.id);
        if (matchingOriginal) {
          const loc = getLocalizedTenders([matchingOriginal], language)[0];
          return {
            ...loc,
            bids: tender.bids,
            status: tender.status,
            awardedBidId: tender.awardedBidId,
          };
        }
        return tender;
      })
    );
  }, [language]);

  // Booking Modal State & Hourly Slot Selection
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeCategoryForBooking, setActiveCategoryForBooking] = useState<ServiceCategory | null>(null);
  const [activeWorkerForBooking, setActiveWorkerForBooking] = useState<WorkerProfile | null>(null);
  const [bookingInitialHours, setBookingInitialHours] = useState<number>(2);
  const [bookingInitialSlot, setBookingInitialSlot] = useState<string>('11:00 AM - 01:00 PM');

  // Filtered workers logic
  const filteredWorkers = useMemo(() => {
    const query = searchQuery.trim();

    return localizedWorkersList.filter((w) => {
      // 1. Intelligent Search Match using synonyms, tags, and category services
      const matchSearch = query
        ? workerMatchesSearch(w, query, localizedCategoriesList)
        : true;

      // In active text search mode, show all matching specialists across sectors & radius
      const matchRadius = query ? true : (w.distanceKm || 2.0) <= radiusKm;

      // Category filter: match selected category, or if searching without explicit category click, allow all matching
      const matchCategory = selectedCategoryId && !query ? w.serviceCategoryId === selectedCategoryId : true;

      const matchSector =
        selectedSector !== 'All Sectors' && !query
          ? w.locationSector.toLowerCase().includes(selectedSector.split('/')[0].trim().toLowerCase())
          : true;

      // Quick filter
      let matchQuick = true;
      if (quickFilter === 'topRated') matchQuick = w.rating >= 4.8;
      if (quickFilter === 'nearest') matchQuick = (w.distanceKm || 2) <= 2.0;
      if (quickFilter === 'affordable') matchQuick = w.hourlyWage <= 300;

      return matchRadius && matchCategory && matchSector && matchSearch && matchQuick;
    });
  }, [localizedWorkersList, localizedCategoriesList, selectedCategoryId, selectedSector, searchQuery, radiusKm, quickFilter]);

  // Total workers within radius
  const workersInRangeCount = useMemo(() => {
    return localizedWorkersList.filter((w) => (w.distanceKm || 2.0) <= radiusKm).length;
  }, [localizedWorkersList, radiusKm]);

  const handleBookWorker = (
    worker: WorkerProfile,
    initialHours: number = 2,
    initialSlot: string = '11:00 AM - 01:00 PM'
  ) => {
    setActiveWorkerForBooking(worker);
    setBookingInitialHours(initialHours);
    setBookingInitialSlot(initialSlot);
    const cat = localizedCategoriesList.find((c) => c.id === worker.serviceCategoryId) || null;
    setActiveCategoryForBooking(cat);
    setIsBookingModalOpen(true);
  };

  const handleViewWorkerDetails = (worker: WorkerProfile) => {
    setActiveWorkerForDetails(worker);
    setIsDetailsModalOpen(true);
  };

  const handleViewComboDetails = (expert: ComboExpert) => {
    const existing = localizedWorkersList.find(
      (w) => w.id === expert.id || w.name.toLowerCase() === expert.name.toLowerCase()
    );
    if (existing) {
      handleViewWorkerDetails(existing);
    } else {
      const syntheticWorker: WorkerProfile = {
        id: expert.id,
        name: expert.name,
        hindiName: expert.hindiName,
        avatarUrl: expert.avatarUrl,
        trade: expert.comboTrades.join(' & '),
        serviceCategoryId: 'cat-combo',
        cooperativeSociety: expert.cooperativeSociety,
        federationCode: expert.federationCode,
        experienceYears: expert.experienceYears,
        rating: expert.rating,
        totalReviews: expert.totalReviews,
        completedJobsCount: expert.completedCombosCount,
        esramCardVerified: true,
        insuranceCoverAmount: 500000,
        hourlyWage: expert.hourlyWage,
        bio: expert.bio,
        specialties: expert.specialties,
        languages: ['Hindi', 'English'],
        badges: expert.badges,
        locationSector: expert.locationSector,
        isAvailableNow: true,
        distanceKm: expert.distanceKm,
      };
      handleViewWorkerDetails(syntheticWorker);
    }
  };

  const handleOpenFeedback = (worker: WorkerProfile) => {
    setActiveWorkerForFeedback(worker);
    setIsFeedbackModalOpen(true);
  };

  const handleReviewSubmitted = (
    workerId: string,
    review: WorkerReview,
    breakdown: {
      punctuality: number;
      workmanship: number;
      fairPricing: number;
      safetyCleanliness: number;
      fiveStarPercent: number;
      newOverallRating: number;
      newTotalReviews: number;
    }
  ) => {
    setWorkersListState((prev) =>
      prev.map((w) => {
        if (w.id === workerId) {
          return {
            ...w,
            rating: breakdown.newOverallRating,
            totalReviews: breakdown.newTotalReviews,
            ratingsBreakdown: {
              punctuality: breakdown.punctuality,
              workmanship: breakdown.workmanship,
              fairPricing: breakdown.fairPricing,
              safetyCleanliness: breakdown.safetyCleanliness,
              fiveStarPercent: breakdown.fiveStarPercent,
            },
            reviews: [review, ...(w.reviews || [])],
          };
        }
        return w;
      })
    );

    setActiveWorkerForDetails((prev) => {
      if (prev && prev.id === workerId) {
        return {
          ...prev,
          rating: breakdown.newOverallRating,
          totalReviews: breakdown.newTotalReviews,
          ratingsBreakdown: {
            punctuality: breakdown.punctuality,
            workmanship: breakdown.workmanship,
            fairPricing: breakdown.fairPricing,
            safetyCleanliness: breakdown.safetyCleanliness,
            fiveStarPercent: breakdown.fiveStarPercent,
          },
          reviews: [review, ...(prev.reviews || [])],
        };
      }
      return prev;
    });

    setIsFeedbackModalOpen(false);
  };

  const handleBookCombo = (combo: ComboExpert) => {
    const simulatedWorker: WorkerProfile = {
      id: combo.id,
      name: combo.name,
      hindiName: combo.hindiName,
      trade: combo.comboTitle,
      avatarUrl: combo.avatarUrl,
      experienceYears: combo.experienceYears,
      rating: combo.rating,
      totalReviews: combo.totalReviews,
      hourlyWage: combo.hourlyWage,
      isAvailableNow: true,
      cooperativeSociety: combo.cooperativeSociety,
      federationCode: combo.federationCode,
      locationSector: combo.locationSector,
      distanceKm: combo.distanceKm,
      specialties: combo.specialties,
      languages: ['Hindi', 'English'],
      badges: combo.badges,
      esramCardVerified: true,
      insuranceCoverAmount: 500000,
      completedJobsCount: combo.completedCombosCount,
      bio: combo.bio,
      serviceCategoryId: 'combo-specialists',
    };

    setActiveWorkerForBooking(simulatedWorker);
    setActiveCategoryForBooking(null);
    setBookingInitialHours(3);
    setBookingInitialSlot('11:00 AM - 01:00 PM');
    setIsBookingModalOpen(true);
  };

  const handleSelectCategory = (catId: string) => {
    if (selectedCategoryId === catId) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(catId);
    }
  };

  // Tender bidding handlers
  const handleAddTender = (newTender: TenderPost) => {
    setTenders((prev) => [newTender, ...prev]);
  };

  const handleAddBid = (tenderId: string, newBid: TenderBid) => {
    setTenders((prev) =>
      prev.map((t) => {
        if (t.id === tenderId) {
          return {
            ...t,
            bids: [...t.bids, newBid],
          };
        }
        return t;
      })
    );
  };

  const handleAwardTender = (tenderId: string, bidId: string) => {
    setTenders((prev) =>
      prev.map((t) => {
        if (t.id === tenderId) {
          return {
            ...t,
            status: 'Tender Awarded',
            awardedBidId: bidId,
            bids: t.bids.map((b) => (b.id === bidId ? { ...b, isAwarded: true } : b)),
          };
        }
        return t;
      })
    );
  };

  const switchTab = (tab: MarketplaceTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabDefinitions = [
    {
      id: 'home' as MarketplaceTab,
      label: language === 'hi' ? 'मिशन व चार्टर (होम)' : 'Charter & Mission (Home)',
      icon: <Sparkles className="w-4 h-4" />,
      badge: '0% Platform Cut',
    },
    {
      id: 'directory' as MarketplaceTab,
      label: language === 'hi' ? 'सेवाएं व कारीगर' : 'Workers & Services',
      icon: <Users className="w-4 h-4" />,
      badge: `${localizedWorkersList.length}`,
    },
    {
      id: 'combos' as MarketplaceTab,
      label: language === 'hi' ? 'सुपर सेवर कॉम्बो' : 'Value Combos',
      icon: <Layers className="w-4 h-4" />,
      badge: 'Save 25%',
    },
    {
      id: 'radar' as MarketplaceTab,
      label: language === 'hi' ? 'दूरी रडार' : 'Proximity Radar',
      icon: <Radar className="w-4 h-4" />,
      badge: `${workersInRangeCount} Nearby`,
    },
    {
      id: 'bidding' as MarketplaceTab,
      label: language === 'hi' ? 'सोसायटी टेंडर्स' : 'Society Tenders',
      icon: <Gavel className="w-4 h-4" />,
      badge: `${tenders.length}`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EA] space-y-4 pb-16">
      {/* Clean Trust Marquee Ticker */}
      <MarqueeTicker items={t.ticker} bgColor="#06B6D4" textColor="#0F172A" />

      {/* Floating Refresh Confirmation Toast */}
      <AnimatePresence>
        {showRefreshToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-slate-900/85 backdrop-blur-xl text-white px-4 py-2 rounded-full shadow-2xl border border-white/20 flex items-center gap-2 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0C831F] animate-ping" />
              <span>⚡ {language === 'hi' ? 'रोजगारX होम पेज रिफ्रेश हो गया' : 'RojgaarX Home Refreshed — Charter & Mission'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOP NAVIGATION TABS: Clean Blinkit Pill Style with Frosted Glass */}
      <div className="sticky top-16 z-30 bg-[#F4F1EA]/85 backdrop-blur-xl py-2 border-b border-stone-300/70">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="bg-[#FAF8F5]/90 backdrop-blur-lg border border-stone-300/80 rounded-2xl p-1.5 shadow-xs flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {tabDefinitions.map((tab) => {
              const isActive = activeTab === tab.id || (tab.id === 'home' && activeTab === 'overview');
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => switchTab(tab.id)}
                  className={`
                    px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer select-none
                    ${
                      isActive
                        ? 'bg-[#0C831F] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }
                  `}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN VIEW AREA: Dedicated per Tab */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6">
        <AnimatePresence mode="wait">
          {/* TAB 0: HOME - CHARTER & MISSION */}
          {(activeTab === 'home' || activeTab === 'overview') && (
            <motion.div
              key={`home-${homeRefreshKey || 0}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectAboutView
                language={language}
                onNavigateTab={(tab) => switchTab(tab)}
                onOpenRegistration={onOpenRegistration}
                onSwitchToWorkerPortal={onSwitchToWorkerPortal}
              />
            </motion.div>
          )}

          {/* TAB 1: WORKERS DIRECTORY & SERVICES (Blinkit Storefront) */}
          {activeTab === 'directory' && (
            <motion.div
              key="directory"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Category selector grid */}
              <ServiceCategoryGrid
                categories={localizedCategoriesList}
                selectedCategoryId={selectedCategoryId}
                onSelectCategory={handleSelectCategory}
                language={language}
              />

              {/* Filter & Search Bar - Frosted Glass Cockpit */}
              <div className="bg-white/80 backdrop-blur-2xl border-2 border-stone-200/90 rounded-3xl p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] space-y-4 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-3.5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {t.filterBar?.federationTitle || 'Federation Service Roster'}
                      </span>
                      <span className="bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 text-[10px] font-black px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                        {filteredWorkers.length} {t.filterBar?.activeRoster || 'Available Near You'}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-black text-slate-950 tracking-tight">
                      {selectedCategoryId
                        ? localizedCategoriesList.find((c) => c.id === selectedCategoryId)?.name || 'Filtered Specialists'
                        : t.filterBar?.filterSpecialists || 'Find Verified Doorstep Specialists'}
                    </h3>
                  </div>

                  {(selectedCategoryId || selectedSector !== 'All Sectors' || searchQuery || quickFilter !== 'all') && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategoryId(null);
                        setSelectedSector('All Sectors');
                        setSearchQuery('');
                        setQuickFilter('all');
                      }}
                      className="text-xs font-black uppercase text-rose-600 hover:text-rose-800 flex items-center gap-1.5 cursor-pointer bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>{t.workerDirectory.resetFilter || 'Reset All Filters'}</span>
                    </button>
                  )}
                </div>

                {/* Search & Sector Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  {/* Search Input */}
                  <div className="sm:col-span-5 relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder={t.filterBar?.searchPlaceholder || "Search by worker name, trade, or skill..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-8 py-2.5 bg-stone-50/90 border border-stone-300 focus:border-emerald-500 rounded-xl text-xs sm:text-sm font-medium outline-none focus:bg-white transition-all shadow-xs"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Sector Cluster Filter */}
                  <div className="sm:col-span-4 relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={selectedSector}
                      onChange={(e) => setSelectedSector(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 bg-stone-50/90 border border-stone-300 focus:border-emerald-500 rounded-xl text-xs sm:text-sm font-medium outline-none focus:bg-white cursor-pointer transition-all shadow-xs"
                    >
                      <option value="All Sectors">{t.filterBar?.allSectors || 'All Sectors'}</option>
                      {SECTORS.map((sector) => (
                        <option key={sector} value={sector}>
                          {sector}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Switch to Radar Button */}
                  <div className="sm:col-span-3">
                    <button
                      type="button"
                      onClick={() => switchTab('radar')}
                      className="w-full h-full py-2.5 px-4 bg-slate-950 hover:bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[2px_2px_0px_#000000]"
                    >
                      <Radar className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                      <span>{language === 'hi' ? 'दूरी रडार देखें' : 'Proximity Radar'}</span>
                    </button>
                  </div>
                </div>

                {/* Quick Filter Chips (Frosted Glass Style) */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 shrink-0 mr-1">
                    Quick Filters:
                  </span>
                  {[
                    { id: 'all', label: 'All Specialists' },
                    { id: 'topRated', label: '⭐ Top Rated (4.8+)' },
                    { id: 'nearest', label: '⚡ Nearest (< 2 km)' },
                    { id: 'affordable', label: '₹ Under ₹300/hr' },
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => setQuickFilter(chip.id as any)}
                      className={`
                        px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer backdrop-blur-md
                        ${
                          quickFilter === chip.id
                            ? 'bg-slate-950 text-white shadow-[1px_1px_0px_#000000]'
                            : 'bg-stone-100/90 hover:bg-stone-200/80 text-slate-700 border border-stone-300/80'
                        }
                      `}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Search Context Indicator */}
              {searchQuery.trim() && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-[#0C831F] text-white flex items-center justify-center shrink-0">
                      <Search className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {language === 'hi' ? `"${searchQuery}" के परिणाम` : `Search Results for "${searchQuery}"`}
                      </p>
                      <p className="text-[11px] text-emerald-800 font-medium">
                        {filteredWorkers.length === 1
                          ? (language === 'hi' ? '1 प्रमाणित कारीगर उपलब्ध' : '1 verified artisan available')
                          : (language === 'hi' ? `${filteredWorkers.length} प्रमाणित कारीगर उपलब्ध` : `${filteredWorkers.length} verified artisans available`)}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-emerald-300 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <X className="w-3.5 h-3.5 text-slate-500" />
                    <span>{language === 'hi' ? 'खोज हटाएं' : 'Clear Search'}</span>
                  </button>
                </div>
              )}

              {/* Workers Grid with Blinkit-styled cards & Loading Animation */}
              <AnimatePresence mode="wait">
                {isLoadingWorkers ? (
                  <motion.div
                    key="skeleton-roster"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <WorkerCardSkeleton key={`skeleton-${idx}`} />
                    ))}
                  </motion.div>
                ) : filteredWorkers.length > 0 ? (
                  <motion.div
                    key="active-workers-roster"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {filteredWorkers.map((worker) => (
                      <WorkerProfileCard
                        key={worker.id}
                        worker={worker}
                        onBookWorker={handleBookWorker}
                        onViewDetails={handleViewWorkerDetails}
                        onRateWorker={handleOpenFeedback}
                        language={language}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-roster"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-10 bg-white/90 border border-slate-200/90 rounded-2xl text-center space-y-3 shadow-xs"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center mx-auto">
                      <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      {t.workerDirectory.noWorkersFound || 'No Specialists Matching Filters'}
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Try clearing your search query or selecting "All Sectors" to see specialists across the entire cooperative federation.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategoryId(null);
                        setSelectedSector('All Sectors');
                        setSearchQuery('');
                        setQuickFilter('all');
                      }}
                      className="px-4 py-2 bg-[#0C831F] text-white rounded-xl text-xs font-bold hover:bg-[#0A6C19] transition-colors inline-block cursor-pointer shadow-xs"
                    >
                      Reset Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* TAB 2: MULTI-SKILL COMBOS (Super Saver Bundles) */}
          {activeTab === 'combos' && (
            <motion.div
              key="combos"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <ExpertSection
                comboExperts={localizedCombosList}
                onBookCombo={handleBookCombo}
                onViewWorkerDetails={handleViewComboDetails}
                language={language}
              />
            </motion.div>
          )}

          {/* TAB 3: PROXIMITY RADAR */}
          {activeTab === 'radar' && (
            <motion.div
              key="radar"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <RadiusMeterSection
                workers={localizedWorkersList}
                radiusKm={radiusKm}
                onRadiusChange={setRadiusKm}
                onViewWorkerDetails={handleViewWorkerDetails}
                onBookWorker={handleBookWorker}
                selectedSector={selectedSector}
                language={language}
              />
            </motion.div>
          )}

          {/* TAB 4: BIDDING & TENDERS */}
          {activeTab === 'bidding' && (
            <motion.div
              key="bidding"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <BiddingMarketplace
                tenders={tenders}
                onAddTender={handleAddTender}
                onAddBid={handleAddBid}
                onAwardTender={handleAwardTender}
                userRole={userRole}
                language={language}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        category={activeCategoryForBooking}
        worker={activeWorkerForBooking}
        onBookingConfirmed={onBookConfirmed}
        language={language}
        initialHours={bookingInitialHours}
        initialTimeSlot={bookingInitialSlot}
      />

      {/* Worker Detailed Profile Dossier Modal */}
      <WorkerProfileDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false);
          if (onClearSelectedWorkerFromSearch) {
            onClearSelectedWorkerFromSearch();
          }
        }}
        worker={activeWorkerForDetails}
        onBookWorker={(w, hours, slot) => {
          setIsDetailsModalOpen(false);
          handleBookWorker(w, hours, slot);
        }}
        onOpenFeedbackModal={handleOpenFeedback}
        language={language}
      />

      {/* Worker Rating & Cooperative Feedback Modal */}
      <WorkerFeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        worker={activeWorkerForFeedback}
        onSubmitReview={handleReviewSubmitted}
        language={language}
      />
    </div>
  );
};
