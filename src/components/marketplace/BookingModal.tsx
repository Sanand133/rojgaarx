import React, { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  ShieldCheck,
  AlertTriangle,
  CreditCard,
  Banknote,
  CheckCircle2,
  Sparkles,
  Mic,
  Square,
  Play,
  Pause,
  Trash2,
  Upload,
  Camera,
  Video,
  FileText,
  Image as ImageIcon,
  Plus,
  Minus,
  Building2,
  Home,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ServiceCategory,
  WorkerProfile,
  BookingDetails,
  LanguageCode,
  MediaAttachment,
} from '../../types';
import { BrutalModal } from '../common/BrutalModal';
import { BrutalButton } from '../common/BrutalButton';
import { BrutalBadge } from '../common/BrutalBadge';
import { SECTORS } from '../../data/mockData';
import { getTranslation } from '../../utils/translations';
import { CooperativeInvoiceModal } from './CooperativeInvoiceModal';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: ServiceCategory | null;
  worker: WorkerProfile | null;
  onBookingConfirmed: (booking: BookingDetails) => void;
  language: LanguageCode;
  initialHours?: number;
  initialTimeSlot?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  category,
  worker,
  onBookingConfirmed,
  language,
  initialHours = 2,
  initialTimeSlot = '11:00 AM - 01:00 PM',
}) => {
  const t = getTranslation(language);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [sector, setSector] = useState(SECTORS[0]);
  const [date, setDate] = useState('Today');
  
  // Hourly booking state
  const [bookingHours, setBookingHours] = useState<number>(initialHours);
  const [timeSlot, setTimeSlot] = useState(initialTimeSlot);
  
  // Reset or update hours when modal opens or initialHours changes
  useEffect(() => {
    if (initialHours) setBookingHours(initialHours);
  }, [initialHours, isOpen]);

  useEffect(() => {
    if (initialTimeSlot) setTimeSlot(initialTimeSlot);
  }, [initialTimeSlot, isOpen]);

  const [urgency, setUrgency] = useState<'Normal' | 'Urgent (Within 2 hrs)' | 'Emergency (Instant)'>('Normal');
  const [jobNotes, setJobNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Direct Cash to Worker' | 'Cooperative Escrow'>('UPI');
  const [isDispatching, setIsDispatching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Client Type: Household vs Institution (RWA / School / Hospital / Enterprise)
  const [clientType, setClientType] = useState<'Household' | 'Institution'>('Household');
  const [institutionName, setInstitutionName] = useState('');
  const [gstinNumber, setGstinNumber] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  // Audio recording simulation state
  const [isRecordingAudio, setIsRecordingAudio] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(0);
  const [hasAudioMemo, setHasAudioMemo] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const recordingTimerRef = useRef<any>(null);

  // Photos & Videos media attachments
  const [attachments, setAttachments] = useState<MediaAttachment[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Start audio recording simulation
  const startAudioRecording = () => {
    setIsRecordingAudio(true);
    setAudioSeconds(0);
    recordingTimerRef.current = setInterval(() => {
      setAudioSeconds((prev) => {
        if (prev >= 60) {
          stopAudioRecording();
          return 60;
        }
        return prev + 1;
      });
    }, 1000);
  };

  // Stop audio recording
  const stopAudioRecording = () => {
    setIsRecordingAudio(false);
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
    }
    setHasAudioMemo(true);
  };

  // Delete audio memo
  const deleteAudioMemo = () => {
    setHasAudioMemo(false);
    setAudioSeconds(0);
    setIsPlayingAudio(false);
  };

  // Handle manual file selection (photos/videos)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);

    const newAttachments: MediaAttachment[] = files.map((file, idx) => {
      const isVid = file.type.startsWith('video');
      return {
        id: `att-${Date.now()}-${idx}`,
        name: file.name,
        type: isVid ? 'video' : 'image',
        size: `${(file.size / 1024).toFixed(0)} KB`,
        url: URL.createObjectURL(file),
      };
    });

    setAttachments((prev) => [...prev, ...newAttachments]);
  };

  // Quick preset sample media
  const addPresetAttachment = (type: 'photo' | 'video') => {
    if (type === 'photo') {
      setAttachments((prev) => [
        ...prev,
        {
          id: `preset-${Date.now()}`,
          name: 'Bathroom_Ceiling_Seepage_Leak.jpg',
          type: 'image',
          size: '1.4 MB',
          url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=300&auto=format&fit=crop&q=80',
        },
      ]);
    } else {
      setAttachments((prev) => [
        ...prev,
        {
          id: `preset-${Date.now()}`,
          name: 'Fuse_Box_Sparking_AudioVideo.mp4',
          type: 'video',
          size: '4.8 MB',
          url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&auto=format&fit=crop&q=80',
        },
      ]);
    }
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };

  // Dynamic hourly financial calculations
  const effectiveHourlyRate = worker ? worker.hourlyWage : category ? category.baseHourlyRate : 350;
  const labourWage = effectiveHourlyRate * bookingHours;
  const welfareContribution = Math.round(labourWage * 0.05);
  const urgencyFee = urgency === 'Emergency (Instant)' ? 199 : urgency === 'Urgent (Within 2 hrs)' ? 99 : 0;
  const total = labourWage + welfareContribution + urgencyFee;
  const corporateSavings = Math.round(labourWage * 0.25);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !address) {
      alert(language === 'hi' ? 'कृपया अपना नाम, मोबाइल नंबर और पता दर्ज करें।' : 'Please fill in your name, contact phone, and delivery address.');
      return;
    }

    const newBooking: BookingDetails = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      serviceCategory: category ? category.name : worker ? worker.trade : 'General Trade',
      workerId: worker?.id,
      workerName: worker?.name,
      customerName,
      customerPhone,
      clientType,
      institutionName: clientType === 'Institution' ? institutionName : undefined,
      gstinNumber: clientType === 'Institution' ? gstinNumber : undefined,
      invoiceNumber: `RJX-INV-${Math.floor(100000 + Math.random() * 900000)}`,
      address,
      sector,
      date,
      timeSlot: `${timeSlot} (${bookingHours} ${bookingHours === 1 ? t.hourlyBooking?.hourUnit || 'hr' : t.hourlyBooking?.hoursUnit || 'hrs'})`,
      urgency,
      jobNotes: jobNotes || 'Standard cooperative dispatch requested.',
      hasAudioMemo,
      audioDurationSeconds: hasAudioMemo ? audioSeconds : undefined,
      mediaAttachments: attachments,
      labourWage,
      welfareContribution,
      materialHandlingFee: 0,
      totalEstimated: total,
      paymentMethod,
      status: 'Pending Dispatch',
      createdAt: new Date().toLocaleTimeString(),
      bookingHours,
      hourlyRate: effectiveHourlyRate,
    };

    setIsDispatching(true);
    setTimeout(() => {
      setConfirmedBooking(newBooking);
      onBookingConfirmed(newBooking);
      setIsDispatching(false);
      setIsSuccess(true);
    }, 1100);
  };

  const handleClose = () => {
    setIsDispatching(false);
    setIsSuccess(false);
    onClose();
  };

  const title = worker
    ? `${t.bookingModal.specialist}: ${worker.name}`
    : category
    ? `${t.bookingModal.serviceTrade}: ${category.name}`
    : t.bookingModal.title;

  return (
    <BrutalModal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      subtitle={t.bookingModal.fairWageNote || "Cooperative Fair Wage Standard • 0% Platform Cut"}
      titleBg="#06B6D4"
      maxWidth="xl"
    >
      {isDispatching ? (
        <div className="py-12 px-4 text-center space-y-5">
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-ping" />
            <div className="absolute -inset-3 rounded-full border border-cyan-500/20 animate-pulse" />
            <div className="w-16 h-16 rounded-3xl bg-slate-950 text-emerald-400 flex items-center justify-center shadow-xl border border-white/20">
              <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-display font-black text-slate-900 uppercase tracking-tight">
              {language === 'hi' ? 'सहकारी नेटवर्क पर अनुरोध भेजा जा रहा है...' : 'Broadcasting Order to Federation Network...'}
            </h3>
            <p className="text-xs font-semibold text-slate-600 max-w-sm mx-auto">
              {language === 'hi'
                ? 'ई-श्रम सत्यापन एवं 0% बिचौलिया कटौती गारंटी सुनिश्चित की जा रही है।'
                : 'Verifying e-Shram security credentials & locking in 100% direct artisan payout.'}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      ) : isSuccess ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-16 h-16 bg-[#06B6D4] border-[3px] border-black flex items-center justify-center mx-auto shadow-[4px_4px_0px_#000000]">
            <CheckCircle2 className="w-10 h-10 text-black stroke-[2.5]" />
          </div>

          <div className="space-y-1">
            <BrutalBadge variant="cyan" size="sm">
              {language === 'hi' ? 'लाइव रडार पर प्रसारित' : 'BOOKING BROADCASTED TO LIVE RADAR'}
            </BrutalBadge>
            <h3 className="font-display font-black text-2xl uppercase text-black">
              {t.bookingModal.bookingSuccess || 'Order Confirmed & Sent to Worker Pool!'}
            </h3>
            <p className="text-xs font-semibold text-neutral-700 max-w-sm mx-auto">
              {language === 'hi'
                ? `आपका अनुरोध ${sector} के पंजीकृत कारीगरों को भेजा जा चुका है।`
                : `Your booking request for ${bookingHours} hours is broadcasting to registered cooperative workers in ${sector}!`}
            </p>
          </div>

          <div className="bg-[#F4F1EA] border-2 border-black p-4 text-xs font-bold text-left space-y-1.5 max-w-sm mx-auto">
            <div className="flex justify-between">
              <span>Customer:</span>
              <span>{customerName}</span>
            </div>
            <div className="flex justify-between">
              <span>Service / Specialist:</span>
              <span>{worker?.name || category?.name}</span>
            </div>
            <div className="flex justify-between text-blue-900 font-black">
              <span>Duration & Slot:</span>
              <span>{bookingHours} {bookingHours === 1 ? 'Hour' : 'Hours'} • {timeSlot}</span>
            </div>
            {hasAudioMemo && (
              <div className="flex justify-between text-blue-800">
                <span>Voice Audio Note:</span>
                <span>Attached ({audioSeconds}s)</span>
              </div>
            )}
            {attachments.length > 0 && (
              <div className="flex justify-between text-purple-800">
                <span>Photos / Videos:</span>
                <span>{attachments.length} files attached</span>
              </div>
            )}
            <div className="flex justify-between border-t border-black pt-1">
              <span>Total Estimated:</span>
              <span className="font-black text-black text-sm">₹{total}</span>
            </div>
            <div className="flex justify-between text-neutral-600 text-[10px]">
              <span>5% Society Welfare Included:</span>
              <span>₹{welfareContribution}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 justify-center max-w-sm mx-auto">
            <BrutalButton
              variant="cyan"
              size="md"
              onClick={() => setShowInvoiceModal(true)}
              className="flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Official Tax Invoice & Voucher</span>
            </BrutalButton>
            <BrutalButton variant="black" size="md" onClick={handleClose}>
              Close & Return
            </BrutalButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Details */}
          <div className="space-y-2.5">
            <h4 className="font-display font-black text-xs uppercase text-black border-b-2 border-black pb-1 flex items-center justify-between">
              <span>1. Contact & Delivery Address</span>
              <span className="text-[10px] font-bold text-neutral-600">e-Shram Direct Dispatch</span>
            </h4>

            {/* Household vs Institution Toggle */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 border-2 border-black rounded-lg">
              <button
                type="button"
                onClick={() => setClientType('Household')}
                className={`flex-1 py-1.5 px-2.5 rounded text-[11px] font-black uppercase flex items-center justify-center gap-1.5 transition-all ${
                  clientType === 'Household'
                    ? 'bg-black text-white shadow-[2px_2px_0px_#06B6D4]'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Household / Resident</span>
              </button>
              <button
                type="button"
                onClick={() => setClientType('Institution')}
                className={`flex-1 py-1.5 px-2.5 rounded text-[11px] font-black uppercase flex items-center justify-center gap-1.5 transition-all ${
                  clientType === 'Institution'
                    ? 'bg-[#06B6D4] text-black border border-black shadow-[2px_2px_0px_#000000]'
                    : 'text-stone-700 hover:text-black'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Institution / RWA / Enterprise</span>
              </button>
            </div>

            {/* Institutional Inputs when selected */}
            {clientType === 'Institution' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-2.5 bg-cyan-50/70 border-2 border-cyan-400 rounded-lg">
                <div>
                  <label className="block text-[10px] font-black uppercase text-cyan-950 mb-1">
                    Institution / Society / RWA Name *
                  </label>
                  <input
                    type="text"
                    required={clientType === 'Institution'}
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    placeholder="e.g. Silver Arch Apartments RWA"
                    className="w-full px-2.5 py-1.5 bg-white border-2 border-black text-xs font-bold outline-none shadow-[2px_2px_0px_#000000]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-cyan-950 mb-1">
                    GSTIN / Society Registration ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={gstinNumber}
                    onChange={(e) => setGstinNumber(e.target.value)}
                    placeholder="e.g. 07AAAAA0000A1Z5"
                    className="w-full px-2.5 py-1.5 bg-white border-2 border-black text-xs font-bold outline-none shadow-[2px_2px_0px_#000000]"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-black uppercase text-black mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black" />
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full pl-8 pr-2.5 py-1.5 bg-[#F4F1EA] border-2 border-black text-xs font-bold outline-none focus:bg-white shadow-[2px_2px_0px_#000000]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-black mb-1">
                  Mobile Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black" />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+91 98100 12345"
                    className="w-full pl-8 pr-2.5 py-1.5 bg-[#F4F1EA] border-2 border-black text-xs font-bold outline-none focus:bg-white shadow-[2px_2px_0px_#000000]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-black uppercase text-black mb-1">
                  {t.bookingModal.address} *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Flat 401, Block B, Rainbow Residency"
                  className="w-full px-2.5 py-1.5 bg-[#F4F1EA] border-2 border-black text-xs font-bold outline-none focus:bg-white shadow-[2px_2px_0px_#000000]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-black mb-1">
                  Sector Cluster
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-2 py-1.5 bg-[#F4F1EA] border-2 border-black text-xs font-bold outline-none shadow-[2px_2px_0px_#000000]"
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

          {/* Section 2: Hourly Slot Duration & Fare Tuning */}
          <div className="bg-[#FFFDF9] border-2 border-black p-3 space-y-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between border-b-2 border-black pb-1.5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-black" />
                <h4 className="font-display font-black text-xs uppercase text-black">
                  2. {t.hourlyBooking?.title || 'Book in Hourly Slots'}
                </h4>
              </div>
              <span className="bg-[#22D3EE] border border-black px-1.5 py-0.2 text-[9px] font-black uppercase text-black">
                ₹{effectiveHourlyRate}/hr rate
              </span>
            </div>

            {/* Quick Duration Buttons */}
            <div>
              <label className="block text-[10px] font-black uppercase text-neutral-700 mb-1.5">
                Select Work Duration (Hours):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { hours: 1, label: t.hourlyBooking?.oneHour || '1 Hour (Quick Fix)' },
                  { hours: 2, label: t.hourlyBooking?.twoHours || '2 Hours (Standard Job)' },
                  { hours: 4, label: t.hourlyBooking?.fourHours || '4 Hours (Half Day)' },
                  { hours: 8, label: t.hourlyBooking?.eightHours || '8 Hours (Full Day)' },
                ].map((item) => (
                  <button
                    key={item.hours}
                    type="button"
                    onClick={() => setBookingHours(item.hours)}
                    className={`
                      p-2 border-2 border-black text-left transition-all cursor-pointer flex flex-col justify-between
                      ${
                        bookingHours === item.hours
                          ? 'bg-[#06B6D4] shadow-[2px_2px_0px_#000000] font-black scale-[1.01]'
                          : 'bg-white hover:bg-neutral-50 text-neutral-800'
                      }
                    `}
                  >
                    <span className="font-display font-black text-xs uppercase block">
                      {item.hours} {item.hours === 1 ? t.hourlyBooking?.hourUnit || 'hr' : t.hourlyBooking?.hoursUnit || 'hrs'}
                    </span>
                    <span className="text-[10px] text-neutral-600 block mt-0.5">
                      {item.label}
                    </span>
                    <span className="text-[11px] font-black text-black mt-1 block">
                      ₹{effectiveHourlyRate * item.hours}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Stepper for Any Hour Count */}
              <div className="mt-2 flex items-center justify-between bg-[#F4F1EA] border border-black p-2">
                <span className="text-[11px] font-black uppercase text-neutral-800">
                  Custom Duration:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBookingHours((prev) => Math.max(1, prev - 1))}
                    className="w-7 h-7 bg-white border border-black flex items-center justify-center font-black cursor-pointer hover:bg-neutral-100"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-display font-black text-sm px-2 min-w-[50px] text-center">
                    {bookingHours} {bookingHours === 1 ? t.hourlyBooking?.hourUnit || 'Hour' : t.hourlyBooking?.hoursUnit || 'Hours'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setBookingHours((prev) => Math.min(16, prev + 1))}
                    className="w-7 h-7 bg-white border border-black flex items-center justify-center font-black cursor-pointer hover:bg-neutral-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Time Slot & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div>
                <label className="block text-[10px] font-black uppercase text-neutral-700 mb-1">
                  {t.hourlyBooking?.slotTitle || 'Select Preferred Time Slot'}:
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-2 py-1.5 bg-white border-2 border-black text-xs font-bold outline-none shadow-[2px_2px_0px_#000000]"
                >
                  <option value="09:00 AM - 11:00 AM">{t.hourlyBooking?.timeSlotMorning || 'Morning (09:00 AM - 12:00 PM)'}</option>
                  <option value="11:00 AM - 01:00 PM">Midday (11:00 AM - 01:00 PM)</option>
                  <option value="02:00 PM - 04:00 PM">{t.hourlyBooking?.timeSlotAfternoon || 'Afternoon (12:00 PM - 04:00 PM)'}</option>
                  <option value="04:00 PM - 06:00 PM">{t.hourlyBooking?.timeSlotEvening || 'Evening (04:00 PM - 08:00 PM)'}</option>
                  <option value="06:00 PM - 08:00 PM">Night (06:00 PM - 08:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-neutral-700 mb-1">
                  Urgency Priority:
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value as any)}
                  className="w-full px-2 py-1.5 bg-white border-2 border-black text-xs font-bold outline-none shadow-[2px_2px_0px_#000000]"
                >
                  <option value="Normal">Normal Scheduled</option>
                  <option value="Urgent (Within 2 hrs)">Urgent (Within 2 hrs) +₹99</option>
                  <option value="Emergency (Instant)">Emergency (Instant Dispatch) +₹199</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Describe the Problem (Text, Audio Voice Memo, Photo/Video Upload) */}
          <div className="space-y-3 bg-[#FFFDF9] border-2 border-black p-3 shadow-[2px_2px_0px_#000000]">
            <div className="flex items-center justify-between border-b-2 border-black pb-1">
              <h4 className="font-display font-black text-xs uppercase text-black flex items-center gap-1.5">
                <span>3. Problem Diagnostics (Text + Voice + Media)</span>
              </h4>
              <span className="bg-[#22D3EE] text-black border border-black px-1.5 py-0.2 text-[9px] font-black uppercase">
                Zero Miscommunication
              </span>
            </div>

            {/* A. Text Description */}
            <div className="space-y-1">
              <label className="block text-[11px] font-black uppercase text-neutral-800">
                A. Problem Notes & Symptoms:
              </label>
              <textarea
                rows={2}
                value={jobNotes}
                onChange={(e) => setJobNotes(e.target.value)}
                placeholder={t.bookingModal.problemPlaceholder || "Describe what's wrong: e.g. Main MCB switches off whenever geyser starts, or master bathroom tap leaking profusely..."}
                className="w-full px-2.5 py-1.5 bg-[#F4F1EA] border-2 border-black text-xs font-bold outline-none focus:bg-white shadow-[2px_2px_0px_#000000]"
              />
            </div>

            {/* B. Voice Audio Note Recorder */}
            <div className="space-y-1.5 border-t border-black/20 pt-2">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-black uppercase text-neutral-800 flex items-center gap-1">
                  <Mic className="w-3.5 h-3.5 text-black" />
                  <span>B. Voice Memo (Record Your Issue in Local Language):</span>
                </label>
                {hasAudioMemo && (
                  <span className="bg-[#22D3EE] border border-black px-1.5 text-[9px] font-black uppercase">
                    Audio Recorded ({audioSeconds}s)
                  </span>
                )}
              </div>

              {isRecordingAudio ? (
                <div className="bg-[#FF5757]/10 border-2 border-[#FF5757] p-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5757] animate-ping" />
                    <span className="text-xs font-black text-[#FF5757] uppercase">
                      Recording Voice Memo... 00:{audioSeconds < 10 ? `0${audioSeconds}` : audioSeconds}
                    </span>
                    <div className="flex items-center gap-0.5 ml-2">
                      {[12, 24, 16, 28, 8, 20, 14, 26].map((h, i) => (
                        <motion.span
                          key={i}
                          className="w-1 bg-[#FF5757]"
                          animate={{ height: [8, h, 8] }}
                          transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.06 }}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={stopAudioRecording}
                    className="bg-[#FF5757] text-white border-2 border-black px-2.5 py-1 text-xs font-black uppercase cursor-pointer flex items-center gap-1 shadow-[2px_2px_0px_#000000]"
                  >
                    <Square className="w-3 h-3 fill-white" />
                    Stop & Save
                  </button>
                </div>
              ) : hasAudioMemo ? (
                <div className="bg-[#06B6D4]/20 border-2 border-black p-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-8 h-8 bg-black text-white border border-black flex items-center justify-center cursor-pointer"
                    >
                      {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                    <div>
                      <span className="text-xs font-black text-black uppercase block">
                        Voice_Note_{audioSeconds}s.wav
                      </span>
                      <span className="text-[10px] text-neutral-600 font-bold">
                        {isPlayingAudio ? 'Playing simulated playback...' : 'Voice recorded successfully'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={deleteAudioMemo}
                    className="p-1.5 bg-white border border-black hover:bg-red-50 text-red-700 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={startAudioRecording}
                  className="w-full py-2 bg-white hover:bg-neutral-50 border-2 border-dashed border-black font-display font-black text-xs uppercase flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-[1.5px_1.5px_0px_#000000]"
                >
                  <Mic className="w-4 h-4 text-[#FF5757]" />
                  <span>{t.bookingModal.recordVoice || 'Tap to Record Voice Audio Note (60s max)'}</span>
                </button>
              )}
            </div>

            {/* C. Photo & Video Upload */}
            <div className="space-y-1.5 border-t border-black/20 pt-2">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-black uppercase text-neutral-800 flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5 text-black" />
                  <span>C. Photos / Short Video Clips:</span>
                </label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => addPresetAttachment('photo')}
                    className="text-[9px] font-black uppercase bg-[#F4F1EA] hover:bg-[#06B6D4] border border-black px-1.5 py-0.5 cursor-pointer"
                  >
                    + Sample Leak Photo
                  </button>
                  <button
                    type="button"
                    onClick={() => addPresetAttachment('video')}
                    className="text-[9px] font-black uppercase bg-[#F4F1EA] hover:bg-[#FF90E8] border border-black px-1.5 py-0.5 cursor-pointer"
                  >
                    + Sample Spark Video
                  </button>
                </div>
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,video/*"
                multiple
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-black bg-white hover:bg-neutral-50 p-2.5 text-center cursor-pointer transition-colors shadow-[1.5px_1.5px_0px_#000000]"
              >
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-neutral-700">
                  <Upload className="w-4 h-4 text-black" />
                  <span>Drag & Drop or Click to Attach Media</span>
                </div>
              </div>

              {attachments.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  {attachments.map((file) => (
                    <div
                      key={file.id}
                      className="bg-white border-2 border-black p-1.5 flex items-center justify-between gap-2 shadow-[1.5px_1.5px_0px_#000000]"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        {file.type === 'video' ? (
                          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-[9px] shrink-0">
                            <Video className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-8 h-8 object-cover border border-black shrink-0"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div className="overflow-hidden">
                          <span className="text-[11px] font-black text-black truncate block">
                            {file.name}
                          </span>
                          <span className="text-[9px] font-bold text-neutral-500 uppercase">
                            {file.type} • {file.size}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeAttachment(file.id)}
                        className="text-neutral-500 hover:text-red-700 p-1 cursor-pointer shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Transparent Fair Wage & Hourly Fare Calculator */}
          <div className="bg-[#06B6D4] border-2 border-black p-3 space-y-1.5 shadow-[3px_3px_0px_#000000]">
            <div className="flex items-center justify-between border-b-2 border-black pb-1">
              <span className="font-display font-black text-xs uppercase text-black">
                {t.hourlyBooking?.fareCalculation || 'Transparent Cooperative Pricing & Hourly Fare'}
              </span>
              <span className="text-[9px] font-black bg-black text-white px-1.5 py-0.2">
                0% CORPORATE APP COMMISSION
              </span>
            </div>

            <div className="space-y-0.5 text-xs font-bold text-black">
              <div className="flex justify-between">
                <span>
                  {t.hourlyBooking?.baseWageLabel || 'Base Labour Wage'} (₹{effectiveHourlyRate}/hr × {bookingHours} {bookingHours === 1 ? 'hr' : 'hrs'}):
                </span>
                <span className="font-display font-black">₹{labourWage}</span>
              </div>
              <div className="flex justify-between text-neutral-900">
                <span>
                  {t.hourlyBooking?.welfareLabel || '5% Cooperative Worker Welfare & Pension'}:
                </span>
                <span>+₹{welfareContribution}</span>
              </div>
              {urgencyFee > 0 && (
                <div className="flex justify-between text-[#FF5757]">
                  <span>Urgency Priority Surcharge ({urgency}):</span>
                  <span>+₹{urgencyFee}</span>
                </div>
              )}
              <div className="flex justify-between text-green-950 font-bold">
                <span>Middleman Brokerage / Platform Cut:</span>
                <span className="font-black text-green-900">₹0.00 (Saved ₹{corporateSavings})</span>
              </div>
              <div className="flex justify-between text-sm font-black pt-1.5 border-t-2 border-black">
                <span>{t.hourlyBooking?.totalLabel || 'Total Payable at Completion'}:</span>
                <span className="font-display text-lg text-black bg-white px-2 py-0.5 border border-black shadow-[1.5px_1.5px_0px_#000000]">
                  ₹{total}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase text-black">
              Payment Method:
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs font-bold">
              {[
                { id: 'UPI', label: 'Direct UPI (GPay/PhonePe)', icon: <CreditCard className="w-3.5 h-3.5" /> },
                { id: 'Direct Cash to Worker', label: 'Cash to Worker', icon: <Banknote className="w-3.5 h-3.5" /> },
                { id: 'Cooperative Escrow', label: 'Cooperative Escrow', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPaymentMethod(m.id as any)}
                  className={`
                    p-2 border-2 border-black flex flex-col items-center justify-center gap-1 text-center cursor-pointer transition-all
                    ${
                      paymentMethod === m.id
                        ? 'bg-[#06B6D4] shadow-[2px_2px_0px_#000000] font-black'
                        : 'bg-white hover:bg-neutral-50'
                    }
                  `}
                >
                  {m.icon}
                  <span className="text-[10px] leading-tight">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <BrutalButton
            variant="cyan"
            size="md"
            fullWidth
            type="submit"
            icon={<Sparkles className="w-4 h-4" />}
          >
            {t.bookingModal.confirmBooking} ({bookingHours}h • ₹{total})
          </BrutalButton>
        </form>
      )}

      {/* Cooperative Tax Invoice / Printable Digital Voucher Modal */}
      <CooperativeInvoiceModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        booking={confirmedBooking}
        worker={worker || undefined}
        category={category || undefined}
        language={language}
      />
    </BrutalModal>
  );
};
