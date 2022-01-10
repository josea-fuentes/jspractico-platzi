// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5; 
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado; 
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo 

console.group("Triángulos");

const ladoTriangulo1 = 6; 
const ladoTriangulo2 = 6; 
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del tríangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 
console.log("El área del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del circulo

console.group("Círculo");

// Radio 
const radioCirculo = 4;
console.log("El radio del circulo es de: " + radioCirculo + "cm");

// Díametro 
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es de: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es de: " + PI);

// Circunferencia 
const permietroCirculo = diametroCirculo * PI; 
console.log("El perímetro del circulo es de: " + permietroCirculo + "cm");

// Área 
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();