"use client";

import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AccountHeader from "../home/AccountHeader";
import BalanceCard from "../home/BalanceCard";
import QuickActions from "../home/QuickActions";
import LastTransactionAccount from "../home/LastTransactionAccount";
import Transactions from "../home/Transactions";
import BottomNav from "../home/BottomNav";
import SuccessDrawer from "./SuccessDrawer";
import { formatDateTime, formatMoney } from "./success-utils";

export default function SuccessPageClient() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const amount = Number(params.get("amount") || 0);
  const receiver = params.get("receiver") || "ТЭМҮГЭН ЖАВХЛАН";
  const iban = params.get("iban") || "MN10 000500 5219330139";
  const note = params.get("note") || "-";
  const sourceBalance = Number(params.get("sourceBalance") || 85622.93);
  const remainingBalance = Number(params.get("remainingBalance") || sourceBalance);
  const timestamp = params.get("at");

  const amountText = useMemo(() => formatMoney(amount), [amount]);
  const balanceText = useMemo(() => formatMoney(remainingBalance), [remainingBalance]);
  const timeText = useMemo(() => formatDateTime(timestamp), [timestamp]);

  return (
    <main className="min-h-screen bg-[#ececec] text-[#101010]">
      <div aria-hidden="true" className="pointer-events-none select-none">
        <div className="mx-auto w-full max-w-[390px] pb-[120px]">
          <AccountHeader />
          <BalanceCard />
          <QuickActions />
          <LastTransactionAccount />
          <Transactions />
        </div>

        <BottomNav />
      </div>

      <SuccessDrawer
        amountText={amountText}
        balanceText={balanceText}
        timeText={timeText}
        receiver={receiver}
        iban={iban}
        note={note}
        onFinish={() => router.push("/")}
      />
    </main>
  );
}
