import { IMAGES } from "@/lib/constants";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-gutter overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <img
          alt="Kerala Landscape"
          className="w-full h-full object-cover"
          src={IMAGES.LOGIN_BG}
        />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 right-0 p-lg z-0 opacity-20 pointer-events-none">
        <span className="material-symbols-outlined text-[240px] text-surface-container-lowest">eco</span>
      </div>

      {/* Login Card */}
      <section className="relative z-20 w-full max-w-[480px]">
        <div className="bg-background/95 backdrop-blur-[12px] p-lg md:p-xl rounded-xl shadow-[0_4px_24px_rgba(27,67,50,0.15)] border border-secondary/20 flex flex-col items-center text-center">
          <div className="mb-lg">
            <img
              alt="Guardian Holidays Logo"
              className="h-16 md:h-24 w-auto object-contain"
              src={IMAGES.LOGO}
            />
          </div>

          <h1 className="font-h2-mobile text-h2-mobile md:font-h2-desktop md:text-h2-desktop text-primary mb-sm">
            Welcome Back, Travel Partner
          </h1>
          <p className="font-body-md text-on-surface-variant mb-lg max-w-[320px]">
            Access your exclusive portal to manage premium Kerala itineraries and agent-only resources.
          </p>

          <div className="w-full space-y-md">
            <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary font-button text-button py-md px-lg rounded-full hover:bg-primary-container transition-all duration-300 active:scale-95 shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
              </svg>
              Login with Google
            </button>

            <div className="flex items-center gap-sm">
              <div className="h-[1px] flex-1 bg-outline-variant/30" />
              <span className="font-label-caps text-label-caps text-on-surface-variant/60">B2B VERIFIED</span>
              <div className="h-[1px] flex-1 bg-outline-variant/30" />
            </div>

            <button className="w-full flex items-center justify-center gap-xs font-button text-button text-secondary hover:text-primary transition-colors py-sm">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
              Having trouble? Contact Support
            </button>
          </div>

          <div className="mt-lg pt-md border-t border-secondary/10 w-full">
            <p className="font-body-md text-[13px] text-on-surface-variant leading-relaxed">
              Access is exclusive to registered travel agents. <br />
              <span className="font-semibold text-primary">New Partner?</span>{" "}
              <a className="text-secondary underline decoration-secondary/30 hover:text-primary transition-colors" href="/contact">
                Contact us to register.
              </a>
            </p>
          </div>
        </div>
        <p className="text-center mt-md font-label-caps text-label-caps text-surface-container-lowest/80 tracking-widest uppercase">
          Kerala B2B Travel Excellence
        </p>
      </section>

      {/* Floating Status */}
      <div className="absolute bottom-md left-md z-20 hidden md:block">
        <div className="flex items-center gap-sm bg-surface-container-lowest/10 backdrop-blur-md px-md py-sm rounded-full border border-surface-container-lowest/20">
          <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
          <span className="font-label-caps text-label-caps text-surface-container-lowest">System Online &bull; Secure Access</span>
        </div>
      </div>
    </main>
  );
}
