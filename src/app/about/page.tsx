import Link from "next/link";
import { IMAGES, TEAM } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/40 z-10" />
          <img
            className="w-full h-full object-cover"
            src={IMAGES.ABOUT_HERO}
            alt="Kerala backwaters at sunrise"
          />
        </div>
        <div className="relative z-20 text-center max-w-3xl px-gutter">
          <h1 className="font-h1-desktop text-h1-desktop text-surface-container-lowest mb-md">
            About Guardians Holiday
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 italic">
            Redefining Kerala B2B Travel Excellence through heritage, hospitality, and unparalleled expertise.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Our Heritage</span>
            <h2 className="font-h2-desktop text-h2-desktop text-primary">A Legacy of Curating Extraordinary Journeys</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Founded on the principles of integrity and authentic Malayali hospitality, Guardians Holiday emerged as a
              response to the growing need for a truly specialized B2B partner in Kerala&apos;s travel landscape. We don&apos;t
              just book tours; we craft experiences that linger in the memory of every traveler.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our journey began with a single mission: to be the guardians of your client&apos;s holiday, ensuring every detail
              reflects the prestige and beauty of God&apos;s Own Country. Today, we stand as a trusted backbone for hundreds
              of agents worldwide.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-secondary/20 rounded-xl -z-10 group-hover:scale-105 transition-transform duration-500" />
            <img
              className="rounded-xl w-full aspect-[4/3] object-cover"
              src={IMAGES.ABOUT_STORY}
              alt="Traditional Kerala brass lamps and jasmine flowers"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-xl bg-surface-container-low relative">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-md relative z-10">
          <div className="bg-surface-container-lowest p-lg rounded-xl luxury-shadow border-t-2 border-secondary space-y-md">
            <span className="material-symbols-outlined text-secondary text-4xl">visibility</span>
            <h3 className="font-h3-desktop text-h3-desktop text-primary">Our Vision</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To be the global benchmark for luxury B2B travel management in Kerala, setting new standards for
              reliability, cultural integrity, and bespoke service delivery.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-lg rounded-xl luxury-shadow border-t-2 border-secondary space-y-md">
            <span className="material-symbols-outlined text-secondary text-4xl">flag</span>
            <h3 className="font-h3-desktop text-h3-desktop text-primary">Our Mission</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To empower our travel partners with exclusive inventories, expert local insights, and seamless operational
              support, ensuring every guest experiences the pinnacle of Kerala&apos;s beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-xl bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
          {[
            { value: "15+", label: "Years in Business" },
            { value: "250+", label: "Itineraries" },
            { value: "1.2k", label: "Agents Served" },
            { value: "45+", label: "Destinations" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-xs">
              <div className="font-h1-desktop text-h1-desktop text-secondary-fixed">{stat.value}</div>
              <div className="font-label-caps text-label-caps uppercase opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Our Philosophy</span>
          <h2 className="font-h2-desktop text-h2-desktop text-primary mt-sm">Core Values of Excellence</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {[
            { icon: "verified_user", title: "Reliability", desc: "Unyielding commitment to operational punctuality and service consistency across all bookings." },
            { icon: "school", title: "Expertise", desc: "Decades of on-ground local knowledge ensuring your clients get the most authentic experiences." },
            { icon: "spa", title: "Hospitality", desc: "The warm, personal touch of Kerala that treats every visitor not as a guest, but as a family member." },
            { icon: "handshake", title: "Partnership", desc: "Building long-term, transparent relationships with B2B agents through mutual growth and trust." },
          ].map((v) => (
            <div key={v.title} className="p-md bg-background rounded-xl luxury-shadow border border-secondary/10 hover:border-secondary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center mb-sm">
                <span className="material-symbols-outlined text-secondary">{v.icon}</span>
              </div>
              <h4 className="font-button text-button text-primary mb-xs">{v.title}</h4>
              <p className="text-sm text-on-surface-variant">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-xl">
            <h2 className="font-h2-desktop text-h2-desktop text-primary">The Minds Behind the Magic</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-sm">Meet our leadership team dedicated to your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-sm">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h5 className="font-h3-desktop text-lg text-primary">{member.name}</h5>
                <p className="text-sm text-secondary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xl max-w-container-max mx-auto px-gutter text-center">
        <div className="bg-primary-container p-xl rounded-3xl relative overflow-hidden">
          <h2 className="font-h2-desktop text-h2-desktop text-surface-container-lowest mb-md relative z-10">
            Ready to Elevate Your Kerala Offerings?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/80 mb-lg max-w-2xl mx-auto relative z-10">
            Join our network of successful travel partners and offer your clients the pinnacle of Kerala luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center relative z-10">
            <Link
              href="/login"
              className="bg-secondary-fixed text-on-secondary-fixed px-lg py-sm rounded-full font-button text-button hover:bg-secondary-fixed-dim transition-colors"
            >
              Partner With Us
            </Link>
            <button className="border border-surface-container-lowest text-surface-container-lowest px-lg py-sm rounded-full font-button text-button hover:bg-surface-container-lowest hover:text-primary transition-colors">
              Request Catalog
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
