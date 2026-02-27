"use client";

import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center">
      <div className="w-full max-w-[390px] px-1 pb-[env(safe-area-inset-bottom)]">
        <div className="relative flex h-[92px] items-end justify-between rounded-t-[20px] bg-[#f7f7f7] px-12 pb-3 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
        <button className="flex flex-col items-center text-[#0a8b58]" aria-label="Home">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0a8b58" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 10.6 12 3l9 7.6V21H3z" />
            <path d="M9 21v-6h6v6" />
          </svg>
          <span className="mt-1 text-[13px] font-semibold">Эхлэл</span>
        </button>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[52%]">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-4 border-[#e4e4e4] bg-[#0a8b58] shadow-[0_8px_16px_rgba(0,0,0,0.22)]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M16 3h3a2 2 0 0 1 2 2v3" />
              <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
              <rect x="9" y="9" width="2" height="2" fill="#fff" stroke="none" />
              <rect x="13" y="9" width="2" height="2" fill="#fff" stroke="none" />
              <rect x="9" y="13" width="2" height="2" fill="#fff" stroke="none" />
              <path d="m14 14 3 3" />
              <path d="m17 14-3 3" />
            </svg>
          </div>
          <p className="mt-1 text-center text-[13px] font-semibold text-[#95999f]">QR</p>
        </div>

        <button onClick={() => router.push("/send")} className="flex flex-col items-center text-[#9aa0a7]" aria-label="Transactions">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9aa0a7" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10" />
            <path d="m14 4 3 3-3 3" />
            <path d="M17 17H7" />
            <path d="m10 14-3 3 3 3" />
          </svg>
          <span className="mt-1 text-[13px] font-semibold">Гүйлгээ</span>
        </button>
      </div>
      </div>
    </div>
  );
}
