import React, { useState } from 'react';
import {
  User,
  Phone,
  Briefcase,
  Award,
  Building2,
  FileCheck,
  UploadCloud,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  QrCode,
  Sparkles,
} from 'lucide-react';
import { BrutalCard } from '../common/BrutalCard';
import { BrutalButton } from '../common/BrutalButton';
import { BrutalBadge } from '../common/BrutalBadge';
import { COOPERATIVE_SOCIETIES, SERVICE_CATEGORIES, SECTORS } from '../../data/mockData';

interface WorkerRegistrationFormProps {
  onRegistrationComplete: () => void;
}

export const WorkerRegistrationForm: React.FC<WorkerRegistrationFormProps> = ({
  onRegistrationComplete,
}) => {
  const [step, setStep] = useState(1);

  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTrade, setSelectedTrade] = useState(SERVICE_CATEGORIES[0].name);
  const [experience, setExperience] = useState('5');
  const [sector, setSector] = useState(SECTORS[0]);
  const [selectedSocietyId, setSelectedSocietyId] = useState(COOPERATIVE_SOCIETIES[0].id);
  const [eShramNumber, setEShramNumber] = useState('8831-9021-4412');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>('NSQF_Level4_Skill_Certificate.pdf');
  const [upiId, setUpiId] = useState('');
  const [pledgeAccepted, setPledgeAccepted] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  const selectedSociety =
    COOPERATIVE_SOCIETIES.find((s) => s.id === selectedSocietyId) || COOPERATIVE_SOCIETIES[0];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out your name and contact phone number.');
      return;
    }
    setIsCompleted(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Registration Header - Frosted Obsidian Cockpit Header */}
      <div className="bg-slate-950/90 backdrop-blur-2xl border-2 border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="bg-cyan-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">
              SIH 26089 ONBOARDING
            </span>
            <span className="text-xs font-bold text-cyan-300">
              Shramik Cooperative Registry
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
            Cooperative Worker Accreditation
          </h2>
          <p className="text-xs font-medium text-slate-300 max-w-xl">
            Join as a proud co-owner. Earn 100% of your labor wage, enjoy free accident cover & cooperative pension.
          </p>
        </div>

        {/* Step Counter */}
        {!isCompleted && (
          <div className="relative z-10 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white font-display font-black text-xs shadow-xs self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>STEP {step} OF 4</span>
          </div>
        )}
      </div>

      {isCompleted ? (
        /* Issued Digital Shramik ID Card */
        <div className="space-y-6">
          <div className="bg-white/95 backdrop-blur-2xl border-2 border-stone-300 rounded-3xl p-6 sm:p-8 max-w-xl mx-auto shadow-xl relative overflow-hidden">
            {/* Top Identity Banner */}
            <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 border-b border-stone-200 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 p-5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-slate-950 text-cyan-300 font-display font-black flex items-center justify-center text-base border border-white/20 shadow-xs">
                  C⚡C
                </span>
                <div>
                  <h4 className="font-display font-black text-sm uppercase tracking-wider">
                    Shramik Digital Cooperative Pass
                  </h4>
                  <p className="text-[11px] font-medium text-cyan-100">
                    Government Cooperative Federation SIH 26089
                  </p>
                </div>
              </div>
              <span className="bg-slate-950 text-emerald-400 border border-emerald-400/40 text-[10px] font-black px-2.5 py-1 rounded-lg">
                VERIFIED CO-OWNER
              </span>
            </div>

            {/* Card Body */}
            <div className="pt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-tr from-cyan-400 to-emerald-400 rounded-2xl flex items-center justify-center font-display font-black text-3xl text-slate-950 shadow-md">
                  {name ? name.charAt(0) : 'W'}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-black text-xl text-slate-950 uppercase truncate">
                    {name || 'Ramesh Kumar'}
                  </h3>
                  <p className="text-xs font-black text-cyan-700 uppercase tracking-wide">
                    {selectedTrade}
                  </p>
                  <p className="text-xs font-bold text-slate-700 mt-1">
                    🏛️ {selectedSociety.name}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-500">
                    ID: COP-2026-{(Math.random() * 9000 + 1000).toFixed(0)} • {sector}
                  </p>
                </div>

                <div className="w-16 h-16 bg-white border border-stone-300 rounded-xl p-1.5 shrink-0 flex flex-col items-center justify-center shadow-xs">
                  <QrCode className="w-9 h-9 text-slate-950" />
                  <span className="text-[8px] font-black uppercase text-slate-500 mt-0.5">SCAN UAN</span>
                </div>
              </div>

              {/* Accreditations list */}
              <div className="bg-stone-50/90 backdrop-blur-sm border border-stone-200 rounded-2xl p-4 space-y-2 text-xs font-bold">
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>e-Shram Biometric Validated: {eShramNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Skill Certificate Verified: NSQF Certified</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ESIC & Accident Insurance: ₹5,00,000 Active</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-black pt-3 border-t border-stone-200">
                <span className="text-slate-600">0% Middleman Deduction Active</span>
                <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-2.5 py-1 rounded-md">
                  100% Direct Payout
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={onRegistrationComplete}
              className="bg-slate-950 hover:bg-slate-900 text-white font-black px-6 py-3 rounded-2xl text-sm uppercase transition-all shadow-[2px_2px_0px_#000000] cursor-pointer flex items-center gap-2"
            >
              <span>Open Live Job Radar Now</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      ) : (
        /* Multi-Step Wizard */
        <form onSubmit={handleFinish} className="bg-white/90 backdrop-blur-2xl border-2 border-stone-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          {/* Step Progress Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-stone-200 pb-5 text-center">
            {[
              { num: 1, label: 'Trade & Skills' },
              { num: 2, label: 'Cooperative Guild' },
              { num: 3, label: 'ID Verification' },
              { num: 4, label: 'Payout & Oath' },
            ].map((s) => (
              <div
                key={s.num}
                className={`
                  p-2.5 rounded-xl border text-xs font-display font-black uppercase transition-all
                  ${
                    step === s.num
                      ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                      : step > s.num
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                      : 'bg-stone-50 text-slate-400 border-stone-200'
                  }
                `}
              >
                <span>{s.num}. {s.label}</span>
              </div>
            ))}
          </div>

          {/* STEP 1: Skill Profiling */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-display font-black text-lg text-slate-950 uppercase">
                Step 1: Personal Details & Trade Skill
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Your Full Name (As per Aadhaar)
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rameshwar Kumar Sharma"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Mobile Phone (For Job Alerts)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Primary Trade / Skill
                  </label>
                  <select
                    value={selectedTrade}
                    onChange={(e) => setSelectedTrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                  >
                    {SERVICE_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Years of Field Experience
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="45"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Operating Sector / City
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                  >
                    {SECTORS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Cooperative Society Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-black text-lg text-slate-950 uppercase">
                  Step 2: Choose Your Labour Cooperative Society
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Workers affiliate with a registered labour society to receive statutory voting rights, cooperative dividends, and legal representation.
                </p>
              </div>

              <div className="space-y-3">
                {COOPERATIVE_SOCIETIES.map((soc) => (
                  <div
                    key={soc.id}
                    onClick={() => setSelectedSocietyId(soc.id)}
                    className={`
                      p-4 rounded-2xl border-2 cursor-pointer transition-all
                      ${
                        selectedSocietyId === soc.id
                          ? 'bg-cyan-50/80 border-cyan-500 shadow-md'
                          : 'bg-stone-50/80 hover:bg-white border-stone-200'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-950 text-cyan-400 flex items-center justify-center shrink-0">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display font-black text-sm uppercase text-slate-950">
                            {soc.name}
                          </h4>
                          <span className="text-[11px] font-semibold text-slate-600">
                            {soc.federation} • Reg #{soc.code} • Est. {soc.established}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-black bg-white px-2.5 py-1 rounded-lg border border-stone-200 block shadow-xs">
                          {soc.membersCount} Members
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700">
                          {soc.auditScore}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: ID Verification & Certification Upload */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-black text-lg text-slate-950 uppercase">
                  Step 3: Verification & Certificate Upload
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Government e-Shram database verification ensures worker legitimacy and qualifies you for direct accident cover.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    e-Shram Card / Aadhaar UAN Number
                  </label>
                  <input
                    type="text"
                    value={eShramNumber}
                    onChange={(e) => setEShramNumber(e.target.value)}
                    placeholder="12-digit UAN number"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                  />
                  <span className="text-[10px] font-bold text-emerald-700 mt-1.5 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Linked with National e-Shram Portal
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    NSQF / ITI / Skill India Trade Certificate
                  </label>
                  <div className="border-2 border-dashed border-stone-300 rounded-xl p-4 bg-stone-50 text-center cursor-pointer hover:bg-white hover:border-cyan-500 transition-colors">
                    <UploadCloud className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                    <span className="text-xs font-bold block text-slate-800">
                      {uploadedFileName ? uploadedFileName : 'Click to Upload or Drag File'}
                    </span>
                    <span className="text-[10px] text-slate-400">PDF, JPG, PNG (Max 5MB)</span>
                  </div>
                </div>
              </div>

              {/* Safety badge reminder */}
              <div className="p-4 bg-cyan-50/80 backdrop-blur-sm border border-cyan-200 rounded-2xl flex items-center gap-3 text-xs font-bold text-slate-800">
                <ShieldCheck className="w-5 h-5 shrink-0 text-cyan-700" />
                <span>
                  Cooperative Federation provides 100% free safety refresher kits and insulation tools upon certification check.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: Direct Payout UPI & Code of Honour */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-black text-lg text-slate-950 uppercase">
                  Step 4: Payout Settlement & Cooperative Oath
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Where should we deposit your 100% earnings instantly after each completed service?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    UPI ID (Google Pay, PhonePe, Paytm, BHIM)
                  </label>
                  <input
                    type="text"
                    required
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="e.g. 9876543210@upi or yourname@okaxis"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Or Bank Account Number + IFSC
                  </label>
                  <input
                    type="text"
                    placeholder="A/C: 4092100392, IFSC: SBIN000142"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-cyan-500 shadow-xs transition-all"
                  />
                </div>
              </div>

              {/* Cooperative Pledge */}
              <div className="bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="pledge"
                    checked={pledgeAccepted}
                    onChange={(e) => setPledgeAccepted(e.target.checked)}
                    className="mt-1 accent-slate-950 w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="pledge" className="text-xs font-medium text-slate-800 cursor-pointer leading-relaxed">
                    <strong className="font-black text-slate-950">Cooperative Member Pledge:</strong> I commit to delivering honest, high-quality craft at standard cooperative rates, upholding safety protocols, and supporting fellow shramik members. I understand that 5% of my labour earnings will be contributed to my own cooperative welfare & pension reserve.
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Wizard Buttons */}
          <div className="flex items-center justify-between pt-5 border-t border-stone-200">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-slate-700 font-bold text-xs uppercase rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && (!name || !phone)) {
                    alert('Please enter your name and phone number to continue.');
                    return;
                  }
                  setStep(step + 1);
                }}
                className="bg-slate-950 hover:bg-slate-900 text-white font-black px-5 py-2.5 rounded-xl text-xs uppercase transition-all shadow-[2px_2px_0px_#000000] cursor-pointer flex items-center gap-1.5"
              >
                <span>Continue to Step {step + 1}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!pledgeAccepted}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-black px-6 py-2.5 rounded-xl text-xs uppercase transition-all shadow-[2px_2px_0px_#000000] cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Accreditation & Issue Card</span>
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};
