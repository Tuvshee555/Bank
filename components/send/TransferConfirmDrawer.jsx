import KhanIcon from "../icons/KhanIcon";
import { formatMoney } from "./send-utils";

function WarningBadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <circle cx="12" cy="12" r="9" stroke="#e2851f" strokeWidth="2" />
      <path d="M12 8v5" stroke="#e2851f" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1" fill="#e2851f" />
    </svg>
  );
}

export default function TransferConfirmDrawer({
  open,
  amountNumber,
  receiver,
  displayIban,
  note,
  transferFee,
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 khan-drawer-overlay-enter">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-white/38 backdrop-blur-[6px]"
      />

      <div className="fixed inset-x-0 bottom-0 top-[106px] z-40 mx-auto w-full max-w-[390px] rounded-t-[20px] bg-[#ececec] px-4 pb-6 pt-4 khan-drawer-content-enter">
        <div className="h-full overflow-y-auto pb-[max(6px,env(safe-area-inset-bottom))]">
          <h2 className="text-center text-[24px] font-semibold leading-none text-[#0a8a53]">Баталгаажуулалт</h2>

          <div className="mt-4 flex gap-2 rounded-[10px] bg-[#f6e9c6] px-4 py-3 text-[#dc7f18]">
            <WarningBadgeIcon />
            <p className="text-[14px] leading-[1.35]">
              Та гүйлгээ хийхээсээ өмнө банк, хүлээн авагчийн мэдээлэл, дансны дугаар, мөнгөн дүнг дахин хянаж
              баталгаажуулна уу.
            </p>
          </div>

          <div className="mt-3 rounded-[12px] bg-[#f6f6f6] px-4 py-5 text-center">
            <div className="mx-auto flex w-[72px] justify-center rounded-[10px] bg-[#dfe3e9] py-1 text-[18px] font-medium text-[#9ca3ad]">
              MNT
            </div>
            <p className="mt-4 text-[30px] font-semibold leading-none text-[#1f232a]">{formatMoney(amountNumber || 0)}</p>
            <div className="mx-auto mt-2.5 h-[2px] w-[96px] bg-[#d6efe3]" />
          </div>

          <div className="mt-3 rounded-[12px] bg-[#f6f6f6] px-4 py-4">
            <p className="text-[16px] font-medium text-[#596272]">Хүлээн авагч</p>
            <div className="mt-2 flex items-end justify-between gap-3">
              <div>
                <p className="text-[16px] font-semibold leading-tight text-[#1e232a]">{receiver || "-"}</p>
                <p className="mt-1.5 text-[16px] leading-tight text-[#1e232a]">{displayIban}</p>
              </div>
              <KhanIcon className="shrink-0" />
            </div>
          </div>

          <div className="mt-3 rounded-[12px] bg-[#f6f6f6] px-4 py-4">
            <p className="text-[16px] font-medium text-[#596272]">Гүйлгээний утга</p>
            <p className="mt-2 text-[16px] leading-tight text-[#1a1f27]">{note || "-"}</p>
          </div>

          <div className="flex items-center justify-between px-1 pb-4 pt-4">
            <span className="text-[16px] font-medium text-[#2b3038]">Шимтгэл</span>
            <span className="text-[16px] font-medium text-[#2b3038]">{transferFee} ₮</span>
          </div>

          <button
            type="button"
            onClick={onConfirm}
            className="w-full rounded-[12px] bg-[#02884c] py-3.5 text-[18px] font-semibold text-white"
          >
            Гүйлгээ хийх
          </button>
        </div>
      </div>
    </div>
  );
}
