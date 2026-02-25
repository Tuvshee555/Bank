"use client";

export default function KhanHeader() {
  return (
    <header className="w-full bg-white px-4 pt-4 pb-3 flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        {/* Profile icon */}
        <div className="w-10 h-10 flex items-center justify-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c2-4 6-6 8-6s6 2 8 6" />
          </svg>
        </div>

        {/* Greeting text */}
        <div className="leading-tight">
          <p className="text-gray-500 text-sm">Сайн байна уу?</p>
          <h1 className="text-[18px] font-semibold tracking-tight">
            Г. ТУВШИНСАЙХАН
          </h1>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* Bell */}
        <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>

        {/* Eye */}
        <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>
    </header>
  );
}
