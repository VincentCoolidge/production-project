import { Counter } from "./components/Counter";
import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import "./index.scss";
import { AboutPageAsync } from "./pages/AboutPage/About.async";
import { MainPageAsync } from "./pages/MainPage/Main.async";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
