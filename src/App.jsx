import { useRoutes } from "react-router-dom";

import "./App.scss";
import { Home } from "./pages";
import { Contact } from "./pages";
import { About } from "./pages";
import { Portfolio } from "./pages";
import { Navbar } from "./components";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "portfolio",
      element: <Portfolio />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <Navbar />
      {element}
    </>
  );
}

export default App;
