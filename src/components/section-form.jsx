import React from "react";
import { useContext } from "react";
import { ApiContext } from "../context/my-context";

function SectionForm() {
  const value = useContext(ApiContext);
  return (
    <>
      <div>
        <h1 id="intC">Buscar la Temperatura de la Ciudad</h1>
        <div id="formbuton">
          <form
            id="form"
            onSubmit={(e) => {
              value.SetStyleCarg(false);
              value.SetInfComp(true),
                value.SetCarga(true),
                value.SetError(""),
                value.SetInfo({
                  icon: "",
                  name: "",
                  country: "",
                  temp: "",
                  humidity: "",
                  localtime: "",
                }),
                e.preventDefault();
            }}
          >
            <input
              autoFocus
              id="input"
              placeholder=" Introducir una Ciudad"
              value={value.city}
              onChange={(e) => value.Setcity(e.target.value)}
            />
            <button id="butbus">buscar</button>
          </form>
        </div>
      </div>
      <div>
        {value.Carga ? <h2 id="carinfo">cargando informacion...</h2> : <></>}
      </div>
    </>
  );
}
export default SectionForm;
