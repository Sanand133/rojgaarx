export type PortalTab = 'marketplace' | 'worker' | 'admin';

export type LanguageCode = 'en' | 'hi' | 'ta' | 'mr';

export interface ServiceCategory {
  id: string;
  name: string;
  hindiName: string;
  tamilName: string;
  marathiName: string;
  iconName: string;
  badge: string;
  tagline: string;
  description: string;
  baseHourlyRate: number;
  fixedRateEstimate: number;
  welfareContribution: number; // 5% society fund
  emergencyAvailable: boolean;
  color: string;
  bgHex: string;
  accentHex: string;
  popularTasks: string[];
}

export interface WorkerReview {
  id: string;
  author: string;
  sector: string;
  date: string;
  rating: number;
  comment: string;
  tradeWorked: string;
  verifiedBookingId: string;
  subRatings?: {
    punctuality: number;
    workmanship: number;
    fairPricing: number;
    safetyCleanliness: number;
  };
  cooperativeBadges?: string[];
  helpfulCount?: number;
  verifiedResident?: boolean;
}

export interface WorkerPortfolioItem {
  id: string;
  title: string;
  image: string;
  description: string;
  tag: string;
}

export interface WorkerProfile {
  id: string;
  name: string;
  hindiName?: string;
  avatarUrl: string;
  trade: string;
  serviceCategoryId: string;
  cooperativeSociety: string;
  federationCode: string;
  experienceYears: number;
  rating: number;
  totalReviews: number;
  completedJobsCount: number;
  esramCardVerified: boolean;
  insuranceCoverAmount: number; // e.g., 500000 (ESIC/PM-JAY)
  hourlyWage: number;
  bio: string;
  specialties: string[];
  languages: string[];
  badges: string[];
  locationSector: string;
  isAvailableNow: boolean;
  distanceKm: number; // Live distance for radius meter
  ratingsBreakdown?: {
    punctuality: number;
    workmanship: number;
    fairPricing: number;
    safetyCleanliness: number;
    fiveStarPercent: number;
  };
  reviews?: WorkerReview[];
  portfolio?: WorkerPortfolioItem[];
}

export interface ComboExpert {
  id: string;
  name: string;
  hindiName?: string;
  avatarUrl: string;
  comboTrades: string[];
  comboTitle: string;
  cooperativeSociety: string;
  federationCode: string;
  experienceYears: number;
  rating: number;
  totalReviews: number;
  completedCombosCount: number;
  hourlyWage: number;
  originalSeparateWage: number;
  savingsPercent: number;
  bio: string;
  specialties: string[];
  badges: string[];
  locationSector: string;
  distanceKm: number;
  popularCombos: string[];
}

export interface MediaAttachment {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  size: string;
  previewThumbnail?: string;
}

export interface BookingDetails {
  id: string;
  serviceCategory: string;
  workerId?: string;
  workerName?: string;
  customerName: string;
  customerPhone: string;
  address: string;
  sector: string;
  date: string;
  timeSlot: string;
  urgency: 'Normal' | 'Urgent (Within 2 hrs)' | 'Emergency (Instant)';
  jobNotes: string;
  hasAudioMemo?: boolean;
  audioDurationSeconds?: number;
  mediaAttachments?: MediaAttachment[];
  bookingHours?: number;
  hourlyRate?: number;
  labourWage: number;
  welfareContribution: number;
  materialHandlingFee: number;
  totalEstimated: number;
  clientType?: 'Household' | 'Institution';
  institutionName?: string;
  gstinNumber?: string;
  invoiceNumber?: string;
  paymentMethod: 'UPI' | 'Direct Cash to Worker' | 'Cooperative Escrow';
  status: 'Pending Dispatch' | 'Assigned' | 'In Progress' | 'Completed';
  createdAt: string;
}

export interface TenderBid {
  id: string;
  tenderId: string;
  bidderName: string;
  bidderRole: string;
  avatarUrl: string;
  societyName: string;
  federationCode: string;
  bidAmount: number;
  experienceYears: number;
  rating: number;
  totalTendersWon: number;
  proposedTurnaround: string;
  proposedPlan: string;
  inclusions: string[];
  placedAt: string;
  isAwarded?: boolean;
}

export interface TenderPost {
  id: string;
  title: string;
  authorName: string;
  authorRole: 'Employer' | 'Household' | 'Society RWA' | 'Enterprise';
  authorPhone: string;
  category: string;
  tradeTags?: string[];
  requirements?: string[];
  description: string;
  locationSector: string;
  guestCount?: number;
  targetBudget: number;
  postedTime: string;
  eventDate: string;
  status: 'Open for Bids' | 'Tender Awarded' | 'Completed';
  bids: TenderBid[];
  awardedBidId?: string;
}

export type RegistrationRole = 'employer' | 'employee';

export interface UserRegistration {
  role: RegistrationRole;
  name: string;
  phone: string;
  email?: string;
  sector: string;
  city: string;
  // Employer specific
  entityType?: 'Individual Household' | 'Housing Society RWA' | 'Commercial Enterprise' | 'Event Organizer';
  primaryRequirement?: string;
  // Employee specific
  primaryTrade?: string;
  secondaryTrades?: string[];
  cooperativeSociety?: string;
  esramCardNumber?: string;
  experienceYears?: number;
  expectedHourlyWage?: number;
}

export interface JobRadarRequest {
  id: string;
  title: string;
  trade: string;
  serviceCategoryId: string;
  customerName: string;
  location: string;
  sector: string;
  distanceKm: number;
  payout: number;
  urgency: 'Standard' | 'High' | 'Emergency';
  scheduledTime: string;
  description: string;
  timestamp: string;
  status: 'incoming' | 'accepted' | 'declined' | 'completed';
}

export interface WelfareStats {
  todayEarnings: number;
  weekEarnings: number;
  pendingPayout: number;
  coopSavingsFundBalance: number;
  emergencyHealthcareCover: number;
  societyDividendShare: number;
  societyPensionPoints: number;
}

export interface AIAllocationForecast {
  id: string;
  sector: string;
  trade: string;
  reason: string;
  expectedDemandSpike: string;
  allocatedWorkersCount: number;
  recommendedSurgeUnits: number;
  weatherFactor?: string;
  status: 'Auto-Allocated' | 'Pending Human Signoff' | 'Rebalancing';
}

export interface DisputeRecord {
  id: string;
  workerName: string;
  customerName: string;
  service: string;
  issue: string;
  severity: 'Low' | 'Medium' | 'Critical (Safety)';
  date: string;
  status: 'Open Grievance' | 'Arbitration Pending' | 'Resolved';
  rating: number;
}

export interface CooperativeSociety {
  id: string;
  name: string;
  federation: string;
  code: string;
  membersCount: number;
  established: number;
  coverageArea: string;
  auditScore: string;
}
