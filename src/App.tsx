import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MoiveDetail from "./pages/MoiveDetail";
import TVDetail from "./pages/TVDetail";
import NowPlaying from "./pages/movie_categroy/NowPlayingMovies";
import TopRated from "./pages/movie_categroy/TopRatedMovies";
import Upcoming from "./pages/movie_categroy/UpcomingMovies";

import NowPlayingTV from "./pages/tv_categroy/NowPlayingTVs";
import TopRatedTV from "./pages/tv_categroy/TopRatedTVs";
import UpcomingTV from "./pages/tv_categroy/UpcomingTVs";

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

          <Route path="tv/now-playing" element={<NowPlayingTV />}></Route>
          <Route path="tv/top-rated" element={<TopRatedTV />}></Route>
          <Route path="tv/upcoming" element={<UpcomingTV />}></Route>


          <Route path="movie/:id" element={<MoiveDetail />}></Route>
          <Route path="tv/:id" element={<TVDetail />}></Route>
          <Route path="*" element={<NoMatch></NoMatch>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
