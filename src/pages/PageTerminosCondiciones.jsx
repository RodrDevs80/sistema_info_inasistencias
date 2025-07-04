import React from "react";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Términos y Condiciones
          </h1>
          <p className="mt-2 text-gray-600">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-10">
          {/* Introducción */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              1. Introducción
            </h2>
            <p className="text-gray-600 mb-4">
              Bienvenido/a a nuestra APP. Al acceder y utilizar nuestros
              servicios, usted acepta cumplir con los siguientes términos y
              condiciones. Le recomendamos que los lea detenidamente.
            </p>
            <p className="text-gray-600">
              Estos términos rigen la relación entre usted y nuestra
              institución. Si no está de acuerdo con alguno de estos términos,
              le recomendamos que no utilice nuestros servicios.
            </p>
          </section>

          {/* Uso del servicio */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              2. Uso del Servicio
            </h2>
            <p className="text-gray-600 mb-4">
              Nuestros servicios están destinados a usuarios mayores de 18 años
              que cumplen su carga de trabajo en nuestra institución. Usted
              acepta utilizar nuestros servicios de manera legal y ética, sin:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Violar cualquier ley o regulación aplicable</li>
              <li>Infringir derechos de propiedad intelectual</li>
              <li>Distribuir contenido malicioso o spam</li>
              <li>Realizar actividades fraudulentas</li>
            </ul>
          </section>

          {/* Privacidad */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              3. Privacidad
            </h2>
            <p className="text-gray-600">
              Su privacidad es importante para nosotros. Nuestra Política de
              Privacidad explica cómo recopilamos, usamos y protegemos su
              información personal. Al utilizar nuestros servicios, usted acepta
              nuestras prácticas de privacidad.
            </p>
          </section>

          {/* Limitación de responsabilidad */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              4. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-600 mb-4">
              En la máxima medida permitida por la ley, nuestra institución no
              será responsable por:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Daños indirectos, incidentales o consecuentes</li>
              <li>Pérdida de datos o beneficios</li>
              <li>Interrupciones del servicio no intencionales</li>
              <li>Acciones de terceros no controlados por nosotros</li>
            </ul>
          </section>

          {/* Modificaciones */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              5. Modificaciones
            </h2>
            <p className="text-gray-600">
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Las actualizaciones serán publicadas en esta página con
              una nueva fecha de "Última actualización". Su uso continuado del
              servicio después de los cambios constituye su aceptación de los
              nuevos términos.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              6. Contacto
            </h2>
            <p className="text-gray-600">
              Si tiene preguntas sobre estos términos y condiciones, por favor
              contáctenos en la siguiente dirección de correo
              electrónico:col.florentino.ameghino@gmail.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TerminosCondiciones;
