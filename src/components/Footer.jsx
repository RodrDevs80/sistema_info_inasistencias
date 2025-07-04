import { Link } from "react-router-dom";

const Footer = ({ handleActLink }) => {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y descripción */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-700 text-center md:text-left">
              Colegio Florentino Ameghino-Añatuya
            </h2>
            <p className="mt-2 max-w-xs text-sm text-center md:text-left">
              Consejo General de Educación-Santiago del Estero
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Enlaces
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    onClick={(e) => handleActLink(e)}
                    to="/"
                    className="text-sm hover:text-gray-900"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => handleActLink(e)}
                    to="/inasistencias"
                    className="text-sm hover:text-gray-900"
                  >
                    Inasistencias del dia
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    to="/privacidad"
                    className="text-sm hover:text-gray-900"
                  >
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/terminos" className="text-sm hover:text-gray-900">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          <div className="mt-4 flex justify-center gap-3">
            <a
              href="https://www.facebook.com/cfaanatuya/?locale=es_LA"
              target="_blank"
              className="text-3xl  hover:text-gray-900"
            >
              <i className="fa-brands fa-square-facebook aspect-[1/1] object-contain"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-3xl  hover:text-gray-900"
            >
              <i className="fa-brands fa-instagram aspect-[1/1] object-contain"></i>
            </a>
          </div>
        </div>
        {/* Derechos de autor */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()}Carlos E. Rodriguez-Bad💀design
            <a
              href="https://github.com/RodrDevs80"
              className="hover:text-black hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github ml-1"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-rodriguez-developerwebjr/"
              target="_blank"
              className="hover:text-blue-700 hover:scale-125"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin ml-1"></i>
            </a>
            .Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
