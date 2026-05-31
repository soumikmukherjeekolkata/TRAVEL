import Link from "next/link";
import { IMAGES, ITINERARIES } from "@/lib/constants";

export default function ItinerariesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src={IMAGES.ITINERARIES_HERO}
            alt="Munnar tea plantations"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-gutter">
          <h1 className="font-h1-desktop text-h1-desktop text-surface-container-lowest mb-sm drop-shadow-lg">
            Explore Kerala &mdash; Curated Itineraries
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mx-auto">
            Discover the essence of God&apos;s Own Country through our meticulously crafted B2B travel experiences,
            designed for luxury and comfort.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-surface-container-lowest py-md border-b border-outline-variant/30 sticky top-20 z-40 shadow-sm">
        <div className="max-w-container-max mx-auto px-gutter flex flex-wrap items-center gap-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary">filter_list</span>
            <span className="font-button text-button text-on-surface">Filter By:</span>
          </div>
          {["Duration", "Region", "Itinerary Type"].map((filter) => (
            <div key={filter} className="relative group">
              <button className="flex items-center gap-xs px-md py-xs rounded-full border border-outline-variant hover:border-primary transition-colors font-button text-button">
                {filter}{" "}
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            </div>
          ))}
          <div className="ml-auto">
            <span className="text-on-surface-variant font-body-md">
              Showing {ITINERARIES.length} Exclusive Itineraries
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {ITINERARIES.map((item) => (
            <article
              key={item.id}
              className="bg-surface-container-lowest rounded-xl luxury-shadow border-t-2 border-secondary overflow-hidden flex flex-col group transition-transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute top-sm right-sm bg-secondary-fixed text-on-secondary-fixed px-md py-xs rounded-full font-button text-button shadow-sm">
                  {item.duration}
                </div>
              </div>
              <div className="p-md flex-grow flex flex-col">
                <h3 className="font-h3-desktop text-h3-desktop text-primary mb-sm">{item.title}</h3>
                <ul className="space-y-xs mb-md flex-grow">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-xs text-on-surface-variant font-body-md">
                      <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/itineraries/${item.id}`}
                  className="w-full bg-primary text-on-primary font-button text-button py-md rounded-full hover:bg-primary-container transition-colors block text-center"
                >
                  Inquire for Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-xl text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-gutter">
          <h2 className="font-h2-desktop text-h2-desktop text-on-primary mb-md">
            Tailor-Made Luxury for Your Clients
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 mb-lg">
            Are you a travel agent looking for bespoke Kerala experiences? Connect with us for exclusive B2B rates and
            personalized itinerary planning.
          </p>
          <div className="flex flex-wrap justify-center gap-md">
            <Link
              href="/login"
              className="bg-secondary-fixed text-on-secondary-fixed font-button text-button px-lg py-md rounded-full hover:bg-secondary-container transition-all"
            >
              Request Agent Portal Access
            </Link>
            <button className="flex items-center gap-sm bg-transparent border border-on-primary text-on-primary font-button text-button px-lg py-md rounded-full hover:bg-on-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Support
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
