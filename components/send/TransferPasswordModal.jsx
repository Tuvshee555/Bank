function WarningIcon() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff6df]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d67b12] text-[24px] leading-none text-[#d67b12]">
        !
      </div>
    </div>
  );
}

export default function TransferPasswordModal({
  open,
  password,
  passwordVisible,
  onPasswordChange,
  onTogglePasswordVisibility,
  onClose,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/45 px-4 backdrop-blur-[2px]">
      <div className="mx-auto mt-24 w-full max-w-[390px] rounded-[24px] bg-white p-5">
        <div className="flex items-start justify-between">
          <WarningIcon />
          <button type="button" aria-label="Close" onClick={onClose} className="mt-2 text-[#111]">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <h3 className="mt-2 text-center text-[44px] font-semibold leading-none">Гүйлгээний нууц үг</h3>
        <p className="mt-2 text-center text-[18px] text-[#5b6471]">Гүйлгээний нууц үгээ оруулан баталгаажуулна уу.</p>

        <div
          className={`mt-5 flex items-center rounded-[12px] border bg-[#f2f4f5] px-4 ${
            password ? "border-[#0a8a52]" : "border-transparent"
          }`}
        >
          <input
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={(event) => onPasswordChange(event.target.value)}
            className="h-16 w-full bg-transparent text-[28px] outline-none"
          />
          <button
            type="button"
            onClick={onTogglePasswordVisibility}
            aria-label="Toggle password visibility"
            className="text-[#101010]"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              {!passwordVisible && (
                <path
                  d="M4 20 20 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={!password.trim()}
          className={`mt-5 w-full rounded-[12px] py-3 text-[20px] font-medium transition-colors ${
            password.trim() ? "bg-[#008a4a] text-white" : "bg-[#d6dce2] text-[#98a0aa]"
          }`}
        >
          Баталгаажуулах
        </button>
      </div>
    </div>
  );
}
