import { formatMoney } from "./send-utils";

export default function SendForm({
  sourceIban,
  sourceBalance,
  amount,
  onAmountChange,
  iban,
  onIbanChange,
  receiver,
  onReceiverChange,
  note,
  onNoteChange,
  focusedField,
  onFieldFocus,
  onFieldBlur,
  canContinue,
  onContinue,
  onBack,
}) {
  const fieldClass = (name) =>
    `rounded-[14px] border bg-[#f6f6f6] px-4 py-3 transition-colors ${
      focusedField === name ? "border-[#0a8a52]" : "border-transparent"
    }`;

  return (
    <div className="mx-auto w-full max-w-[390px] pb-8">
      <div className="flex items-center gap-2 px-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="flex h-9 w-9 items-center justify-center rounded-full"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <h1 className="text-[20px] font-bold">ХААН Банкны данс руу</h1>
      </div>

      <section className="px-4 pt-4">
        <p className="mb-2 text-[16px] text-[#3f4956]">Шилжүүлэх данс</p>
        <div className="rounded-[16px] bg-[#06864a] px-4 py-2.5 text-white">
          <div className="flex items-center justify-between text-[16px]">
            <p className="opacity-85">ХАРИЛ... {sourceIban}</p>
          </div>

          <div className="mt-2 flex items-end justify-between">
            <p className="text-[20px] font-semibold leading-none">{formatMoney(sourceBalance)} ₮</p>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e7f4ed"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      <section className="px-4 pt-3">
        <div className="overflow-hidden rounded-[20px] bg-[#008513]">
          <div className="mx-[1px] mt-[1px] rounded-[18px] bg-[#f7f7f7] px-4 pb-5 pt-3">
            <div className="mx-auto flex w-[78px] justify-center rounded-[12px] bg-[#efefef] py-1.5 text-[18px] font-medium text-[#101010]">
              MNT
            </div>

            <div className="mt-6 text-center">
              <input
                type="text"
                inputMode="decimal"
                value={amount}
                onChange={(event) => onAmountChange(event.target.value)}
                onFocus={() => onFieldFocus("amount")}
                onBlur={onFieldBlur}
                placeholder="0.00"
                className="w-full bg-transparent text-center text-[58px] font-semibold leading-none text-[#191f28] outline-none placeholder:text-[#7a7d81]"
              />
              <div className="mx-auto mt-3 h-[2px] w-[94px] bg-[#d4f3df]" />
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-2.5 text-white">
            <div className="mx-auto flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16b360]/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M8 6a4 4 0 0 1 8 0v2h2a4 4 0 0 1 0 8h-2v2a4 4 0 0 1-8 0v-2H6a4 4 0 0 1 0-8h2V6Z"
                    fill="#2ef08f"
                  />
                </svg>
              </div>
              <p className="text-[18px] font-semibold tracking-tight">DiGi Pay</p>
            </div>

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d7f8e7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </section>

      <section className="px-4 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#f6f6f6] py-4 text-[18px] text-[#0b8a53]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0b8a53"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          IBAN лавлах
        </button>
      </section>

      <section className="space-y-3 px-4 pt-3">
        <div className={fieldClass("iban")}>
          <div className="flex items-center text-[18px] text-[#303846]">
            <span className="font-medium text-[#111]">MN</span>
            <span className="mx-4 h-8 w-px bg-[#d8d8d8]" />
            <input
              type="text"
              inputMode="numeric"
              value={iban}
              onChange={(event) => onIbanChange(event.target.value)}
              onFocus={() => onFieldFocus("iban")}
              onBlur={onFieldBlur}
              placeholder="IBAN дугаар"
              className="w-full bg-transparent text-[#111] outline-none placeholder:text-[#5f6978]"
            />
          </div>
        </div>

        <div className={fieldClass("receiver")}>
          <p className="text-[17px] text-[#36404d]">Хүлээн авагч</p>
          <input
            type="text"
            value={receiver}
            onChange={(event) => onReceiverChange(event.target.value)}
            onFocus={() => onFieldFocus("receiver")}
            onBlur={onFieldBlur}
            placeholder="Хүлээн авагч"
            className="mt-1.5 w-full bg-transparent text-[16px] text-[#111111] outline-none placeholder:text-[#5f6978]"
          />
        </div>

        <div className={fieldClass("note")}>
          <p className="text-[17px] text-[#36404d]">Гүйлгээний утга</p>
          <input
            type="text"
            value={note}
            onChange={(event) => onNoteChange(event.target.value)}
            onFocus={() => onFieldFocus("note")}
            onBlur={onFieldBlur}
            placeholder="Гүйлгээний утга"
            className="mt-1.5 w-full bg-transparent text-[16px] text-[#111111] outline-none placeholder:text-[#5f6978]"
          />
        </div>

        <div className="pt-1">
          <div className="flex gap-2">
            <button type="button" className="rounded-[11px] border border-[#dcdcdc] bg-[#f8f8f8] px-5 py-2.5 text-[16px] text-[#333]">
              +
            </button>
            <button type="button" className="rounded-[11px] border border-[#dcdcdc] bg-[#f8f8f8] px-5 py-2.5 text-[16px] text-[#333]">
              Хоол, хүнс
            </button>
            <button type="button" className="rounded-[11px] border border-[#dcdcdc] bg-[#f8f8f8] px-5 py-2.5 text-[16px] text-[#333]">
              Худалдан авалт
            </button>
          </div>

          <button type="button" className="mt-3 rounded-[11px] border border-[#dcdcdc] bg-[#f8f8f8] px-5 py-2.5 text-[16px] text-[#333]">
            Үйлчилгээний төлбөр
          </button>
        </div>
      </section>

      <div className="px-4 pb-2 pt-3">
        <button
          type="button"
          onClick={onContinue}
          disabled={!canContinue}
          className={`w-full rounded-[15px] py-3.5 text-[20px] font-medium transition-colors ${
            canContinue ? "bg-[#008a4a] text-white" : "bg-[#d4d9de] text-[#8a9098]"
          }`}
        >
          Үргэлжлүүлэх
        </button>
      </div>
    </div>
  );
}
