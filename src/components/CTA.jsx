export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white">
          Get early access
        </h3>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          Join the waitlist to pilot with your team. We onboard a limited number of funds each month.
        </p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
          <input
            type="email"
            required
            placeholder="Work email"
            className="h-12 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 px-4 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
          />
          <button type="submit" className="h-12 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 px-6 text-sm font-medium text-white hover:opacity-90">
            Request invite
          </button>
        </form>
        <p className="mt-3 text-xs text-neutral-500">
          By requesting, you agree to our terms and privacy policy.
        </p>
      </div>
    </section>
  );
}
