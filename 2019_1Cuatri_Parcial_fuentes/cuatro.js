function mostrar()
{
/*Pedir dos números y mostrar el resultado:  
        </br>Si son iguales los muestro concatenados.
        </br>Si el primero es mayor, los resto,
        </br>de lo contrario los sumo.
        </br>Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
        </br>"la resta es xxx y superó el 10".*/

  var num1;
  var num2;
  var resultado;

  if(num1 == num2){
      resultado = num1 + " y " +num2; 
  }
  if(num1>num2){
      resultado = num1 - num2;
  }else{
      resultado = num1 + num2;
  }
} if(resultado<10){
    alert(resultado);
}else{
alert("El resultado es " + resultado+ " y supera el 10");}