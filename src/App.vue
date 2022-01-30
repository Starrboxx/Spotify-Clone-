<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import SideNav from "./views/SideNav.vue";
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  }
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@800&display=swap');
body{
 font-family: 'Gothic A1', sans-serif;
}
/* *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
      background-color: #121212;
} */
 /* ion-app{
    background-color: #121212;
  } */
  /* ion-app{
    background-color: #000000;
  } */
  /* .sideNav{
    background-color: #000000;
    width: 17.5vw;
    height: 90vh;
  } */

</style>