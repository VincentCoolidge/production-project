import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { useTheme } from "app/providers/ThemeProvider";

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toogleTheme}>Toggle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<AboutPage />} />
          <Route path={"/about"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
