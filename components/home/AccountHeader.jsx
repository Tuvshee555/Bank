
export default function AccountHeader() {
  return (
    <div className="mt-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <div className="flex h-[36px] w-[36px] items-center justify-center mt-1 mx-2">
          <img src={"human.png"}/>
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
