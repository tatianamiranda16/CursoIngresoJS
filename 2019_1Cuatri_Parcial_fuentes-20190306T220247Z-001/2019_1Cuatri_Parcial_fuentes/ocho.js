function mostrar() {
    /* </br>Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
    (validar) hasta que el usuario quiera e informar al
     terminar el ingreso por document.write:
     La cantidad de números pares.
    La cantidad de números impares.
    La cantidad de ceros.
    El promedio de todos los números positivos ingresados.
    La suma de todos los números negativos.
    El número y la letra del máximo y el mínimo.*/


    var numero;
    var letra;
    var contador;
    var promedio;
    var letraMaxima;
    var letraMinima;
    var numeroMaximo;
    var numeroMinimo;
    var respuesta;
    var contadorNumPares;
    var contadorNumeroImpares;
    var contadornumerosPositivos;
    var acumulador;
    
    contadornumerosPositivos =0;
    contadorCeros =0;
    cantidadNumerosNegativos =0;
    contadorNumPares = 0;
    contadorNumeroImpares = 0
    contador = 0;
    acumulador =0;
    respuesta = "s";
    while (respuesta != "n") {// isnan(hola)== true (no es un numero) isnan (3) = false, porque el is nana no correponde porque si es un numero
        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);
        while (isNaN(numero) == true || numero < -100 || numero > 100) {
            numero = prompt("Error.Ingrese un numero");
            numero = parseInt(numero);
        }
        letra = prompt("Ingrese una letra");
        while (isNaN(letra) == false) {
            letra = prompt("error.Ingrese una letra");
        }
        console.log(letra);
        console.log(numero);

        if (numero == 0) {
            contadorCeros++;
        }

        else {
            if (numero % 2 == 0 || contador != 0) {

                contadorNumPares++;

            } else {
                contadorNumeroImpares++;
            }
           if(numero > 0 ){
               contadornumerosPositivos++;
           }
           else{
               cantidadNumerosNegativos++
           }
           

        } if(numero<numeroMinimo|| contador ==0)
        {
            numeroMinimo = numero;
            letraMinima =letra;
        
        } 
         if(numero > numeroMaximo || contador == 0 )
         {
            numeroMaximo= numero;
            letraMaxima =letra; 
         }






        contador++;
        acumulador = acumulador + contadornumerosPositivos;

    respuesta = prompt("Ingrese n para sailir");
    }
     
    promedio = acumulador / contador;
    console.log(promedio);
    
    document.write("La cantidad de números pares."+contadorNumPares);
    document.write("La cantidad de ceros."+contadorCeros);
    document.write("La cantidad de números impares."+contadorNumeroImpares);
    document.write("El promedio de todos los números positivos ingresados"+contadornumerosPositivos);
    document.write("La suma de todos los números negativos."+cantidadNumerosNegativos);
    document.write("El número y la letra del máximo y el mínimo"+numeroMaximo+ "y " + letraMaxima +"," + numeroMinimo+ "y" + letraMinima);
}
