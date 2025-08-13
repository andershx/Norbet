export function celebrate(amount: number) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('norbet:celebrate', { detail: { amount } }));
  }
}
