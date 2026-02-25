"use client";

import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-1/2 w-full max-w-[390px] -translate-x-1/2 px-1 pb-1">
      <div className="relative flex h-[92px] items-end justify-between rounded-t-[22px] bg-[#f8f8f8] px-10 pb-3 shadow-[0_-1px_10px_rgba(0,0,0,0.06)]">
        <button className="flex flex-col items-center text-[#02884d]" aria-label="Home">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#02884d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 10.6 12 3l9 7.6V21H3z" />
            <path d="M9 21v-6h6v6" />
          </svg>
          <span className="mt-1 text-[13px] font-medium">Эхлэл</span>
        </button>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#02884d] shadow-[0_6px_14px_rgba(0,0,0,0.2)]">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
          <p className="mt-1 text-center text-[13px] text-[#7d8084]">QR</p>
        </div>

        <button onClick={() => router.push("/send")} className="flex flex-col items-center text-[#9ba0a5]" aria-label="Transactions">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ba0a5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 7h4v4" />
            <path d="M21 7l-5 5" />
            <path d="M7 17H3v-4" />
            <path d="M3 17l5-5" />
          </svg>
          <span className="mt-1 text-[13px] font-medium">Гүйлгээ</span>
        </button>
      </div>
    </div>
  );
}
