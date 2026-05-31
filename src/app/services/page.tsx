import Link from "next/link";
import { IMAGES, SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.SERVICES_HERO}')` }}
        />
        <div className="relative z-20 text-center px-gutter max-w-4xl">
          <span className="text-secondary-fixed font-label-caps uppercase tracking-widest mb-sm block">
            Premium B2B Travel Excellence
          </span>
          <h1 className="font-h1-desktop text-h1-desktop text-surface-container-lowest mb-md drop-shadow-lg">
            Our Services &mdash; End to End Kerala Travel
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mx-auto">
            Providing agents with seamless logistics and exclusive access to the heart of God&apos;s Own Country. Your
            partner in crafting unforgettable luxury experiences.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-xl relative z-20">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group bg-surface-container-lowest p-lg rounded-xl luxury-shadow border-t-2 border-secondary hover:border-primary transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-secondary-fixed/30 flex items-center justify-center mb-md group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-secondary text-4xl group-hover:text-primary transition-colors">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-h3-desktop text-h3-desktop text-primary mb-sm">{service.title}</h3>
                  <p className="text-on-surface-variant font-body-md mb-lg">{service.description}</p>
                </div>
                <button className="w-full py-sm border gold-ghost-border rounded-full text-secondary font-button text-button hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={IMAGES.SERVICES_MUNNAR}
                alt="Munnar tea plantations"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-md rounded-lg shadow-xl hidden md:block">
              <p className="text-white font-h3-desktop">24/7 Dedicated Support</p>
              <p className="text-surface-container-lowest/80 text-sm">For Registered B2B Partners</p>
            </div>
          </div>
          <div>
            <h2 className="font-h2-desktop text-h2-desktop text-primary mb-md">Reliability You Can Build Your Business On</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              As a dedicated B2B operator, we understand that our performance reflects on your reputation. We offer 24/7
              on-ground coordination and white-label communication for all your Kerala bookings.
            </p>
            <div className="flex flex-wrap gap-md">
              <a
                className="flex items-center gap-sm bg-primary text-white px-lg py-sm rounded-full hover:bg-primary-container transition-colors shadow-md"
                href="https://wa.me/#"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
                <span className="font-button text-button">WhatsApp Agent Portal</span>
              </a>
              <button className="border border-secondary text-secondary px-lg py-sm rounded-full hover:bg-secondary hover:text-white transition-all font-button text-button">
                Request Agent Kit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
