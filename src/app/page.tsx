import Link from "next/link";
import { IMAGES, ITINERARIES, TESTIMONIALS, CORE_SERVICES, COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Kerala Backwaters Hero"
            className="w-full h-full object-cover"
            src={IMAGES.HERO_BG}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-sm bg-secondary-fixed/20 text-secondary-fixed px-md py-xs rounded-full font-label-caps text-label-caps mb-md backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
              Your Trusted B2B Travel Partner
            </span>
            <h1 className="font-h1-desktop text-h1-desktop text-surface-container-lowest mb-md leading-tight">
              Elevate Your Travel Experiences with{" "}
              <span className="text-secondary-fixed">
                {COMPANY.NAME}
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-highest/90 mb-lg">
              Premier full-service DMC and travel solutions provider. From flights
              and hotels to visa assistance and curated itineraries — we deliver
              seamless, end-to-end travel management for your discerning clientele.
            </p>
            <div className="flex flex-wrap gap-md">
              <a
                href={`tel:${COMPANY.PHONE}`}
                className="bg-primary hover:bg-primary-container text-on-primary font-button text-button px-lg py-md rounded-full transition-all flex items-center gap-sm shadow-lg"
              >
                <span className="material-symbols-outlined">call</span>
                Call Us
              </a>
              <a
                href={`https://wa.me/${COMPANY.WHATSAPP.replace(/\s/g, "")}`}
                className="bg-secondary-fixed hover:bg-secondary-container text-on-secondary-fixed font-button text-button px-lg py-md rounded-full transition-all flex items-center gap-sm shadow-lg"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  chat
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Strip */}
      <section className="bg-primary py-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md items-center text-center">
            {[
              { icon: "workspace_premium", label: "20+ Years Experience" },
              { icon: "groups", label: "500+ Agency Partners" },
              { icon: "map", label: "Pan-India Coverage" },
              { icon: "support_agent", label: "24/7 Support" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-xs"
              >
                <span className="material-symbols-outlined text-secondary-fixed text-4xl">
                  {item.icon}
                </span>
                <p className="font-label-caps text-label-caps text-on-primary tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-lg">
          <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
            Comprehensive Solutions
          </span>
          <h2 className="font-h2-desktop text-h2-desktop text-primary">
            Everything You Need Under One Roof
          </h2>
          <p className="font-body-md text-on-surface-variant mt-sm max-w-2xl mx-auto">
            From ticketing to destination management, we handle every detail so you can focus on your clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-md">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest p-lg rounded-xl luxury-shadow flex flex-col items-center text-center transition-transform hover:-translate-y-2 border-t-2 border-secondary/30 hover:border-secondary"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-md">
                {service.icon}
              </span>
              <h4 className="font-h3-desktop text-h3-desktop text-primary mb-sm text-balance">
                {service.title}
              </h4>
              <p className="font-body-md text-on-surface-variant">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DMC Expertise */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
                Destination Management
              </span>
              <h2 className="font-h2-desktop text-h2-desktop text-primary mb-md">
                Exclusive DMC for Kerala & South India
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                As direct Destination Management Experts, we offer unmatched local
                operational support, exclusive hotel inventory, and deeply customized
                itineraries across Kerala, Karnataka, and Tamilnadu.
              </p>
              <div className="space-y-md">
                {[
                  { icon: "verified", text: "Unmatched local expertise and on-ground support" },
                  { icon: "inventory", text: "Exclusive hotel inventory and competitive B2B rates" },
                  { icon: "edit_note", text: "Deeply customized itineraries for every segment" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-body-md text-on-surface-variant">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-md mt-lg">
                <Link
                  href="/services"
                  className="bg-primary text-on-primary font-button text-button px-lg py-md rounded-full hover:bg-primary-container transition-all"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/itineraries"
                  className="border border-secondary text-secondary font-button text-button px-lg py-md rounded-full hover:bg-secondary hover:text-white transition-all"
                >
                  View Itineraries
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src={IMAGES.SERVICES_MUNNAR}
                  alt="Kerala tea plantations"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-md rounded-lg shadow-xl hidden md:block">
                <p className="text-secondary-fixed font-bold text-lg">Kerala • Karnataka • Tamilnadu</p>
                <p className="text-surface-container-lowest/70 text-sm">South India DMC Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md">
          <div>
            <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
              Premium Selections
            </span>
            <h2 className="font-h2-desktop text-h2-desktop text-primary">
              Featured Itineraries
            </h2>
          </div>
          <Link
            href="/itineraries"
            className="text-secondary font-button text-button flex items-center gap-xs border-b border-secondary/30 pb-1"
          >
            View All Collections{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {ITINERARIES.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest rounded-xl luxury-shadow overflow-hidden border-t-2 border-secondary group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                />
              </div>
              <div className="p-md">
                <h3 className="font-h3-desktop text-h3-desktop text-primary mb-sm">
                  {item.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-md">
                  {item.duration}
                </p>
                <p className="font-body-md text-on-surface-variant mb-lg line-clamp-3">
                  {item.description}
                </p>
                <Link
                  href={`/itineraries/${item.id}`}
                  className="gold-ghost-border text-secondary font-button text-button w-full py-sm rounded-full hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors block text-center"
                >
                  Inquire for Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-lg">
          <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
            Why Guardians Holiday
          </span>
          <h2 className="font-h2-desktop text-h2-desktop text-primary">
            Built on Trust, Driven by Excellence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {[
            {
              icon: "verified",
              title: "Unmatched Expertise",
              desc: "Driven by 20+ years of corporate strategy and industry insight. Our founder's experience ensures every booking is handled with precision.",
            },
            {
              icon: "workspace_premium",
              title: "End-to-End Execution",
              desc: "From the moment you conceptualize a trip to the day your clients return, we manage every single variable with absolute precision.",
            },
            {
              icon: "support_agent",
              title: "Local Support, Global Standards",
              desc: "Uncompromising quality control, competitive B2B pricing, and 24/7 on-ground assistance across all destinations.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-sm">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="font-h3-desktop text-h3-desktop text-primary">
                {item.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="font-h2-desktop text-h2-desktop text-primary text-center mb-xl">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="bg-surface-container-lowest p-lg rounded-xl luxury-shadow border-l-4 border-secondary italic"
              >
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-sm not-italic">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-button text-button text-primary">
                      {t.author}
                    </p>
                    <p className="text-xs text-on-surface-variant">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-primary rounded-xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-h2-desktop text-h2-desktop text-on-primary mb-sm">
                Ready to Partner with Us?
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80">
                Get exclusive B2B rates and priority support today.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-md">
              <Link
                href="/contact"
                className="bg-secondary-fixed text-on-secondary-fixed font-button text-button px-lg py-md rounded-full shadow-lg hover:bg-secondary transition-all hover:text-on-primary"
              >
                Get in Touch
              </Link>
              <a
                href={`tel:${COMPANY.PHONE}`}
                className="bg-transparent border border-on-primary/30 text-on-primary font-button text-button px-lg py-md rounded-full hover:bg-on-primary/10 transition-all flex items-center gap-sm"
              >
                <span className="material-symbols-outlined">call</span>
                {COMPANY.PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
