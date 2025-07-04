import React from "react";
import RegistroDeDatos from "../components/RegistroDeDatos";
import { BotonFlotante } from "../components/BotonFlotante";

export const PageRegistro = () => {
  return (
    <>
      <BotonFlotante />
      <section className="flex justify-center items-center flex-col m-2.5">
        <h2 className="text-3xl text-center mt-3">
          Comunicar con Administración su ausencia
        </h2>
        <RegistroDeDatos />
      </section>
    </>
  );
};
