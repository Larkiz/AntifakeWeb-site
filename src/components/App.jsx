import { useState, useEffect } from "react";
import { ReadNews } from "./ReadNews.jsx";
import { SearchSect } from "./SearchSect.jsx";
import { SearchScreen } from "./SearchScreen.jsx";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LastNewsBlock } from "./Home.jsx";
import { SearchHandler } from "./SearchHandler.jsx";

const MainScreen = () => {
  return (
    <div>
      <div>
        <SearchSect />
        <div className="content">
          <LastNewsBlock />
        </div>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainScreen />} />
          <Route path="/read" element={<ReadNews />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/wait" element={<SearchHandler />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};
