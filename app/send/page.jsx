"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import SendForm from "../../components/send/SendForm";
import TransferConfirmDrawer from "../../components/send/TransferConfirmDrawer";
import TransferPasswordModal from "../../components/send/TransferPasswordModal";
import {
  SOURCE_BALANCE,
  SOURCE_IBAN,
  TRANSFER_FEE,
  sanitizeAmount,
  sanitizeIban,
} from "../../components/send/send-utils";

export default function SendPage() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [iban, setIban] = useState("");
  const [receiver, setReceiver] = useState("");
  const [note, setNote] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showConfirm || showPassword ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showConfirm, showPassword]);

  const amountNumber = useMemo(() => {
    const parsed = Number.parseFloat(amount);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [amount]);

  const compactIban = useMemo(() => iban.replace(/\s+/g, ""), [iban]);
  const displayIban = compactIban ? `MN${iban.trim() || compactIban}` : "MN";

  const canContinue =
    amountNumber > 0 &&
    compactIban.length > 0 &&
    receiver.trim().length > 0 &&
    note.trim().length > 0 &&
    amountNumber + TRANSFER_FEE <= SOURCE_BALANCE;

  const remainingBalance = Math.max(SOURCE_BALANCE - amountNumber - TRANSFER_FEE, 0);

  const onContinue = () => {
    if (!canContinue) return;
    setShowConfirm(true);
  };

  const openPasswordModal = () => {
    setShowConfirm(false);
    setShowPassword(true);
  };

  const closePasswordModal = () => {
    setShowPassword(false);
    setPassword("");
  };

  const submitTransfer = () => {
    if (!password.trim()) return;

    const params = new URLSearchParams({
      amount: amountNumber.toFixed(2),
      receiver: receiver.trim(),
      iban: displayIban,
      note: note.trim(),
      sourceBalance: SOURCE_BALANCE.toFixed(2),
      remainingBalance: remainingBalance.toFixed(2),
      fee: String(TRANSFER_FEE),
      at: String(Date.now()),
    });

    router.push(`/success?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#ececec] text-[#101010]">
      <SendForm
        sourceIban={SOURCE_IBAN}
        sourceBalance={SOURCE_BALANCE}
        amount={amount}
        onAmountChange={(value) => setAmount(sanitizeAmount(value))}
        iban={iban}
        onIbanChange={(value) => setIban(sanitizeIban(value))}
        receiver={receiver}
        onReceiverChange={setReceiver}
        note={note}
        onNoteChange={setNote}
        focusedField={focusedField}
        onFieldFocus={setFocusedField}
        onFieldBlur={() => setFocusedField("")}
        canContinue={canContinue}
        onContinue={onContinue}
        onBack={() => router.push("/")}
      />

      <TransferConfirmDrawer
        open={showConfirm}
        amountNumber={amountNumber}
        receiver={receiver}
        displayIban={displayIban}
        note={note}
        transferFee={TRANSFER_FEE}
        onClose={() => setShowConfirm(false)}
        onConfirm={openPasswordModal}
      />

      <TransferPasswordModal
        open={showPassword}
        password={password}
        passwordVisible={passwordVisible}
        onPasswordChange={setPassword}
        onTogglePasswordVisibility={() => setPasswordVisible((previous) => !previous)}
        onClose={closePasswordModal}
        onSubmit={submitTransfer}
      />
    </main>
  );
}
