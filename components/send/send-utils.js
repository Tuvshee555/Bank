export const SOURCE_IBAN = "MN23 0005 00 5653699009";
export const SOURCE_BALANCE = 85622.93;
export const TRANSFER_FEE = 50;

export function formatMoney(value) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function sanitizeAmount(value) {
  const cleaned = value.replace(/[^\d.]/g, "");
  const parts = cleaned.split(".");

  if (parts.length === 1) return parts[0];

  const fraction = parts.slice(1).join("").slice(0, 2);
  return `${parts[0]}.${fraction}`;
}

export function sanitizeIban(value) {
  return value.replace(/[^\d\s]/g, "");
}
