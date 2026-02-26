import KhanIcon from "../icons/KhanIcon";

function CheckIcon() {
  return (
    <svg width="90" height="90" viewBox="0 0 120 120" fill="none" aria-hidden="true" className="mx-auto">
      <circle cx="60" cy="60" r="52" fill="#14995A" />
      <path d="M35 61 53 79 86 46" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
        stroke="#0f1722"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="#0f1722" strokeWidth="2" />
    </svg>
  );
}

export default function SuccessDrawer({ amountText, balanceText, timeText, receiver, iban, note, onFinish }) {
  return (
    <>
      <div className="fixed inset-0 z-20 bg-white/42 backdrop-blur-[7px] khan-drawer-overlay-enter" />

      <div className="fixed inset-x-0 bottom-0 top-[84px] z-30 mx-auto w-full max-w-[full] rounded-t-[22px] bg-[#ececec] px-4 pb-6 pt-3 khan-drawer-content-enter">
        <div className="h-full overflow-y-auto pb-[max(6px,env(safe-area-inset-bottom))]">
          <section className="rounded-[14px] bg-[#f6f6f6] px-4 py-7 text-center">
            <CheckIcon />
            <h1 className="mt-4 text-[24px] font-semibold leading-none text-[#10151d]">Гүйлгээ амжилттай.</h1>
            <p className="mt-4 whitespace-nowrap text-[32px] font-semibold leading-none text-[#10151d]">{amountText} MNT</p>
            <p className="mt-4 text-[16px] font-medium text-[#6a7481]">{timeText}</p>
          </section>

          <section className="mt-3 rounded-[12px] bg-[#f6f6f6] px-4 py-4">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-medium text-[#5e6876]">Дансны үлдэгдэл</p>
              <EyeIcon />
            </div>
            <p className="mt-2 text-[16px] font-medium text-[#1a2029]">{balanceText} MNT</p>
          </section>

          <section className="mt-3 rounded-[12px] bg-[#f6f6f6] px-4 py-4">
            <p className="text-[16px] font-medium text-[#5e6876]">Хүлээн авагч</p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <div>
                <p className="text-[16px] font-semibold leading-tight text-[#1a2029]">{receiver}</p>
                <p className="mt-1.5 text-[16px] leading-tight text-[#1a2029]">{iban}</p>
              </div>
              <KhanIcon className="shrink-0" />
            </div>
          </section>

          <section className="mt-3 rounded-[12px] bg-[#f6f6f6] px-4 py-4">
            <p className="text-[16px] font-medium text-[#5e6876]">Гүйлгээний утга</p>
            <p className="mt-2 text-[16px] leading-tight text-[#1a2029] break-words">{note}</p>
          </section>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="rounded-[12px] border border-[#d8dde2] bg-white py-3 text-[18px] font-semibold text-[#586170]"
            >
              Загвар хадгалах
            </button>
            <button
              type="button"
              onClick={onFinish}
              className="rounded-[12px] bg-[#02884d] py-3 text-[18px] font-semibold text-white"
            >
              Дуусгах
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

