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

export function sanitizeAmountFixed(value) {
  return value.replace(/[^\d]/g, "");
}

export function sanitizeIban(value) {
  const digits = value.replace(/[^\d]/g, "");
  const part1 = digits.slice(0, 2);
  const part2 = digits.slice(2, 8);
  const part3 = digits.slice(8, 18);
  return [part1, part2, part3].filter(Boolean).join(" ");
}
