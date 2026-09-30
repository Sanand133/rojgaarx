import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Zap,
  Award,
  Sparkles,
  Scale,
  TrendingUp,
  Building,
  CheckCircle2,
  ArrowRight,
  Radar,
  Users,
  Layers,
  Gavel,
  BadgeAlert,
  Coins,
  FileCheck,
  Heart,
  HelpCircle,
  Clock,
  Briefcase,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BrutalBadge } from '../common/BrutalBadge';
import { BrutalButton } from '../common/BrutalButton';
import { LanguageCode } from '../../types';
import { getTranslation } from '../../utils/translations';

interface ProjectAboutViewProps {
  language: LanguageCode;
  onNavigateTab: (tab: 'directory' | 'radar' | 'combos' | 'bidding') => void;
  onOpenRegistration?: () => void;
  onSwitchToWorkerPortal: () => void;
}

export const ProjectAboutView: React.FC<ProjectAboutViewProps> = ({
  language,
  onNavigateTab,
  onOpenRegistration,
  onSwitchToWorkerPortal,
}) => {
  const t = getTranslation(language);

  // Localized narrative strings for the project explanation
  const content = {
    heroTag:
      language === 'hi'
        ? 'सहकारी क्रांति • श्रमिक स्वाभिमान'
        : language === 'ta'
        ? 'கூட்டுறவு இயக்கம் • தொழிலாளர் உரிமை'
        : language === 'mr'
        ? 'सहकारी चळवळ • कामगार स्वाभिमान'
        : 'Cooperative Movement • Dignity of Labor',
    heroHeading:
      language === 'hi'
        ? 'रोजगार-X: भारत का प्रथम 0% कमीशन सहकारी श्रमिक महासंघ'
        : language === 'ta'
        ? 'ரோஜ்கார்-X: இந்தியாவின் முதல் 0% தள கட்டண கூட்டுறவு தளம்'
        : language === 'mr'
        ? 'रोजगार-X: भारताचे पहिले ०% कमिशन कामगार सहकारी महासंघ'
        : 'RojgaarX: India’s First 0% Commission Cooperative Worker Federation',
    heroDesc:
      language === 'hi'
        ? 'निजी कॉर्पोरेट एग्रीगेटरों द्वारा असंगठित कारीगरों से 25-35% कमीशन कटौती और शोषण को समाप्त करने के लिए बनाया गया लोकतान्त्रिक प्लेटफॉर्म। यहाँ 100% मेहनताना सीधा कारीगर के खाते में जाता है, साथ ही सामाजिक सुरक्षा, ई-श्रम सत्यापन और ₹5 लाख बीमा अनिवार्य रूप से मिलता है।'
        : language === 'ta'
        ? 'தனியார் இடைத்தரகர்கள் தொழிலாளர்களிடம் இருந்து 25-35% கமிஷன் பறிப்பதை தடுக்கும் மக்களாட்சி கூட்டுறவு தளம். 100% ஊதியம் தொழிலாளருக்கு நேரடியாக கிடைக்கிறது.'
        : language === 'mr'
        ? 'खाजगी कंपन्यांच्या २५-३५% कमिशन कपातीला आळा घालण्यासाठी निर्माण केलेले लोकशाही व्यासपीठ. १००% मोबदला थेट कारागिरांच्या हातात, सोबत सामाजिक सुरक्षा व ई-श्रम संरक्षण.'
        : 'A democratic digital public infrastructure engineered to liberate unorganized urban blue-collar artisans from extractive 25–35% middleman commission. 100% of the wage goes directly to the worker, backed by statutory 5% welfare funds, government e-Shram authentication, and comprehensive ₹5,00,000 ESIC accidental coverage.',
    whySectionTitle:
      language === 'hi'
        ? 'यह परियोजना क्यों आवश्यक है? कॉर्पोरेट शोषण बनाम सहकारी स्वाभिमान'
        : language === 'ta'
        ? 'இந்த திட்டம் ஏன் முக்கியமானது? சுரண்டல் vs கூட்டுறவு'
        : language === 'mr'
        ? 'हा प्रकल्प का महत्त्वाचा आहे? खाजगी पिळवणूक विरुद्ध सहकारी स्वाभिमान'
        : 'Why This Project Matters: Algorithmic Exploitation vs. Cooperative Dignity',
    pillarsTitle:
      language === 'hi' ? 'महासंघ के 4 मूलभूत स्तंभ' : language === 'ta' ? 'கூட்டுறவின் 4 முக்கிய தூண்கள்' : language === 'mr' ? 'महासंघाचे ४ प्रमुख आधारस्तंभ' : 'The 4 Core Cooperative Pillars',
    howItWorksTitle:
      language === 'hi' ? 'नागरिकों और सोसायटियों के लिए यह कैसे काम करता है?' : language === 'ta' ? 'இது எவ்வாறு செயல்படுகிறது?' : language === 'mr' ? 'हे कसे कार्य करते?' : 'How the Cooperative Works for Citizens & Housing Societies',
    statsTitle:
      language === 'hi' ? 'वास्तविक प्रभाव एवं महासंघ आंकड़े' : language === 'ta' ? 'நேரடி புள்ளிவிவரங்கள்' : language === 'mr' ? 'थेट महासंघ आकडेवारी' : 'Live Verified Federation Impact',
  };

  const pillars = [
    {
      icon: <Coins className="w-6 h-6 text-black" />,
      color: 'bg-[#06B6D4]',
      title: language === 'hi' ? '0% प्लेटफॉर्म कमीशन' : language === 'ta' ? '0% இடைத்தரகர் கட்டணம்' : language === 'mr' ? '०% मध्यस्थ कमिशन' : '0% Platform Commission',
      desc:
        language === 'hi'
          ? 'निजी ऐप्स 25% से 35% तक काट लेते हैं। रोजगार-X में 100% मजदूरी कारीगर को बिना किसी बिचौलिए या छुपे शुल्क के सीधे मिलती है।'
          : 'Commercial aggregator apps take 25% to 35% cut. RojgaarX routes 100% of the customer wage directly to the certified artisan with zero middleman deductions.',
      stat: '100% Direct Payout',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-black" />,
      color: 'bg-[#22D3EE]',
      title: language === 'hi' ? '5% वैधानिक कल्याण कोष' : language === 'ta' ? '5% தொழிலாளர் நல நிதி' : language === 'mr' ? '५% कामगार कल्याण निधी' : '5% Statutory Welfare Corpus',
      desc:
        language === 'hi'
          ? 'हर बुकिंग में से 5% राशि सीधे कामगार कल्याण कोष में जमा होती है, जिससे आकस्मिक चिकित्सा, पेंशन और बच्चों की शिक्षा सुरक्षित होती है।'
          : 'Every booking automatically contributes 5% into a registered cooperative welfare pool, funding emergency medical relief, pensions, and children’s education scholarships.',
      stat: '₹3,80,000+ Accrued',
    },
    {
      icon: <FileCheck className="w-6 h-6 text-black" />,
      color: 'bg-[#90E0EF]',
      title: language === 'hi' ? 'ई-श्रम व ₹5 लाख बीमा सुरक्षा' : language === 'ta' ? 'இ-ஷ்ரம் & ₹5 லட்சம் காப்பீடு' : language === 'mr' ? 'ई-श्रम व ₹५ लाख विमा' : 'e-Shram UAN & ₹5L Insurance',
      desc:
        language === 'hi'
          ? 'श्रम एवं रोजगार मंत्रालय के ई-श्रम पोर्टल से प्रमाणित UAN नंबर और कार्य के दौरान ₹5,00,000 की व्यापक दुर्घटना बीमा सुरक्षा।'
          : 'Verified against the Ministry of Labour’s national e-Shram database with active UAN credentials and full on-duty ₹5,00,000 ESIC accidental coverage.',
      stat: '100% Verified Members',
    },
    {
      icon: <Building className="w-6 h-6 text-black" />,
      color: 'bg-[#FF90E8]',
      title: language === 'hi' ? 'श्रमिक संघ लोकतान्त्रिक शासन' : language === 'ta' ? 'தொழிலாளர் ஜனநாயக நிர்வாகம்' : language === 'mr' ? 'कामगार युनियन लोकशाही व्यवस्था' : 'Democratic Union Governance',
      desc:
        language === 'hi'
          ? 'प्लेटफॉर्म का नियंत्रण कॉरपोरेट शेयरधारकों के पास नहीं, बल्कि पंजीकृत स्थानीय कामगार सहकारी सोसायटियों (जैसे नेरूल निर्माण कामगार संघ) के पास है।'
          : 'Governed democratically by registered local worker societies (e.g. Nerul Building Workers, SEWA, Bandhkam Kamgar), not profit-extracting algorithms.',
      stat: '12 Registered Societies',
    },
  ];

  const steps = [
    {
      num: '01',
      title: language === 'hi' ? 'सत्यापित कारीगर खोजें' : 'Discover Verified Artisans',
      desc:
        language === 'hi'
          ? 'ट्रेड डायरेक्टरी देखें, 500 मीटर से 10 किमी दूरी रडार स्कैन करें या बहु-ट्रेड कॉम्बो पैकेज चुनें।'
          : 'Browse our specialized Trade Directory, launch the 500m–10km Proximity Radar, or pick multi-trade expert combos.',
      ctaText: language === 'hi' ? 'रडार खोलें' : 'Launch Radar',
      target: 'radar' as const,
      color: 'bg-[#22D3EE]',
    },
    {
      num: '02',
      title: language === 'hi' ? 'पारदर्शी प्रति घंटा बुकिंग' : 'Book Transparent Hourly Slots',
      desc:
        language === 'hi'
          ? '1 घंटे की त्वरित मरम्मत, 2 घंटे या पूरे दिन का स्लॉट चुनें। कोई सर्ज-प्राइसिंग या छिपी फीस नहीं।'
          : 'Choose 1-hour quick fixes, 2-hour standard slots, or full-day bookings. No algorithmic surge pricing, ever.',
      ctaText: language === 'hi' ? 'डायरेक्टरी देखें' : 'Browse Directory',
      target: 'directory' as const,
      color: 'bg-[#06B6D4]',
    },
    {
      num: '03',
      title: language === 'hi' ? 'सामुदायिक निविदा व निष्पक्ष भुगतान' : 'Post Tenders or Direct Payout',
      desc:
        language === 'hi'
          ? 'हाउसिंग सोसायटियों और बड़े कार्यों के लिए पारदर्शी रिवर्स-ऑक्शन टेंडर जारी करें। 100% सीधे खाते में भुगतान।'
          : 'Post open reverse-auction tenders for renovations or society AMCs. Pay standard cooperative rates with zero deductions.',
      ctaText: language === 'hi' ? 'टेंडर मार्केटप्लेस' : 'View Tenders',
      target: 'bidding' as const,
      color: 'bg-[#90E0EF]',
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. HERO PROJECT MANIFESTO BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
      >
        {/* Geometric brutalist accent blocks */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#22D3EE] border-2 border-black rotate-12 -z-0 opacity-80 pointer-events-none" />
        <div className="absolute -bottom-10 right-32 w-28 h-28 bg-[#06B6D4] border-2 border-black -rotate-6 -z-0 opacity-80 pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <BrutalBadge variant="cyan" size="sm" icon={<Award className="w-3.5 h-3.5" />}>
              {content.heroTag}
            </BrutalBadge>
            <span className="bg-black text-white text-xs font-mono font-bold px-2.5 py-0.5 uppercase tracking-wider">
              Smart India Hackathon • SIH 26089
            </span>
          </div>

          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-black uppercase leading-tight tracking-tight">
            {content.heroHeading}
          </h1>

          <p className="text-sm sm:text-base font-semibold text-neutral-800 leading-relaxed max-w-3xl">
            {content.heroDesc}
          </p>

          {/* Quick Jump Buttons to Dedicated Tabs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <BrutalButton
              variant="yellow"
              size="md"
              onClick={() => onNavigateTab('directory')}
              icon={<Users className="w-4 h-4" />}
            >
              {language === 'hi' ? 'कारीगर डायरेक्टरी खोलें' : 'Browse Worker Directory'}
            </BrutalButton>

            <BrutalButton
              variant="lime"
              size="md"
              onClick={() => onNavigateTab('radar')}
              icon={<Radar className="w-4 h-4" />}
            >
              {language === 'hi' ? 'दूरी रडार चालू करें' : 'Launch Proximity Radar'}
            </BrutalButton>

            <BrutalButton
              variant="white"
              size="md"
              onClick={() => onNavigateTab('combos')}
              icon={<Layers className="w-4 h-4" />}
            >
              {language === 'hi' ? 'मल्टी-ट्रेड कॉम्बो' : 'Multi-Trade Combos'}
            </BrutalButton>

            <BrutalButton
              variant="white"
              size="md"
              onClick={() => onNavigateTab('bidding')}
              icon={<Gavel className="w-4 h-4" />}
            >
              {language === 'hi' ? 'रिवर्स-ऑक्शन टेंडर' : 'Bidding & Tenders'}
            </BrutalButton>
          </div>
        </div>
      </motion.div>

      {/* 2. THE PROBLEM WE SOLVE: COMMERCIAL AGGREGATORS VS. ROJGAARX COOPERATIVE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white border-4 border-black p-5 sm:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4"
      >
        <div className="border-b-2 border-black pb-3">
          <span className="font-display font-black text-xs uppercase tracking-widest text-[#FF5757] block">
            Systemic Injustice In The Gig Economy
          </span>
          <h2 className="font-display font-black text-xl sm:text-3xl text-black uppercase">
            {content.whySectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Left: The Predatory Gig Model */}
          <div className="bg-[#FFF0F0] border-2 border-black p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#FF5757] border border-black rounded-full" />
              <h3 className="font-display font-black text-base uppercase text-black">
                ❌ Commercial Gig Apps (The Exploiters)
              </h3>
            </div>
            <ul className="space-y-2 text-xs font-bold text-neutral-800">
              <li className="flex items-start gap-2">
                <span className="text-[#FF5757] font-black shrink-0">✕</span>
                <span>
                  <strong>25% to 35% commission cut:</strong> A ₹1,000 plumbing repair leaves the worker with merely ₹650 after platform deductions and fees.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5757] font-black shrink-0">✕</span>
                <span>
                  <strong>Zero Social Security:</strong> No health insurance, no ESIC, no retirement benefits, and no worker representation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5757] font-black shrink-0">✕</span>
                <span>
                  <strong>Black-Box Algorithmic Control:</strong> Workers are penalized or permanently suspended without human arbitration or fair notice.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5757] font-black shrink-0">✕</span>
                <span>
                  <strong>Surge Pricing Exploitation:</strong> Customers pay artificially inflated surge rates while the workers’ base pay remains stagnant.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: The RojgaarX Cooperative Model */}
          <div className="bg-[#F0FFF4] border-2 border-black p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#06B6D4] border border-black rounded-full" />
              <h3 className="font-display font-black text-base uppercase text-black">
                ✅ RojgaarX Cooperative Federation (The Solution)
              </h3>
            </div>
            <ul className="space-y-2 text-xs font-bold text-neutral-800">
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-black shrink-0">✓</span>
                <span>
                  <strong>0% Platform Commission:</strong> 100% of the direct labor fee is transferred immediately to the certified artisan’s account.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-black shrink-0">✓</span>
                <span>
                  <strong>5% Mandated Welfare Corpus:</strong> Pooled collectively for health emergencies, maternity aid, and children’s scholarships.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-black shrink-0">✓</span>
                <span>
                  <strong>National e-Shram Authentication:</strong> Verified by government UAN with ₹5,00,000 accidental insurance coverage.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-black shrink-0">✓</span>
                <span>
                  <strong>Democratic Union Governance:</strong> Registered worker cooperative societies hold voting rights on rate-cards and safety policies.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* 3. THE 4 PILLARS OF COOPERATIVE GOVERNANCE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
          <div>
            <span className="font-display font-black text-xs uppercase tracking-widest text-neutral-600 block">
              Architectural Foundation
            </span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-black uppercase">
              {content.pillarsTitle}
            </h2>
          </div>
          <BrutalBadge variant="yellow" size="xs">
            Cooperative Act Compliant
          </BrutalBadge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div
                  className={`w-12 h-12 ${pillar.color} border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-display font-black text-base text-black uppercase leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-700 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-black/30">
                <span className="bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase">
                  {pillar.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 4. HOW IT WORKS: 3 SIMPLE STEPS FOR CITIZENS & SOCIETIES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white border-4 border-black p-5 sm:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4"
      >
        <div className="border-b-2 border-black pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-display font-black text-xs uppercase tracking-widest text-neutral-600 block">
              User Experience
            </span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-black uppercase">
              {content.howItWorksTitle}
            </h2>
          </div>
          <span className="text-xs font-bold bg-[#F4F1EA] border border-black px-2 py-1">
            Zero Learning Curve • Direct Dial & Online
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              className="bg-[#FFFDF9] border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`font-display font-black text-xl px-2 py-0.5 border-2 border-black ${step.color}`}>
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
                    Step {step.num}
                  </span>
                </div>
                <h3 className="font-display font-black text-base uppercase text-black">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <BrutalButton
                variant="white"
                size="sm"
                onClick={() => onNavigateTab(step.target)}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                {step.ctaText}
              </BrutalButton>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 5. VERIFIED FEDERATION IMPACT METRICS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="bg-black text-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_#06B6D4]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-neutral-700 pb-4 mb-5">
          <div>
            <span className="text-xs font-mono font-bold text-[#06B6D4] tracking-widest uppercase">
              Live Transparency Ledger
            </span>
            <h2 className="font-display font-black text-2xl text-white uppercase">
              {content.statsTitle}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
            <span className="text-xs font-mono font-bold text-[#06B6D4]">REAL-TIME AUDIT ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1A1A1A] border-2 border-neutral-700 p-3.5 space-y-1">
            <span className="text-[10px] font-mono uppercase text-neutral-400 block">
              Brokerage Saved for Workers
            </span>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#22D3EE]">
              ₹42,50,000+
            </div>
            <p className="text-[10px] text-neutral-400 font-semibold">
              Retained 100% by artisan families
            </p>
          </div>

          <div className="bg-[#1A1A1A] border-2 border-neutral-700 p-3.5 space-y-1">
            <span className="text-[10px] font-mono uppercase text-neutral-400 block">
              Certified Artisans On Roster
            </span>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#06B6D4]">
              1,240+
            </div>
            <p className="text-[10px] text-neutral-400 font-semibold">
              e-Shram authenticated & background checked
            </p>
          </div>

          <div className="bg-[#1A1A1A] border-2 border-neutral-700 p-3.5 space-y-1">
            <span className="text-[10px] font-mono uppercase text-neutral-400 block">
              Welfare Corpus Accrued
            </span>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#90E0EF]">
              ₹3,80,000+
            </div>
            <p className="text-[10px] text-neutral-400 font-semibold">
              Supervised under cooperative trust
            </p>
          </div>

          <div className="bg-[#1A1A1A] border-2 border-neutral-700 p-3.5 space-y-1">
            <span className="text-[10px] font-mono uppercase text-neutral-400 block">
              Accidental Safety Cover
            </span>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#FF90E8]">
              ₹5,00,000
            </div>
            <p className="text-[10px] text-neutral-400 font-semibold">
              ESIC active coverage for every job
            </p>
          </div>
        </div>
      </motion.div>

      {/* 6. HOUSING SOCIETY & RWA PROCUREMENT BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#06B6D4] border-4 border-black p-5 sm:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white text-[10px] font-black px-2 py-0.5 uppercase">
              RWA & Corporate Procurement
            </span>
            <span className="text-xs font-bold text-black">GST Compliant AMC Contracts</span>
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-black">
            Are You a Housing Society Secretary or Facility Manager?
          </h3>
          <p className="text-xs sm:text-sm font-bold text-neutral-800">
            Source bulk electrician, plumbing, lift maintenance, and sanitation contracts directly from registered worker federations. Zero middleman margins, SLA-backed dispatch, and full statutory compliance.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <BrutalButton
            variant="black"
            size="md"
            onClick={() => onNavigateTab('bidding')}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Post Society Tender
          </BrutalButton>
        </div>
      </motion.div>
    </div>
  );
};
