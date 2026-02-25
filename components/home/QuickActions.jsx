function QuickActionIcon({ type }) {
  if (type === "piggy") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#078b56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18.7 9.7a3 3 0 0 0-2.7-2.7 8.4 8.4 0 0 0-3.2-.7c-2.9 0-5.2 1.2-6.4 3.2H4.8a1.8 1.8 0 0 0 0 3.6h1.1c0 1.1.3 2.1.9 3h-.9a1 1 0 0 0 0 2h6.6a7.1 7.1 0 0 0 3.8-1.1h2.2l1.1-2.3h1.2v-2h-1.1" />
        <circle cx="9.2" cy="10.4" r=".7" fill="#078b56" stroke="none" />
      </svg>
    );
  }

  if (type === "loan") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#078b56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="15.5" cy="8.5" r="2.5" />
        <path d="M4 17c1.3-2 3.2-3.1 5.2-3.1 2.2 0 3.5 1.3 5 1.9l2.2-2.1c.8-.7 2.1-.6 2.7.2.5.8.3 1.9-.4 2.5l-2.8 2.7c-.9.9-2.3 1.2-3.5.7L9.6 19H4Z" />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#078b56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#078b56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="7" width="16" height="11" rx="3" />
      <path d="M9 6l2.5 2M15 6l-2.5 2" />
    </svg>
  );
}

export default function QuickActions() {
  const items = [
    { id: "piggy", label: "Данс" },
    { id: "loan", label: "Зээл" },
    { id: "card", label: "Карт" },
    { id: "tv", label: "Төлбөр" },
  ];

  return (
    <div className="mx-4 mt-5 grid grid-cols-4 gap-3">
      {items.map((item) => (
        <div key={item.label} className="flex h-[96px] flex-col items-center justify-center rounded-[16px] bg-[#f7f7f7]">
          <QuickActionIcon type={item.id} />
          <p className="mt-2 text-[14px] font-medium text-[#151515]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
