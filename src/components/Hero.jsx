import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/60 border border-black/10 dark:border-white/10 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            AI Equity Research Copilot
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white">
            Turn filings, calls, and market data into crisp, investable insights.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            Ask natural-language questions across transcripts, 10-Ks, and alternative data. Get citations, factor summaries, and chart-ready outputs in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex h-11 items-center rounded-xl px-5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 hover:opacity-90">
              Request early access
            </a>
            <a href="#features" className="inline-flex h-11 items-center rounded-xl px-5 text-sm font-medium text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/5">
              Explore features
            </a>
          </div>
        </div>
        <div className="lg:col-span-6"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(167,139,250,0.15)_0%,rgba(56,189,248,0.12)_40%,rgba(253,186,116,0.10)_70%,transparent_80%)]" />
    </section>
  );
}
