import { Suspense } from "react";
import SuccessPageClient from "../../components/success/SuccessPageClient";

export default function SuccessPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#ececec]" />}>
      <SuccessPageClient />
    </Suspense>
  );
}
