import { useState } from "react";
import "./App.css";
import Counter from "./pages/Counter/Counter";
import FormWithState from "./pages/FormWithState/FormWithState";
import { AppWrapper } from "./App.styled";
import FormWithReducer from "./pages/FormWithReducer/FormWithReducer";

function App() {
  const [activePage, setActivePage] = useState("counter");

  const pages = {
    counter: <Counter />,
    stateform: <FormWithState />,
    reducerform: <FormWithReducer />,
  };
  return (
    <AppWrapper>
      <nav className="navigation">
        <a onClick={() => setActivePage("counter")}>counter</a>
        <a onClick={() => setActivePage("stateform")}>State Form</a>
        <a onClick={() => setActivePage("reducerform")}>Reducer Form</a>
      </nav>

      {pages[activePage] ? pages[activePage] : "oops something went wrong"}
    </AppWrapper>
  );
}

export default App;
