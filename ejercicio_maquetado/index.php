<?php include_once 'header.php'; ?>

<?php for( $i=0; $i<3; $i++ ) : ?>

   <!-- .vista_usuario.small-12.medium-6.large-4.columns.h_100 -->
   <div class="vista_usuario small-12 medium-6 large-4 columns h_100">

      <div class="cabecera small-12 columns h_20">
         <!-- .small-3.columns.h_100 -->
         <div class="foto small-3 columns h_100">
            <img src="http://fakeimg.pl/100x100" alt="">
         </div>
         <!-- .small-9.columns.h_100 -->
         <div class="nombre small-9 columns h_100">
            <!-- .small-12.columns.h_50{Algo}*2 -->
            <div class="small-12 columns h_50">
               Algo
            </div>
            <div class="small-12 columns h_50">
               Algo
            </div>

         </div>
      </div>

      <div class="small-12 columns h_40">

      </div>

      <div class="small-12 columns h_30">

      </div>

      <div class="small-12 columns h_10">

      </div>


      <!-- (.small-12.columns.h_30>(.small-6.columns.h_100{Caja}*2))*3 -->
      <!--
      <div class="small-12 columns h_25">
      <div class="small-6 columns h_100">Caja</div>
      <div class="small-6 columns h_100">Caja</div>
   </div>

   <div class="small-12 columns h_50">
   <div class="small-4 columns h_100">Caja</div>
   <div class="small-4 columns h_100">Caja</div>
   <div class="small-4 columns h_100">Caja</div>
</div>

<div class="small-12 columns h_25">
<div class="small-6 columns h_100">Caja</div>
<div class="small-6 columns h_100">Caja</div>
</div>
-->

</div>

<?php endfor; ?>

<?php include_once 'footer.php'; ?>
