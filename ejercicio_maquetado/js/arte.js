var arte_cajas = $('#arte_cajas');

if( arte_cajas.length >0 ) {
// if( typeof(arte_cajas) != "undefined" ) {

   var ultima;

   var colores = ['red','yellow','blue','black'];

   var prendidas = [];

   setInterval(function(){
      index = Math.floor( Math.random() * $('#arte_cajas div').length );
      var color = colores[ Math.floor( Math.random() * colores.length ) ];

      if(typeof(ultima) != "undefined" ) {
         ultima.css({backgroundColor: 'white' })
            ultima.removeClass('blur');
      }

      var caja = $('#arte_cajas div').eq( index );
      caja.css({backgroundColor: color })
      caja.addClass('blur');
      prendidas.push(caja);

      if(prendidas.length>6)
         ultima = prendidas.shift();

   }, 1000);


}
