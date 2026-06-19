"use client";

import { COMPANY } from "@/lib/constants";

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
      <header className="max-w-container-max mx-auto px-gutter pt-lg md:pt-xl pb-md md:pb-lg text-center">
        <p className="font-label-caps text-label-caps text-secondary mb-base">PARTNERSHIP ENQUIRIES</p>
        <h1 className="font-h1-mobile text-h1-mobile md:font-h1-desktop md:text-h1-desktop text-primary max-w-2xl mx-auto">
          Get In Touch &mdash; We&apos;re Here to Help
        </h1>
        <div className="w-24 h-px bg-secondary-fixed mx-auto mt-md" />
      </header>

      <section className="max-w-container-max mx-auto px-gutter pb-lg md:pb-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-md md:p-lg luxury-shadow border-t-2 border-secondary">
            <h2 className="font-h3-mobile text-h3-mobile md:font-h3-desktop md:text-h3-desktop text-primary mb-md">Partner Enquiry Form</h2>
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
                  placeholder="Tell us about your requirements..."
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

          <div className="lg:col-span-5 space-y-lg">
            <div className="space-y-md">
              {[
                { icon: "call", label: "PHONE", value: COMPANY.PHONE, bg: "bg-primary-fixed", color: "text-primary" },
                { icon: "chat", label: "WHATSAPP", value: COMPANY.WHATSAPP, bg: "bg-secondary-fixed", color: "text-secondary" },
                { icon: "mail", label: "EMAIL", value: COMPANY.EMAIL, bg: "bg-primary-fixed", color: "text-primary" },
                { icon: "location_on", label: "HEAD OFFICE", value: "Kolkata, West Bengal, India", bg: "bg-surface-container-high", color: "text-on-surface-variant" },
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

            <div className="bg-primary text-on-primary p-md rounded-xl shadow-lg">
              <h3 className="font-h3-desktop text-h3-desktop mb-sm">Prefer to talk?</h3>
              <p className="font-body-md text-on-primary/80 mb-md">
                Call or WhatsApp us directly for immediate assistance.
              </p>
              <div className="space-y-sm">
                <a
                  href={`tel:${COMPANY.PHONE}`}
                  className="flex items-center gap-sm bg-secondary-fixed text-on-secondary-fixed px-lg py-sm rounded-full hover:brightness-105 transition-all font-button text-button"
                >
                  <span className="material-symbols-outlined">call</span>
                  {COMPANY.PHONE}
                </a>
                <a
                  href={`https://wa.me/${COMPANY.WHATSAPP.replace(/\s/g, "")}`}
                  className="flex items-center gap-sm bg-[#2D6A4F] text-white px-lg py-sm rounded-full hover:brightness-110 transition-all font-button text-button"
                >
                  <span className="material-symbols-outlined">chat</span>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-lg md:py-xl text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed-dim via-transparent to-transparent" />
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop mb-lg">
            Let&apos;s Build a Lasting Partnership
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-lg">
            We would love the opportunity to collaborate with you, manage your travel
            portfolios, or discuss a potential vendor partnership.
          </p>
          <a
            href={`mailto:${COMPANY.EMAIL}`}
            className="inline-flex items-center gap-sm bg-secondary-fixed text-on-secondary-fixed px-xl py-md rounded-full hover:brightness-105 transition-all shadow-xl font-button text-button"
          >
            <span className="material-symbols-outlined">mail</span>
            Email Us at {COMPANY.EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
