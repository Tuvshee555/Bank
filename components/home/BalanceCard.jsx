export default function BalanceCard() {
  return (
    <div className="mx-4 mt-3 rounded-[20px] bg-[#01884d] p-4 text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 leading-none">
          <span className="text-[18px]">★</span>
          <p className="text-[14px] font-medium tracking-tight text-white/90">
            MN23 0005 00 <span className="font-bold text-white">5653699009</span>
          </p>
        </div>

        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f2f6f4"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="8" y="4" width="12" height="16" rx="2" />
          <path d="M4 8v10a2 2 0 0 0 2 2h10" />
        </svg>
      </div>

      <div className="my-3 h-px bg-white/30" />

      <div className="flex items-end justify-between">
        <p className="text-[46px] font-semibold leading-none tracking-tight">75,572.93</p>
        <p className="text-[30px] font-semibold leading-none">MNT</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="rounded-[12px] bg-[#3a9f74] py-2.5 text-[16px] font-medium text-white/95">
          Хуулга
        </button>
        <button className="rounded-[12px] bg-[#3a9f74] py-2.5 text-[16px] font-medium text-white/95">
          Миний санхүү
        </button>
      </div>
    </div>
  );
}
