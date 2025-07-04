import "../css/botonFlotante.css";

export const BotonFlotante = () => {
  return (
    <a
      href="https://wa.me/5493844672186?text=Mensaje Enviado desde la APP del Colegio Florentino Ameghino: "
      className="float-wa hover:scale-110 transition-all"
      target="_blank"
    >
      <i className="fa fa-whatsapp mt-4"></i>
    </a>
  );
};
