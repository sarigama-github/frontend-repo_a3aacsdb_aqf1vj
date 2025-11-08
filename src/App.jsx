import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="py-12 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} AIRE Copilot. All rights reserved.</p>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-4">
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
