"use client";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const params = useSearchParams();
  const amount = params.get("amount");

  const now = new Date();
  const formatted = now.toLocaleString("en-GB");

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center">
        <div className="text-green-600 text-4xl mb-2">✔</div>

        <h2 className="font-bold text-lg mb-2">Гүйлгээ амжилттай</h2>

        <p className="text-2xl font-bold mb-2">{amount} MNT</p>
        <p className="text-gray-500 text-sm">{formatted}</p>
      </div>
    </main>
  );
}