"use client";

function getTodayDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function TransactionRow({ time, description, balance, amount }) {
  const amountColor = amount.startsWith("-") ? "text-[#b06b1f]" : "text-[#088451]";

  return (
    <div className="py-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2f2f2]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#af6e22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="M6 11l6-6 6 6" />
            </svg>
          </div>

          <div>
            {time ? <p className="text-[16px] text-[#1f1f1f]">{time}</p> : null}
            <p className="mt-1 max-w-[170px] text-[16px] leading-5 text-[#141414]">{description}</p>
            <p className="mt-2 text-[16px] text-[#1f1f1f]">Үлд: {balance}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 pl-2">
          <p className={`text-[18px] font-medium ${amountColor}`}>{amount}</p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c5c5c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Transactions() {
  const todayDate = getTodayDate();

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
    {
      id: "taxi",
      time: "15:06",
      description: "Taxi payment",
      balance: "163,022.93",
      amount: "-8,500.00",
    },
    {
      id: "market",
      time: "13:58",
      description: "Market purchase",
      balance: "171,522.93",
      amount: "-31,200.00",
    },
    {
      id: "salary",
      time: "09:14",
      description: "Salary income",
      balance: "202,722.93",
      amount: "+250,000.00",
    },
  ];

  return (
    <div className="mx-4 mt-3 rounded-[16px] bg-[#f7f7f7] p-4 pb-2">
      <p className="text-[17px] font-medium text-[#088451]">{todayDate}</p>

      <div className="mt-1 max-h-[330px] overflow-y-auto pr-1">
        {transactions.map((transaction, index) => (
          <div key={transaction.id}>
            <TransactionRow
              time={transaction.time}
              description={transaction.description}
              balance={transaction.balance}
              amount={transaction.amount}
            />
            {index < transactions.length - 1 ? <div className="h-px bg-[#e4e4e4]" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
