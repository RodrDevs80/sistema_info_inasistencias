import { useContext, useState } from "react";
import Contexto from "../context/contexto";
import Swal from "sweetalert2";

const RegistroDeDatos = () => {
  const { addDocente, stadoInicial } = useContext(Contexto);
  const [datosDocente, setDatosDocentes] = useState(stadoInicial);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setDatosDocentes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const fecha = new Date();
    const fechaM = new Date(
      fecha.getFullYear(),
      fecha.getMonth(),
      fecha.getDate()
    );
    console.log(fechaM);
    //comprobación de campos requeridos
    if (
      !datosDocente.DNI ||
      !datosDocente.apellidoDocente ||
      !datosDocente.nombreDocente ||
      !datosDocente.articuloMotivo ||
      !datosDocente.fechaAusencia
    ) {
      Swal.fire({
        title: "Campos Obligatorios ",
        text: "Todos los campos son obligatorios, no pueden estar vacíos ❌",
        icon: "error",
      });
      return;
    }
    //comprobaciones DNI
    if (datosDocente.DNI.length < 7) {
      Swal.fire({
        title: "Dato no valido! ",
        text: "El DNI debe contener como mínimo 7 dígitos ❌",
        icon: "error",
      });
      return;
    }
    if (isNaN(datosDocente.DNI)) {
      Swal.fire({
        title: "Dato no valido!",
        text: "El DNI debe ser un numero ❌",
        icon: "error",
      });
      setDatosDocentes(stadoInicial);
      return;
    }
    if (
      new Date(datosDocente.fechaAusencia).getTime() <
      fechaM.getTime() - 10800000
    ) {
      Swal.fire({
        title: "Fecha no valido!",
        text: `La fecha no puede ser anterior a: ${fecha.toLocaleDateString()} (fecha actual) ❌`,
        icon: "error",
      });
      setDatosDocentes(stadoInicial);
      return;
    }
    addDocente(datosDocente);
    Swal.fire({
      title: "Operación exitosa",
      text: `fecha de ausencia comunicada con éxito ✅`,
      icon: "success",
    });
    setDatosDocentes(stadoInicial);
  };

  return (
    <div className="flex flex-col dark mt-10 mb-10">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Complete el Formulario
        </h2>
        <form className="flex flex-col">
          <div className="flex space-x-4 mb-4">
            <input
              placeholder="Nombre"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              name="nombreDocente"
              onChange={(e) => handleChange(e)}
              value={datosDocente.nombreDocente}
            />
            <input
              placeholder="Apellido"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              name="apellidoDocente"
              onChange={(e) => handleChange(e)}
              value={datosDocente.apellidoDocente}
            />
          </div>
          <input
            placeholder="DNI"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="DNI"
            onChange={(e) => handleChange(e)}
            value={datosDocente.DNI}
          />
          <input
            placeholder="Art o motivo de la ausencia"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="articuloMotivo"
            onChange={(e) => handleChange(e)}
            value={datosDocente.articuloMotivo}
          />

          <label
            className="text-sm mb-2 text-gray-200 cursor-pointer"
            htmlFor="age"
          >
            Fecha de la ausencia (haga click en el calendario 🗓️ 👇)
          </label>
          <input
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
            id="fechaAusencia"
            type="date"
            name="fechaAusencia"
            onChange={(e) => handleChange(e)}
            value={datosDocente.fechaAusencia}
          />
          <p className="text-white mt-4">
            Controle los datos ingresados antes de enviar!
          </p>
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150 cursor-pointer"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            Confirmar Ausencia
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroDeDatos;
