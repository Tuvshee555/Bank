export default function TransferPasswordModal({
  open,
  password,
  passwordVisible,
  onPasswordChange,
  onTogglePasswordVisibility,
  onClose,
  onSubmit,
  loading,
}) {
  if (!open) return null;

  return (
    <dialog
      open
      onCancel={(event) => {
        event.preventDefault();
        if (!loading) onClose();
      }}
      className="fixed inset-0 z-40 m-0 h-full w-full bg-transparent p-4"
    >
      <div className="absolute inset-0 bg-black/45" onClick={loading ? undefined : onClose} />
      <div className="relative mx-auto mt-40 w-full rounded-[16px] bg-white p-5">
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[16px] bg-white/80">
            <svg
              className="animate-spin"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              aria-label="Уншиж байна"
            >
              <circle cx="28" cy="28" r="22" stroke="#e0ede8" strokeWidth="5" />
              <path
                d="M28 6a22 22 0 0 1 22 22"
                stroke="#027846"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-4 text-[15px] font-medium text-[#027846]">Баталгаажуулж байна...</p>
          </div>
        )}
        <div className="relative flex items-start justify-center">
          <img src="/warning.png" alt="" className="h-16 w-16" />
          <button
            type="button"
            aria-label="Close"
            onClick={loading ? undefined : onClose}
            className="absolute right-0 top-0 text-[#111]"
          >
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

        <h3 className="mt-2 text-center text-[20px] font-semibold leading-none">Гүйлгээний нууц үг</h3>
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
            className="h-12 w-full bg-transparent text-[28px] outline-none"
          />
          <button
            type="button"
            onClick={onTogglePasswordVisibility}
            aria-label="Toggle password visibility"
            className="text-[#101010]"
          >
            <svg className="text-[#151515]" width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
          disabled={!password.trim() || loading}
          className={`mt-5 w-full rounded-[12px] py-3 text-[20px] font-medium transition-colors ${
            password.trim() && !loading ? "bg-[#027846] text-white" : "bg-[#d6dce2] text-[#98a0aa]"
          }`}
        >
          Баталгаажуулах
        </button>
      </div>
    </dialog>
  );
}
