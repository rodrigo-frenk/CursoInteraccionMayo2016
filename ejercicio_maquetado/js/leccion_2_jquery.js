// document.getElementById('caja_1').style.backgroundColor='red';
// document.getElementById('caja_1').onclick=function(){
//    alert(123);
// }


/*
Objetos de Javascript:

var objeto_prueba = {
indice1: "valor1",
indice2: "valor2",
indice3: "valor3",
indice4: "valor4",
indice5: "valor5",
};

console.log( objeto_prueba.indice1 );
console.log( objeto_prueba.indice2 );
console.log( objeto_prueba.indice3 );



*/

var alertar = function(){
   alert(123);
}

$( '#caja_1' ).click(function(){


   $( '#caja_2' ).css({
      backgroundColor: 'red',
   });

   $( '#caja_2' ).animate(
      {
         opacity: 0.2,
         outline: '13px solid blue',
         marginTop: 100,
         height: 200
      },
      2000,
      'swing',
      alertar
   );

});




// $( '.caja' )
