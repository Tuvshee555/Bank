import AccountHeader from "../components/home/AccountHeader";
import BalanceCard from "../components/home/BalanceCard";
import QuickActions from "../components/home/QuickActions";
import LastTransactionAccount from "../components/home/LastTransactionAccount";
import Transactions from "../components/home/Transactions";
import BottomNav from "../components/home/BottomNav";

export default function Home() {
  return (
    <main className="h-[100svh] overflow-hidden bg-[#ebebeb] text-[#111]">
      <div className="mx-auto h-full w-full max-w-[390px]">
        <div
          className="h-full overflow-y-auto overscroll-y-contain pb-[calc(108px+env(safe-area-inset-bottom))]"
          style={{ paddingTop: "max(env(safe-area-inset-top), 8px)" }}
        >
          <AccountHeader />
          <BalanceCard />
          <QuickActions />
          <LastTransactionAccount />
          <Transactions />
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
