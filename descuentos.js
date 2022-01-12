function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function ButtonPriceDiscount() {
    const inputPrecio = document.getElementById("InputPrecio");
    const precioValue = inputPrecio.value;

    const inputDescuento = document.getElementById("InputDescuento")
    const descuentoValue = inputDescuento.value; 

    const precioConDesceunto = calcularPrecioConDescuento(precioValue,descuentoValue);

    const resultadoPrecio = document.getElementById("ResultadoPrecio");
    resultadoPrecio.innerText = "El precio con descuento son: $" + precioConDesceunto; 
}