"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to <span className="text-emerald-400">DietCraft</span>
      </h1>

      <p className="text-gray-300">
        This is your dashboard. Next, you’ll enter your body details and get your diet plan.
      </p>
    </main>
  );
}
