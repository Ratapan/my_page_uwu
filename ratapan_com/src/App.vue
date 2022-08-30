<template>
  <div>
    <SideBar/>
    <router-view/> 
  </div>
</template>
<script>
  import SideBar from "@/components/layout/SideBarLayout.vue";
  export default{
    name:'App',
    components:{
      SideBar
    },
    data(){
      return{
      }
    },
    mounted(){
    },
    methods: {
      
    },
  }
</script>
