import Link from "next/link";
import { notFound } from "next/navigation";
import { IMAGES, ITINERARIES } from "@/lib/constants";

export function generateStaticParams() {
  return ITINERARIES.map((item) => ({ id: item.id }));
}

export default function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <PromiseHandler params={params} />
  );
}

async function PromiseHandler({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const itinerary = ITINERARIES.find((i) => i.id === id);

  if (!itinerary) notFound();

  const {
    title,
    description,
    duration,
    destinations,
    category,
    image,
    itinerary: days,
    includes,
    excludes,
  } = itinerary;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="max-w-container-max mx-auto px-gutter pb-xl w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-caps text-label-caps mb-sm">
              B2B EXCLUSIVE
            </span>
            <h1 className="font-h1-desktop text-h1-desktop text-surface-container-lowest mb-sm">
              {title}
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-highest/90 max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Strip */}
      <section className="bg-surface-container-lowest py-md shadow-sm border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter flex flex-wrap justify-between gap-md">
          {[
            { icon: "schedule", label: "Duration", value: duration },
            { icon: "map", label: "Destinations", value: destinations },
            { icon: "groups", label: "Group Size", value: "Custom B2B" },
            { icon: "star", label: "Category", value: category },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-sm">
              <div className="bg-primary-fixed w-12 h-12 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest">
                  {item.label}
                </p>
                <p className="font-bold text-primary">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          {/* Timeline */}
          <div className="lg:col-span-2">
            {days.length > 0 ? (
              <>
                <h2 className="font-h2-desktop text-h2-desktop text-primary mb-lg">Expedition Timeline</h2>
                <div className="space-y-lg relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-px before:bg-outline-variant/40">
                  {days.map((day, i) => (
                    <div key={i} className="relative pl-16">
                      <div className="absolute left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-surface-container-lowest z-10" />
                      <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_24px_rgba(27,67,50,0.08)] border-t-2 border-secondary">
                        <span className="font-label-caps text-secondary text-label-caps mb-xs block">
                          {day.day}
                        </span>
                        <h3 className="font-h3-desktop text-h3-desktop text-primary mb-sm">{day.title}</h3>
                        <p className="text-on-surface-variant">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-on-surface-variant">
                <span className="material-symbols-outlined text-5xl mb-md">construction</span>
                <p className="font-body-lg">Full itinerary details coming soon.</p>
                <p className="font-body-md">Contact us for a detailed day-by-day plan.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-lg">
            {/* Gallery */}
            <div>
              <h2 className="font-h2-desktop text-h2-desktop text-primary mb-md">Visual Journey</h2>
              <div className="grid grid-cols-2 gap-sm">
                <div
                  className="col-span-2 h-48 rounded-xl bg-cover bg-center overflow-hidden shadow-sm"
                  style={{ backgroundImage: `url('${IMAGES.DETAIL_GALLERY_1}')` }}
                />
                <div
                  className="h-32 rounded-xl bg-cover bg-center overflow-hidden shadow-sm"
                  style={{ backgroundImage: `url('${IMAGES.DETAIL_GALLERY_2}')` }}
                />
                <div
                  className="h-32 rounded-xl bg-cover bg-center overflow-hidden shadow-sm"
                  style={{ backgroundImage: `url('${IMAGES.DETAIL_GALLERY_3}')` }}
                />
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-primary text-on-primary p-md rounded-xl shadow-lg">
              <h3 className="font-h3-desktop text-h3-desktop mb-md">Plan Inclusions</h3>
              <ul className="space-y-sm mb-lg">
                {(includes.length > 0 ? includes : [
                  "Premium Private Houseboat (Alleppey)",
                  "Handpicked 5-Star Hill Resorts",
                  "Private Luxury SUV for all Transfers",
                  "Guided Plantation Walks & Village Tours",
                ]).map((inc) => (
                  <li key={inc} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                    <span className="font-body-md text-surface-container-lowest/80">{inc}</span>
                  </li>
                ))}
              </ul>
              <hr className="border-on-primary/10 mb-md" />
              <h3 className="font-body-lg font-bold mb-sm">Exclusions</h3>
              <ul className="space-y-sm opacity-60">
                {(excludes.length > 0 ? excludes : ["Airfare to/from destination", "Personal Spa treatments"]).map((exc) => (
                  <li key={exc} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined">cancel</span>
                    <span className="text-sm">{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-high py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-h2-desktop text-h2-desktop text-primary mb-md">Elevate Your Travel Portfolio</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">
            Provide your clients with the pinnacle of Kerala&apos;s hospitality. Contact our B2B desk for custom group
            rates and exclusive agent benefits.
          </p>
          <div className="flex flex-wrap justify-center gap-md">
            <button className="bg-[#2D6A4F] text-white font-button text-button px-xl py-md rounded-full hover:bg-primary-container transition-all flex items-center gap-sm">
              <span className="material-symbols-outlined">call</span>
              Call Now for Rates
            </button>
            <button className="border-2 border-secondary text-secondary font-button text-button px-xl py-md rounded-full hover:bg-secondary hover:text-white transition-all flex items-center gap-sm">
              <span className="material-symbols-outlined">description</span>
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
