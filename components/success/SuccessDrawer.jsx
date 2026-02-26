import KhanIcon from "../icons/KhanIcon";

function CheckIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true" className="mx-auto">
      <circle cx="60" cy="60" r="52" fill="#14995A" />
      <path d="M35 61 53 79 86 46" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <div className="fixed inset-0 z-20 bg-black/35 backdrop-blur-[2px]" />

      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[390px] rounded-t-[24px] bg-[#ececec] px-4 pb-6 pt-3 shadow-[0_-12px_28px_rgba(0,0,0,0.12)]">
        <div className="mx-auto h-1.5 w-14 rounded-full bg-[#d2d6db]" />

        <section className="mt-3 rounded-[18px] bg-[#f6f6f6] px-4 py-7 text-center">
          <CheckIcon />
          <h1 className="mt-5 text-[48px] font-semibold leading-none">Гүйлгээ амжилттай.</h1>
          <p className="mt-4 text-[66px] font-semibold leading-none">{amountText} MNT</p>
          <p className="mt-4 text-[24px] text-[#66707c]">{timeText}</p>
        </section>

        <section className="mt-4 rounded-[14px] bg-[#f6f6f6] px-4 py-4">
          <div className="flex items-center justify-between">
            <p className="text-[18px] text-[#4f5967]">Дансны үлдэгдэл</p>
            <EyeIcon />
          </div>
          <p className="mt-2 text-[24px] font-medium">{balanceText} MNT</p>
        </section>

        <section className="mt-4 rounded-[14px] bg-[#f6f6f6] px-4 py-4">
          <p className="text-[18px] text-[#4f5967]">Хүлээн авагч</p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <div>
              <p className="text-[22px] font-semibold">{receiver}</p>
              <p className="mt-1 text-[17px]">{iban}</p>
            </div>
            <KhanIcon />
          </div>
        </section>

        <section className="mt-4 rounded-[14px] bg-[#f6f6f6] px-4 py-4">
          <p className="text-[18px] text-[#4f5967]">Гүйлгээний утга</p>
          <p className="mt-2 text-[22px] break-words">{note}</p>
        </section>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="rounded-[14px] border border-[#d7dbe0] bg-white py-3 text-[20px] font-medium text-[#323a46]"
          >
            Загвар хадгалах
          </button>
          <button
            type="button"
            onClick={onFinish}
            className="rounded-[14px] bg-[#008a4a] py-3 text-[20px] font-medium text-white"
          >
            Дуусгах
          </button>
        </div>
      </div>
    </>
  );
}
