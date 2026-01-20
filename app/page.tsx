"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md flex flex-col items-center text-center space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Welcome to
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Diet<span className="text-emerald-400">Craft</span>
          </h1>
        </header>

        <section className="space-y-3">
          <p className="text-base text-slate-300 sm:text-lg">
            Craft a diet that fits your goals, schedule, and cravings — without
            the guesswork.
          </p>
          <p className="text-xs text-slate-500">
            Mobile-first. Simple. Smart nutrition planning for everyday life.
          </p>
        </section>

        <button
          type="button"
          className="mt-4 w-full py-4 rounded-2xl bg-emerald-400 text-[#050816] font-semibold text-base tracking-wide shadow-lg shadow-emerald-500/40 active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
          onClick={() => {
            // TODO: Replace with navigation to login/signup screen
            console.log("Get Started clicked - navigate to auth flow");
          }}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}

