import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate("/inasistencias");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Número 404 grande */}
        <div className="text-6xl font-bold text-red-500 mb-4">404</div>

        {/* Mensaje principal */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Página no encontrada
        </h1>

        {/* Descripción */}
        <p className="text-gray-600 mb-6">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        {/* Emoji decorativo */}
        <div className="text-4xl mb-6">🔍</div>

        {/* Botones de acción */}
        <div className="space-y-3">
          <button
            onClick={handleGoHome}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Ir al inicio
          </button>

          <button
            onClick={handleGoBack}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Volver a lista de ausentes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
