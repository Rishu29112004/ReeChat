// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";   // <-- imported here
import HomePage from "./components/screens/HomePage/HomePage";
import FriendsPage from "./components/screens/FriendPage/FriendsPage";
import VideoPage from "./components/screens/VideoPage/VideoPage";
import PopModal from "./components/custom/PopModal";
import SavedPage from "./components/screens/SavedPage/SavedPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        {/* All routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/friend" element={<FriendsPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/pop" element={<PopModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
