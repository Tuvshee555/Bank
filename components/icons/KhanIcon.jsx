export default function KhanIcon({ className = "" }) {
  const baseClass = "flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f4ee]";

  return (
    <div className={`${baseClass} ${className}`.trim()}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="14" fill="#0A8351" />
        <path
          d="M13.999 6.7c1.8 2.4 3.8 3.8 7 4.1-2.4 1.8-3.8 3.8-4.1 7-1.8-2.4-3.8-3.8-7-4.1 2.4-1.8 3.8-3.8 4.1-7Z"
          fill="#F8D58B"
        />
      </svg>
    </div>
  );
}
