"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Welcome back to <span className="text-emerald-400">DietCraft</span>
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded bg-black/40 border border-white/10 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded bg-black/40 border border-white/10 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded bg-emerald-500 text-black font-semibold disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="text-sm text-center text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-emerald-400 underline">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}
