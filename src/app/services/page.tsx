import Link from "next/link";
import { IMAGES, CORE_SERVICES, DMC_SERVICES, COMPANY } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.SERVICES_HERO}')` }}
        />
        <div className="relative z-20 text-center px-gutter max-w-4xl">
          <span className="text-secondary-fixed font-label-caps uppercase tracking-widest mb-sm block">
            Full-Service DMC & Travel Solutions
          </span>
          <h1 className="font-h1-mobile text-h1-mobile md:font-h1-desktop md:text-h1-desktop text-surface-container-lowest mb-md drop-shadow-lg">
            Comprehensive Travel Services
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mx-auto">
            From flights and hotels to visa assistance and destination management —
            your one-stop B2B partner for seamless travel across India and beyond.
          </p>
        </div>
      </header>

      {/* Core Services */}
      <section className="py-lg md:py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-md md:mb-lg">
            <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
              End-to-End Solutions
            </span>
            <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-primary">
              Core Travel Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {CORE_SERVICES.map((service) => (
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
                  <h3 className="font-h3-mobile text-h3-mobile md:font-h3-desktop md:text-h3-desktop text-primary mb-sm">{service.title}</h3>
                  <p className="text-on-surface-variant font-body-md mb-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DMC Expertise */}
      <section className="py-lg md:py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-lg">
            <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
              Destination Management
            </span>
            <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-primary">
              Specialized DMC Expertise
            </h2>
            <p className="font-body-md text-on-surface-variant mt-sm max-w-2xl mx-auto">
              As dedicated Destination Management Experts, we offer specialized services across multiple domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {DMC_SERVICES.map((service) => (
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
                  <h3 className="font-h3-mobile text-h3-mobile md:font-h3-desktop md:text-h3-desktop text-primary mb-sm">{service.title}</h3>
                  <p className="text-on-surface-variant font-body-md mb-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-lg md:py-xl max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-xl items-center">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={IMAGES.MUNNAR}
                alt="Kerala tea plantations"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary p-md rounded-lg shadow-xl hidden md:block">
              <p className="text-white font-h3-desktop">24/7 Dedicated Support</p>
              <p className="text-surface-container-lowest/80 text-sm">For Registered B2B Partners</p>
            </div>
          </div>
          <div>
            <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-primary mb-md">
              Reliability You Can Build Your Business On
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              As a dedicated B2B operator with 20+ years of experience, we understand
              that our performance reflects on your reputation. We offer 24/7 on-ground
              coordination and white-label communication for all your bookings.
            </p>
            <div className="flex flex-wrap gap-md">
              <a
                className="flex items-center gap-sm bg-primary text-white px-lg py-sm rounded-full hover:bg-primary-container transition-colors shadow-md"
                href={`https://wa.me/${COMPANY.WHATSAPP.replace(/\s/g, "")}`}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
                <span className="font-button text-button">WhatsApp Agent Portal</span>
              </a>
              <Link
                href="/contact"
                className="border border-secondary text-secondary px-lg py-sm rounded-full hover:bg-secondary hover:text-white transition-all font-button text-button"
              >
                Request Agent Kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
