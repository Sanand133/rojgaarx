import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  Send,
  MessageSquare,
  AlertCircle,
  ThumbsUp,
  UserCheck,
  Building,
} from 'lucide-react';
import { motion } from 'motion/react';
import { WorkerProfile, WorkerReview, LanguageCode } from '../../types';
import { BrutalModal } from '../common/BrutalModal';
import { BrutalButton } from '../common/BrutalButton';
import { BrutalBadge } from '../common/BrutalBadge';
import { getTranslation } from '../../utils/translations';

interface WorkerFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  worker: WorkerProfile | null;
  onSubmitReview: (workerId: string, review: WorkerReview, updatedBreakdown: {
    punctuality: number;
    workmanship: number;
    fairPricing: number;
    safetyCleanliness: number;
    fiveStarPercent: number;
    newOverallRating: number;
    newTotalReviews: number;
  }) => void;
  language: LanguageCode;
}

export const WorkerFeedbackModal: React.FC<WorkerFeedbackModalProps> = ({
  isOpen,
  onClose,
  worker,
  onSubmitReview,
  language,
}) => {
  const t = getTranslation(language);

  // Overall Star Rating state
  const [overallRating, setOverallRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // 4 Cooperative Accountability Sub-Ratings (1-5)
  const [subRatings, setSubRatings] = useState({
    punctuality: 5,
    workmanship: 5,
    fairPricing: 5,
    safetyCleanliness: 5,
  });

  // Resident & Job Details
  const [authorName, setAuthorName] = useState<string>('Delhi Resident (Verified)');
  const [sector, setSector] = useState<string>(worker?.locationSector || 'Sector 4 / Rohini');
  const [tradeWorked, setTradeWorked] = useState<string>(worker?.trade || 'Cooperative Service');
  const [verifiedBookingId, setVerifiedBookingId] = useState<string>(
    () => `BK-${Math.floor(1000 + Math.random() * 9000)}`
  );
  const [comment, setComment] = useState<string>('');

  // Cooperative Accountability Badges / Tags
  const [selectedBadges, setSelectedBadges] = useState<string[]>([
    'Fair Wage Honored',
    'e-Shram Verified',
    'Clean Worksite Left',
  ]);

  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  if (!worker) return null;

  const displayName = language === 'hi' && worker.hindiName ? worker.hindiName : worker.name;

  const ratingDescriptions: Record<number, { title: string; desc: string; color: string }> = {
    5: {
      title: language === 'hi' ? 'श्रेष्ठ (5.0) — उत्कृष्ट सहकारी सेवा' : 'Outstanding (5.0) — Exemplary Cooperative Standard',
      desc: language === 'hi' ? 'समय पर आगमन, बेहतरीन काम और पूर्ण ईमानदारी।' : 'Punctual, highest technical workmanship, zero hidden fees.',
      color: 'text-green-700 bg-green-50 border-green-600',
    },
    4: {
      title: language === 'hi' ? 'उत्तम (4.0) — उच्च गुणवत्ता एवं विनम्र व्यवहार' : 'Very Good (4.0) — High Quality & Professional',
      desc: language === 'hi' ? 'काम बहुत अच्छे से पूरा किया गया।' : 'Solid craftsmanship and polite demeanor.',
      color: 'text-blue-700 bg-blue-50 border-blue-600',
    },
    3: {
      title: language === 'hi' ? 'संतोषजनक (3.0) — बुनियादी कार्य संपन्न' : 'Satisfactory (3.0) — Met Standard Requirements',
      desc: language === 'hi' ? 'काम पूरा हुआ परंतु सुधार की गुंजाइश है।' : 'Completed the job as requested, minor improvements possible.',
      color: 'text-amber-700 bg-amber-50 border-amber-600',
    },
    2: {
      title: language === 'hi' ? 'अपेक्षा से कम (2.0) — सुधार की आवश्यकता' : 'Needs Improvement (2.0) — Reported Issues',
      desc: language === 'hi' ? 'काम में कुछ कमियां या देरी रही।' : 'Noticeable delay or partial dissatisfaction in workmanship.',
      color: 'text-orange-700 bg-orange-50 border-orange-600',
    },
    1: {
      title: language === 'hi' ? 'असंतोषजनक (1.0) — सहकारी ऑडिट समीक्षा आवश्यक' : 'Substandard (1.0) — Cooperative Audit Escalation',
      desc: language === 'hi' ? 'सहकारी समिति शिकायत निवारण प्रकोष्ठ को सूचित किया जाएगा।' : 'Logged directly for Cooperative Guild mediation and inspection.',
      color: 'text-red-700 bg-red-50 border-red-600',
    },
  };

  const availableBadges = [
    { id: 'Fair Wage Honored', label: language === 'hi' ? 'उचित दर मान्य (शून्य कमीशन)' : 'Fair Wage Honored (Zero Overcharge)' },
    { id: 'e-Shram Verified', label: language === 'hi' ? 'ई-श्रम व पहचान सत्यापित' : 'e-Shram & ID Verified' },
    { id: 'Clean Worksite Left', label: language === 'hi' ? 'कार्यस्थल साफ-सुथरा छोड़ा' : 'Clean Worksite Left' },
    { id: 'Punctual Arrival', label: language === 'hi' ? 'समयबद्ध आगमन' : 'Punctual Arrival On Schedule' },
    { id: 'Polite & Courteous', label: language === 'hi' ? 'सभ्य व विनम्र आचरण' : 'Polite & Courteous Conduct' },
    { id: 'Safety Protocols Followed', label: language === 'hi' ? 'सुरक्षा मानकों का पालन' : 'Safety Protocols Followed' },
  ];

  const toggleBadge = (badgeId: string) => {
    setSelectedBadges((prev) =>
      prev.includes(badgeId) ? prev.filter((b) => b !== badgeId) : [...prev, badgeId]
    );
  };

  const handleSubRatingChange = (criterion: keyof typeof subRatings, val: number) => {
    setSubRatings((prev) => ({ ...prev, [criterion]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingReviewsCount = worker.totalReviews || 1;
    const existingRating = worker.rating || 4.9;

    // Recalculate overall weighted rating
    const newTotalReviews = existingReviewsCount + 1;
    const newOverallRating = Number(
      (((existingRating * existingReviewsCount) + overallRating) / newTotalReviews).toFixed(2)
    );

    // Recalculate 4 breakdown metrics
    const prevBreakdown = worker.ratingsBreakdown || {
      punctuality: 4.9,
      workmanship: 4.9,
      fairPricing: 5.0,
      safetyCleanliness: 4.9,
      fiveStarPercent: 95,
    };

    const newPunctuality = Number(
      (((prevBreakdown.punctuality * existingReviewsCount) + subRatings.punctuality) / newTotalReviews).toFixed(1)
    );
    const newWorkmanship = Number(
      (((prevBreakdown.workmanship * existingReviewsCount) + subRatings.workmanship) / newTotalReviews).toFixed(1)
    );
    const newFairPricing = Number(
      (((prevBreakdown.fairPricing * existingReviewsCount) + subRatings.fairPricing) / newTotalReviews).toFixed(1)
    );
    const newSafetyCleanliness = Number(
      (((prevBreakdown.safetyCleanliness * existingReviewsCount) + subRatings.safetyCleanliness) / newTotalReviews).toFixed(1)
    );
    const isFiveStar = overallRating === 5;
    const prevFiveStarCount = Math.round((prevBreakdown.fiveStarPercent / 100) * existingReviewsCount);
    const newFiveStarPercent = Math.round(((prevFiveStarCount + (isFiveStar ? 1 : 0)) / newTotalReviews) * 100);

    const newReview: WorkerReview = {
      id: `rev-${Date.now()}`,
      author: authorName.trim() || 'Verified Citizen',
      sector: sector.trim() || worker.locationSector,
      date: 'Just now',
      rating: overallRating,
      comment: comment.trim() || (overallRating >= 4 ? 'Professional service provided adhering strictly to cooperative fair standards. Very satisfied!' : 'Work completed with remarks shared to cooperative registry.'),
      tradeWorked: tradeWorked.trim() || worker.trade,
      verifiedBookingId: verifiedBookingId.trim() || `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      subRatings: {
        punctuality: subRatings.punctuality,
        workmanship: subRatings.workmanship,
        fairPricing: subRatings.fairPricing,
        safetyCleanliness: subRatings.safetyCleanliness,
      },
      cooperativeBadges: selectedBadges,
      helpfulCount: 0,
      verifiedResident: true,
    };

    onSubmitReview(worker.id, newReview, {
      punctuality: newPunctuality,
      workmanship: newWorkmanship,
      fairPricing: newFairPricing,
      safetyCleanliness: newSafetyCleanliness,
      fiveStarPercent: newFiveStarPercent,
      newOverallRating,
      newTotalReviews,
    });

    setIsSubmittedSuccess(true);
    setTimeout(() => {
      setIsSubmittedSuccess(false);
      onClose();
    }, 1800);
  };

  return (
    <BrutalModal
      isOpen={isOpen}
      onClose={onClose}
      title={language === 'hi' ? `कारीगर रेटिंग एवं समीक्षा: ${displayName}` : `Worker Star Rating & Feedback: ${displayName}`}
      subtitle={`${worker.trade} • ${worker.cooperativeSociety}`}
      titleBg="#06B6D4"
      maxWidth="lg"
    >
      {isSubmittedSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-white border-2 border-black text-center space-y-4 shadow-[4px_4px_0px_#000000]"
        >
          <div className="w-14 h-14 bg-[#06B6D4] border-2 border-black mx-auto flex items-center justify-center shadow-[3px_3px_0px_#000000]">
            <CheckCircle2 className="w-8 h-8 text-black" />
          </div>
          <div>
            <h3 className="font-display font-black text-xl text-black uppercase">
              {language === 'hi' ? 'समीक्षा व रेटिंग सफलतापूर्वक दर्ज!' : 'Feedback & Star Rating Recorded!'}
            </h3>
            <p className="text-xs font-bold text-neutral-700 mt-1 max-w-md mx-auto">
              {language === 'hi'
                ? 'आपकी रेटिंग सहकारी संघ ऑडिट लेजर में अपडेट कर दी गई है। यह कारीगर को पारदर्शी प्रोत्साहन और समुदाय में विश्वास बनाए रखने में मदद करती है।'
                : 'Your ratings have been verified and anchored to the Labour Cooperative Federation audit log. Thank you for fostering transparent worker accountability.'}
            </p>
          </div>
          <div className="inline-block bg-[#F4F1EA] border border-black px-3 py-1 font-mono text-xs font-black">
            Booking ID: {verifiedBookingId} • Rating: ★ {overallRating}.0
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Worker Snapshot Banner */}
          <div className="bg-[#FFFDF9] border-2 border-black p-3 flex items-center gap-3 shadow-[2px_2px_0px_#000000]">
            <div className="w-12 h-12 bg-[#06B6D4] border-2 border-black overflow-hidden shrink-0">
              <img
                src={worker.avatarUrl}
                alt={worker.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="font-display font-black text-sm uppercase text-black truncate">
                  {displayName}
                </h4>
                <span className="bg-[#22D3EE] border border-black px-1.5 py-0.2 text-[9px] font-black uppercase">
                  Current: ★ {worker.rating} ({worker.totalReviews})
                </span>
              </div>
              <p className="text-[11px] font-bold text-neutral-700 truncate">
                {worker.trade} • {worker.cooperativeSociety}
              </p>
            </div>
          </div>

          {/* 1. PRIMARY STAR RATING (1 to 5 Stars with Interactive Hover) */}
          <div className="bg-white border-2 border-black p-3.5 space-y-2.5 shadow-[3px_3px_0px_#000000]">
            <div className="flex items-center justify-between">
              <label className="font-display font-black text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-black text-black" />
                <span>{language === 'hi' ? '1. समग्र स्टार रेटिंग चुनें:' : '1. Select Overall Star Rating (1 to 5):'}</span>
              </label>
              <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5">
                {hoverRating || overallRating} / 5 Stars
              </span>
            </div>

            {/* Big Interactive Star Controls */}
            <div className="flex items-center justify-center gap-2 py-1 bg-[#F4F1EA] border border-black">
              {[1, 2, 3, 4, 5].map((star) => {
                const isLit = (hoverRating !== null ? hoverRating : overallRating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={() => setOverallRating(star)}
                    className={`
                      p-2 border-2 transition-transform cursor-pointer
                      ${
                        isLit
                          ? 'bg-[#06B6D4] border-black shadow-[2px_2px_0px_#000000] scale-110'
                          : 'bg-white border-neutral-300 hover:border-black opacity-60'
                      }
                    `}
                    title={`${star} Star`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        isLit ? 'fill-black text-black' : 'text-neutral-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Descriptive Rating Tag */}
            {ratingDescriptions[hoverRating || overallRating] && (
              <div
                className={`p-2 border text-xs font-bold ${
                  ratingDescriptions[hoverRating || overallRating].color
                }`}
              >
                <div className="font-black uppercase">
                  {ratingDescriptions[hoverRating || overallRating].title}
                </div>
                <div className="text-[11px] font-medium opacity-90">
                  {ratingDescriptions[hoverRating || overallRating].desc}
                </div>
              </div>
            )}
          </div>

          {/* 2. COOPERATIVE ACCOUNTABILITY CRITERIA (4 Sub-Ratings) */}
          <div className="bg-white border-2 border-black p-3.5 space-y-2.5 shadow-[3px_3px_0px_#000000]">
            <div className="border-b border-black pb-1.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-600 block">
                  {language === 'hi' ? 'सहकारी जवाबदेही मानक' : 'Cooperative Accountability Scorecard'}
                </span>
                <h4 className="font-display font-black text-xs uppercase text-black">
                  {language === 'hi' ? '2. विशिष्ट कार्य मूल्यांकन (1-5 स्टार):' : '2. Specific Performance Evaluation (1-5 Stars):'}
                </h4>
              </div>
              <BrutalBadge variant="lime" size="xs">
                {language === 'hi' ? 'पारदर्शी ऑडिट' : 'Audit Criteria'}
              </BrutalBadge>
            </div>

            <div className="space-y-2 pt-1">
              {[
                {
                  key: 'punctuality' as const,
                  label: language === 'hi' ? 'समयबद्धता व आगमन (Punctuality)' : 'Punctuality & Arrival Time',
                  hint: language === 'hi' ? 'क्या कारीगर निर्धारित समय पर पहुंचे?' : 'Did the worker report within the confirmed slot?',
                },
                {
                  key: 'workmanship' as const,
                  label: language === 'hi' ? 'तकनीकी दक्षता व कारीगरी (Workmanship)' : 'Technical Skill & Quality of Work',
                  hint: language === 'hi' ? 'कार्य की गुणवत्ता और टिकाऊपन कैसा रहा?' : 'Was the repair or job completed flawlessly?',
                },
                {
                  key: 'fairPricing' as const,
                  label: language === 'hi' ? 'उचित दर व शून्य बिचौलिया (Fair Tariff)' : 'Fair Pricing & Zero Overcharge',
                  hint: language === 'hi' ? 'क्या सहकारी दर सूची का पूर्ण पालन हुआ?' : 'Honored standard cooperative tariff without hidden demands?',
                },
                {
                  key: 'safetyCleanliness' as const,
                  label: language === 'hi' ? 'सफाई, शिष्टाचार व सुरक्षा (Cleanliness & Etiquette)' : 'Cleanliness, Safety & Polite Conduct',
                  hint: language === 'hi' ? 'क्या कार्यस्थल साफ किया गया और आईडी कार्ड था?' : 'Left the workspace tidy and maintained courteous etiquette?',
                },
              ].map((crit) => (
                <div
                  key={crit.key}
                  className="bg-[#F4F1EA] border border-black p-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                >
                  <div>
                    <span className="font-display font-black text-xs text-black block">
                      {crit.label}
                    </span>
                    <span className="text-[10px] font-semibold text-neutral-600">
                      {crit.hint}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {[1, 2, 3, 4, 5].map((starVal) => {
                      const isActive = subRatings[crit.key] >= starVal;
                      return (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => handleSubRatingChange(crit.key, starVal)}
                          className={`
                            w-7 h-7 border flex items-center justify-center font-bold text-xs cursor-pointer transition-all
                            ${
                              isActive
                                ? 'bg-[#22D3EE] border-black text-black font-black shadow-[1px_1px_0px_#000000]'
                                : 'bg-white border-neutral-300 text-neutral-400 hover:border-black'
                            }
                          `}
                        >
                          <Star className={`w-3.5 h-3.5 ${isActive ? 'fill-black text-black' : 'text-neutral-400'}`} />
                        </button>
                      );
                    })}
                    <span className="font-mono text-xs font-black ml-1 text-black">
                      {subRatings[crit.key]}.0
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. COOPERATIVE TRUST BADGES & CHECKMARKS */}
          <div className="bg-white border-2 border-black p-3.5 space-y-2 shadow-[3px_3px_0px_#000000]">
            <label className="font-display font-black text-xs uppercase tracking-wider text-black block">
              {language === 'hi' ? '3. सत्यापित अनुभव टैग्स (लागू होने पर टिक करें):' : '3. Cooperative Trust Badges (Select All Applicable):'}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableBadges.map((badge) => {
                const isSelected = selectedBadges.includes(badge.id);
                return (
                  <button
                    key={badge.id}
                    type="button"
                    onClick={() => toggleBadge(badge.id)}
                    className={`
                      px-2.5 py-1 text-[11px] font-bold border transition-all cursor-pointer flex items-center gap-1.5
                      ${
                        isSelected
                          ? 'bg-[#22D3EE] border-black text-black font-black shadow-[2px_2px_0px_#000000]'
                          : 'bg-[#F4F1EA] border-neutral-400 text-neutral-700 hover:bg-neutral-100'
                      }
                    `}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-neutral-400'}`} />
                    <span>{badge.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. RESIDENT DETAILS & BOOKING ID */}
          <div className="bg-white border-2 border-black p-3.5 space-y-3 shadow-[3px_3px_0px_#000000]">
            <label className="font-display font-black text-xs uppercase tracking-wider text-black block">
              {language === 'hi' ? '4. निवासी विवरण एवं कार्य संदर्भ:' : '4. Resident Info & Job Reference:'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-neutral-700 block mb-1">
                  {language === 'hi' ? 'आपका नाम / संस्था:' : 'Your Name / Society:'}
                </span>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full border-2 border-black p-1.5 font-bold bg-[#FFFDF9] text-xs focus:bg-white outline-none"
                  placeholder="e.g. Shalini Gupta"
                  required
                />
              </div>

              <div>
                <span className="font-bold text-neutral-700 block mb-1">
                  {language === 'hi' ? 'क्षेत्र / सेक्टर:' : 'Locality / Sector:'}
                </span>
                <input
                  type="text"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full border-2 border-black p-1.5 font-bold bg-[#FFFDF9] text-xs focus:bg-white outline-none"
                  placeholder="e.g. Sector 4 / Rohini"
                  required
                />
              </div>

              <div>
                <span className="font-bold text-neutral-700 block mb-1">
                  {language === 'hi' ? 'सत्यापित बुकिंग आईडी:' : 'Verified Booking Reference ID:'}
                </span>
                <input
                  type="text"
                  value={verifiedBookingId}
                  onChange={(e) => setVerifiedBookingId(e.target.value)}
                  className="w-full border-2 border-black p-1.5 font-mono font-bold bg-[#FFFDF9] text-xs focus:bg-white outline-none"
                  placeholder="e.g. BK-9021"
                  required
                />
              </div>

              <div>
                <span className="font-bold text-neutral-700 block mb-1">
                  {language === 'hi' ? 'संपन्न कार्य:' : 'Work Description / Trade:'}
                </span>
                <input
                  type="text"
                  value={tradeWorked}
                  onChange={(e) => setTradeWorked(e.target.value)}
                  className="w-full border-2 border-black p-1.5 font-bold bg-[#FFFDF9] text-xs focus:bg-white outline-none"
                  placeholder="e.g. Submersible Motor Starter Wiring"
                  required
                />
              </div>
            </div>
          </div>

          {/* 5. DETAILED WRITTEN REVIEW */}
          <div className="bg-white border-2 border-black p-3.5 space-y-1.5 shadow-[3px_3px_0px_#000000]">
            <label className="font-display font-black text-xs uppercase tracking-wider text-black flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-black" />
                <span>{language === 'hi' ? '5. विस्तृत समीक्षा व अनुभव साझा करें:' : '5. Detailed Written Review & Feedback:'}</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-500">
                {comment.length} characters
              </span>
            </label>
            <textarea
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={
                language === 'hi'
                  ? 'कारीगर के काम, सफाई, समयबद्धता और व्यवहार के बारे में विस्तार से लिखें...'
                  : 'Describe your experience with the specialist: technical accuracy, cleanliness, punctuality, and attitude...'
              }
              className="w-full border-2 border-black p-2 font-medium text-xs bg-[#FFFDF9] focus:bg-white outline-none"
              required
            />
          </div>

          {/* Cooperative Transparency Guarantee */}
          <div className="bg-[#E0F7FA] border-2 border-black p-2.5 text-[11px] font-bold text-neutral-800 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
            <p className="leading-snug">
              <strong>{language === 'hi' ? 'सहकारी पारदर्शकता प्रतिज्ञा:' : 'Cooperative Federation Accountability:'}</strong>{' '}
              {language === 'hi'
                ? 'यह समीक्षा सीधे सहकारी संघ के निष्पक्ष लेजर में दर्ज होती है। इससे श्रमिकों को उचित लाभांश मिलता है और बिचौलियों की मनमानी खत्म होती है।'
                : 'Ratings are directly factored into the worker’s cooperative welfare dividend and public merit score, preventing commercial platform commission exploitation.'}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t-2 border-black">
            <BrutalButton
              variant="white"
              size="sm"
              onClick={onClose}
              type="button"
            >
              {language === 'hi' ? 'रद्द करें' : 'Cancel'}
            </BrutalButton>

            <BrutalButton
              variant="cyan"
              size="md"
              type="submit"
              icon={<Send className="w-4 h-4" />}
            >
              {language === 'hi' ? 'समीक्षा व रेटिंग जमा करें' : 'Submit Rating & Feedback'}
            </BrutalButton>
          </div>
        </form>
      )}
    </BrutalModal>
  );
};
