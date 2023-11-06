import "./App.css";
import { Outlet } from "react-router-dom";

import Title from "./components/Title";

function App() {
  return (
    <>
      <Title />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
