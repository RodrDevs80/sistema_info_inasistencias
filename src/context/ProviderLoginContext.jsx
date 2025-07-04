import React, { useState } from "react";
import LoginContext from "./LoginContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ProviderLoginContext = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  const registarNuevoAdmin = (email, pass) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        Swal.fire({
          title: "Se creo de manera exitosa un nuevo ADMIN ✅",
          text: `Bienvenido: ${user.email}`,
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          title: "Usuario o contraseña no validos",
          text: errorMessage,
          icon: "error",
        });
      });
  };

  const login = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          localStorage.setItem("token", JSON.stringify(token));
          setToken(token);
        });
        Swal.fire({
          title: "Acceso Exitoso ✅",
          text: `Bienvenido: ${user.email}`,
          icon: "success",
        });
        navigate("/inasistencias");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          title: "Usuario o contraseña no validos",
          text: errorMessage,
          icon: "error",
        });
      });
  };
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        setToken(null);
        Swal.fire({
          title: "cerrando sesión 👋",
          text: `Vuelve pronto!`,
          icon: "info",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error al intentar cerrar sesión",
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <LoginContext.Provider
      value={{ login, logout, token, setToken, registarNuevoAdmin }}
    >
      {children}
    </LoginContext.Provider>
  );
};
