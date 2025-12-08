import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MoiveDetail from "./pages/MoiveDetail";
import NowPlaying from "./pages/NowPlayingMovies";
import TopRated from "./pages/TopRatedMovies";
import Upcoming from "./pages/UpcomingMovies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>


          <Route path="movie" element={<Home />}></Route>
          <Route path="movie/now-playing" element={<NowPlaying />}></Route>
          <Route path="movie/top-rated" element={<TopRated />}></Route>
          <Route path="movie/upcoming" element={<Upcoming />}></Route>

          <Route path="movie/:id" element={<MoiveDetail />}></Route>
          <Route path="*" element={<NoMatch></NoMatch>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
