import React, { useState } from 'react';
import {
  Briefcase,
  HardHat,
  CheckCircle2,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrutalModal } from './BrutalModal';
import { BrutalButton } from './BrutalButton';
import { BrutalBadge } from './BrutalBadge';
import { RegistrationRole, UserRegistration, LanguageCode } from '../../types';
import { getTranslation } from '../../utils/translations';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess: (data: UserRegistration) => void;
  language?: LanguageCode;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onRegisterSuccess,
  language = 'en',
}) => {
  const t = getTranslation(language);
  const [selectedRole, setSelectedRole] = useState<RegistrationRole>('employer');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('Sector 4 / Rohini');
  const [city, setCity] = useState('Delhi NCR');

  // Employer specifics
  const [entityType, setEntityType] = useState<'Individual Household' | 'Housing Society RWA' | 'Commercial Enterprise' | 'Event Organizer'>('Individual Household');
  const [primaryRequirement, setPrimaryRequirement] = useState('Home Repairs & Maintenance');

  // Employee specifics
  const [primaryTrade, setPrimaryTrade] = useState('Master Certified Electrician');
  const [secondaryTrade, setSecondaryTrade] = useState('Hydro Plumber');
  const [cooperativeSociety, setCooperativeSociety] = useState('Delhi Shramik Sahakari Samiti Ltd.');
  const [esramNumber, setEsramNumber] = useState('UAN-DL-9821-4402');
  const [experienceYears, setExperienceYears] = useState('8');
  const [expectedWage, setExpectedWage] = useState('350');

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const registrationData: UserRegistration = {
      role: selectedRole,
      name,
      phone,
      email,
      sector,
      city,
      entityType: selectedRole === 'employer' ? entityType : undefined,
      primaryRequirement: selectedRole === 'employer' ? primaryRequirement : undefined,
      primaryTrade: selectedRole === 'employee' ? primaryTrade : undefined,
      secondaryTrades: selectedRole === 'employee' ? [secondaryTrade] : undefined,
      cooperativeSociety: selectedRole === 'employee' ? cooperativeSociety : undefined,
      esramCardNumber: selectedRole === 'employee' ? esramNumber : undefined,
      experienceYears: selectedRole === 'employee' ? parseInt(experienceYears) : undefined,
      expectedHourlyWage: selectedRole === 'employee' ? parseInt(expectedWage) : undefined,
    };

    setIsSuccess(true);
    setTimeout(() => {
      onRegisterSuccess(registrationData);
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <BrutalModal
      isOpen={isOpen}
      onClose={onClose}
      title="Join RojgaarX Platform"
      subtitle="Register as an Employer (Hirer) or an Employee (Skilled Specialist)"
      titleBg="#06B6D4"
      maxWidth="lg"
    >
      {isSuccess ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="py-10 text-center space-y-3 bg-[#06B6D4] border-2 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          <CheckCircle2 className="w-12 h-12 mx-auto text-black animate-bounce" />
          <h3 className="font-display font-black text-2xl uppercase text-black">
            Registration Successful!
          </h3>
          <p className="text-xs font-bold text-neutral-800">
            Welcome aboard, <strong>{name}</strong>. Your profile has been registered as an{' '}
            <strong className="uppercase">{selectedRole}</strong> with 0% platform commission.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection Dual Cards */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-black block">
              Step 1: Select Your Registration Type *
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option 1: Employer */}
              <button
                type="button"
                onClick={() => setSelectedRole('employer')}
                className={`
                  p-3 border-2 border-black text-left transition-all cursor-pointer flex flex-col justify-between
                  ${
                    selectedRole === 'employer'
                      ? 'bg-[#06B6D4] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                      : 'bg-white hover:bg-neutral-50'
                  }
                `}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  {selectedRole === 'employer' && (
                    <BrutalBadge variant="cyan" size="xs">
                      SELECTED
                    </BrutalBadge>
                  )}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display font-black text-sm uppercase text-black">
                    Option 1: As an Employer
                  </h4>
                  <p className="text-[11px] font-bold text-neutral-700 leading-tight">
                    For Households, Society RWAs, Enterprises & Event Organizers hiring verified workers.
                  </p>
                </div>
              </button>

              {/* Option 2: Employee */}
              <button
                type="button"
                onClick={() => setSelectedRole('employee')}
                className={`
                  p-3 border-2 border-black text-left transition-all cursor-pointer flex flex-col justify-between
                  ${
                    selectedRole === 'employee'
                      ? 'bg-[#22D3EE] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                      : 'bg-white hover:bg-neutral-50'
                  }
                `}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black">
                    <HardHat className="w-4 h-4" />
                  </div>
                  {selectedRole === 'employee' && (
                    <BrutalBadge variant="cyan" size="xs">
                      SELECTED
                    </BrutalBadge>
                  )}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-display font-black text-sm uppercase text-black">
                    Option 2: As an Employee
                  </h4>
                  <p className="text-[11px] font-bold text-neutral-700 leading-tight">
                    For Labourers, Tradespeople & Multi-Skill Specialists. 100% direct pay, 0% cut.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Common Basic Details */}
          <div className="space-y-2 border-t-2 border-black pt-3">
            <span className="text-[10px] font-black uppercase text-neutral-600 block">
              Step 2: Contact Information
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-black block">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={selectedRole === 'employer' ? 'e.g. Vikram Singhania' : 'e.g. Rameshwar Sharma'}
                    className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none focus:bg-[#FFFDF9]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-black block">
                  Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-black block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black uppercase text-black block">
                  Sector / Local Colony
                </label>
                <input
                  type="text"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  placeholder="Sector 4 / Rohini"
                  className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Role-Specific Fields */}
          {selectedRole === 'employer' ? (
            <div className="space-y-2.5 border-t-2 border-black pt-3 bg-[#FFFDF9] p-3 border">
              <span className="text-[10px] font-black uppercase text-neutral-600 block">
                Step 3: Employer Entity Profile
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black block">
                    Entity Type
                  </label>
                  <select
                    value={entityType}
                    onChange={(e) => setEntityType(e.target.value as any)}
                    className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none"
                  >
                    <option value="Individual Household">Individual Household</option>
                    <option value="Housing Society RWA">Housing Society RWA</option>
                    <option value="Commercial Enterprise">Commercial Enterprise</option>
                    <option value="Event Organizer">Event Organizer</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black block">
                    Frequent Requirement
                  </label>
                  <input
                    type="text"
                    value={primaryRequirement}
                    onChange={(e) => setPrimaryRequirement(e.target.value)}
                    placeholder="e.g. Electrical, Plumbing, Event Catering"
                    className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2.5 border-t-2 border-black pt-3 bg-[#FFFDF9] p-3 border">
              <span className="text-[10px] font-black uppercase text-neutral-600 block">
                Step 3: Employee Trade & Cooperative Society Verification
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black block">
                    Primary Trade *
                  </label>
                  <select
                    value={primaryTrade}
                    onChange={(e) => setPrimaryTrade(e.target.value)}
                    className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none"
                  >
                    <option value="Master Certified Electrician">Master Certified Electrician</option>
                    <option value="Senior Hydro & Pipe Specialist">Plumber & Sanitation Specialist</option>
                    <option value="Master Architectural Joiner">Carpenter & Woodcraft</option>
                    <option value="Master Mason & Waterproofing">Masonry & Waterproofing</option>
                    <option value="Certified Caregiver & Nursing Aid">Caregiver & Elderly Aid</option>
                    <option value="Cooperative Catering Specialist">Catering & Event Chef</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black uppercase text-black block">
                    Secondary Trade (Multi-Skill Expert Combo)
                  </label>
                  <input
                    type="text"
                    value={secondaryTrade}
                    onChange={(e) => setSecondaryTrade(e.target.value)}
                    placeholder="e.g. Hydro Plumber / Solar Tech"
                    className="w-full bg-white border-2 border-black p-2 text-xs font-bold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-black block">
                    e-Shram Card UAN
                  </label>
                  <input
                    type="text"
                    value={esramNumber}
                    onChange={(e) => setEsramNumber(e.target.value)}
                    className="w-full bg-white border-2 border-black p-1.5 text-xs font-bold focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-black block">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    className="w-full bg-white border-2 border-black p-1.5 text-xs font-bold focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-black block">
                    Base Hourly Wage (₹)
                  </label>
                  <input
                    type="number"
                    value={expectedWage}
                    onChange={(e) => setExpectedWage(e.target.value)}
                    className="w-full bg-white border-2 border-black p-1.5 text-xs font-bold focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Platform Guarantee Footnote */}
          <div className="bg-[#FFF8D6] border border-black p-2 text-[11px] font-bold text-neutral-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-black shrink-0" />
            <span>
              CoOpConnect is governed by Labour Cooperative Federations. No private venture capital, no surge pricing, and no commission cuts.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2 border-t-2 border-black">
            <BrutalButton variant="white" size="sm" type="button" onClick={onClose}>
              Cancel
            </BrutalButton>
            <BrutalButton
              variant="cyan"
              size="md"
              type="submit"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Complete {selectedRole === 'employer' ? 'Employer' : 'Employee'} Registration
            </BrutalButton>
          </div>
        </form>
      )}
    </BrutalModal>
  );
};
