# 🌍 GlobeScape

GlobeScape is a multi-page, interactive travel planner app that allows users to explore countries
across the world using an interactive world map. The app uses the [REST Countries API](https://restcountries.com/)
to fetch detailed information such as each country's capital, flag, continent, population, and languages.
Users can mark countries as **visited** or add them to a **wishlist** for future travel plans.
The app stores this data using localStorage and supports client-side routing for a smooth user
experience. The UI features a clean, custom-designed interface inspired by light travel themes,
with responsiveness across laptops, tablets, and mobile devices.

## 🚀 Live Demo

🌐 [globescape.netlify.app](https://globescape.netlify.app)

## 🧭 Branding

The app is designed as a mock travel platform, taking inspiration from travel apps like VisitedApp
and Nomad List, to create an easy-to-use and engaging interface for users to plan their international
adventures

## 🎨 Design&Theme

The UI features a clean, modern design inspired by travel guides' aesthetics.
It uses a soft, warm color palette to reflect curiosity and global discovery:

- `#1C7C54` (deep teal green)
- `#FFCB77` (sunset yellow)
- `#F5F5F5` (light gray)
- `#2D2D2D` (dark gray)

## 📸 Features

- 🌐 Interactive world map (powered by Leaflet)
- ✅ Track visited countries
- 🌟 Wishlist for future destinations
- 🧠 Modal with country details to expand your knowledge
- 💾 Persistent local storage
- 💡 Clean, responsive design 

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (Map, NavBar, CountryModal)
├── context/          # Country context for global state
├── hooks/            # Custom React hooks (e.g., fetch countries)
├── pages/            # Page components (Home, Wishlist)
├── data/             # GeoJSON data (e.g., countries.geo.json)
├── styles/           # CSS files for each major component
├── App.jsx
├── main.jsx
```
## 🛠 Tech Stack

- React
- Vite
- Leaflet.js
- CSS Modules
- REST Countries API

## 📦 Installation
### Clone the repo
```git clone https://github.com/sertanrdn/globescape.git```

```cd globescape```

### Install dependencies
```npm install```

### Start the dev server
```npm run dev```

## 📁 Data Source
The app also uses a local countries.geo.json file located in the /data folder to provide geographic boundary data for rendering the map.

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.
