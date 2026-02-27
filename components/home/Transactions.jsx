"use client";

function TransactionRow({ time, description, balance, amount }) {
  const amountColor = amount.startsWith("-") ? "text-[#b36e24]" : "text-[#088451]";

  return (
    <div className="py-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#eeeeee]">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#b36e24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="M6 11l6-6 6 6" />
            </svg>
          </div>

          <div>
            {time ? <p className="text-[16px] text-[#2d3238]">{time}</p> : null}
            <p className="mt-1 max-w-[190px] text-[16px] font-medium leading-6 text-[#2a2f36]">{description}</p>
            <p className="mt-2 text-[16px] font-semibold text-[#3d3f44]">Үлд: {balance}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 pl-2">
          <p className={`text-[18px] font-semibold ${amountColor}`}>{amount}</p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c4c4c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Transactions() {
  const todayDate = "2026.02.25";

  const transactions = [
    {
      id: "smart-fee",
      description: "Ухаалаг банкны гүйлгээний хураамж",
      balance: "75,572.93",
      amount: "-50.00",
    },
    {
      id: "h-transfer",
      time: "20:02",
      description: "h",
      balance: "75,622.93",
      amount: "-10,000.00",
    },
    {
      id: "phone-bill",
      time: "19:41",
      description: "Unitel bill payment",
      balance: "85,622.93",
      amount: "-45,000.00",
    },
    {
      id: "atm-withdraw",
      time: "18:33",
      description: "ATM cash withdrawal",
      balance: "130,622.93",
      amount: "-20,000.00",
    },
    {
      id: "food-order",
      time: "17:18",
      description: "Food delivery order",
      balance: "150,622.93",
      amount: "-12,400.00",
    },
  ];

  return (
    <div className="mx-4 mt-3 rounded-[14px] bg-[#f4f4f4] px-4 pb-2 pt-3">
      <p className="text-[17px] font-semibold text-[#0a8b58]">{todayDate}</p>

      <div className="mt-1">
        {transactions.map((transaction, index) => (
          <div key={transaction.id}>
            <TransactionRow
              time={transaction.time}
              description={transaction.description}
              balance={transaction.balance}
              amount={transaction.amount}
            />
            {index < transactions.length - 1 ? <div className="h-px bg-[#dfdfdf]" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
