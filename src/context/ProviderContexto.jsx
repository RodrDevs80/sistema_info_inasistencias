import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Contexto } from "./contexto";

export const ProviderContexto = ({ children }) => {
  const stadoInicial = {
    nombreDocente: "",
    apellidoDocente: "",
    DNI: "",
    articuloMotivo: "",
    fechaAusencia: "",
  };
  const addDocente = (nuevoRegistro) => {
    try {
      const inasistenciasRef = collection(db, "inasistenciasDocentes");
      addDoc(inasistenciasRef, nuevoRegistro);
    } catch (err) {
      console.log("Error al intentar cargar docente", err.message);
    }
  };

  const eleminarDocente = async (id) => {
    try {
      const userRef = doc(db, "inasistenciasDocentes", id);
      await deleteDoc(userRef);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Contexto.Provider value={{ addDocente, eleminarDocente, stadoInicial }}>
      {children}
    </Contexto.Provider>
  );
};
