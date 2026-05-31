import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-secondary/30">
      <div className="max-w-container-max mx-auto px-gutter py-xl grid grid-cols-1 md:grid-cols-4 gap-md">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-xs mb-md">
            <img
              alt="Logo"
              className="h-10 w-auto invert brightness-0 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZhh7yha_B2mui0UxUYuay0Ok-qA5jZ6USX2Jo6d6Hn-FurgdmuwQLCxcNi0LThG3vAZse4TMFy8p5rdFSOHsek8KExBMMX2J663Ayw0rqT8bfXkPazZHsq66ltFwBZhwndLn32njsApmuzicfHvZF2_b--RbbrYmY5u3kBot6Cy04HDx-KQ2tEfjIpDB_9JEID2qCnHtEvFmQq2hEAm0JRfEX0f9tZ8LD6PjCxZbwHA80XIQjntDZadrdSjKMQm5OzXzwb1gjy1F2"
            />
            <span className="font-h3-desktop text-h3-desktop text-surface-container-lowest">
              Guardians
            </span>
          </div>
          <p className="font-body-md text-surface-container-highest/60 mb-md">
            Providing elite B2B travel solutions and ground handling across the
            majestic landscapes of Kerala.
          </p>
          <div className="flex gap-sm">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-surface-container-highest/10 flex items-center justify-center text-surface-container-lowest hover:bg-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-surface-container-highest/10 flex items-center justify-center text-surface-container-lowest hover:bg-secondary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </Link>
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
                href="/login"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Agent Portal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-secondary-fixed font-bold mb-md">Support</h5>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link
                href="/contact"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                WhatsApp Support
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-surface-container-highest/80 hover:text-secondary-fixed transition-colors font-body-md"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-secondary-fixed font-bold mb-md">Kerala Office</h5>
          <p className="text-surface-container-highest/80 font-body-md mb-xs">
            Cochin Bypass, Palarivattom
          </p>
          <p className="text-surface-container-highest/80 font-body-md mb-xs">
            Kochi, Kerala 682025
          </p>
          <p className="text-surface-container-highest/80 font-body-md mb-xs">
            +91 98470 12345
          </p>
          <p className="text-surface-container-highest/80 font-body-md">
            info@guardiansholiday.com
          </p>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter py-md border-t border-surface-container-highest/10 text-center">
        <p className="text-surface-container-highest/40 text-xs">
          &copy; 2024 Guardians Holiday. Kerala B2B Travel Excellence.
        </p>
      </div>
    </footer>
  );
}
