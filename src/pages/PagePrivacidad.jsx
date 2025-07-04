import React from "react";

const PagePrivacidad = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-gray-600">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {/* Introducción */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Introducción
            </h2>
            <p className="text-gray-600">
              Esta Política de Privacidad describe cómo recopilamos, usamos y
              compartimos su información personal cuando utiliza nuestros
              servicios.
            </p>
          </section>

          {/* Información recopilada */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Información que Recopilamos
            </h2>
            <p className="text-gray-600 mb-2">
              Podemos recopilar los siguientes tipos de información:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Información de contacto (nombre, email, teléfono)</li>
              <li>Datos de uso de la APP</li>
              <li>Información técnica (dirección IP, tipo de navegador)</li>
            </ul>
          </section>

          {/* Uso de la información */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Cómo Usamos su Información
            </h2>
            <p className="text-gray-600 mb-2">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Proveer y mantener nuestros servicios</li>
              <li>Mejorar la experiencia del usuario</li>
              <li>Comunicarnos con usted</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Cookies y Tecnologías Similares
            </h2>
            <p className="text-gray-600">
              Utilizamos cookies para mejorar su experiencia. Puede gestionar
              sus preferencias de cookies en la configuración de su navegador.
            </p>
          </section>

          {/* Seguridad */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Seguridad de sus Datos
            </h2>
            <p className="text-gray-600">
              Implementamos medidas de seguridad para proteger su información
              personal, aunque ningún método de transmisión por Internet es 100%
              seguro.
            </p>
          </section>

          {/* Cambios a la política */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Cambios a esta Política
            </h2>
            <p className="text-gray-600">
              Podemos actualizar esta política ocasionalmente. Le notificaremos
              sobre cambios importantes publicando la nueva política en este
              sitio.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PagePrivacidad;
