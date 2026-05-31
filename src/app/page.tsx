import Link from "next/link";
import { IMAGES, ITINERARIES, TESTIMONIALS } from "@/lib/constants";

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
            <h1 className="font-h1-desktop text-h1-desktop text-surface-container-lowest mb-md leading-tight">
              Kerala&apos;s Finest Travel Experiences,{" "}
              <span className="text-secondary-fixed">
                Exclusively for Travel Agents
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-highest/90 mb-lg">
              Partner with Kerala&apos;s premier B2B ground handler. We deliver
              seamless, high-touch luxury itineraries tailored for your
              discerning clientele.
            </p>
            <div className="flex flex-wrap gap-md">
              <button className="bg-primary hover:bg-primary-container text-on-primary font-button text-button px-lg py-md rounded-full transition-all flex items-center gap-sm shadow-lg">
                <span className="material-symbols-outlined">call</span>
                Call Us
              </button>
              <button className="bg-secondary-fixed hover:bg-secondary-container text-on-secondary-fixed font-button text-button px-lg py-md rounded-full transition-all flex items-center gap-sm shadow-lg">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  chat
                </span>
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Strip */}
      <section className="bg-primary py-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md items-center text-center">
            {[
              { icon: "map", label: "25+ Itineraries" },
              { icon: "verified_user", label: "End-to-End Service" },
              { icon: "handshake", label: "B2B Exclusive" },
              { icon: "directions_car", label: "Luxury Fleet" },
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

      {/* Services Snapshot */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center mb-lg">
          <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
            Our Expertise
          </span>
          <h2 className="font-h2-desktop text-h2-desktop text-primary">
            Comprehensive B2B Services
          </h2>
        </div>
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 lg:grid-cols-4 gap-md">
          {[
            {
              icon: "airport_shuttle",
              title: "Transfers",
              desc: "Luxury fleet with professional, English-speaking chauffeurs.",
            },
            {
              icon: "apartment",
              title: "Hotels",
              desc: "Exclusive contracts with Kerala's top 5-star & boutique properties.",
            },
            {
              icon: "sailing",
              title: "Houseboats",
              desc: "Premium and Ultra-luxury houseboats with gourmet dining.",
            },
            {
              icon: "landscape",
              title: "Sightseeing",
              desc: "Curated, off-beat experiences designed for luxury travelers.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest p-lg rounded-xl luxury-shadow flex flex-col items-center text-center transition-transform hover:-translate-y-2"
            >
              <span className="material-symbols-outlined text-primary text-5xl mb-md">
                {service.icon}
              </span>
              <h4 className="font-h3-desktop text-h3-desktop text-primary mb-sm">
                {service.title}
              </h4>
              <p className="font-body-md text-on-surface-variant">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {[
            {
              icon: "verified",
              title: "Unwavering Trust",
              desc: "With years of local presence, we are the trusted ground partner for hundreds of agencies worldwide, ensuring your clients are always in safe hands.",
            },
            {
              icon: "workspace_premium",
              title: "Decades of Experience",
              desc: "Our founders are Kerala travel veterans. We know the roads, the people, and the hidden gems that make an itinerary truly exceptional.",
            },
            {
              icon: "support_agent",
              title: "Full-Service Management",
              desc: "From the moment your client arrives until they depart, we manage every detail. You handle the booking; we handle the magic.",
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

      {/* Inquiry Banner */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-primary rounded-xl p-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-h2-desktop text-h2-desktop text-on-primary mb-sm">
                Ready to Elevate Your Kerala Bookings?
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80">
                Get exclusive agent rates and priority support today.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-md">
              <Link
                href="/login"
                className="bg-secondary-fixed text-on-secondary-fixed font-button text-button px-lg py-md rounded-full shadow-lg hover:bg-secondary transition-all hover:text-on-primary"
              >
                Join Agent Portal
              </Link>
              <button className="bg-transparent border border-on-primary/30 text-on-primary font-button text-button px-lg py-md rounded-full hover:bg-on-primary/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
