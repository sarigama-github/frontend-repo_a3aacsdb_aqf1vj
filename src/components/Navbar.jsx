import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-white/60 dark:bg-neutral-900/50 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-white dark:bg-neutral-950 grid place-items-center">
              <Rocket className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <span className="font-semibold text-neutral-900 dark:text-white tracking-tight">AIRE Copilot</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#cases" className="hover:text-neutral-900 dark:hover:text-white transition">Use cases</a>
          <a href="#cta" className="hover:text-neutral-900 dark:hover:text-white transition">Get access</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/5">
            Sign in
          </button>
          <button className="inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 hover:opacity-90">
            Request demo
          </button>
        </div>
      </div>
    </header>
  );
}
