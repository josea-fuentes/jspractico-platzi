// Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo 

console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del circulo

console.group("Círculo");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2; 
}

// PI
const PI = Math.PI; 

// Perímetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); 
    return diametro * PI; 
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML 


// Botones Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 

    const area = areaCuadrado(value);
    alert(area);
}

// Botones Triangulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = parseFloat(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = parseFloat(inputLado2.value);

    const inputBase = document.getElementById("InputBase");
    const valueBase = parseFloat(inputBase.value);

    const pTriangulo = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(pTriangulo);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase");
    const valueBase = parseFloat(inputBase.value);

    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = parseFloat(inputAltura.value);

    const aTriangulo = areaTriangulo(valueBase, valueAltura);
    alert(aTriangulo);
}

// Botones Circulo 

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;

    const pCirculo = perimetroCirculo(valueRadio);
    alert(pCirculo);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputRadio");
    const valueRadio = inputRadio.value;

    const aCirculo = areaCirculo(valueRadio);
    alert(aCirculo);
}