import Link from "next/link";
import { ArrowRight, Mic, Sparkles, Upload } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-lg font-bold text-cyan shadow-neon">
              A
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-white/70">AgentFlow</div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/pricing" className="text-sm text-white/70 hover:text-white">
              Pricing
            </Link>
            <Link href="/login" className="text-sm text-white/70 hover:text-white">
              Login
            </Link>
            <Link href="/register" className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan shadow-neon hover:bg-cyan/20">
              Start now
            </Link>
          </nav>
        </header>

        <section className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="pill mb-5 text-cyan">Autonomous Universal AI Agent</div>
            <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Tell it to do the work.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Research, generate images, write documents, answer questions, and execute tasks from a single chat workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/register" className="rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-slate-950 shadow-neon">
                Launch workspace
              </Link>
              <Link href="/pricing" className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
                View plans
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/65">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan" /> Research</div>
              <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-cyan" /> Vision</div>
              <div className="flex items-center gap-2"><Mic className="h-4 w-4 text-cyan" /> Voice</div>
            </div>
          </div>

          <div className="glass min-h-[420px] rounded-[28px] p-5 shadow-purpleGlow">
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-white/10 bg-[#090f1a]/80 p-5">
              <div className="flex items-center justify-between">
                <div className="pill text-white/60">Live task</div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan animate-pulse" />
                  <span className="text-xs text-cyan">Processing</span>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-sm text-white/70">User</div>
                  <div className="mt-2 text-lg">“Find the top AI research tools for founders and summarize the best options.”</div>
                </div>

                <div className="rounded-2xl border border-cyan/25 bg-cyan/5 p-4">
                  <div className="text-sm text-cyan">AgentFlow</div>
                  <div className="mt-2 text-base text-white/80">
                    Searching current sources • comparing products • generating shortlist • preparing deliverable
                  </div>
                </div>
              </div>

              <div className="mt-auto flex justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                <span>Web research</span>
                <span>Output save</span>
                <span>Document export</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
