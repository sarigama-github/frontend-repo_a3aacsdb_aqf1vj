import { FileText, ChartLine, Search, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Document-grounded answers",
    desc: "Ground every insight in filings, earnings calls, and broker research with inline citations.",
  },
  {
    icon: Search,
    title: "Semantic search across sources",
    desc: "Query across 10-Ks, transcripts, KPIs, and alternative datasets with one prompt.",
  },
  {
    icon: ChartLine,
    title: "Quant-ready outputs",
    desc: "Produce factor exposures, comps, and backtest-ready CSVs directly from your questions.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade privacy",
    desc: "Your data stays isolated with audit trails and role-based access controls.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white">
            Built for fundamental and quant teams
          </h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            A focused copilot that understands finance workflows end-to-end.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 p-6 shadow-sm/50 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(167,139,250,0.10)_0%,transparent_60%)]" />
    </section>
  );
}
