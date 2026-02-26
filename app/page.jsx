import AccountHeader from "../components/home/AccountHeader";
import BalanceCard from "../components/home/BalanceCard";
import QuickActions from "../components/home/QuickActions";
import LastTransactionAccount from "../components/home/LastTransactionAccount";
import Transactions from "../components/home/Transactions";
import BottomNav from "../components/home/BottomNav";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#ececec] text-[#111]">
      <div
        className="mx-auto w-full max-w-[390px] pb-[120px]"
        style={{ paddingTop: "max(env(safe-area-inset-top), 8px)" }}
      >
        <AccountHeader />
        <BalanceCard />
        <QuickActions />
        <LastTransactionAccount />
        <Transactions />
      </div>

      <BottomNav />
    </main>
  );
}
