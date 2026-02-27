export default function AccountHeader() {
  return (
    <div className="mt-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#141414"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4.5 19.5c1.8-3.4 4.7-5.2 7.5-5.2s5.7 1.8 7.5 5.2" />
            <circle cx="12" cy="8.3" r="3.8" />
          </svg>
        </div>

        <div className="leading-tight">
          <p className="text-[16px] font-medium text-[#2d3339]">Сайн байна уу?</p>
          <p className="mt-0.5 text-[20px] font-bold tracking-tight text-[#16181b]">Г. ТҮВШИНСАЙХАН</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#f2f2f2]"
          aria-label="Notifications"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 8.2a6 6 0 1 0-12 0c0 7.2-3 7.2-3 7.2h18s-3 0-3-7.2" />
            <path d="M13.7 20.8a2 2 0 0 1-3.4 0" />
          </svg>
        </button>

        <button
          className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#f2f2f2]"
          aria-label="Hide balance"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 12s4.2-7 10-7 10 7 10 7-4.2 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
