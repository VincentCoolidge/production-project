import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toogleTheme}>Toggle</button>
    </div>
  );
};

export default App;
