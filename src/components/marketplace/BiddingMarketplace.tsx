import React, { useState, useMemo } from 'react';
import {
  Gavel,
  PlusCircle,
  Lock,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  Sparkles,
  MapPin,
  Send,
  ShieldCheck,
  TrendingDown,
  Filter,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Building,
  Star,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TenderPost, TenderBid, LanguageCode } from '../../types';
import { BrutalModal } from '../common/BrutalModal';
import { getTranslation } from '../../utils/translations';
import { getLocalizedTender } from '../../utils/localizedData';

interface BiddingMarketplaceProps {
  tenders: TenderPost[];
  onAddTender: (tender: TenderPost) => void;
  onAddBid: (tenderId: string, bid: TenderBid) => void;
  onAwardTender: (tenderId: string, bidId: string) => void;
  userRole?: 'employer' | 'employee' | 'guest';
  language?: LanguageCode;
}

export const BiddingMarketplace: React.FC<BiddingMarketplaceProps> = ({
  tenders,
  onAddTender,
  onAddBid,
  onAwardTender,
  userRole = 'employer',
  language = 'en',
}) => {
  const t = getTranslation(language);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedTenderForBid, setSelectedTenderForBid] = useState<TenderPost | null>(null);
  const [expandedTenderId, setExpandedTenderId] = useState<string | null>('TND-101'); // Pre-expand popular catering tender

  // Form state for creating a new post
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Event Catering & Decor');
  const [newDescription, setNewDescription] = useState('');
  const [newBudget, setNewBudget] = useState('50000');
  const [newGuests, setNewGuests] = useState('40');
  const [newDate, setNewDate] = useState('Saturday, 12th Sep 2026');
  const [newSector, setNewSector] = useState('Sector 14 / Dwarka');
  const [newAuthor, setNewAuthor] = useState('Sunil Mathur');
  const [newPhone, setNewPhone] = useState('+91 98112 34567');

  // Bid submission state
  const [bidAmount, setBidAmount] = useState('42000');
  const [bidderName, setBidderName] = useState('Shri Balaji Catering Cooperative');
  const [societyName, setSocietyName] = useState('Delhi Shramik Sahakari Samiti');
  const [turnaround, setTurnaround] = useState('Ready 2 hours before event start');
  const [planDescription, setPlanDescription] = useState(
    'Full multi-course meal, live counter, 2 waiters, complete decor with fresh flowers and fairy lights.'
  );

  // Filter categories
  const filterTabs = useMemo(
    () => [
      { id: 'all', label: language === 'hi' ? `सभी टेंडर (${tenders.length})` : `All Tenders (${tenders.length})` },
      {
        id: 'open',
        label:
          language === 'hi'
            ? `ओपन टेंडर (${tenders.filter((t) => t.status === 'Open for Bids').length})`
            : `Open for Bids (${tenders.filter((t) => t.status === 'Open for Bids').length})`,
      },
      {
        id: 'awarded',
        label:
          language === 'hi'
            ? `अवार्डेड (${tenders.filter((t) => t.status === 'Tender Awarded').length})`
            : `Awarded (${tenders.filter((t) => t.status === 'Tender Awarded').length})`,
      },
      { id: 'catering', label: language === 'hi' ? 'केटरिंग व इवेंट्स' : 'Catering & Events' },
      { id: 'guilds', label: language === 'hi' ? 'सोसायटी व महासंघ कार्य' : 'Society RWAs & Guilds' },
    ],
    [tenders, language]
  );

  // Filtered tenders list
  const filteredTenders = useMemo(() => {
    if (selectedFilter === 'all') return tenders;
    if (selectedFilter === 'open') return tenders.filter((t) => t.status === 'Open for Bids');
    if (selectedFilter === 'awarded') return tenders.filter((t) => t.status === 'Tender Awarded');
    if (selectedFilter === 'catering')
      return tenders.filter((t) => /cater|event|party|decor/i.test(t.category + t.title));
    if (selectedFilter === 'guilds')
      return tenders.filter((t) => /society|rwa|guild|waterproof|rewiring|dual-switch/i.test(t.category + t.title));
    return tenders;
  }, [tenders, selectedFilter]);

  // Overall marketplace metrics
  const totalBidsCount = useMemo(
    () => tenders.reduce((acc, t) => acc + (t.bids?.length || 0), 0),
    [tenders]
  );

  const handleCreateTender = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newBudget) return;

    const tender: TenderPost = {
      id: `TND-${Date.now().toString().slice(-4)}`,
      title: newTitle,
      authorName: newAuthor || 'Verified Hirer',
      authorRole: 'Household',
      authorPhone: newPhone || '+91 98765 43210',
      category: newCategory,
      description: newDescription,
      locationSector: newSector,
      guestCount: newGuests ? parseInt(newGuests) : undefined,
      targetBudget: parseInt(newBudget) || 50000,
      postedTime: 'Just now',
      eventDate: newDate,
      status: 'Open for Bids',
      bids: [],
    };

    onAddTender(tender);
    setIsPostModalOpen(false);
    setExpandedTenderId(tender.id);
  };

  const handlePlaceBid = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTenderForBid || !bidAmount) return;

    const newBid: TenderBid = {
      id: `BID-${Date.now().toString().slice(-4)}`,
      tenderId: selectedTenderForBid.id,
      bidderName,
      bidderRole: 'Verified Cooperative Society Guild',
      avatarUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
      societyName,
      federationCode: 'NFLC-DL-BID-99',
      bidAmount: parseInt(bidAmount),
      experienceYears: 10,
      rating: 4.95,
      totalTendersWon: 24,
      proposedTurnaround: turnaround,
      proposedPlan: planDescription,
      inclusions: [
        'Complete equipment and raw materials handled',
        'Cooperative verified workers only',
        'Clean post-job waste segregation and removal',
      ],
      placedAt: 'Just now',
    };

    onAddBid(selectedTenderForBid.id, newBid);
    setSelectedTenderForBid(null);
  };

  return (
    <motion.section
      id="bidding-marketplace"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      {/* Outer Framing Container with Tactile Warm Depth */}
      <div className="bg-[#EAE5DC]/90 border-2 border-stone-300/90 rounded-3xl p-4 sm:p-6 lg:p-7 shadow-sm space-y-6">
        
        {/* Top Hero Banner with Frosted Glass Accents & Glowing Ambience */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/85 text-white border-2 border-black rounded-2xl p-5 sm:p-6 lg:p-7 shadow-[4px_4px_0px_#000000] relative overflow-hidden">
          {/* Frosted / Ambient Spherical Glows */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2.5 max-w-2xl">
              {/* Frosted Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-white/10 backdrop-blur-md text-amber-300 border border-white/20 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <Gavel className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.bidding.badge || 'Cooperative Bulk Tenders & Sealed Bidding'}</span>
                </span>
                <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                  <span>0% Commission • Fair Competitive Bidding</span>
                </span>
                <span className="bg-white/10 backdrop-blur-md text-cyan-300 border border-white/20 text-[10px] font-bold px-2.5 py-1 rounded-full hidden sm:inline-flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>Smart Escrow Protected • Zero Bid Leakage</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {t.bidding.title || 'Direct Sealed Bidding & Bulk Tenders'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                {t.bidding.subtitle ||
                  'Post bulk requirements for party catering, society maintenance, waterproofing, or event setups. Verified cooperative guilds submit private sealed bids with itemized execution plans. You get maximum value with zero broker margins.'}
              </p>
            </div>

            {/* Quick Metrics (Frosted Glass Cards) & CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 justify-between">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center shadow-xs">
                  <div className="text-xl font-black text-amber-400">
                    {tenders.length}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                    Total Tenders
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center shadow-xs">
                  <div className="text-xl font-black text-[#22D3EE]">
                    {totalBidsCount}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                    Sealed Bids
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsPostModalOpen(true)}
                className="px-5 py-3 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-black border-2 border-black transition-all shadow-[3px_3px_0px_#000000] flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
              >
                <PlusCircle className="w-4 h-4 text-black" />
                <span>{t.bidding.postRequirement || 'Post Job Requirement / Tender'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Filter Categories Strip */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Filter:</span>
            </span>
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`
                    px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer select-none
                    ${
                      isSelected
                        ? 'bg-[#06B6D4] text-black font-black border-2 border-black shadow-[2px_2px_0px_#000000] -translate-y-0.5'
                        : 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20'
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sealed Bid Guarantee Banner with Frosted Glass Surface */}
        <div className="bg-white/75 backdrop-blur-md border-2 border-stone-300/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
              <Lock className="w-4 h-4 text-amber-800" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                <span>Private & Sealed Bids Guarantee</span>
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] px-2 py-0.2 rounded-md font-bold">
                  Zero Undercutting
                </span>
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Competing worker guilds cannot see each other's quotes, protecting craftsmanship quality from race-to-the-bottom price cuts. You review all quotes with complete transparency.
              </p>
            </div>
          </div>
          <span className="bg-slate-900 text-white border-2 border-black px-3 py-1.5 rounded-xl text-xs font-black uppercase shrink-0 shadow-[2px_2px_0px_#000000]">
            Smart Escrow Protected
          </span>
        </div>

        {/* Tenders List */}
        <div className="space-y-6">
          {filteredTenders.length === 0 ? (
            <div className="bg-white border-2 border-stone-300 rounded-2xl p-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-300 text-slate-400 flex items-center justify-center mx-auto">
                <Gavel className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-lg text-slate-800">
                No Tenders Found In This Category
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try selecting "All Tenders" or post a new job requirement to invite bids from verified cooperative societies.
              </p>
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 border border-stone-300 text-slate-800 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredTenders.map((rawTender, index) => {
              const tender = getLocalizedTender(rawTender, language);
              const isExpanded = expandedTenderId === tender.id;
              const bidsCount = tender.bids?.length || 0;
              const lowestBid =
                bidsCount > 0 ? Math.min(...tender.bids.map((b) => b.bidAmount)) : null;
              const estimatedSavings =
                lowestBid && tender.targetBudget ? tender.targetBudget - lowestBid : null;
              const isAwarded = tender.status === 'Tender Awarded';

              return (
                <motion.div
                  key={tender.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="bg-white border-2 border-stone-300 hover:border-black rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_rgba(0,0,0,0.06)] hover:shadow-[6px_6px_0px_#06B6D4] transition-all duration-200 overflow-hidden group"
                >
                  {/* Top Federation Ribbon with Status Tag */}
                  <div className="bg-slate-900 text-white px-4 sm:px-6 py-2.5 border-b-2 border-black flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase bg-[#06B6D4] text-black border border-black px-2 py-0.5 rounded-md shadow-xs">
                        {tender.id}
                      </span>
                      <span className="bg-white/10 backdrop-blur-xs text-slate-200 border border-white/20 text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {tender.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isAwarded ? (
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Tender Awarded & Escrow Locked</span>
                        </span>
                      ) : (
                        <span className="bg-cyan-500/20 text-[#22D3EE] border border-cyan-400/40 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                          <span>Open for Bids</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Header: Author, Title, Specifications Chips */}
                  <div className="p-5 sm:p-6 pb-4 space-y-3">
                    <div className="flex items-center justify-between gap-3 text-xs text-slate-500 font-semibold flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-stone-200 text-slate-700 font-black text-[10px] flex items-center justify-center">
                          {tender.authorName.charAt(0)}
                        </div>
                        <span>
                          Posted by <strong className="text-slate-900">{tender.authorName}</strong>
                        </span>
                        <span className="bg-stone-100 text-slate-700 border border-stone-200 text-[10px] font-bold px-2 py-0.2 rounded-md">
                          {tender.authorRole}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>Posted {tender.postedTime}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-cyan-800 transition-colors">
                      {tender.title}
                    </h3>

                    {/* Specifications Row */}
                    <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 flex-wrap">
                      <span className="inline-flex items-center gap-1 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-lg">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{tender.locationSector}</span>
                      </span>

                      {tender.guestCount && (
                        <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-lg">
                          <Users className="w-3.5 h-3.5 text-amber-700" />
                          <span>Party Size: {tender.guestCount} Guests</span>
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-lg">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{tender.eventDate}</span>
                      </span>
                    </div>
                  </div>

                  {/* Tender Scope Dossier Box - High-Comfort Inset Panel */}
                  <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-2xl p-4 sm:p-5 space-y-4 mx-4 sm:mx-6 mb-4">
                    {/* Description Quote */}
                    <div className="bg-white/90 backdrop-blur-xs border border-stone-200/80 p-3.5 rounded-xl border-l-4 border-l-amber-500">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                        Requirement Specifications & Scope:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        "{tender.description}"
                      </p>
                    </div>

                    {/* Financial Comparison & Bids Summary Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="bg-white border border-stone-200/90 p-3 rounded-xl">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">
                          Employer Target Budget
                        </span>
                        <div className="text-lg font-black text-slate-900 mt-0.5">
                          ₹{tender.targetBudget.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400">
                          Pre-allocated benchmark
                        </span>
                      </div>

                      <div className="bg-white border border-stone-200/90 p-3 rounded-xl">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">
                          Confidential Bids
                        </span>
                        <div className="text-lg font-black text-cyan-900 mt-0.5 flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-[#06B6D4]" />
                          <span>{bidsCount} Sealed Quotes</span>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-400">
                          {bidsCount > 0 ? 'From verified guilds' : 'Awaiting proposals'}
                        </span>
                      </div>

                      <div className="bg-white border border-stone-200/90 p-3 rounded-xl">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">
                          Best Available Quote
                        </span>
                        <div className="text-lg font-black text-[#0C831F] mt-0.5">
                          {lowestBid ? `₹${lowestBid.toLocaleString('en-IN')}` : 'Evaluating'}
                        </div>
                        <span className="text-[10px] font-bold text-emerald-800">
                          {estimatedSavings && estimatedSavings > 0
                            ? `✓ Save ₹${estimatedSavings.toLocaleString('en-IN')} under budget`
                            : '0% Middleman markup'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t-2 border-stone-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-600">
                        Status:{' '}
                        <strong className="text-slate-900 uppercase">{tender.status}</strong>
                      </span>
                      {tender.awardedBidId && (
                        <span className="bg-emerald-100 text-[#0C831F] border border-emerald-300 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
                          ✓ Awarded
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      {!isAwarded && (
                        <button
                          type="button"
                          onClick={() => setSelectedTenderForBid(tender)}
                          className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-stone-100 border-2 border-stone-300 hover:border-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] cursor-pointer active:translate-y-0.5"
                        >
                          <Send className="w-3.5 h-3.5 text-cyan-600" />
                          <span>Submit Cooperative Bid</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => setExpandedTenderId(isExpanded ? null : tender.id)}
                        className={`
                          px-4 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer active:translate-y-0.5 border-2 border-black
                          ${
                            isExpanded
                              ? 'bg-slate-900 text-white shadow-[2px_2px_0px_#000000]'
                              : 'bg-[#06B6D4] hover:bg-[#22D3EE] text-black shadow-[2px_2px_0px_#000000]'
                          }
                        `}
                      >
                        <span>
                          {isExpanded
                            ? 'Hide Sealed Bids'
                            : `View ${bidsCount} Confidential Bids`}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Confidential Bids Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 sm:p-6 bg-[#FAF8F5] border-t-2 border-stone-300 space-y-4"
                      >
                        {/* Frosted Glass Bids Header */}
                        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 text-white p-4 rounded-2xl border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_#000000]">
                          <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-amber-400" />
                            <div>
                              <h4 className="font-display font-black text-xs sm:text-sm uppercase text-white">
                                Confidential Sealed Bids for "{tender.title}"
                              </h4>
                              <p className="text-[11px] text-slate-300">
                                Reviewed directly by employer • Ranked by cooperative rating and transparent value
                              </p>
                            </div>
                          </div>
                          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-slate-200 px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
                            <ShieldCheck className="w-3 h-3 text-cyan-400" />
                            <span>Encrypted Employer Review</span>
                          </span>
                        </div>

                        {bidsCount === 0 ? (
                          <div className="bg-white border-2 border-stone-300 rounded-xl p-8 text-center space-y-2">
                            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-slate-400">
                              <Lock className="w-5 h-5" />
                            </div>
                            <h5 className="font-bold text-sm text-slate-800">
                              No Bids Submitted Yet
                            </h5>
                            <p className="text-xs text-slate-500 max-w-sm mx-auto">
                              Local worker cooperatives within 10km have received notifications and are formulating itemized quotes.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {tender.bids.map((bid) => {
                              const isWinner = tender.awardedBidId === bid.id;
                              const isLowest =
                                lowestBid !== null && bid.bidAmount === lowestBid;
                              const bidSavings = tender.targetBudget - bid.bidAmount;

                              return (
                                <div
                                  key={bid.id}
                                  className={`
                                    rounded-2xl p-4 sm:p-5 transition-all space-y-4
                                    ${
                                      isWinner
                                        ? 'bg-emerald-50/70 border-2 border-[#0C831F] shadow-[4px_4px_0px_#0C831F]'
                                        : 'bg-white border-2 border-stone-300 hover:border-black shadow-[3px_3px_0px_rgba(0,0,0,0.06)] hover:shadow-[5px_5px_0px_#06B6D4]'
                                    }
                                  `}
                                >
                                  {/* Bid Profile Header & Proposed Quote */}
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
                                    <div className="flex items-start sm:items-center gap-3.5">
                                      <img
                                        src={bid.avatarUrl}
                                        alt={bid.bidderName}
                                        className="w-12 h-12 rounded-xl border-2 border-stone-300 object-cover shrink-0 shadow-xs"
                                        referrerPolicy="no-referrer"
                                      />
                                      <div className="space-y-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <span className="font-display font-black text-base text-slate-900">
                                            {bid.bidderName}
                                          </span>
                                          {isLowest && (
                                            <span className="bg-[#22D3EE] text-black border border-black px-2 py-0.2 text-[10px] font-black uppercase rounded-md shadow-xs">
                                              Lowest Bid
                                            </span>
                                          )}
                                          {isWinner && (
                                            <span className="bg-[#0C831F] text-white border border-black px-2 py-0.2 text-[10px] font-black uppercase rounded-md shadow-xs flex items-center gap-1">
                                              <Check className="w-3 h-3" />
                                              <span>Awarded Winner</span>
                                            </span>
                                          )}
                                        </div>

                                        <div className="text-xs text-slate-600 font-medium flex items-center gap-2 flex-wrap">
                                          <span className="flex items-center gap-1">
                                            <Building className="w-3.5 h-3.5 text-slate-400" />
                                            <span>{bid.societyName}</span>
                                          </span>
                                          <span>•</span>
                                          <span className="flex items-center gap-1 text-amber-900 font-bold bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                            <span>{bid.rating}</span>
                                          </span>
                                          <span>•</span>
                                          <span className="text-slate-500">
                                            {bid.totalTendersWon} tenders completed
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Quote Box */}
                                    <div className="text-left sm:text-right bg-stone-50 border border-stone-200 p-2.5 rounded-xl sm:bg-transparent sm:border-0 sm:p-0">
                                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                                        Proposed Sealed Quote
                                      </span>
                                      <div className="flex items-baseline gap-1 sm:justify-end">
                                        <span className="font-display font-black text-xl sm:text-2xl text-slate-900">
                                          ₹{bid.bidAmount.toLocaleString('en-IN')}
                                        </span>
                                      </div>
                                      {bidSavings > 0 && (
                                        <span className="text-[11px] font-bold text-[#0C831F] block">
                                          ✓ ₹{bidSavings.toLocaleString('en-IN')} under employer target
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Proposed Plan & Execution Strategy */}
                                  <div className="space-y-3">
                                    <div className="bg-stone-50/90 backdrop-blur-xs border border-stone-200/90 p-3.5 rounded-xl space-y-1.5">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-black uppercase text-slate-600">
                                          Itemized Plan & Deliverables:
                                        </span>
                                        <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-md">
                                          Turnaround: {bid.proposedTurnaround}
                                        </span>
                                      </div>
                                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                        {bid.proposedPlan}
                                      </p>
                                    </div>

                                    {/* Inclusions Checklist */}
                                    {bid.inclusions && bid.inclusions.length > 0 && (
                                      <div className="space-y-1.5">
                                        <span className="text-[10px] font-black uppercase text-slate-500 block">
                                          Key Cooperative Inclusions:
                                        </span>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-semibold text-slate-700">
                                          {bid.inclusions.map((inc, i) => (
                                            <div key={i} className="flex items-start gap-1.5">
                                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0C831F] shrink-0 mt-0.5" />
                                              <span>{inc}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {/* Award Execution Bar */}
                                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-200">
                                      <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-slate-400" />
                                        <span>Submitted {bid.placedAt} • Escrow Ready</span>
                                      </span>

                                      {tender.status === 'Open for Bids' ? (
                                        <button
                                          type="button"
                                          onClick={() => onAwardTender(tender.id, bid.id)}
                                          className="px-4 py-2.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-black border-2 border-black transition-all shadow-[2px_2px_0px_#000000] flex items-center justify-center gap-1.5 cursor-pointer active:translate-y-0.5"
                                        >
                                          <Award className="w-4 h-4 text-black" />
                                          <span>
                                            Award Tender to {bid.bidderName.split(' ')[0]} (₹
                                            {bid.bidAmount.toLocaleString('en-IN')})
                                          </span>
                                        </button>
                                      ) : isWinner ? (
                                        <div className="bg-emerald-100 text-[#0C831F] border border-emerald-300 px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5">
                                          <CheckCircle2 className="w-4 h-4 text-[#0C831F]" />
                                          <span>Contract Executed • Society Guild Dispatched</span>
                                        </div>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Modal 1: Post New Requirement / Tender */}
      <BrutalModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        title="Post New Job Requirement / Tender"
        subtitle="Cooperative societies and multi-trade specialists will place confidential sealed bids"
        titleBg="#06B6D4"
        maxWidth="lg"
      >
        <form onSubmit={handleCreateTender} className="space-y-4 p-1">
          <div className="space-y-1">
            <label className="text-xs font-black uppercase text-slate-900 block">
              Requirement Title *
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. Small party of 40 people with proper food & light decoration"
              className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Category
              </label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              >
                <option value="Event Catering & Decor">Event Catering & Decor</option>
                <option value="Electrical & Plumbing Guild">Electrical & Plumbing Guild</option>
                <option value="Masonry & Waterproofing">Masonry & Waterproofing</option>
                <option value="Modular Carpentry & Woodcraft">Modular Carpentry</option>
                <option value="Full Society Deep Sanitization">Deep Cleaning & Sanitization</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Target Budget (₹) *
              </label>
              <input
                type="number"
                required
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                placeholder="50000"
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Guest Count / Scope Units
              </label>
              <input
                type="number"
                value={newGuests}
                onChange={(e) => setNewGuests(e.target.value)}
                placeholder="40"
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Event / Execution Date
              </label>
              <input
                type="text"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                placeholder="e.g. Next Saturday, 7:00 PM"
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-black uppercase text-slate-900 block">
              Detailed Specifications & Problem Statement *
            </label>
            <textarea
              rows={3}
              required
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Describe menu items, decor preferences, hall dimensions, timing constraints..."
              className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Your Name / Organization
              </label>
              <input
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Sunil Mathur"
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Location Sector
              </label>
              <input
                type="text"
                value={newSector}
                onChange={(e) => setNewSector(e.target.value)}
                placeholder="Sector 14 / Dwarka"
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              />
            </div>
          </div>

          {/* Frosted Glass Note */}
          <div className="bg-amber-50/80 backdrop-blur-xs border border-amber-300 p-3 rounded-xl text-xs font-bold text-amber-950 flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-800 shrink-0" />
            <span>
              All incoming bids will be encrypted and shown only under your post dashboard.
            </span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-stone-200">
            <button
              type="button"
              onClick={() => setIsPostModalOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-stone-100 border border-stone-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-black border-2 border-black transition-all shadow-[2px_2px_0px_#000000] flex items-center gap-1.5 active:translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Publish Tender to Cooperative Guilds</span>
            </button>
          </div>
        </form>
      </BrutalModal>

      {/* Modal 2: Submit a Confidential Bid (For Cooperatives / Workers) */}
      <BrutalModal
        isOpen={!!selectedTenderForBid}
        onClose={() => setSelectedTenderForBid(null)}
        title={`Place Confidential Bid: ${selectedTenderForBid?.title}`}
        subtitle={`Target Budget: ₹${selectedTenderForBid?.targetBudget.toLocaleString('en-IN')} • Sealed quote`}
        titleBg="#06B6D4"
        maxWidth="md"
      >
        <form onSubmit={handlePlaceBid} className="space-y-4 p-1">
          <div className="space-y-1">
            <label className="text-xs font-black uppercase text-slate-900 block">
              Your Society / Guild Name *
            </label>
            <input
              type="text"
              required
              value={bidderName}
              onChange={(e) => setBidderName(e.target.value)}
              className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-black uppercase text-slate-900 block">
              Cooperative Federation Affiliation
            </label>
            <input
              type="text"
              value={societyName}
              onChange={(e) => setSocietyName(e.target.value)}
              className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Total Quotation (₹) *
              </label>
              <input
                type="number"
                required
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="42000"
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-slate-900 block">
                Estimated Turnaround
              </label>
              <input
                type="text"
                value={turnaround}
                onChange={(e) => setTurnaround(e.target.value)}
                placeholder="Ready 2 hours before event"
                className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-black uppercase text-slate-900 block">
              Proposed Service Inclusions & Quality Guarantees *
            </label>
            <textarea
              rows={3}
              required
              value={planDescription}
              onChange={(e) => setPlanDescription(e.target.value)}
              placeholder="Describe menu items, service staff, cleanup, decor materials..."
              className="w-full bg-white border-2 border-stone-300 focus:border-black rounded-xl p-2.5 text-xs sm:text-sm font-medium focus:outline-none shadow-xs"
            />
          </div>

          <div className="bg-stone-100/90 backdrop-blur-xs border border-stone-300 p-3 rounded-xl text-xs font-medium text-slate-700">
            🔒 <strong>Confidentiality Note:</strong> Your quote is private and visible only to the posting employer. Lowest bid meeting certified quality standards receives contract award.
          </div>

          <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-stone-200">
            <button
              type="button"
              onClick={() => setSelectedTenderForBid(null)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-stone-100 border border-stone-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-black bg-[#0C831F] hover:bg-[#0A6C19] text-white border-2 border-black transition-all shadow-[2px_2px_0px_#000000] flex items-center gap-1.5 active:translate-y-0.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>
                Submit Sealed Bid (₹{parseInt(bidAmount || '0').toLocaleString('en-IN')})
              </span>
            </button>
          </div>
        </form>
      </BrutalModal>
    </motion.section>
  );
};
