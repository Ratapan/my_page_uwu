import None from '@/views/None.vue'
const InitList = [
   { path: '/api'},// Ignore or pass on to server
   { path: "/:pathMatch(.*)*", component: None}// Ignore or pass on to server
 ];
 
 export default {
  InitList
 };