# SkyGlass - Modern Weather Dashboard

A premium React-based weather dashboard featuring a modern Glassmorphism aesthetic and real-time data integration with the Weatherstack API.

## 🚀 Deployment

### Vercel Deployment
1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  **Environment Variables**: Add `VITE_WEATHERSTACK_API_KEY` to your Vercel project settings with your Weatherstack API key.
4.  The `vercel.json` file handles the Single Page Application (SPA) routing automatically.

## 🛠️ Local Setup

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root directory and add your API key:
    ```env
    VITE_WEATHERSTACK_API_KEY=your_api_key_here
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

## ✨ Features

- **Real-time Weather**: Current weather data for any city.
- **Historical Data**: Comparison with yesterday's weather.
- **Marine Conditions**: Tides and water temperature (where available).
- **Glassmorphism UI**: Beautiful frosted-glass aesthetic.
- **Responsive**: Fully optimized for all device sizes.

## 📦 Tech Stack

- React 19 / Vite
- Tailwind CSS v4
- Framer Motion
- Axios
- Lucide React

---
Powered by [Weatherstack API](https://weatherstack.com/)
