import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortalTab, LanguageCode, BookingDetails, JobRadarRequest, UserRegistration, WorkerProfile } from './types';
import { Navigation } from './components/Navigation';
import { MarketplaceView, MarketplaceTab } from './components/marketplace/MarketplaceView';
import { WorkerPortalView } from './components/worker/WorkerPortalView';
import { AdminPortalView } from './components/admin/AdminPortalView';
import { RegistrationModal } from './components/common/RegistrationModal';
import { MobileBottomNav } from './components/navigation/MobileBottomNav';
import { INITIAL_RADAR_JOBS, CITIES, SECTORS } from './data/mockData';
import { ShieldCheck, HeartHandshake, Zap, Award } from 'lucide-react';
import { getTranslation } from './utils/translations';
import { RojgaarXLogo } from './components/common/RojgaarXLogo';
import { TopProgressBar } from './components/common/TopProgressBar';
import { ScrollToTopButton } from './components/common/ScrollToTopButton';

export default function App() {
  const [currentPortal, setCurrentPortal] = useState<PortalTab>('marketplace');
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState<MarketplaceTab>('home');
  const [homeRefreshKey, setHomeRefreshKey] = useState<number>(0);
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [selectedCity, setSelectedCity] = useState<string>(CITIES[0]);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  // Global top-bar search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorkerFromSearch, setSelectedWorkerFromSearch] = useState<WorkerProfile | null>(null);

  const t = getTranslation(language);

  // User registration state: employer or employee
  const [registeredUser, setRegisteredUser] = useState<UserRegistration | null>({
    role: 'employer',
    name: 'Vikram Mehta',
    phone: '+91 98765 43210',
    email: 'vikram.mehta@example.com',
    city: 'Noida (Sector 62 Cluster)',
    sector: 'Sector 62 / Electronic City',
    entityType: 'Individual Household',
    primaryRequirement: 'General Home Maintenance & Electricians',
  });

  // Global bookings and live radar requests
  const [bookings, setBookings] = useState<BookingDetails[]>([]);
  const [radarJobs, setRadarJobs] = useState<JobRadarRequest[]>(INITIAL_RADAR_JOBS);

  const handleRegistrationComplete = (registration: UserRegistration) => {
    setRegisteredUser(registration);
    setIsRegistrationModalOpen(false);
  };

  const handleBookingConfirmed = (newBooking: BookingDetails) => {
    setBookings((prev) => [newBooking, ...prev]);

    // Also dispatch an incoming radar job to worker view to show real-time cooperative dispatch
    const simulatedJob: JobRadarRequest = {
      id: `radar-auto-${Date.now()}`,
      title: newBooking.serviceCategory,
      trade: newBooking.serviceCategory,
      serviceCategoryId: 'general-services',
      customerName: newBooking.customerName,
      location: newBooking.address,
      sector: newBooking.sector,
      distanceKm: 1.4,
      payout: newBooking.totalEstimated,
      urgency: newBooking.urgency.includes('Emergency') ? 'Emergency' : 'Standard',
      scheduledTime: `${newBooking.date} • ${newBooking.timeSlot}`,
      description: `${newBooking.serviceCategory} booking for ${newBooking.bookingHours || 2} hours.`,
      timestamp: 'Just now',
      status: 'incoming',
    };

    setRadarJobs((prev) => [simulatedJob, ...prev]);
  };

  const handleAcceptJob = (jobId: string) => {
    setRadarJobs((prev) =>
      prev.map((job) => (job.id === jobId ? { ...job, status: 'accepted' } : job))
    );
  };

  const handleDeclineJob = (jobId: string) => {
    setRadarJobs((prev) =>
      prev.map((job) => (job.id === jobId ? { ...job, status: 'declined' } : job))
    );
  };

  const handleSimulateNewJob = () => {
    const demoTrades = [
      { trade: 'Emergency Plumber', payout: 650, sector: 'Sector 62 / Electronic City' },
      { trade: 'Master Electrician', payout: 550, sector: 'Sector 18 / Atta Market' },
      { trade: 'Deep House Cleaning', payout: 800, sector: 'Sector 50 / Central Noida' },
      { trade: 'Carpenter & Woodwork', payout: 700, sector: 'Sector 128 / Wish Town' },
    ];
    const picked = demoTrades[Math.floor(Math.random() * demoTrades.length)];

    const simulatedJob: JobRadarRequest = {
      id: `radar-${Date.now()}`,
      title: picked.trade,
      serviceCategoryId: 'simulated-cat',
      customerName: 'Aarav Sharma',
      trade: picked.trade,
      location: `Flat 202, Pocket B, ${picked.sector}`,
      sector: picked.sector,
      distanceKm: parseFloat((Math.random() * 3 + 1).toFixed(1)),
      payout: picked.payout,
      urgency: 'Emergency',
      scheduledTime: 'Immediate (Next 30 mins)',
      description: 'Customer requested emergency assistance via RojgaarX platform.',
      timestamp: 'Just now',
      status: 'incoming',
    };

    setRadarJobs((prev) => [simulatedJob, ...prev]);
  };

  const [selectedCategoryFromSearch, setSelectedCategoryFromSearch] = useState<string | null>(null);

  // Logo click resets to Home (Charter & Mission) and refreshes state
  const handleLogoClick = () => {
    setCurrentPortal('marketplace');
    setActiveMarketplaceTab('home');
    setSearchQuery('');
    setSelectedWorkerFromSearch(null);
    setSelectedCategoryFromSearch(null);
    setHomeRefreshKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectWorkerFromTopBar = (worker: WorkerProfile) => {
    setSelectedWorkerFromSearch(worker);
    setCurrentPortal('marketplace');
    setActiveMarketplaceTab('directory');
  };

  const handleSelectCategoryFromTopBar = (categoryId: string) => {
    setSelectedCategoryFromSearch(categoryId);
    setCurrentPortal('marketplace');
    setActiveMarketplaceTab('directory');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-slate-900 pb-16 md:pb-0">
      {/* Top Header Navigation with Blinkit Design & Global Search */}
      <Navigation
        currentPortal={currentPortal}
        onPortalChange={setCurrentPortal}
        language={language}
        onLanguageChange={setLanguage}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        activeOrdersCount={bookings.length}
        onOpenRegistration={() => setIsRegistrationModalOpen(true)}
        registeredUser={registeredUser}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectWorker={handleSelectWorkerFromTopBar}
        onSelectCategory={handleSelectCategoryFromTopBar}
        onLogoClick={handleLogoClick}
        onSwitchToDirectory={() => {
          setCurrentPortal('marketplace');
          setActiveMarketplaceTab('directory');
        }}
      />

      {/* Ultra-smooth top progress bar on portal / tab changes */}
      <TopProgressBar triggerKey={`${currentPortal}-${activeMarketplaceTab}-${homeRefreshKey}`} />

      {/* Main View Portals with Animated Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPortal === 'marketplace' && (
            <motion.div
              key="marketplace"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <MarketplaceView
                language={language}
                selectedCity={selectedCity}
                onBookConfirmed={handleBookingConfirmed}
                onSwitchToWorkerPortal={() => setCurrentPortal('worker')}
                onOpenRegistration={() => setIsRegistrationModalOpen(true)}
                userRole={registeredUser?.role || 'employer'}
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                activeMarketplaceTab={activeMarketplaceTab}
                onMarketplaceTabChange={setActiveMarketplaceTab}
                selectedWorkerFromSearch={selectedWorkerFromSearch}
                onClearSelectedWorkerFromSearch={() => setSelectedWorkerFromSearch(null)}
                selectedCategoryFromSearch={selectedCategoryFromSearch}
                onClearSelectedCategoryFromSearch={() => setSelectedCategoryFromSearch(null)}
                homeRefreshKey={homeRefreshKey}
              />
            </motion.div>
          )}

          {currentPortal === 'worker' && (
            <motion.div
              key="worker"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkerPortalView
                jobs={radarJobs}
                onAcceptJob={handleAcceptJob}
                onDeclineJob={handleDeclineJob}
                onSimulateNewJob={handleSimulateNewJob}
                language={language}
              />
            </motion.div>
          )}

          {currentPortal === 'admin' && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <AdminPortalView language={language} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating smooth scroll to top button */}
      <ScrollToTopButton />

      {/* Mobile Sticky Bottom Navigation (Blinkit Style) */}
      <MobileBottomNav
        currentPortal={currentPortal}
        onPortalChange={setCurrentPortal}
        activeMarketplaceTab={activeMarketplaceTab}
        onMarketplaceTabChange={setActiveMarketplaceTab}
        activeOrdersCount={bookings.length}
        language={language}
      />

      {/* Registration Modal (Employer vs Employee) */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onRegisterSuccess={handleRegistrationComplete}
        language={language}
      />

      {/* Global Footer (Dark Obsidian & Frosted Glass Cooperative Theme) */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 via-[#0B111E] to-black text-slate-200 mt-12 relative overflow-hidden">
        {/* Ambient Glow Orbs for Frosted Refraction */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Upper Footer Ribbon */}
        <div className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl py-6 px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <RojgaarXLogo size="lg" theme="dark" />
              <div className="hidden sm:block pl-3 border-l border-white/15">
                <span className="text-[11px] font-bold text-amber-400/90 block uppercase tracking-wider">
                  Smart India Hackathon • SIH 26089
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Cooperative Federation • Dignity of Labor
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="bg-emerald-500/15 backdrop-blur-md text-emerald-300 border border-emerald-400/30 px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                0% Middleman Cut
              </span>
              <span className="bg-cyan-500/15 backdrop-blur-md text-cyan-300 border border-cyan-400/30 px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                100% Direct Payout
              </span>
              <span className="bg-blue-500/15 backdrop-blur-md text-blue-300 border border-blue-400/30 px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                e-Shram Verified
              </span>
            </div>
          </div>
        </div>

        {/* Lower Footer Details with Frosted Glass Panels */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs relative z-10">
          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all space-y-2.5">
            <h5 className="font-display font-black text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              Cooperative Principle
            </h5>
            <p className="text-slate-300 font-medium leading-relaxed">
              Unlike corporate gig aggregators extracting 25–35% cuts, RojgaarX returns 100% of the service fee directly to verified artisans with an automatic 5% welfare pension contribution.
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all space-y-2.5">
            <h5 className="font-display font-black text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              Quick Portals
            </h5>
            <ul className="space-y-2 font-semibold text-slate-300">
              <li>
                <button
                  onClick={() => {
                    setCurrentPortal('marketplace');
                    setActiveMarketplaceTab('directory');
                  }}
                  className="hover:text-cyan-300 transition-all cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>Services & Artisans</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPortal('worker')}
                  className="hover:text-cyan-300 transition-all cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>Worker Live Radar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPortal('admin')}
                  className="hover:text-cyan-300 transition-all cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>Admin Allocation Panel</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all space-y-2.5">
            <h5 className="font-display font-black text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Compliance & Safety
            </h5>
            <ul className="space-y-1.5 text-slate-300 font-medium">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Multi-State Cooperative Societies Act (MSCS)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                National Social Security Board
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                PM-JAY & ESIC Healthcare Integration
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Skill Qualification Framework (NSQF)
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all space-y-3">
            <h5 className="font-display font-black text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Federation Dispatch & Support
            </h5>
            <div className="space-y-1 text-slate-300">
              <p className="flex items-center justify-between">
                <span>24x7 Toll-Free:</span>
                <strong className="text-amber-300 font-mono text-xs">1800-419-ROJGAAR</strong>
              </p>
              <p className="flex items-center justify-between">
                <span>Emergency Helpline:</span>
                <strong className="text-emerald-400 font-mono text-xs">112</strong>
              </p>
            </div>
            <div className="p-3 bg-gradient-to-br from-emerald-950/60 to-slate-900/80 backdrop-blur-md border border-emerald-400/30 rounded-xl text-[11px] font-semibold text-emerald-300 shadow-[0_0_15px_rgba(12,131,31,0.15)] flex items-start gap-2">
              <span className="text-emerald-400 text-sm">✓</span>
              <span>Verified Rapid Safety Oversight & Fair Price Guarantee on Every Job</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-white/10 bg-black/60 backdrop-blur-md py-4 text-center text-xs font-medium text-slate-400 relative z-10">
          RojgaarX © 2026 • Built for Smart India Hackathon (SIH 26089) • Owned by the Labourers of India.
        </div>
      </footer>
    </div>
  );
}
