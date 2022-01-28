<template>
    <ion-page>
      <div class="d-flex" style="height: 88vh;">
           <div class="sideNav">
               <TabsPage />
           </div>
              <div class="main">
                <div class="header">
                   <span style="color:white;">HomePage</span>
                </div>
           </div>
      </div>
    </ion-page>
       <!-- <ion-page>
           <ion-tabs>
            
                <ion-router-outlet />
               <div class="sideNav">
                   <ion-tab-bar>
                       <ion-tab-button  href="/search" tab="search">
                            <div class="search">
                                <ion-icon :icon="search"  color ="light"></ion-icon>
                                <span>Search</span>
                            </div>
                       </ion-tab-button>
                   </ion-tab-bar>
               </div>
               
           </ion-tabs>
       </ion-page> -->
            <!-- <nav class="sideNav">
                <searchPage />
            </nav> -->
   
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import searchPage from "./searchPage.vue";
import { IonPage } from '@ionic/vue';
import { search } from "ionicons/icons";
import TabsPage from "./TabsPage.vue";
// import { IonPage } from '@ionic/vue';

// import { search } from "ionicons/icons";
export default defineComponent({
    name:'HomePage',
    components:{
        // searchPage,
        IonPage,
        TabsPage,
        // IonTabs,
        // IonIcon,
        // IonTabButton,
        // IonRouterOutlet,
        // IonTabBar,

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
/* we need to set a width and height first in the parent div and add a padding on the 
child so that we dont need to 
add a text just to see the length of div
*/
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
    width: 100%;
    height: 100%;
}
  .sideNav{
    background-color: #000000;
    width: 14rem;
    height: 100%;
  }
  span{
      color: wheat;
  } */
</style>