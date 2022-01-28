<template>
 <ion-page>
      <div class="d-flex" style="height: 88vh;">
          <div class="sideNav">
               <TabsPage />
           </div>
            <div class="main">
                    <div class="header">
                       <span style="color:white;">Search Page</span>
                    </div>
               </div>
      </div>
       
    </ion-page> 
    <!-- <ion-button href="tabs/search">
             <div class="search">
                     <ion-icon :icon="search"  color ="light"></ion-icon>
                     <span>Search</span>
                    
              </div>
        </ion-button> -->
    <!-- <ion-page>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-button>Test</ion-tab-button>
    </ion-page> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TabsPage from "./TabsPage.vue";
/* 
if the icons is not rendering make sure you import ion-icons and add the ionicon components and remove the name in ion-icon
https://stackoverflow.com/questions/61422423/ionic-vue-ionicons-5-x-x-doesnt-show-icon
*/
import { IonPage } from '@ionic/vue';
import { search } from "ionicons/icons";
export default defineComponent({
    name:'searchPage',
    components:{
        TabsPage,
        IonPage,
        
    },
    setup(){
        return{
            search,
        };
    }
})
</script>
<style scoped>
.ion-page{
    background-color: #121212;
}
.d-flex{
    display: flex;
    
}
.main{
    width: 100%;
    height: 100%;
    position: relative;
    
}
.header{
    width: 100%;
    /* background-color: blue; */
    position: sticky;
    top: 0;
    padding: 0.5rem;
}
/* .ion-page{
    background-color: #000000;
} */
/* .search{
    display: flex;
} */
  /* ion-app{
    background-color: #121212;
  } */


</style>
