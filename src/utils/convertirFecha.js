const convertirFechaActual = (fechaABuscar = new Date()) => {
    let D = fechaABuscar.toLocaleDateString()
        .replaceAll("/", "-")
        .split("-")
        .reverse();
    if (D[1] < 10) {
        D[1] = 0 + D[1];
    }
    if (D[2] < 10) {
        D[2] = 0 + D[2];
    }

    return D.join("-");
}

export default convertirFechaActual;