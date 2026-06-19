"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { IMAGES, ITINERARIES } from "@/lib/constants";

const FILTERS = [
  {
    key: "duration" as const,
    label: "Duration",
    options: [...new Set(ITINERARIES.map((i) => i.duration))],
  },
  {
    key: "destinations" as const,
    label: "Region",
    options: [...new Set(ITINERARIES.map((i) => i.destinations))],
  },
  {
    key: "category" as const,
    label: "Itinerary Type",
    options: [...new Set(ITINERARIES.map((i) => i.category))],
  },
];

export default function ItinerariesPage() {
  const [filters, setFilters] = useState<Record<string, string | null>>({
    duration: null,
    destinations: null,
    category: null,
  });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return ITINERARIES.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        if (key === "destinations") return item.destinations === value;
        return item[key as "duration" | "category"] === value;
      });
    });
  }, [filters]);

  const setFilter = (key: string, value: string | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setOpenDropdown(null);
  };

  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[280px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src={IMAGES.ITINERARIES_HERO}
            alt="Munnar tea plantations"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-gutter">
          <h1 className="font-h1-mobile text-h1-mobile md:font-h1-desktop md:text-h1-desktop text-surface-container-lowest mb-sm drop-shadow-lg">
            Explore Kerala &mdash; Curated Itineraries
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mx-auto">
            Discover the essence of God&apos;s Own Country through our meticulously crafted B2B travel experiences,
            designed for luxury and comfort.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-surface-container-lowest py-md border-b border-outline-variant/30 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-container-max mx-auto px-gutter flex flex-wrap items-center gap-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary">filter_list</span>
            <span className="font-button text-button text-on-surface">Filter By:</span>
          </div>
          {FILTERS.map((filter) => {
            const activeValue = filters[filter.key];
            return (
              <div key={filter.key} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === filter.key ? null : filter.key)
                  }
                  className={`flex items-center gap-xs px-md py-xs rounded-full border transition-colors font-button text-button ${
                    activeValue
                      ? "bg-primary text-on-primary border-primary"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  {activeValue || filter.label}{" "}
                  <span className="material-symbols-outlined text-[18px]">
                    {openDropdown === filter.key ? "expand_less" : "expand_more"}
                  </span>
                </button>

                {openDropdown === filter.key && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setOpenDropdown(null)}
                    />
                    <div className="absolute top-full mt-xs left-0 z-20 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 min-w-[200px] overflow-hidden">
                      <button
                        onClick={() => setFilter(filter.key, null)}
                        className={`w-full text-left px-md py-sm font-body-md transition-colors hover:bg-surface-container-low ${
                          !activeValue ? "text-primary font-bold" : "text-on-surface-variant"
                        }`}
                      >
                        All {filter.label}
                      </button>
                      <div className="h-px bg-outline-variant/20 mx-md" />
                      {filter.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() =>
                            setFilter(
                              filter.key,
                              activeValue === opt ? null : opt
                            )
                          }
                          className={`w-full text-left px-md py-sm font-body-md transition-colors hover:bg-surface-container-low flex items-center gap-sm ${
                            activeValue === opt
                              ? "text-primary font-bold bg-primary/5"
                              : "text-on-surface-variant"
                          }`}
                        >
                          {activeValue === opt && (
                            <span className="material-symbols-outlined text-[18px] text-primary">
                              check
                            </span>
                          )}
                          <span className={activeValue === opt ? "" : "ml-[26px]"}>
                            {opt}
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
          {activeCount > 0 && (
            <button
              onClick={() =>
                setFilters({ duration: null, destinations: null, category: null })
              }
              className="flex items-center gap-xs text-secondary font-button text-button hover:underline"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
              Clear all
            </button>
          )}
          <div className="ml-auto">
            <span className="text-on-surface-variant font-body-md">
              Showing {filtered.length} of {ITINERARIES.length} Exclusive Itineraries
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-container-max mx-auto px-gutter py-lg md:py-xl">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="bg-surface-container-lowest rounded-xl luxury-shadow border-t-2 border-secondary overflow-hidden flex flex-col group transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
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
                  <h3 className="font-h3-mobile text-h3-mobile md:font-h3-desktop md:text-h3-desktop text-primary mb-sm">{item.title}</h3>
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
        ) : (
          <div className="text-center py-xl">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-md">
              search_off
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              No itineraries match your filters.
            </p>
            <button
              onClick={() =>
                setFilters({ duration: null, destinations: null, category: null })
              }
              className="mt-md text-secondary font-button text-button hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-primary py-lg md:py-xl text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-gutter">
          <h2 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-on-primary mb-md">
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
