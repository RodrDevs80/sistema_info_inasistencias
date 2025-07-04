import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase/config.js";
import {
  Calendar,
  User,
  FileText,
  Hash,
  Trash2,
  Mail,
  CheckCircle,
} from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import convertirFechaActual from "../utils/convertirFecha.js";
import formatFecha from "../utils/formateoFecha.js";
import LoginContext from "../context/LoginContext.jsx";
import Contexto from "../context/contexto.jsx";
import Swal from "sweetalert2";

export const ListaDeAusentes = () => {
  const [inasistencias, setInasistencias] = useState([]);
  const [fechaABuscar, setFechaABuscar] = useState(convertirFechaActual());
  const [actualizar, setActualizar] = useState(false);
  const [rEmail, setREmail] = useState("");
  const [rPass, setRPass] = useState("");
  const { logout, token, registarNuevoAdmin } = useContext(LoginContext);
  const { eleminarDocente } = useContext(Contexto);

  useEffect(() => {
    const inasistenciasRef = collection(db, "inasistenciasDocentes");
    getDocs(inasistenciasRef).then((res) => {
      setInasistencias(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [actualizar]);

  const handleRegistar = (email, pass) => {
    registarNuevoAdmin(email, pass);
    setREmail("");
    setRPass("");
  };

  const handleLoguot = () => {
    logout();
  };

  const handleEliminar = (id) => {
    eleminarDocente(id);
    Swal.fire({
      title: "Eliminación Exitosa ✅",
      text: `Se elimino la uasencia del docente con el ID: ${id}`,
      icon: "info",
    });
    setActualizar(!actualizar);
  };
  const getMotivoBadgeColor = (motivo) => {
    if (
      motivo.toLowerCase().includes("8a") ||
      motivo.toLowerCase().includes("8b")
    )
      return "bg-red-100 text-red-800 hover:bg-red-200";
    if (
      motivo.toLowerCase().includes("17") ||
      motivo.toLowerCase().includes("21")
    )
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    if (motivo.toLowerCase().includes("28b"))
      return "bg-pink-100 text-pink-800 hover:bg-pink-200";
    return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">
          Listado de Docentes
        </h1>
        <p className="text-gray-600">Registro de ausencias y motivos</p>
        <div>
          <input
            className="cursor-pointer"
            type="date"
            name="fechaABuscar"
            id="fechaABuscar"
            value={fechaABuscar}
            onChange={(e) => setFechaABuscar(e.target.value)}
          />
        </div>
        {token ? (
          <button
            onClick={handleLoguot}
            className="cursor-pointer bg-red-600 p-2 rounded-sm text-white hover:scale-105"
          >
            Cerrar Sesión
          </button>
        ) : null}
      </div>
      <div className="hidden lg:block">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-0">
            <div className="overflow-x-auto">
              {inasistencias.length === 0 ? (
                <h3 className="m-1.5 font-bold">Cargando...</h3>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          <Hash className="w-4 h-4" />
                          DNI
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nombre Completo
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Fecha de Ausencia
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Artículo/Motivo
                        </div>
                      </th>
                      {token ? (
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          <div className="flex items-center gap-2">
                            <Trash2 className="w-4 h-4" />
                            Eliminar
                          </div>
                        </th>
                      ) : null}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {inasistencias
                      .filter((item) => item.fechaAusencia === fechaABuscar)
                      .map((docente) => (
                        <tr
                          key={docente.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {docente.DNI}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {docente.nombreDocente} {docente.apellidoDocente}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {formatFecha(docente.fechaAusencia)}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMotivoBadgeColor(
                                docente.articuloMotivo
                              )}`}
                            >
                              {docente.articuloMotivo}
                            </span>
                          </td>
                          {token ? (
                            <td className="px-6 py-4">
                              <div className="flex  items-center gap-2 text-sm">
                                <button
                                  onClick={() => handleEliminar(docente.id)}
                                  className="flex p-2 gap-0.5 bg-red-600 rounded-sm cursor-pointer hover:scale-105"
                                >
                                  <Trash2 className="w-4 h-4 text-white" />
                                  <span className="font-medium text-white">
                                    Eliminar
                                  </span>
                                </button>
                              </div>
                            </td>
                          ) : null}
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      {inasistencias.length === 0 ? (
        <h3 className="m-1.5 font-bold">Cargando...</h3>
      ) : (
        <div className="lg:hidden space-y-4">
          {inasistencias
            .filter((item) => item.fechaAusencia === fechaABuscar)
            .map((docente) => (
              <div
                key={docente.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="p-6 pb-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-600" />
                    {docente.nombreDocente} {docente.apellidoDocente}
                  </h3>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Hash className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">DNI:</span>
                    <span className="text-gray-900">{docente.DNI}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">
                      Fecha de Ausencia:
                    </span>
                    <span className="text-gray-900">
                      {formatFecha(docente.fechaAusencia)}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <FileText className="w-4 h-4 text-gray-500 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-gray-700">
                        Artículo/Motivo:
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMotivoBadgeColor(
                          docente.articuloMotivo
                        )}`}
                      >
                        {docente.articuloMotivo}
                      </span>
                    </div>
                  </div>
                  {token ? (
                    <div className="flex  items-center gap-2 text-sm">
                      <button
                        onClick={() => handleEliminar(docente.id)}
                        className="flex p-2 gap-0.5 bg-red-600 rounded-sm cursor-pointer hover:scale-105"
                      >
                        <Trash2 className="w-4 h-4 text-white" />
                        <span className="font-medium text-white">Eliminar</span>
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="bg-gray-50 border border-gray-200 rounded-lg">
        <div className="p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              Total de registros de la fecha:{" "}
              <span className="font-semibold text-gray-900">
                {inasistencias.filter(
                  (item) => item.fechaAusencia === fechaABuscar
                ).length === 0
                  ? "No hay ausentes registrados para esta fecha"
                  : inasistencias.filter(
                      (item) => item.fechaAusencia === fechaABuscar
                    ).length}
              </span>
              <br />
              Total de registros:{" "}
              <span className="font-semibold text-gray-900">
                {inasistencias.length}
              </span>
            </div>
            <div className="text-xs text-gray-500">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </div>
          </div>
        </div>
      </div>
      {token ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg">
          <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="text-[1rem] text-blue-600">
                <span>
                  <User />
                  Registrar Nuevo Administrador
                </span>
                <br />
                <span className="font-semibold text-gray-900">
                  {" "}
                  Ingrese los datos:
                </span>
              </div>
              <div className="text-[1rem] text-gray-500 flex flex-col lg:w-1/3 md:m-1/2 sm:w-full">
                <div className="flex items-start gap-2 text-sm m-0.5">
                  <Mail className="w-4 h-4 text-gray-500 mt-0.5" />
                  <label htmlFor="correo">Email:</label>
                </div>
                <input
                  className="appearance-none relative block w-full px-2 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  type="email"
                  name="correo"
                  id="correo"
                  placeholder="ingrese el correo..."
                  onChange={(e) => setREmail(e.target.value)}
                  value={rEmail}
                />
                <div className="flex items-start gap-2 text-sm m-0.5">
                  <CheckCircle className="w-4 h-4 text-gray-500 mt-0.5" />
                  <label htmlFor="password">Contraseña:</label>
                </div>
                <input
                  className="appearance-none relative block w-full px-2 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="ingrese contraseña..."
                  onChange={(e) => setRPass(e.target.value)}
                  value={rPass}
                />
              </div>
            </div>
            <button
              className="flex items-center mt-3 bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
              onClick={() => handleRegistar(rEmail, rPass)}
            >
              Registrar
              <svg
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
