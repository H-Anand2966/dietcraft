"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [activityLevel, setActivityLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [proteinPreference, setProteinPreference] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.replace("/login");
        return;
      }

      setCheckingAuth(false);
    };

    void checkUser();
  }, [router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Dashboard form submitted:", {
      height,
      weight,
      age,
      gender,
      activityLevel,
      goal,
      proteinPreference,
    });
  };

  if (checkingAuth) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
        <p className="text-sm text-slate-300">Loading your dashboard…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-8">
      <div className="mx-auto max-w-md space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Your Dashboard
          </h1>
          <p className="text-sm text-slate-300">
            Tell DietCraft about your body and goals so we can shape your
            perfect plan.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-[#0b1020] p-5 shadow-lg shadow-black/40 border border-white/5"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Height (cm)
              </label>
              <input
                type="number"
                inputMode="decimal"
                className="w-full rounded-xl bg-[#050816] border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="175"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Weight (kg)
              </label>
              <input
                type="number"
                inputMode="decimal"
                className="w-full rounded-xl bg-[#050816] border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="70"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Age
            </label>
            <input
              type="number"
              inputMode="numeric"
              className="w-full rounded-xl bg-[#050816] border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              placeholder="28"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className={`rounded-xl px-3 py-2 text-sm border ${
                  gender === "male"
                    ? "bg-emerald-400 text-[#050816] border-emerald-400"
                    : "bg-[#050816] border-white/10 text-slate-200"
                }`}
                onClick={() => setGender("male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`rounded-xl px-3 py-2 text-sm border ${
                  gender === "female"
                    ? "bg-emerald-400 text-[#050816] border-emerald-400"
                    : "bg-[#050816] border-white/10 text-slate-200"
                }`}
                onClick={() => setGender("female")}
              >
                Female
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Activity level
            </label>
            <select
              className="w-full rounded-xl bg-[#050816] border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              value={activityLevel}
              onChange={(event) => setActivityLevel(event.target.value)}
            >
              <option value="">Select activity</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="heavy">Heavy</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Goal
            </label>
            <select
              className="w-full rounded-xl bg-[#050816] border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            >
              <option value="">Select goal</option>
              <option value="bulking">Bulking</option>
              <option value="cutting">Cutting</option>
              <option value="competition-prep">Competition Prep</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-slate-300">
              Daily protein goal
            </label>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                className={`w-full rounded-xl px-3 py-2 text-sm text-left border ${
                  proteinPreference === "standard"
                    ? "bg-emerald-400 text-[#050816] border-emerald-400"
                    : "bg-[#050816] border-white/10 text-slate-200"
                }`}
                onClick={() => setProteinPreference("standard")}
              >
                Standard protein
              </button>
              <button
                type="button"
                className={`w-full rounded-xl px-3 py-2 text-sm text-left border ${
                  proteinPreference === "high"
                    ? "bg-emerald-400 text-[#050816] border-emerald-400"
                    : "bg-[#050816] border-white/10 text-slate-200"
                }`}
                onClick={() => setProteinPreference("high")}
              >
                High protein
              </button>
              <button
                type="button"
                className={`w-full rounded-xl px-3 py-2 text-sm text-left border ${
                  proteinPreference === "very-high"
                    ? "bg-emerald-400 text-[#050816] border-emerald-400"
                    : "bg-[#050816] border-white/10 text-slate-200"
                }`}
                onClick={() => setProteinPreference("very-high")}
              >
                Very high protein
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-2xl bg-emerald-400 text-[#050816] font-semibold text-base tracking-wide py-3.5 shadow-lg shadow-emerald-500/40 active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
          >
            Save &amp; Continue
          </button>
        </form>
      </div>
    </main>
  );
}

