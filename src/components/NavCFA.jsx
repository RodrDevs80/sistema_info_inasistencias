import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const estiloActivo =
  "py-4 px-2 border-blue-600 border-b-4 transition duration-300";
const estiloActivoMobile =
  "block py-2 px-3 text-white bg-blue-600 rounded font-semibold";

const NavCFA = ({ activo, handleActLink }) => {
  const { token } = useContext(LoginContext);
  const [isOpen, setIsOpen] = useState(false);
  const [actLogin, setActLogin] = useState(false);
  const [linkActivo, setLinkActivo] = useState({
    link1: false,
    link2: false,
    link3: false,
  });
  const handleActivo = (e) => {
    const index = Number(e.target.id);
    switch (index) {
      case 1:
        setLinkActivo((preState) => ({ preState, link1: !preState.link1 }));
        break;
      case 2:
        setLinkActivo((preState) => ({ preState, link2: !preState.link2 }));
        break;
      case 3:
        setLinkActivo((preState) => ({ preState, link3: !preState.link3 }));
        setActLogin(!actLogin);
        break;
      default:
        console.log("Opción no valida");
        break;
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo y enlaces para desktop */}
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <div className="flex flex-col items-center py-4 px-2">
                <svg
                  viewBox="0 0 300 300"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="white"
                    stroke="#1e3a8a"
                    strokeWidth="12"
                  />

                  <text
                    x="150"
                    y="170"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="72"
                    fontWeight="bold"
                    fill="#1e3a8a"
                  >
                    CFA
                  </text>

                  <defs>
                    <path
                      id="top-curve"
                      d="M 50 150 A 100 100 0 0 1 250 150"
                      stroke="none"
                      fill="none"
                    />
                  </defs>
                  <text
                    fontFamily="Arial, sans-serif"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#1e3a8a"
                  >
                    <textPath
                      href="#top-curve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      COLEGIO FLORENTINO AMEGHINO
                    </textPath>
                  </text>

                  <text
                    x="150"
                    y="240"
                    textAnchor="middle"
                    fontFamily="Arial, sans-serif"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#1e3a8a"
                  >
                    AÑATUYA S.E.
                  </text>
                </svg>
                <small className="">Colegio Florentino Ameghino</small>
              </div>
            </div>

            {/* Enlaces principales - desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                onClick={(e) => handleActLink(e)}
                className={
                  activo
                    ? `"py-4 px-2 text-gray-500 font-semibold  hover:text-blue-600`
                    : estiloActivo
                }
              >
                Inicio
              </Link>
              <Link
                to="inasistencias"
                onClick={(e) => handleActLink(e)}
                className={
                  !activo
                    ? `"py-4 px-2 text-gray-500 font-semibold  hover:text-blue-600`
                    : estiloActivo
                }
              >
                Inasistencias del día
              </Link>
            </div>
          </div>

          {/* Botón Login - desktop */}
          {!token ? (
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to={"/login"}
                onClick={() => setActLogin(!actLogin)}
                className="py-2 px-4"
              >
                <UserCircleIcon className="w-10 h-10 text-blue-600 hover:text-blue-700 hover:scale-110 transition duration-300" />
              </Link>
            </div>
          ) : null}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              {!isOpen ? (
                <Bars3Icon className="w-6 h-6 text-gray-500 cursor-pointer" />
              ) : (
                <XMarkIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={(e) => handleActivo(e)}
            id="1"
            className={
              !linkActivo.link1
                ? "block py-2 px-3 text-gray-600 hover:bg-gray-200 rounded font-semibold"
                : estiloActivoMobile
            }
          >
            Inicio
          </Link>
          <Link
            to="/inasistencias"
            onClick={(e) => handleActivo(e)}
            id="2"
            className={
              !linkActivo.link2
                ? "block py-2 px-3 text-gray-600 hover:bg-gray-200 rounded font-semibold"
                : estiloActivoMobile
            }
          >
            Inasistencias del día
          </Link>
          {!token ? (
            <Link
              to="/login"
              onClick={(e) => handleActivo(e)}
              id="3"
              className={
                !linkActivo.link3
                  ? "block py-2 px-3 text-gray-600 hover:bg-gray-200 rounded font-semibold"
                  : estiloActivoMobile
              }
            >
              Login
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default NavCFA;
