import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import { classNames } from "./helpers/classNames";

import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/About.async";
import { MainPageAsync } from "./pages/MainPage/Main.async";

import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toogleTheme}>Toggle</button>
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
