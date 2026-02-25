"use client";
import { useState } from "react";
import PasswordModal from "./PasswordModal";

export default function ConfirmModal({ amount, onClose }) {
  const [next, setNext] = useState(false);

  if (next) return <PasswordModal amount={amount} />;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-80">
        <h2 className="font-bold text-lg mb-3">Баталгаажуулах</h2>

        <p className="mb-2">Дүн: {amount || 0} MNT</p>
        <p className="mb-4">Хүлээн авагч: ТЭМҮГЭН ЖАВХЛАН</p>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 border rounded-xl py-2"
          >
            Болих
          </button>
          <button
            onClick={() => setNext(true)}
            className="flex-1 bg-green-600 text-white rounded-xl py-2"
          >
            Тийм
          </button>
        </div>
      </div>
    </div>
  );
}