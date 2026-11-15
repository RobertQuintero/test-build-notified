"use client";
import { siteConfig } from "@/lib/siteConfig";
import { useState } from "react";

export default function Footer() {
  const [filingChecked, setFilingChecked] = useState(false);
  const [newsChecked, setNewsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    alert(`Subscribed ${email}`);
  };

    return (
    <footer className="w-full bg-linear-to-r from-sky-900 via-sky-950 to-slate-950 text-slate-200 py-14 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Main 3-Column Grid */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] lg:gap-0 md:gap-8 gap-16">
          {/* Column 1: Contact Us */}
          <div>
            <h3 className="text-base font-medium tracking-wider uppercase text-slate-300 mb-5">
                CONTACT US
            </h3>
            <div className="text-sm leading-relaxed text-slate-300 space-y-0.5 mb-6">
              <p>{siteConfig.contacts.address}</p>
              <p>{siteConfig.contacts.address2}</p>
              <p>{siteConfig.contacts.address3}</p>
            </div>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${siteConfig.contacts.telephone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-white transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                <span>{siteConfig.contacts.telephone}</span>
              </a>
              <a
                href={siteConfig.contacts.emailLink}
                className="flex items-center gap-2.5 text-slate-200 hover:text-white uppercase text-xs tracking-wider font-medium transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>SEND EMAIL</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-medium tracking-wider uppercase text-slate-300 mb-5">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
              <li>
                <a
                  href={siteConfig.quicklinks.informationrequestform.href}
                  className="text-slate-200 hover:text-white transition"
                >
                    {siteConfig.quicklinks.informationrequestform.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Investor Email Alerts */}
          <div >
            <h3 className="text-base font-medium tracking-wider uppercase text-slate-300 mb-5">
              INVESTOR EMAIL ALERTS
            </h3>
            <p className="text-xs text-slate-300 mb-2">Required fields denoted by an asterisk (*).</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Alert Type Checkboxes */}
              <div>
                <p className="text-xs text-slate-300 mb-2">Alert type *</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 text-xs text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filingChecked}
                      onChange={(e) => setFilingChecked(e.target.checked)}
                      className="w-3.5 h-3.5 rounded-none border-slate-300 bg-white text-[#0a3656] focus:ring-0"
                    />
                    <span>Filing Updates</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-xs text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newsChecked}
                      onChange={(e) => setNewsChecked(e.target.checked)}
                      className="w-3.5 h-3.5 rounded-none border-slate-300 bg-white text-[#0a3656] focus:ring-0"
                    />
                    <span>Alert type *</span>
                  </label>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs text-slate-200 mb-1.5">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-sm h-10 px-3 bg-white text-slate-900 text-sm focus:outline-none"
                />
              </div>

              {/* Agree Checkbox */}
              <div>
                <label className="flex items-center gap-2.5 text-xs text-slate-200 cursor-pointer mb-2">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-3.5 h-3.5 rounded-none border-slate-300 bg-white text-[#0a3656] focus:ring-0"
                  />
                  <span>Agree</span>
                </label>
                <p className="text-sm leading-relaxed text-slate-300 pl-6">
                  Checking this box indicates your consent to the Personal Information Cross-Border Transfer Authorization and your subscription to Investor Email Alert updates from the Company Investor Relations website.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2 pl-6">
                <button
                  type="submit"
                  className="bg-[#6b7278] hover:bg-[#5a6065] text-white text-xs font-medium tracking-wider uppercase px-10 py-3 transition cursor-pointer"
                >
                  SUBMIT
                </button>
              </div>

              {/* Unsubscribe Link */}
              <div className="pt-1 pl-6">
                <a
                  href="/unsubscribe"
                  className="text-[10px] tracking-wider uppercase text-slate-300 hover:text-white transition"
                >
                  UNSUBSCRIBE
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-16 pt-4">
          <p className="text-xs text-slate-300">{siteConfig.contacts.rights}</p>
        </div>
      </div>
    </footer>
  );
};
