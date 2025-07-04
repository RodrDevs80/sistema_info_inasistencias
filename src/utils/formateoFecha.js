const formatFecha = (fecha) => {
    return fecha.split("-").reverse().join("/");
};

export default formatFecha;