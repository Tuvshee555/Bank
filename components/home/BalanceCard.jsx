export default function BalanceCard() {
  return (
    <div className="mx-4 mt-3 rounded-[14px] bg-[#058a4f] px-4 pb-[14px] pt-[10px] text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 leading-none">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#f4f9f6" aria-hidden="true">
            <path d="m12 2.8 2.6 5.2 5.7.8-4.1 4 1 5.7L12 15.8 6.8 18.5l1-5.7-4.1-4 5.7-.8Z" />
          </svg>
          <p className="text-[13px] font-medium tracking-tight text-white/90">
            MN23 0005 00 <span className="font-bold text-white">5653699009</span>
          </p>
        </div>

        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f5f8f6"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="8" y="4" width="12" height="16" rx="2" />
          <path d="M4 8v10a2 2 0 0 0 2 2h10" />
        </svg>
      </div>

      <div className="mb-[10px] mt-[11px] h-[1.5px] bg-white/35" />

      <div className="flex items-end justify-between leading-none">
        <p className="text-[34px] font-semibold tracking-tight">75,572.93</p>
        <p className="pb-[2px] text-[30px] font-semibold">MNT</p>
      </div>

      <div className="mt-[10px] grid grid-cols-2 gap-4">
        <button className="h-[40px] rounded-[10px] bg-[#40a97c] text-[16px] font-semibold text-white/95">Хуулга</button>
        <button className="h-[40px] rounded-[10px] bg-[#40a97c] text-[16px] font-semibold text-white/95">Миний санхүү</button>
      </div>
    </div>
  );
}
