<!-- changeTheme() -->
<template>
   <div class="side-bar">
      <h1>SideBar</h1>
      <nav class="side-bar__list">
       <router-link to="/">Home</router-link>
       <router-link to="/services">Services</router-link>
       <a @click="changeTheme">theme</a>
       <label class="switch">
          <input class="switch__input" type="checkbox" id="check-leng" v-model="theme_select">
          <span class="switch__slider round"></span>
        </label>
        <label for="check-leng" class="footer__text-switch">ES-EN</label>
      </nav> 
   </div>
   
 </template>
 <script>
   export default{
     name:'Sidebar',
     data(){
       return{
        theme_select:true
       }
     },
     mounted(){
      
     },
     methods: {
       
     },
   }
 </script>
 