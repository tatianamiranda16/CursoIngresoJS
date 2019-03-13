function mostrar() {
    /*Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones 
    entre 1 y 7000 (validar)   
    la temperaruta mínima que se registra en su territorio(entre -50 y 50)  hasta que el
    usuario quiera e informar al terminar el ingreso por document.write:
    a)La cantidad de temperaturas pares.
    b)El nombre del pais con menos habitantes
    c)la cantidad de paises que superan los 40 grados.
    d)el promedio de habitantes entre los paises ingresados				
    f)la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. */

    var cantidadHabitantes;
    var temperatura;
    var respuesta;
    var contadorTemperaturaMayor;
    var contadorTemperaturaPares;
    var acumulador;
    var promedio;
    var contador;
    var pais;
    var paisMinino;
    var paisMininoTemperatura;
    var temperaturaMinima;
    var cantidadHabitantesporpais;
    var habitantes;
    var habitantesMinimo;
    cantidadHabitantesporpais = 0;

    cantidadHabitantes = 0;
    respuesta = true;
    acumulador = 0;
    contador = 0;
    promedio = 0;
    contadorTemperaturaMayor = 0;
    contadorTemperaturaPares = 0;
    while (respuesta == true) {
        pais = prompt("Ingrese pais");

        habitantes = prompt("Ingrese cantidad de habitantes");
        habitantes = parseInt(habitantes);
        while (habitantes < 1 || habitantes > 7000) {
            habitantes = prompt("Error.Ingrese de nuevo la cantidad");
        }
        temperatura = prompt("Ingrese temperatura");
        temperatura = parseInt(temperatura)
        while (temperatura < -50 || temperatura > 50) {
            temperatura = prompt("Error. ingrese de nuevo temperatura");
        } if (temperatura % 2 == 0 || contador == 0) {
            contadorTemperaturaPares++;
        } if (temperatura > 40 || contador == 0) {
            contadorTemperaturaMayor++;
        }
        if (temperatura < temperaturaMinima || contador == 0) {
            temperaturaMinima = temperatura;
            paisMininoTemperatura = pais;
        } 
         if(habitantes<habitantesMinimo || contador == 0){
          habitantesMinimo = habitantes;
          paisMinino = pais
        }




        console.log(temperatura);
        console.log(cantidadHabitantes);

        
      
        contador++;
        acumulador = acumulador + habitantes;
        respuesta = confirm("Quiere continuar");
    }
    promedio = acumulador / contador;
    document.write("a) La cantidad de temperaturas pares " + contadorTemperaturaPares + "<br>");
    document.write("b) El nombre del pais con menos habitantes " + paisMinino + "<br>");
    document.write("c) La cantidad de paises que superan los 40 grados " + contadorTemperaturaMayor + "<br>");
    document.write("d) El promedio de habitantes entre los paises ingresados " + promedio + "<br>");
    document.write("f) La temperatura mínima ingresada, y nombre del pais que registro esa temperatura " + temperaturaMinima + " y " + paisMininoTemperatura + "<br>");
}
