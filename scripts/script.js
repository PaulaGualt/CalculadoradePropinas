
function limpiar(){
    document.getElementById("miformulario").reset;
}
function calularPropina() {
    let totalCuenta = parseInt(document.getElementById("totalCuenta").value);
    let porcentajePropina = parseInt(document.getElementById("porcentajePropina").value);
    let valorPropina = ((totalCuenta) * (porcentajePropina / 100));
    let totalPagar = (totalCuenta + valorPropina);
   
    let contenedorTotalCuenta = document.getElementById("contenedorTotalCuenta");
    let etiquetaTotalCuenta = document.createElement("h2");
    etiquetaTotalCuenta.textContent = totalCuenta;
    contenedorTotalCuenta.appendChild(etiquetaTotalCuenta);

    let contenedorValorPropina = document.getElementById("contenedorValorPropina");
    let etiquetaValorPropina = document.createElement("h2");
    etiquetaValorPropina.textContent = valorPropina;
    contenedorValorPropina.appendChild(etiquetaValorPropina);
   
    let contenedorTotalPagar = document.getElementById("contenedorTotalAPagar");
    let etiquetaTotalPagar = document.createElement("h2");
    etiquetaTotalPagar.textContent = totalPagar;
    contenedorTotalPagar.appendChild(etiquetaTotalPagar);
}

  

    