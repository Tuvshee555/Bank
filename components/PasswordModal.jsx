"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PasswordModal({ amount }) {
  const router = useRouter();
  const [pass, setPass] = useState("");

  const submit = () => {
    router.push(`/success?amount=${amount}`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-80">
        <h2 className="font-bold mb-4">Нууц үг</h2>

        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4"
        />

        <button
          onClick={submit}
          className="w-full bg-green-600 text-white py-2 rounded-xl"
        >
          Баталгаажуулах
        </button>
      </div>
    </div>
  );
}