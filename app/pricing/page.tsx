import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <div className="pill text-cyan">Plans & pricing</div>
        <h1 className="mt-4 text-4xl font-semibold text-white">Choose your AI workflow</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass rounded-[28px] p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-white/60">Free</div>
          <div className="mt-4 text-4xl font-semibold text-white">$0</div>
          <div className="mt-2 text-white/70">For exploratory work</div>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>• Basic chat agent</li>
            <li>• Limited research tasks</li>
            <li>• Standard workspace</li>
          </ul>
          <button className="mt-8 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white">
            Current plan
          </button>
        </div>

        <div className="glass rounded-[28px] border border-cyan/30 bg-cyan/5 p-6 shadow-neon">
          <div className="text-sm uppercase tracking-[0.2em] text-cyan">Pro</div>
          <div className="mt-4 text-4xl font-semibold text-white">$9.99<span className="text-lg text-white/60">/mo</span></div>
          <div className="mt-2 text-white/70">Full autonomous execution</div>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>• Unlimited chats</li>
            <li>• Research automation</li>
            <li>• Media generation</li>
            <li>• Expedited output</li>
          </ul>
          <Link href="/dashboard" className="mt-8 block w-full rounded-xl bg-cyan px-4 py-3 text-center font-semibold text-slate-950 shadow-neon">
            Upgrade to Pro
          </Link>
        </div>
      </div>
    </main>
  );
}
