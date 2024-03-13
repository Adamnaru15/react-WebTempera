import React from "react";
import Navegation from "./components/nav";
import SectionForm from "./components/section-form";
import SectionResponse from "./components/section-response";
import Fooder from "./components/fooder";
import { ApiContextProvider } from "./context/my-context";
import "./styles/style.css";

function App() {
  return (
    <>
      <div  id="App">
        <ApiContextProvider>
          <Navegation />
          <div id="section-form">
            <SectionForm />
            <SectionResponse />
            <Fooder />
          </div>
        </ApiContextProvider>
      </div>
    </>
  );
}

export default App;
