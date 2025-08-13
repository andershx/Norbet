/** Lightweight FX helpers for client-side celebrations */
export function celebrate(amount: number) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('norbet:win', { detail: { amount } }));
}
