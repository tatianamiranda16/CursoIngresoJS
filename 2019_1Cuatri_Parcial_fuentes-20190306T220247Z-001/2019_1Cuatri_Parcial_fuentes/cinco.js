function mostrar()
{
var continente;
var formaDePago;
var cantidaddeDias;
var importeBruto;
var precioFinal;
var descuento;


continente = prompt("Ingrese continente");
formaDePago = prompt("forma de pago");
cantidaddeDias = prompt("ingrese cantidad de dias");
importeBruto=cantidaddeDias*100;
 switch (continente) {
     case "america":
        switch(formaDePago)
        {
            case"debito":
                 descuento = 60;
                 // no vaprecioFinal =importeBruto-( importeBruto*60/100);
            break;
            default:
                descuento = 50;
                    // no vaprecioFinal =importeBruto-( importeBruto*50/100);
            break;
            
        } 
         break;
     case "Africa":
            switch(formaDePago)
            {
                case"mercadopago":
                case "efectivo":
                    descuento = 75;
                    // no vaprecioFinal =importeBruto-( importeBruto*60/100);
                break;
                default:
                    descuento = 60;
                        // no vaprecioFinal =importeBruto-( importeBruto*50/100);
                break;
                
            } 
         break;
     case "Europa":
            switch(formaDePago){
                case "debito":
                    descuento = 35;
                    break;
                case "mercadopago":
                    descuento = 30;
                    break; 
                default:
                descuento = 5;
         }
         break;    
     default: 
        recargo = 20;
         break;
 }
precioFinal =importeBruto-( importeBruto*descuento/100);
precioFinal = importeBruto + (importeBruto*recargo/100);
alert(precioFinal);


}






