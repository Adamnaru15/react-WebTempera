import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ApiContext = createContext();

export function ApiContextProvider(props) {
  const [city, Setcity] = useState("");
  const [InfComp, SetInfComp] = useState(false);
  const [Carga, SetCarga] = useState(Boolean);
  const [StyleCarg, SetStyleCarg] = useState(false);
  const [Info, SetInfo] = useState({
    icon: "",
    name: "",
    country: "",
    temp: "",
    humidity: "",
    localtime: "",
  });
  const [Error, SetError] = useState("");

  const API =
    "https://api.weatherapi.com/v1/current.json?key=5e381df27d364b219ce44808241702&q=" +
    city;

  if (InfComp == true && city == "") {
    SetInfComp(false);
    SetCarga(false);
    Setcity("");
  }
  if (InfComp == true && city != "") {
    SetInfComp(false);
    Setcity("");
    

    fetch(API)
      .then((response) => response.json())
      .then((a) => {
        SetCarga(false);
        if (a.error) {
          SetError(
            "hubo un error de busqueda, revice si el nombre de la ciudad esta bien escrito"
          );
        } else {
          SetStyleCarg(true)
          SetInfo({
            icon: a.current.condition.icon,
            name: "Ciudad: " + a.location.name,
            country: "Pais: " + a.location.country,
            temp: "Temperatura actual: " + a.current.temp_c + "ºC",
            humidity: "humedad actual: " + a.current.humidity + "%",
            localtime: "Tiempo actual: " + a.location.localtime,
          });
        }
      });
  }

  return (
    <ApiContext.Provider
      value={{
        StyleCarg,
        SetStyleCarg,
        city,
        Setcity,
        InfComp,
        SetInfComp,
        Carga,
        SetCarga,
        Info,
        SetInfo,
        Error,
        SetError,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}
