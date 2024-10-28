// Tengo una lista con regalos que pienso comprarme para Navidad. Pero tengo poco dinero.
//No quiero gastarme más de lo que tengo, no quiero endeudarme. Tengo un total de 150 euros.
//Quiero saber qué regalos de la lista puedo comprar.


//Este código no funcionará, pero no os preocupeis, el objetivo es saber qué hacer el for y el if.

for (var i = 0; i < lista.length; i++) {
    //i sería la posicion de cada regalo que me gustaría tener, en un excel sería los números de la izquierda.
    //Quiero revisar hasta que acabe la lista de regalos (lista.length), y quiero que por cada regalo me haga alguna cosa.
    if (precio_regalo < 150) {
        //si lo que vale el regalo es inferior a 150, el total de mis ahorros, es que me lo puedo permitir
        console.log("El " + i + "ª regalo me lo puedo comprar")
    } else {
        //Si es superior no lo puedo comprar
        console.log("El " + i + "ª regalo no me lo puedo comprar")
    }
}