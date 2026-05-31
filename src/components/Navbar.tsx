"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`bg-background/95 backdrop-blur-md docked full-width top-0 sticky z-50 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-sm">
          <img
            alt="Guardians Holiday Logo"
            className="h-12 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZhh7yha_B2mui0UxUYuay0Ok-qA5jZ6USX2Jo6d6Hn-FurgdmuwQLCxcNi0LThG3vAZse4TMFy8p5rdFSOHsek8KExBMMX2J663Ayw0rqT8bfXkPazZHsq66ltFwBZhwndLn32njsApmuzicfHvZF2_b--RbbrYmY5u3kBot6Cy04HDx-KQ2tEfjIpDB_9JEID2qCnHtEvFmQq2hEAm0JRfEX0f9tZ8LD6PjCxZbwHA80XIQjntDZadrdSjKMQm5OzXzwb1gjy1F2"
          />
          <span className="font-h3-desktop text-h3-desktop text-primary tracking-tight hidden lg:block">
            Guardians Holiday
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-button text-button transition-colors duration-300 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-secondary-fixed"
                    : "text-on-surface-variant font-medium hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/login"
          className="gold-ghost-border text-secondary font-button text-button px-md py-sm rounded-full scale-95 active:scale-90 transition-transform flex items-center gap-xs"
        >
          Login with Google
        </Link>
      </div>
    </nav>
  );
}
