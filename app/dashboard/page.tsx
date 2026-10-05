"use client";

import { useEffect, useState } from "react";
import { CreditCard, LogOut, MessageSquareText, Plus } from "lucide-react";
import Link from "next/link";

const groups = [
  { label: "Today", items: ["Brand strategy memo", "Research summary"] },
  { label: "Earlier", items: ["Email draft", "Pitch deck outline"] },
];

export function Sidebar() {
  return (
    <aside className="glass hidden h-screen w-[300px] flex-col border-r border-white/10 p-4 md:flex">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan shadow-neon">
            A
          </div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/70">AgentFlow</div>
        </div>
      </div>

      <button className="mb-6 flex items-center justify-center gap-2 rounded-2xl border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm font-medium text-cyan shadow-neon">
        <Plus className="h-4 w-4" />
        New task
      </button>

      <div className="space-y-6 overflow-auto">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="pill mb-3 px-2 text-white/50">{group.label}</div>
            <div className="space-y-2">
              {group.items.map((item) => (
                <button
                  key={item}
                  className="flex w-full items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 text-left text-sm text-white/75 transition hover:border-cyan/30 hover:bg-cyan/5"
                >
                  <MessageSquareText className="h-4 w-4 text-cyan" />
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-2 border-t border-white/10 pt-4">
        <Link href="/pricing" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/[0.02]">
          <CreditCard className="h-4 w-4 text-cyan" />
          Plans & pricing
        </Link>
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white/70 hover:bg-white/[0.02]">
          <LogOut className="h-4 w-4 text-cyan" />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default function DashboardPage() {
  const [messages, setMessages] = useState([
    { id: "1", role: "assistant", text: "I’m ready. Ask me to research, generate, summarize, or create a deliverable." },
  ]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const stored = localStorage.getItem("agentflow-user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUserName(parsed.name || "Guest");
    }
  }, []);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { id: crypto.randomUUID(), role: "user", text: input };
    const nextMsg = [...messages, userMessage];
    setMessages(nextMsg);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    setMessages([...nextMsg, { id: crypto.randomUUID(), role: "assistant", text: data.reply }]);
  }

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#050b14]/60">
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-2.5 w-2.5 rounded-full bg-cyan shadow-neon" />
            <div className="text-xs uppercase tracking-[0.2em] text-white/60">Autonomous agent</div>
          </div>
          <div className="text-sm text-white/70">{userName}</div>
        </header>

        <div className="h-[calc(100vh-128px)] overflow-auto px-4 py-6">
          <div className="mx-auto max-w-4xl space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-2xl rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-cyan text-slate-950 shadow-neon"
                      : "border border-white/10 bg-white/[0.03] text-white/85"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 p-4">
          <div className="glass mx-auto flex max-w-4xl items-center gap-3 rounded-2xl p-2">
            <button className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-white/70">📎</button>
            <button className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-white/70">🖼️</button>
            <button className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-white/70">🎙️</button>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Describe your task..."
              className="flex-1 border-0 bg-transparent px-2 py-3 text-white placeholder:text-white/35 focus:outline-none"
            />

            <button onClick={sendMessage} className="flex items-center gap-2 rounded-xl bg-cyan px-4 py-2 font-medium text-slate-950 shadow-neon">
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
