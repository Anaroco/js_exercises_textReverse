// Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


    let cadena = prompt("Introduce una cadena de texto:");
    let numchar = cadena.length;    //Devuelve la longitud del string.
    let caracter;
    let i;
    for (i = 0; i < numchar; i++) {
	caracter = cadena.charAt(i);    //recupera el caracter i del string.
	if (i == numchar - 1) {
		document.write(caracter);
	}
	else {
		document.write(caracter + "-");
	}
    }




// Realiza un script que cuente el número de vocales que tiene un texto.


let cadena = prompt("Introduce una cadena de texto:");
    let numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    let car;
    let contador = 0;
    let i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");

    

    // Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

    let cadena = prompt("Introduce un Texto:");
    let revert = cadena.length;
    let j;
    let car;
    let salida = "";
    for (j = 0; j < revert; j++) {
        car = cadena.charAt(j);    //recupera el caracter i del string.
        salida = car + salida;
    }
    document.write(salida);