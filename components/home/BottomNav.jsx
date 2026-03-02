"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BottomNav() {
  const router = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center">
      <div className="w-full px-1 pb-[env(safe-area-inset-bottom)]">
        <div className="relative">
          <img src="/footer.png" alt="Footer navigation" className="w-full select-none" />
          <div className="absolute inset-0 grid grid-cols-3">
            <div aria-hidden="true" />
            <div aria-hidden="true" />
            <button
              type="button"
              aria-label="Right navigation"
              onClick={() => setShowDrawer(true)}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      {showDrawer && (
        <div className="fixed inset-0 z-[80]">
          <button
            type="button"
            aria-label="Close drawer"
            className="absolute inset-0 bg-black/40 khan-drawer-overlay-enter"
            onClick={() => setShowDrawer(false)}
          />
          <div className="fixed inset-x-0 bottom-0 top-[90px] z-[90] mx-auto w-full  khan-drawer-content-enter">
            <div className="relative h-full w-full">
              <img
                src="/drawer2.png"
                alt="Drawer"
                className="h-full w-full rounded-t-[22px] object-cover select-none"
              />
              <button
                type="button"
                aria-label="ХААН Банкны данс руу"
                onClick={() => router.push("/send")}
                className="absolute left-[6%] right-[6%] top-[32%] h-[11%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
