"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("Demo User");
  const [email, setEmail] = useState("demo@agentflow.ai");
  const [password, setPassword] = useState("pass1234");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("agentflow-user", JSON.stringify({ email, name }));
    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="glass w-full max-w-md rounded-[28px] p-6">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-xl font-bold text-cyan shadow-neon">
            A
          </div>
          <div className="pill text-cyan">Create account</div>
          <h1 className="mt-3 text-3xl font-semibold text-white">Join AgentFlow</h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full name"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/35 focus:border-cyan/40 focus:outline-none"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/35 focus:border-cyan/40 focus:outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-white placeholder:text-white/35 focus:border-cyan/40 focus:outline-none"
          />
          <button type="submit" className="w-full rounded-xl bg-cyan px-4 py-3 font-semibold text-slate-950 shadow-neon">
            Create account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white/60">
          Already have an account? <Link href="/login" className="text-cyan">Log in</Link>
        </div>
      </div>
    </main>
  );
}
