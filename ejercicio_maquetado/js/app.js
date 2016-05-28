$(document).foundation()


$(document).ready(function(){

   $('.imgLiquidFill').imgLiquid();

   $('.imgLiquidNoFill').imgLiquid({
      fill: false
   });


   $('#slider').slick({
     autoplay: true,
     autoplaySpeed: 2000,
   });


})
