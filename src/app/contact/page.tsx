"use client";

import { IMAGES } from "@/lib/constants";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector("button");
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = "SENDING...";
      btn.classList.add("opacity-70");
      setTimeout(() => {
        btn.innerText = "ENQUIRY SENT";
        btn.classList.remove("bg-primary");
        btn.classList.add("bg-[#2D6A4F]");
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove("bg-[#2D6A4F]");
          btn.classList.add("bg-primary");
          btn.classList.remove("opacity-70");
          e.currentTarget.reset();
        }, 3000);
      }, 1500);
    }
  };

  return (
    <>
      {/* Hero Header */}
      <header className="max-w-container-max mx-auto px-gutter pt-xl pb-lg text-center">
        <p className="font-label-caps text-label-caps text-secondary mb-base">PARTNERSHIP ENQUIRIES</p>
        <h1 className="font-h1-desktop text-h1-desktop text-primary max-w-2xl mx-auto">
          Get In Touch &mdash; We&apos;re Here to Help
        </h1>
        <div className="w-24 h-px bg-secondary-fixed mx-auto mt-md" />
      </header>

      {/* Two Column Content */}
      <section className="max-w-container-max mx-auto px-gutter pb-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-md md:p-lg luxury-shadow border-t-2 border-secondary">
            <h2 className="font-h3-desktop text-h3-desktop text-primary mb-md">Agent Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">FULL NAME</label>
                  <input
                    className="w-full bg-background border border-primary/20 rounded-xl px-md py-sm focus:ring-1 focus:ring-secondary focus:border-secondary-fixed transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">AGENCY NAME</label>
                  <input
                    className="w-full bg-background border border-primary/20 rounded-xl px-md py-sm focus:ring-1 focus:ring-secondary focus:border-secondary-fixed transition-all outline-none"
                    placeholder="Global Travels Ltd"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">PHONE NUMBER</label>
                  <input
                    className="w-full bg-background border border-primary/20 rounded-xl px-md py-sm focus:ring-1 focus:ring-secondary focus:border-secondary-fixed transition-all outline-none"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">EMAIL ADDRESS</label>
                  <input
                    className="w-full bg-background border border-primary/20 rounded-xl px-md py-sm focus:ring-1 focus:ring-secondary focus:border-secondary-fixed transition-all outline-none"
                    placeholder="agent@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">MESSAGE</label>
                <textarea
                  className="w-full bg-background border border-primary/20 rounded-xl px-md py-sm focus:ring-1 focus:ring-secondary focus:border-secondary-fixed transition-all outline-none resize-none"
                  placeholder="Tell us about your client's requirements..."
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-button text-button py-md rounded-full hover:bg-primary-container transition-all duration-300 shadow-lg active:scale-95"
              >
                SEND ENQUIRY
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-lg">
            <div className="space-y-md">
              {[
                { icon: "call", label: "PHONE", value: "+91 484 234 5678", bg: "bg-primary-fixed", color: "text-primary" },
                { icon: "chat", label: "WHATSAPP", value: "+91 98950 00000", bg: "bg-secondary-fixed", color: "text-secondary" },
                { icon: "mail", label: "EMAIL", value: "partners@guardiansholiday.com", bg: "bg-primary-fixed", color: "text-primary" },
                { icon: "location_on", label: "KERALA OFFICE", value: "Suite 402, Marine Drive Tower,\nKochi, Kerala 682031, India", bg: "bg-surface-container-high", color: "text-on-surface-variant" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-md">
                  <div className={`${item.bg} p-sm rounded-lg ${item.color}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-primary">{item.label}</h4>
                    <p className="font-body-lg text-body-lg text-on-surface whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative w-full aspect-video bg-surface-container rounded-xl overflow-hidden border-2 border-secondary/20 shadow-inner group">
              <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-500" />
              <img
                className="w-full h-full object-cover"
                src={IMAGES.CONTACT_MAP}
                alt="Map of Kochi, Kerala"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-secondary rounded-full animate-ping absolute opacity-50" />
                <span
                  className="material-symbols-outlined text-secondary text-3xl relative z-10"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              </div>
              <div className="absolute bottom-sm left-sm bg-white/90 backdrop-blur px-sm py-xs rounded-lg text-label-caps text-primary shadow-sm">
                OFFICE LOCATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-primary py-xl text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed-dim via-transparent to-transparent" />
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          <h2 className="font-h2-desktop text-h2-desktop mb-lg">Prefer to talk? Call us directly</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-md">
            <a
              className="flex items-center gap-sm bg-[#2D6A4F] text-white px-xl py-md rounded-full hover:brightness-110 transition-all shadow-xl font-button text-button group"
              href="tel:+914842345678"
            >
              <span className="material-symbols-outlined">call</span>
              CALL NOW
            </a>
            <a
              className="flex items-center gap-sm bg-secondary-fixed text-on-secondary-fixed px-xl py-md rounded-full hover:brightness-105 transition-all shadow-xl font-button text-button group"
              href="https://wa.me/919895000000"
            >
              <span className="material-symbols-outlined">message</span>
              WHATSAPP SUPPORT
            </a>
          </div>
          <p className="mt-lg text-on-primary-container font-body-md opacity-80">
            Available Mon-Sat, 09:00 AM - 06:00 PM IST
          </p>
        </div>
      </section>
    </>
  );
}
