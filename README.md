# Koyn

This dashboard was built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Redux**. This project fetches live coin data from the CoinCap API and renders it in a responsive UI with charts and metadata.

---

## Setup Instructions

```bash

1. Clone this repo.
git clone https://github.com/arjanmitra/koyn-app.git

2. Install all dependencies.
npm install

3. Set the CoinCap API key in a .env.local file.
COINCAP_API_KEY=your_api_key_here

4. Start the local dev server.
npm run dev

5. Run the tests.
npm run test

```

## Architecture & Approach 

1. The project was built on Next.js + TypeScript with Tailwind and custom CSS classes for styling and Redux for state management. 

2. The Home page and the coin/[id] pages are SSR. They call the CoinCap APIs directly for an initial load and then render their corresponding client components.

3. Custom API endpoints were created under api/ in order to securely call the CoinCap API routes from the client components.

4. The Recharts library was used to display the chart data for each asset.


## Assumptions & Trade-offs

1. Since the CoinCap API only provides 2500 credits per month, the home page does not have simulated SSE. Once you click into a specific crypto asset, that asset's page will refresh every 10,000 ms. Only the metadata and values will be refreshed.

2. The chart data is not refreshed as calling the /history CoinCap endpoint is very costly, depending on the interval you are calling.
