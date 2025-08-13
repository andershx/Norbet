# Norbet (Extended Demo Crypto Casino)

> **Demo/Test only.** For any real deployment you must have licenses, KYC/AML, age verification, RG tooling, geoblocking, and legal review.

## What’s included
- Next.js 14 + Tailwind, dark UI
- Games: Dice, Crash, Mines, Limbo, Plinko (provably fair where applicable)
- Wallet with faucet, top-up, **Deposit History**
- **Stripe TEST Checkout** and **Coinbase Commerce SANDBOX** with webhook handlers that credit the in-app balance
- **Admin** page to view users and webhook events (no auth in demo)
- Pages: Casino, Live, Sports, Promotions, VIP, Affiliates, Blog, Help, Deposit, Withdraw (disabled), Wallet, Responsible Gaming, Terms, Privacy, KYC/AML

## Setup
```bash
npm i
cp .env.example .env
# add Stripe test keys and/or Coinbase Commerce sandbox keys
npm run dev
```

### Environment
- `JWT_SECRET`
- `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`
- `COINBASE_COMMERCE_API_KEY` and `COINBASE_COMMERCE_SHARED_SECRET`
- Optionally `NEXT_PUBLIC_BASE_URL` for redirect URLs

### Webhooks
- Stripe: POST to `/api/webhooks/stripe` with `checkout.session.completed`
- Coinbase Commerce: POST to `/api/webhooks/coinbase` with `charge:confirmed`

### Credit rate
Default `1 USD = 10 credits` (see API routes to change).

### Notes
- Uses a JSON file in `/tmp` on serverless functions for demo persistence (ephemeral).
- No production auth/admin. Do not use as-is for real money.
