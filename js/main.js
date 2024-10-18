document.write("Hola mundo ");
document.write("Hola mundo ");
document.write("Hola mundo "+"<br>");
/*For es un ciclo en el cual tiene tres parametros 
la funcion es repertir un vloque de codigo las veces necesarias 
Sintaxis basica 
for (condicion){
    Bloque de codigo 
}*/

for (i=3 ; i<=15; i++){
    //document.write( "Hola desde js "+ "<br>");   
    document.write( i + "<br>");
    if(i%2==0){
        document.write("numero par: "+i + "<b>")
    }
}

