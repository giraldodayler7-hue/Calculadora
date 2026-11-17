function sumar() {
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;

    if (v1 === "" || v2 === "") {
        alert("Por favor, ingrese ambos valores numéricos.");
        return;
    }

    let resultado = parseFloat(v1) + parseFloat(v2);
    document.getElementById("resNum").value = resultado;
}

function restar() {
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;

    if (v1 === "" || v2 === "") {
        alert("Por favor, ingrese ambos valores numéricos.");
        return;
    }

    let resultado = parseFloat(v1) - parseFloat(v2);
    document.getElementById("resNum").value = resultado;
}

function multiplicar() {
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;

    if (v1 === "" || v2 === "") {
        alert("Por favor, ingrese ambos valores numéricos.");
        return;
    }

    let resultado = parseFloat(v1) * parseFloat(v2);
    document.getElementById("resNum").value = resultado;
}

function dividir() {
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;

    if (v1 === "" || v2 === "") {
        alert("Por favor, ingrese ambos valores numéricos.");
        return;
    }

    if (parseFloat(v2) === 0) {
        document.getElementById("resNum").value = "Error: División por cero";
        return;
    }

    let resultado = parseFloat(v1) / parseFloat(v2);
    document.getElementById("resNum").value = resultado;
}

function sacarRaiz() {
    let v1 = document.getElementById("num1").value;

    if (v1 === "") {
        alert("Por favor, ingrese un valor en el primer campo.");
        return;
    }

    let numero = parseFloat(v1);
    if (numero < 0) {
        document.getElementById("resNum").value = "No existe raíz real de negativos";
        return;
    }

    let resultado = Math.sqrt(numero);
    document.getElementById("resNum").value = resultado;
}

function esMultiplo() {
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;

    if (v1 === "" || v2 === "") {
        alert("Por favor, ingrese ambos valores numéricos.");
        return;
    }

    let n1 = parseFloat(v1);
    let n2 = parseFloat(v2);

    if (n2 === 0) {
        document.getElementById("resNum").value = "El segundo valor no puede ser 0";
        return;
    }

    if (n1 % n2 === 0) {
        document.getElementById("resNum").value = n1 + " SÍ es múltiplo de " + n2;
    } else {
        document.getElementById("resNum").value = n1 + " NO es múltiplo de " + n2;
    }
}

function compararNumeros() {
    let v1 = document.getElementById("num1").value;
    let v2 = document.getElementById("num2").value;

    if (v1 === "" || v2 === "") {
        alert("Por favor, ingrese ambos valores numéricos.");
        return;
    }

    let n1 = parseFloat(v1);
    let n2 = parseFloat(v2);

    if (n1 > n2) {
        document.getElementById("resNum").value = "El mayor es: " + n1;
    } else if (n2 > n1) {
        document.getElementById("resNum").value = "El mayor es: " + n2;
    } else {
        document.getElementById("resNum").value = "Ambos números son iguales";
    }
}




function compararCadenas() {
    let c1 = document.getElementById("cad1").value;
    let c2 = document.getElementById("cad2").value;

    if (c1 === "" || c2 === "") {
        alert("Por favor, ingrese ambas cadenas de texto.");
        return;
    }

    if (c1.length > c2.length) {
        document.getElementById("resCad").value = "La cadena 1 es más larga (" + c1.length + " caracteres)";
    } else if (c2.length > c1.length) {
        document.getElementById("resCad").value = "La cadena 2 es más larga (" + c2.length + " caracteres)";
    } else {
        document.getElementById("resCad").value = "Ambas cadenas tienen el mismo tamaño (" + c1.length + ")";
    }
}

function contarCaracter() {
    let c1 = document.getElementById("cad1").value;
    let c2 = document.getElementById("cad2").value;

    if (c1 === "" || c2 === "") {
        alert("Por favor, ingrese la cadena y el carácter a buscar.");
        return;
    }

    let caracter = c2.charAt(0); 

    for (let i = 0; i < c1.length; i++) {
        if (c1[i] === caracter) {
            contador++;
        }
    }

    if (contador > 0) {
        document.getElementById("resCad").value = "El carácter '" + caracter + "' aparece " + contador + " veces.";
    } else {
        document.getElementById("resCad").value = "No se encontró '" + caracter + "' en la cadena.";
    }
}

function quitarEspacios() {
    let c1 = document.getElementById("cad1").value;

    if (c1 === "") {
        alert("Por favor, ingrese una cadena en el primer campo.");
        return;
    }

   
    let sinEspacios = c1.replaceAll(" ", "");
    document.getElementById("resCad").value = sinEspacios;
}

function insertarCadena() {
    let c1 = document.getElementById("cad1").value;
    let c2 = document.getElementById("cad2").value;

    if (c1 === "" || c2 === "") {
        alert("Por favor, ingrese ambas cadenas de texto.");
        return;
    }

   
    let mitad = Math.ceil(c1.length / 2);
    
    let primeraParte = c1.slice(0, mitad);
    let segundaParte = c1.slice(mitad);

    let resultado = primeraParte + c2 + segundaParte;
    document.getElementById("resCad").value = resultado;
}


let miArreglo = [];

function crearVector() {
    let texto = document.getElementById("vecInput").value;

    if (texto.trim() === "") {
        alert("Por favor, ingrese números separados por coma.");
        return;
    }

  
    miArreglo = texto.split(",");

   
    document.getElementById("resVec").value = miArreglo.join(", ");
}

function sumarVector() {
    if (miArreglo.length === 0) {
        alert("Primero debe crear el arreglo usando el botón 'Crear Arreglo'.");
        return;
    }

    let suma = 0;

    for (let i = 0; i < miArreglo.length; i++) {
        let numero = parseFloat(miArreglo[i]);
        if (!isNaN(numero)) {
            suma += numero;
        }
    }

    document.getElementById("resVec").value = "La suma total es: " + suma;
}

function multiplicarPares() {
    if (miArreglo.length === 0) {
        alert("Primero debe crear el arreglo usando el botón 'Crear Arreglo'.");
        return;
    }

    let multiplicacion = 1;


    for (let i = 0; i < miArreglo.length; i += 2) {
        let numero = parseFloat(miArreglo[i]);
        if (!isNaN(numero)) {
            multiplicacion *= numero;
        }
    }

    document.getElementById("resVec").value = "Multiplicación pos. pares: " + multiplicacion;
}