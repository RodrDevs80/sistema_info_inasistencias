import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import NavCFA from "./components/NavCFA.jsx";
import PagePrivacidad from "./pages/PagePrivacidad.jsx";
import { PageRegistro } from "./pages/PageRegistro.jsx";
import TerminosCondiciones from "./pages/PageTerminosCondiciones.jsx";
import { ListaDeAusentes } from "./components/ListaDeAusentes.jsx";
import { useState } from "react";
import { ProviderContexto } from "./context/ProviderContexto.jsx";
import Login from "./components/Login.jsx";
import { ProviderLoginContext } from "./context/ProviderLoginContext.jsx";
import Error404 from "./pages/Error404.jsx";

function App() {
  const [activo, setActivo] = useState(false);
  const handleActLink = (e) => {
    if (e.target.textContent.includes("Inicio")) {
      setActivo(false);
    } else {
      setActivo(true);
    }
  };
  return (
    <>
      <BrowserRouter>
        <ProviderLoginContext>
          <ProviderContexto>
            <NavCFA activo={activo} handleActLink={handleActLink} />
            <Routes>
              <Route path="/" element={<PageRegistro />} />
              <Route path="/inasistencias" element={<ListaDeAusentes />} />
              <Route path="/terminos" element={<TerminosCondiciones />} />
              <Route path="/privacidad" element={<PagePrivacidad />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer handleActLink={handleActLink} />
          </ProviderContexto>
        </ProviderLoginContext>
      </BrowserRouter>
    </>
  );
}

export default App;
