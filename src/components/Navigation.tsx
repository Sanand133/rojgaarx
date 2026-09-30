import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  X,
  MapPin,
  Globe,
  ShoppingBag,
  Radar,
  Building,
  UserPlus,
  Briefcase,
  HardHat,
  PhoneCall,
  Menu,
  Star,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortalTab, LanguageCode, UserRegistration, WorkerProfile, ServiceCategory } from '../types';
import { CITIES, WORKER_PROFILES, SERVICE_CATEGORIES, COMBO_EXPERTS } from '../data/mockData';
import { getTranslation } from '../utils/translations';
import { getLocalizedWorkers, getLocalizedCategories } from '../utils/localizedData';
import { workerMatchesSearch, categoryMatchesSearch } from '../utils/searchUtils';
import { RojgaarXLogo } from './common/RojgaarXLogo';

interface NavigationProps {
  currentPortal: PortalTab;
  onPortalChange: (portal: PortalTab) => void;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  activeOrdersCount: number;
  onOpenRegistration?: () => void;
  registeredUser?: UserRegistration | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectWorker?: (worker: WorkerProfile) => void;
  onSelectCategory?: (categoryId: string) => void;
  onLogoClick?: () => void;
  onSwitchToDirectory?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPortal,
  onPortalChange,
  language,
  onLanguageChange,
  selectedCity,
  onCityChange,
  activeOrdersCount,
  onOpenRegistration,
  registeredUser,
  searchQuery,
  onSearchChange,
  onSelectWorker,
  onSelectCategory,
  onLogoClick,
  onSwitchToDirectory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktopSearchFocused, setIsDesktopSearchFocused] = useState(false);
  const [isMobileSearchFocused, setIsMobileSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);
  const t = getTranslation(language);

  // Localized lists for search lookup
  const localizedWorkers = getLocalizedWorkers(WORKER_PROFILES, language);
  const localizedCategories = getLocalizedCategories(SERVICE_CATEGORIES, language);

  // Quick suggestion chips with structured icons
  const quickSuggestions = [
    { icon: '⚡', label: language === 'hi' ? 'इलेक्ट्रीशियन' : 'Electrician', query: 'Electrician' },
    { icon: '🔧', label: language === 'hi' ? 'प्लंबर' : 'Plumber', query: 'Plumber' },
    { icon: '👨‍🍳', label: language === 'hi' ? 'शेफ / कुक' : 'Chef / Cook', query: 'Chef' },
    { icon: '🧹', label: language === 'hi' ? 'डीप क्लीनिंग' : 'Cleaning', query: 'Cleaning' },
    { icon: '👶', label: language === 'hi' ? 'नैनी / दाई' : 'Nanny', query: 'Nanny' },
    { icon: '🔨', label: language === 'hi' ? 'बढ़ई / कारपेंटर' : 'Carpenter', query: 'Carpenter' },
    { icon: '🧱', label: language === 'hi' ? 'राजमिस्त्री' : 'Mason', query: 'Mason' },
    { icon: '🎨', label: language === 'hi' ? 'पेंटर' : 'Painter', query: 'Painter' },
  ];

  // Filtered workers based on top bar search
  const searchResultsWorkers = searchQuery.trim()
    ? localizedWorkers
        .filter((w) => workerMatchesSearch(w, searchQuery, localizedCategories))
        .slice(0, 6)
    : [];

  // Filtered categories
  const searchResultsCategories = searchQuery.trim()
    ? localizedCategories
        .filter((c) => categoryMatchesSearch(c, searchQuery))
        .slice(0, 4)
    : [];

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsDesktopSearchFocused(false);
      }
      if (
        mobileSearchContainerRef.current &&
        !mobileSearchContainerRef.current.contains(e.target as Node)
      ) {
        setIsMobileSearchFocused(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDesktopSearchFocused(false);
        setIsMobileSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectSuggestion = (query: string) => {
    onSearchChange(query);
    if (currentPortal !== 'marketplace') {
      onPortalChange('marketplace');
    }
    if (onSwitchToDirectory) {
      onSwitchToDirectory();
    }
    setIsDesktopSearchFocused(false);
    setIsMobileSearchFocused(false);
  };

  const handleSelectWorkerFromDropdown = (worker: WorkerProfile) => {
    if (onSelectWorker) {
      onSelectWorker(worker);
    }
    if (currentPortal !== 'marketplace') {
      onPortalChange('marketplace');
    }
    if (onSwitchToDirectory) {
      onSwitchToDirectory();
    }
    setIsDesktopSearchFocused(false);
    setIsMobileSearchFocused(false);
  };

  const handleSelectCategoryFromDropdown = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    onSearchChange('');
    if (currentPortal !== 'marketplace') {
      onPortalChange('marketplace');
    }
    if (onSwitchToDirectory) {
      onSwitchToDirectory();
    }
    setIsDesktopSearchFocused(false);
    setIsMobileSearchFocused(false);
  };

  const handleSearchSubmit = () => {
    if (currentPortal !== 'marketplace') {
      onPortalChange('marketplace');
    }
    if (onSwitchToDirectory) {
      onSwitchToDirectory();
    }
    setIsDesktopSearchFocused(false);
    setIsMobileSearchFocused(false);
  };

  const portals: { id: PortalTab; label: string; icon: React.ReactNode }[] = [
    {
      id: 'marketplace',
      label: t.nav.marketplace,
      icon: <ShoppingBag className="w-3.5 h-3.5" />,
    },
    {
      id: 'worker',
      label: t.nav.workerPortal,
      icon: <Radar className="w-3.5 h-3.5" />,
    },
    {
      id: 'admin',
      label: t.nav.adminPanel,
      icon: <Building className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F4F1EA]/90 backdrop-blur-xl border-b border-stone-300/70 shadow-xs transition-all">
      {/* Blinkit-Style Top Ticker Banner */}
      <div className="bg-slate-950 text-white px-3 sm:px-6 py-1 flex items-center justify-between text-[11px] font-bold border-b border-white/10">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-flex items-center gap-1.5 bg-[#0C831F] text-white px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wide shrink-0 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            15-25 Mins Doorstep
          </span>
          <span className="truncate text-slate-200">
            ⚡ {t.nav.topBanner || 'Direct Cooperative Dispatch at Doorstep • 0% Middleman Cut'}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-[10px] text-slate-300 font-semibold shrink-0">
          <span className="text-emerald-400 font-bold">• 100% Direct Payout to Artisans</span>
          <span>• Govt e-Shram & Skill India Verified</span>
          <span className="bg-gradient-to-r from-[#FF5500] to-amber-500 text-black px-2.5 py-0.5 rounded-full font-black text-[9px] shadow-xs">
            SIH 26089
          </span>
        </div>
      </div>

      {/* Desktop & Tablet Main Header Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand & Delivery Location Indicator (Blinkit style) */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (onLogoClick) {
                onLogoClick();
              } else {
                onPortalChange('marketplace');
              }
            }}
            className="cursor-pointer select-none group"
            title="Click to refresh Home Page"
          >
            <RojgaarXLogo size="md" />
          </motion.div>

          {/* Blinkit-Style Location Pill (Compact on Tablet/Laptop so Search Bar Has Priority) */}
          <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-slate-200 text-xs shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-black text-slate-900 text-xs leading-none">15-25 Mins</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C831F] animate-pulse" />
              </div>
              <div className="flex items-center gap-1 text-slate-600 font-medium mt-0.5">
                <MapPin className="w-3 h-3 text-[#0C831F] shrink-0" />
                <select
                  value={selectedCity}
                  onChange={(e) => onCityChange(e.target.value)}
                  className="bg-transparent text-[11px] font-bold text-slate-700 outline-none cursor-pointer hover:text-slate-900 transition-colors max-w-[130px] xl:max-w-[160px] truncate"
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c.includes('(') ? c.split('(')[0].trim() : c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Global Desktop Search Bar (Blinkit Style with Guaranteed Minimum Width & Room) */}
        <div ref={searchContainerRef} className="hidden md:flex flex-1 min-w-[280px] lg:min-w-[340px] xl:min-w-[420px] max-w-2xl relative mx-2 lg:mx-3">
          <div className="w-full relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value;
                onSearchChange(val);
                if (currentPortal !== 'marketplace') {
                  onPortalChange('marketplace');
                }
                if (val.trim() && onSwitchToDirectory) {
                  onSwitchToDirectory();
                }
              }}
              onFocus={() => setIsDesktopSearchFocused(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
              placeholder={
                language === 'hi'
                  ? 'इलेक्ट्रीशियन, प्लंबर, शेफ, क्लीनिंग, नैनी खोजें...'
                  : "Search 'electrician', 'plumber', 'chef', 'cleaning'..."
              }
              className="w-full pl-10 pr-9 py-2.5 bg-white hover:bg-slate-50 focus:bg-white border-2 border-stone-300 focus:border-[#0C831F] rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSearchChange('');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Live Search Interactive Dropdown - Guaranteed Wide Form Factor */}
          <AnimatePresence>
            {isDesktopSearchFocused && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-2 w-full min-w-[340px] sm:min-w-[460px] lg:min-w-[520px] max-w-[92vw] bg-white/98 backdrop-blur-2xl border-2 border-stone-300 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-slate-100 max-h-[460px] overflow-y-auto"
              >
                {/* When Query is empty: Trending Categories & Structured Quick Chips Grid */}
                {!searchQuery.trim() && (
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                      <span className="flex items-center gap-1.5 font-extrabold text-slate-800 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>{language === 'hi' ? 'लोकप्रिय सेवाएं (Trending)' : 'Trending Service Searches'}</span>
                      </span>
                      <span className="text-[10px] text-[#0C831F] font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 text-[#0C831F]" />
                        <span>15-25 min arrival</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {quickSuggestions.map((item) => (
                        <button
                          key={item.query}
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault();
                            handleSelectSuggestion(item.query);
                          }}
                          className="px-2.5 py-2 rounded-xl bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 hover:text-[#0C831F] border border-stone-200 text-xs font-bold text-slate-700 transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 group text-left"
                        >
                          <span className="text-base shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                          <span className="truncate">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* When Query has matches: Workers List */}
                {searchQuery.trim() && searchResultsWorkers.length > 0 && (
                  <div className="p-3 space-y-1.5">
                    <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>Specialist Artisans ({searchResultsWorkers.length})</span>
                      <span className="text-[10px] text-[#0C831F] font-semibold">0% Platform Cut</span>
                    </div>
                    {searchResultsWorkers.map((worker) => (
                      <div
                        key={worker.id}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelectWorkerFromDropdown(worker);
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between gap-3 cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={worker.avatarUrl}
                            alt={worker.name}
                            className="w-11 h-11 rounded-xl object-cover border border-slate-200 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-sm text-slate-900 truncate">
                                {language === 'hi' && worker.hindiName ? worker.hindiName : worker.name}
                              </span>
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-md shrink-0 flex items-center gap-0.5">
                                <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                                <span>{worker.rating.toFixed(1)}</span>
                              </span>
                            </div>
                            <div className="text-xs text-slate-500 truncate flex items-center gap-1.5 mt-0.5">
                              <span className="font-semibold text-slate-700">{worker.trade}</span>
                              <span>•</span>
                              <span>{worker.distanceKm} km away</span>
                              <span>•</span>
                              <span className="text-slate-400">{worker.experienceYears}y exp</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          <div className="text-right">
                            <span className="font-black text-sm text-slate-900">
                              ₹{worker.hourlyWage}
                            </span>
                            <span className="text-[10px] text-slate-500 block font-medium">/hr</span>
                          </div>
                          <span className="px-3 py-1.5 rounded-xl bg-[#0C831F] text-white text-xs font-bold hover:bg-[#0A6C19] transition-colors shadow-xs">
                            View
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* When Query has matching Categories */}
                {searchQuery.trim() && searchResultsCategories.length > 0 && (
                  <div className="p-3 space-y-1.5">
                    <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Service Categories
                    </div>
                    {searchResultsCategories.map((cat) => (
                      <div
                        key={cat.id}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelectCategoryFromDropdown(cat.id);
                        }}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <span className="font-bold text-sm text-slate-800">{cat.name}</span>
                          <span className="text-xs text-slate-500 block">{cat.tagline}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                )}

                {/* If no match */}
                {searchQuery.trim() &&
                  searchResultsWorkers.length === 0 &&
                  searchResultsCategories.length === 0 && (
                    <div className="p-6 text-center text-slate-500 text-sm space-y-3">
                      <p className="font-bold text-slate-800">
                        No specialists found for "{searchQuery}"
                      </p>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto">
                        Try searching for 'Electrician', 'Plumber', 'Chef', 'Cleaning' or 'Carpenter'.
                      </p>
                      <div className="flex flex-wrap gap-1.5 justify-center pt-1">
                        {quickSuggestions.slice(0, 4).map((s) => (
                          <button
                            key={s.query}
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleSelectSuggestion(s.query);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 text-xs font-bold text-slate-700 hover:text-[#0C831F] transition-colors"
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                {/* View All Matching Results Footer Button */}
                {searchQuery.trim() && (
                  <div className="p-2.5 bg-slate-50 border-t border-slate-100">
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSearchSubmit();
                      }}
                      className="w-full py-2.5 px-3.5 bg-[#0C831F] hover:bg-[#0A6C19] text-white rounded-xl text-xs font-black flex items-center justify-between transition-colors shadow-xs cursor-pointer active:translate-y-0.5"
                    >
                      <div className="flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5" />
                        <span>View All Specialists for "{searchQuery}"</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Navigation & Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop Portal Switcher Pills */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
            {portals.map((p) => {
              const isActive = currentPortal === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onPortalChange(p.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer select-none
                    ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }
                  `}
                >
                  {p.icon}
                  <span>{p.label}</span>
                  {p.id === 'marketplace' && activeOrdersCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-[#0C831F] text-white text-[10px] rounded-full font-extrabold">
                      {activeOrdersCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Language Selector Pill */}
          <div className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200/60 border border-slate-200 rounded-xl px-2 py-1 text-xs font-bold transition-colors">
            <Globe className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
              className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="hi">हिंदी (HI)</option>
              <option value="ta">தமிழ் (TA)</option>
              <option value="mr">मराठी (MR)</option>
            </select>
          </div>

          {/* Register / Profile Button */}
          {onOpenRegistration && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenRegistration}
              className={`
                hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-colors shadow-xs
                ${
                  registeredUser
                    ? 'bg-emerald-50 text-[#0C831F] border-emerald-200 hover:bg-emerald-100'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                }
              `}
            >
              {registeredUser ? (
                <>
                  {registeredUser.role === 'employer' ? (
                    <Briefcase className="w-3.5 h-3.5 text-[#0C831F]" />
                  ) : (
                    <HardHat className="w-3.5 h-3.5 text-[#0C831F]" />
                  )}
                  <span className="truncate max-w-[90px]">
                    {registeredUser.name.split(' ')[0]}
                  </span>
                </>
              ) : (
                <>
                  <UserPlus className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.nav.register}</span>
                </>
              )}
            </motion.button>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dedicated Search Bar (Always visible on mobile!) */}
      <div
        ref={mobileSearchContainerRef}
        className="md:hidden px-3 pb-2.5 pt-0 relative"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              const val = e.target.value;
              onSearchChange(val);
              if (currentPortal !== 'marketplace') {
                onPortalChange('marketplace');
              }
              if (val.trim() && onSwitchToDirectory) {
                onSwitchToDirectory();
              }
            }}
            onFocus={() => setIsMobileSearchFocused(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchSubmit();
              }
            }}
            placeholder={
              language === 'hi'
                ? 'इलेक्ट्रीशियन, प्लंबर, शेफ...'
                : "Search 'electrician', 'chef', 'plumber'..."
            }
            className="w-full pl-9 pr-8 py-2 bg-white border-2 border-stone-300 focus:border-[#0C831F] rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 outline-none shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSearchChange('');
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-400"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Mobile Dropdown Results */}
        <AnimatePresence>
          {isMobileSearchFocused && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-3 right-3 mt-1 bg-white/98 backdrop-blur-xl border-2 border-stone-300 rounded-2xl shadow-2xl overflow-hidden z-50 divide-y divide-slate-100 max-h-[380px] overflow-y-auto"
            >
              {!searchQuery.trim() && (
                <div className="p-3 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                    <span className="flex items-center gap-1 font-extrabold text-slate-800">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>{language === 'hi' ? 'लोकप्रिय सेवाएं' : 'Popular Quick Searches'}</span>
                    </span>
                    <span className="text-[10px] text-[#0C831F] font-bold">15-25m arrival</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {quickSuggestions.map((item) => (
                      <button
                        key={item.query}
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleSelectSuggestion(item.query);
                        }}
                        className="px-2.5 py-1.5 rounded-xl bg-stone-50 border border-stone-200 active:bg-emerald-50 active:border-emerald-300 text-xs font-bold text-slate-700 flex items-center gap-1.5 text-left"
                      >
                        <span className="text-sm shrink-0">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchQuery.trim() && searchResultsWorkers.length > 0 && (
                <div className="p-2 space-y-1">
                  <div className="px-2 py-0.5 text-[10px] font-bold text-slate-400 uppercase">
                    Matching Specialists
                  </div>
                  {searchResultsWorkers.map((worker) => (
                    <div
                      key={worker.id}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectWorkerFromDropdown(worker);
                      }}
                      className="p-2 rounded-xl active:bg-slate-100 flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <img
                          src={worker.avatarUrl}
                          alt={worker.name}
                          className="w-9 h-9 rounded-lg object-cover border border-slate-200 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <div className="font-bold text-xs text-slate-900 truncate">
                            {language === 'hi' && worker.hindiName ? worker.hindiName : worker.name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">
                            {worker.trade} • {worker.distanceKm} km
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-xs text-slate-900 block">₹{worker.hourlyWage}/hr</span>
                        <span className="text-[10px] text-emerald-700 font-bold">★ {worker.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {searchQuery.trim() && searchResultsCategories.length > 0 && (
                <div className="p-2 space-y-1">
                  <div className="px-2 py-0.5 text-[10px] font-bold text-slate-400 uppercase">
                    Matching Categories
                  </div>
                  {searchResultsCategories.map((cat) => (
                    <div
                      key={cat.id}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectCategoryFromDropdown(cat.id);
                      }}
                      className="p-2 rounded-xl active:bg-slate-100 flex items-center justify-between cursor-pointer"
                    >
                      <span className="font-bold text-xs text-slate-800">{cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  ))}
                </div>
              )}

              {/* View All Matching Results Footer Button for Mobile */}
              {searchQuery.trim() && (
                <div className="p-2 bg-slate-50 border-t border-slate-100">
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSearchSubmit();
                    }}
                    className="w-full py-2 px-3 bg-[#0C831F] hover:bg-[#0A6C19] text-white rounded-xl text-xs font-bold flex items-center justify-between transition-colors shadow-xs cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5" />
                      <span>View All for "{searchQuery}"</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white p-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {t.nav.quickPortals}:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {portals.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onPortalChange(p.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    flex items-center justify-between p-3 rounded-xl border text-xs font-bold transition-colors
                    ${
                      currentPortal === p.id
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    {p.icon}
                    <span>{p.label}</span>
                  </div>
                  {p.id === 'marketplace' && activeOrdersCount > 0 && (
                    <span className="px-2 py-0.5 bg-[#0C831F] text-white text-[10px] rounded-full font-bold">
                      {activeOrdersCount} Active
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {onOpenRegistration && (
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  onOpenRegistration();
                  setMobileMenuOpen(false);
                }}
                className="w-full p-2.5 bg-[#06B6D4] hover:bg-[#22D3EE] rounded-xl text-xs font-bold text-slate-950 flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                <span>
                  {registeredUser
                    ? `${t.registrationModal.roleActive}: ${registeredUser.name} (${registeredUser.role})`
                    : t.registrationModal.subtitle}
                </span>
              </button>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600">
            <span>Location: {selectedCity.split(' ')[0]}</span>
            <span>Federation ID: SIH 26089</span>
          </div>
        </div>
      )}
    </header>
  );
};
