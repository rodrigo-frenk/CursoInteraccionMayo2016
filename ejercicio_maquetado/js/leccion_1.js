console.log( "Hola!" );


/*
a > b : mayor que
a < b : menor que
a >= b : mayor o igual que
a <= b : menor o igual que
a == b : igual a
a != b : diferente a

var total_alumnos = 8;
var cupo_minimo = 5;

if( total_alumnos >= cupo_minimo ) {
   abrir_curso();
} else {
   hacer_publicidad();
}

*/

var a = 10;
var b = 20;

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b );


function sumar( valor1, valor2 ) {
   var resultado = valor1 + valor2;
   console.log( "suma:", resultado );
}

function restar( valor1, valor2 ) {
   var resultado = valor1 - valor2;
   console.log( "restar:", resultado );
}

function multiplicar( valor1, valor2 ) {
   var resultado = valor1 * valor2;
   console.log( "multiplicar:", resultado );
}

function dividir( valor1, valor2 ) {
   var resultado = valor1 / valor2;
   console.log( "dividir:", resultado );
}





function calcular( valor1, valor2, operacion ) {

   if( operacion == "sumar" ) {
      sumar( valor1, valor2 );
   }
   if( operacion == "restar" ) {
      restar( valor1, valor2 );
   }
   if( operacion == "multiplicar" ) {
      multiplicar( valor1, valor2 );
   }
   if( operacion == "dividir" ) {
      dividir( valor1, valor2 );
   }

}

calcular( 15, 30, "sumar" );
calcular( 15, 30, "restar" );
calcular( 15, 30, "multiplicar" );
calcular( 15, 30, "dividir" );
