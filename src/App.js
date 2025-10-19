import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";

// ✅ API endpoints centralized for maintainability
const API_ENDPOINTS = {
  TOP_ALBUMS: "https://qtify-backend.labs.crio.do/albums/top",
  NEW_ALBUMS: "https://qtify-backend.labs.crio.do/albums/new",
  GENRES: "https://qtify-backend.labs.crio.do/genres",
  SONGS: "https://qtify-backend.labs.crio.do/songs",
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />

      {/* ✅ Use CSS class instead of inline styles */}
      <main className="content-section">
        <Section title="Top Albums" apiEndpoint={API_ENDPOINTS.TOP_ALBUMS} />
        <Section title="New Albums" apiEndpoint={API_ENDPOINTS.NEW_ALBUMS} />
        <SongsSection
          GENRES_API={API_ENDPOINTS.GENRES}
          SONGS_API={API_ENDPOINTS.SONGS}
        />
      </main>
    </div>
  );
}

export default App;
