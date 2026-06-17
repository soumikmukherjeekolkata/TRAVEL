import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-secondary/30">
      <div className="max-w-container-max mx-auto px-gutter py-xl grid grid-cols-1 md:grid-cols-4 gap-md">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-xs mb-md">
            <img
              alt="Logo"
              className="h-10 w-auto"
              src="/Logo.jpeg"
            />
            <span className="font-h3-desktop text-h3-desktop text-surface-container-lowest">
              {COMPANY.NAME}
            </span>
          </div>
          <p className="font-body-md text-surface-container-highest/60 mb-md">
            Premier full-service DMC and travel solutions provider. Your trusted B2B
            partner for seamless travel across India and beyond.
          </p>
          <div className="flex gap-sm">
            <a
              href={`mailto:${COMPANY.EMAIL}`}
              className="w-8 h-8 rounded-full bg-surface-container-highest/10 flex items-center justify-center text-surface-container-lowest hover:bg-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY.WHATSAPP.replace(/\s/g, "")}`}
              className="w-8 h-8 rounded-full bg-surface-container-highest/10 flex items-center justify-center text-surface-container-lowest hover:bg-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-secondary-fixed font-bold mb-md">Quick Links</h5>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link
                href="/"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/itineraries"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Itineraries
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-secondary-fixed font-bold mb-md">Services</h5>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link
                href="/services"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Flight Bookings
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Hotels & Accommodation
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Transport & Logistics
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Visa & Forex
              </Link>
            </li>
            <li>
              <Link
                href="/itineraries"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                DMC Kerala & South India
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-secondary-fixed font-bold mb-md">Contact</h5>
          <p className="text-surface-container-highest/80 font-body-md mb-xs">
            Kolkata, West Bengal, India
          </p>
          <p className="text-surface-container-highest/80 font-body-md mb-xs">
            {COMPANY.PHONE}
          </p>
          <p className="text-surface-container-highest/80 font-body-md mb-xs">
            {COMPANY.EMAIL}
          </p>
          <p className="text-surface-container-highest/80 font-body-md">
            {COMPANY.WEBSITE}
          </p>
          <div className="mt-md pt-md border-t border-surface-container-highest/10">
            <p className="text-secondary-fixed font-button text-button mb-xs">
              Founder: {COMPANY.FOUNDER}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter py-md border-t border-surface-container-highest/10 text-center">
        <p className="text-surface-container-highest/40 text-xs">
          &copy; 2026 {COMPANY.NAME}. All rights reserved. {COMPANY.TAGLINE}
        </p>
      </div>
    </footer>
  );
}
