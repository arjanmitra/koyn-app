# Coin Dashboard App

A cryptocurrency dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**. This project fetches live coin data from the CoinCap API and renders it in a responsive UI with charts and metadata.

---

## Setup Instructions

```bash
git clone https://github.com/your-username/coin-dashboard.git
cd coin-dashboard

npm install

COINCAP_API_KEY=your_api_key_here

npm run dev

npm test

## Architecture & Approach

Next.js App Router: Leverages the app/ directory for routing, layouts, and server components.
TypeScript: For static typing, better tooling, and safer code.
Tailwind CSS: Utility-first CSS framework for styling. Dark/light mode toggles via class strategy.
Redux Toolkit: Centralized state management for coin data, using createSlice.
API Routes: Custom endpoints under /api/coin-asset/[id] and /history to securely call the CoinCap API server-side.
Charting: Implemented using recharts with ResponsiveContainer for mobile-friendly visualization.
Dark Mode Support: Controlled via a <html class="dark"> toggle and localStorage persistence.

## Assumptions & Trade-offs
Polling every 5 seconds for updated coin data was chosen over websockets for simplicity and API constraints.
LocalStorage is used for persisting the dark mode preference — this keeps implementation lightweight and avoids introducing more complex state persistence tools.
Initial coin data and history are passed as props into the client components for hydration, simplifying SSR/ISR for now.
No pagination or search was implemented in the coin table — future enhancement would involve debounced queries and caching.