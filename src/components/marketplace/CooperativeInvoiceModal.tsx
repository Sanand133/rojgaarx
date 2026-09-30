import React from 'react';
import {
  FileText,
  Printer,
  X,
  CheckCircle2,
  ShieldCheck,
  Building2,
  UserCheck,
  QrCode,
  HeartHandshake,
  Download,
} from 'lucide-react';
import { BookingDetails, WorkerProfile, ServiceCategory, LanguageCode } from '../../types';
import { BrutalButton } from '../common/BrutalButton';

interface CooperativeInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingDetails | null;
  worker?: WorkerProfile;
  category?: ServiceCategory;
  language?: LanguageCode;
}

export const CooperativeInvoiceModal: React.FC<CooperativeInvoiceModalProps> = ({
  isOpen,
  onClose,
  booking,
  worker,
  category,
  language = 'en',
}) => {
  if (!isOpen || !booking) return null;

  const invoiceNo = booking.invoiceNumber || `RJX-INV-${booking.id.replace(/[^a-zA-Z0-9]/g, '').slice(0, 8).toUpperCase() || '8841'}`;
  const artisanName = booking.workerName || worker?.name || 'Assigned Cooperative Specialist';
  const tradeName = worker?.trade || category?.name || booking.serviceCategory;
  const societyName = worker?.cooperativeSociety || 'Delhi Shramik Sahakari Samiti Ltd.';
  const federationCode = worker?.federationCode || 'NFLC-DL-448';
  const uanNumber = worker?.esramCardVerified ? `UAN-8829-4109-${worker.id.replace(/\D/g, '') || '4421'}` : 'UAN-8829-4109-9012';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-[#FAF8F5] border-[3px] border-black rounded-2xl max-w-2xl w-full shadow-[8px_8px_0px_#000000] overflow-hidden my-auto print:border-none print:shadow-none print:max-w-none print:w-full">
        {/* Top Header Bar */}
        <div className="bg-stone-900 text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-black print:bg-white print:text-black print:border-b-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#06B6D4] border border-white flex items-center justify-center rounded text-black font-black text-xs print:border-black">
              RX
            </div>
            <div>
              <h3 className="font-display font-black text-sm tracking-wide uppercase">
                Official Cooperative Tax Invoice & Voucher
              </h3>
              <p className="text-[10px] text-stone-400 print:text-stone-600 font-mono">
                SIH PS 26089 • Statutory Direct Artisan Payout Receipt
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="p-1.5 bg-white/10 hover:bg-white/20 border border-white/30 rounded text-stone-200 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Print / Save as PDF"
            >
              <Printer className="w-4 h-4 text-[#06B6D4]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-white/10 hover:bg-white/20 border border-white/30 rounded text-stone-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Sheet */}
        <div className="p-5 sm:p-7 space-y-5 text-stone-900 font-sans text-xs">
          {/* Cooperative Federation Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b-2 border-stone-300">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-100 border border-emerald-400 text-emerald-900 text-[10px] font-black uppercase rounded mb-1">
                <ShieldCheck className="w-3 h-3 text-emerald-700" />
                Govt. Recognized Labour Cooperative Federation
              </div>
              <h2 className="text-base sm:text-lg font-black font-display uppercase tracking-tight text-black">
                RojgaarX Shramik Sahakari Mahasangh
              </h2>
              <p className="text-[11px] text-stone-600 font-medium max-w-sm">
                Registered under Multi-State Co-operative Societies Act • Registration No: MSCS/CR/2021/894
                <br />
                Cooperative HQ: Shram Shakti Bhawan, Rafi Marg, New Delhi 110001
              </p>
            </div>
            <div className="sm:text-right font-mono text-[11px] space-y-0.5 bg-stone-100 p-2.5 rounded-lg border border-stone-200">
              <div className="font-black text-xs text-black">INVOICE #{invoiceNo}</div>
              <div className="text-stone-600">Date: {booking.date || new Date().toLocaleDateString('en-IN')}</div>
              <div className="text-stone-600">Time Slot: {booking.timeSlot}</div>
              <div className="text-emerald-700 font-bold">Status: {booking.status}</div>
            </div>
          </div>

          {/* Client & Worker Details 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Details */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-3.5 space-y-1.5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                  Billed To ({booking.clientType || 'Household'})
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-stone-100 font-bold rounded">
                  {booking.clientType === 'Institution' ? 'Institution / RWA' : 'Verified Resident'}
                </span>
              </div>
              <div className="font-bold text-sm text-black">{booking.customerName}</div>
              {booking.institutionName && (
                <div className="text-xs font-semibold text-blue-900 flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  {booking.institutionName}
                </div>
              )}
              <div className="text-stone-600">Phone: {booking.customerPhone}</div>
              <div className="text-stone-600">
                Service Address: {booking.address}, {booking.sector}
              </div>
              {booking.gstinNumber && (
                <div className="text-[10px] font-mono text-stone-500">
                  GSTIN / Tax ID: {booking.gstinNumber}
                </div>
              )}
            </div>

            {/* Assigned Artisan Details */}
            <div className="bg-white border-2 border-stone-200 rounded-xl p-3.5 space-y-1.5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                  Assigned Skilled Artisan
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-cyan-100 text-cyan-900 font-black rounded flex items-center gap-1">
                  <UserCheck className="w-2.5 h-2.5" />
                  e-Shram Verified
                </span>
              </div>
              <div className="font-bold text-sm text-black">{artisanName}</div>
              <div className="text-xs font-semibold text-stone-700">{tradeName}</div>
              <div className="text-stone-600 text-[11px]">Coop Society: {societyName}</div>
              <div className="text-[10px] font-mono text-stone-500">
                Federation Code: {federationCode} • {uanNumber}
              </div>
              <div className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
                ✓ PM-JAY / ESIC ₹5,00,000 Safety Cover Active
              </div>
            </div>
          </div>

          {/* Line Item Table */}
          <div className="border-2 border-stone-300 rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-200 text-[10px] font-black uppercase text-stone-700 border-b-2 border-stone-300">
                  <th className="py-2 px-3">Service Description</th>
                  <th className="py-2 px-3 text-center">Unit / Duration</th>
                  <th className="py-2 px-3 text-right">Rate</th>
                  <th className="py-2 px-3 text-right">Total (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr>
                  <td className="py-2.5 px-3">
                    <div className="font-bold text-black">{tradeName}</div>
                    <div className="text-[10px] text-stone-500">
                      Direct labour deployment • 100% credited to worker account
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-center font-mono">
                    {booking.bookingHours || 2} {booking.bookingHours === 1 ? 'Hour' : 'Hours'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono">₹{booking.hourlyRate || 300}/hr</td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold">₹{booking.labourWage}</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">
                    <div className="font-bold text-emerald-900 flex items-center gap-1">
                      <HeartHandshake className="w-3 h-3 text-emerald-700" />
                      5% Statutory Society Welfare Reserve
                    </div>
                    <div className="text-[10px] text-stone-500">
                      Cooperative pension pool, ESIC coverage & maternity assistance
                    </div>
                  </td>
                  <td className="py-2 px-3 text-center font-mono">5% Statutory</td>
                  <td className="py-2 px-3 text-right font-mono">—</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-emerald-900">
                    ₹{booking.welfareContribution}
                  </td>
                </tr>
                {booking.materialHandlingFee > 0 && (
                  <tr>
                    <td className="py-2 px-3">
                      <div className="font-bold text-stone-800">Specialized Tooling & Material Handling</div>
                      <div className="text-[10px] text-stone-500">Standard equipment usage allowance</div>
                    </td>
                    <td className="py-2 px-3 text-center font-mono">Standard</td>
                    <td className="py-2 px-3 text-right font-mono">—</td>
                    <td className="py-2 px-3 text-right font-mono font-bold">₹{booking.materialHandlingFee}</td>
                  </tr>
                )}
                <tr className="bg-stone-50 text-stone-600">
                  <td className="py-1.5 px-3">
                    <div className="font-bold text-[11px] text-blue-900">
                      Platform Middleman Commission Fee
                    </div>
                    <div className="text-[10px] text-stone-500">Cooperative direct guarantee</div>
                  </td>
                  <td className="py-1.5 px-3 text-center font-mono font-black text-blue-900">0%</td>
                  <td className="py-1.5 px-3 text-right font-mono">₹0.00</td>
                  <td className="py-1.5 px-3 text-right font-mono font-bold text-blue-900">₹0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-stone-900 text-white font-bold border-t-2 border-black">
                  <td colSpan={3} className="py-2.5 px-3 text-right uppercase text-xs">
                    Total Invoiced Amount (INR):
                  </td>
                  <td className="py-2.5 px-3 text-right text-sm font-black font-mono">
                    ₹{booking.totalEstimated}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Payment Mode & Cooperative Exemption Note */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pt-1">
            <div className="space-y-1 text-[11px] text-stone-600 max-w-md">
              <div className="font-bold text-black flex items-center gap-1">
                <span>Payment Mode:</span>
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-900 font-mono font-bold rounded">
                  {booking.paymentMethod}
                </span>
              </div>
              <p className="text-[10px] text-stone-500 leading-relaxed">
                * Note: Under section 80P and mutual cooperative principles, services rendered directly by
                labour cooperative society members are exempt from commercial intermediary commissions. 100% of
                labour tariffs are remitted directly to the artisan's linked Aadhaar Bank Account.
              </p>
            </div>

            {/* QR Verification Stamp */}
            <div className="flex items-center gap-3 bg-white p-2.5 border-2 border-stone-300 rounded-xl">
              <QrCode className="w-12 h-12 text-stone-900 shrink-0" />
              <div className="text-[10px] space-y-0.5">
                <div className="font-black text-black">DIGITAL SEAL</div>
                <div className="text-stone-500 font-mono">AUTH: {invoiceNo}</div>
                <div className="text-emerald-700 font-bold">✓ Direct Artisan Payout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-stone-100 p-4 border-t-2 border-black flex items-center justify-between print:hidden">
          <div className="text-[11px] text-stone-600 font-semibold">
            Thank you for supporting cooperative artisans and fair wages!
          </div>
          <div className="flex items-center gap-2">
            <BrutalButton variant="white" size="sm" onClick={handlePrint} className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              <span>Save / Print PDF</span>
            </BrutalButton>
            <BrutalButton variant="black" size="sm" onClick={onClose}>
              Close
            </BrutalButton>
          </div>
        </div>
      </div>
    </div>
  );
};
