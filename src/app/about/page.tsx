import Link from "next/link";
import { IMAGES, TEAM, COMPANY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.ABOUT_HERO}')` }}
        />
        <div className="relative z-20 text-center px-gutter max-w-4xl">
          <span className="text-secondary-fixed font-label-caps uppercase tracking-widest mb-sm block">
            Our Story
          </span>
          <h1 className="font-h1-desktop text-h1-desktop text-surface-container-lowest mb-md drop-shadow-lg">
            About {COMPANY.NAME}
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/90 max-w-2xl mx-auto">
            A premier full-service DMC and travel solutions provider built on trust,
            efficiency, and a passion for delivering exceptional travel experiences.
          </p>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div>
            <h2 className="font-h2-desktop text-h2-desktop text-primary mb-md">
              Who We Are
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              We are a team of dedicated people who have come together as{" "}
              <strong>{COMPANY.NAME}</strong>, driven by our passion for tourism.
              We are a customer service oriented company with{" "}
              <strong>20+ years of experience</strong> in the Travel and Tourism field.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              Based in <strong>Kolkata</strong>, {COMPANY.NAME} is spearheaded by{" "}
              <strong>{COMPANY.FOUNDER}</strong>, a corporate marketing strategist
              with over two decades of top-tier industry experience. Our core
              philosophy is built on trust, efficiency, and delivering end-to-end
              travel management with absolute precision.
            </p>
            <div className="grid grid-cols-2 gap-md mt-lg">
              <div className="bg-surface-container-lowest p-md rounded-xl luxury-shadow border-l-4 border-secondary">
                <h3 className="font-h3-desktop text-h3-desktop text-primary mb-xs">Our Mission</h3>
                <p className="font-body-md text-on-surface-variant">
                  To perform and deliver excellent quality service with competitive rates
                  and build longstanding partnerships with our business partners.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-md rounded-xl luxury-shadow border-l-4 border-primary">
                <h3 className="font-h3-desktop text-h3-desktop text-primary mb-xs">Our Vision</h3>
                <p className="font-body-md text-on-surface-variant">
                  To earn the reputation as &ldquo;Your Preferred Travel Agency&rdquo;
                  through unwavering commitment to service excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={IMAGES.ABOUT_STORY}
                alt="Kerala landscape"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-md rounded-lg shadow-xl hidden md:block">
              <p className="text-secondary-fixed font-bold text-lg">20+ Years</p>
              <p className="text-surface-container-lowest/70 text-sm">Of Travel Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-lg">
            <h2 className="font-h2-desktop text-h2-desktop text-primary">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {[
              {
                title: "Sell & Manage Travel",
                desc: "We sell accommodations, transportation, tours & activities. We handle travel issues, conflicts, complaints, cancellations and refunds with professionalism.",
              },
              {
                title: "Destination Management",
                desc: "Our primary focus is Destination Management for South Indian states of Kerala, Karnataka, and Tamilnadu, offering bespoke services to B2B agents.",
              },
              {
                title: "B2B Partnership",
                desc: "We manage Travel Agencies (B2B Agents) to provide all sorts of Travel Services through our commitment of bespoke services at the lowest possible prices.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest p-lg rounded-xl luxury-shadow border-t-2 border-secondary/30"
              >
                <h3 className="font-h3-desktop text-h3-desktop text-primary mb-sm">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-lg">
          <span className="font-label-caps text-label-caps text-secondary uppercase mb-xs block">
            Leadership
          </span>
          <h2 className="font-h2-desktop text-h2-desktop text-primary">Meet Our Founder</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-surface-container-lowest rounded-xl luxury-shadow overflow-hidden border-t-2 border-secondary flex flex-col md:flex-row"
            >
              <div className="md:w-80 h-80 md:h-auto overflow-hidden bg-primary/5">
                <img
                  className="w-full h-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-lg flex flex-col justify-center">
                <h3 className="font-h2-desktop text-h2-desktop text-primary mb-xs">{member.name}</h3>
                <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-md">
                  {member.role}
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-xl text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-gutter">
          <h2 className="font-h2-desktop text-h2-desktop text-on-primary mb-md">
            Ready to Start a Partnership?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 mb-lg">
            We would love to collaborate with you and manage your upcoming travel portfolios.
          </p>
          <div className="flex flex-wrap justify-center gap-md">
            <Link
              href="/contact"
              className="bg-secondary-fixed text-on-secondary-fixed font-button text-button px-lg py-md rounded-full hover:bg-secondary-container transition-all shadow-lg"
            >
              Get in Touch
            </Link>
            <a
              href={`tel:${COMPANY.PHONE}`}
              className="bg-transparent border border-on-primary/30 text-on-primary font-button text-button px-lg py-md rounded-full hover:bg-on-primary/10 transition-all"
            >
              Call {COMPANY.PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
