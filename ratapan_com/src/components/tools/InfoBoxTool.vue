<!-- changeTheme() -->
<template>
     <div class="box-info" :class="orientation == 'r' && 'box-info__reberse'">
       <div class="box-info__box-img">
         <img class="box-info__img" :src="img" alt="" />
       </div>
       <div class="box-info__text parr__one">
         {{text}} 
       </div>
     </div>
 </template>
 <script>

 export default {
   name: "info-box",
   props:{
      text:String,
      img:String,
      orientation:String,
   },
   methods:{
   }

 };
 </script>