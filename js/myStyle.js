let suma,resta,multiplicacio,divicion;

let numeroUno,numeroDos;

let resultado = document.getElementById("resultado");

console.log(resultado);

function saludar ( ) {
    resultado.innerHTML= "hola usuario, un placer!!!";
}

function iniciar ( ) {
 //numeroUno = parseInt( prompt("ingrese un numero: "));
 //numeroDos = parseInt( prompt("ingrese otro mumero: "));
 
 numeroUno = parseFloat( prompt("ingrese un numero: "));
 numeroDos = parseFloat( prompt("ingrese otro mumero: "));
 console.log(numeroUno,numeroDos);     
}

//iniciar ( )

function sumar() {
suma= numeroUno+numeroDos;

console.log("el resultado de la suma es: " + suma);    

resultado.innerHTML= `El resultado de la suma es: ${suma}`;
}

function restar() {
    resta= numeroUno-numeroDos;
    console.log("el resultado de la suma es: " );    

resultado.innerHTML= `El resultado de la resta es: ${resta}`;
}

function multiplicar() {
    multiplicacio= numeroUno * numeroDos;
    console.log("el resultado de la suma es: " + multiplicacio);    

resultado.innerHTML= `El resultado de la multiplicacion es: ${multiplicacio}`;
}

function dividir() {
    divicion= numeroUno / numeroDos;
    console.log("el resultado de la suma es: " + divicion  
	
);    

resultado.innerHTML= `El resultado de la divicion es: ${divicion}`;
}