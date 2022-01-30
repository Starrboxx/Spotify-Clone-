<template>
 <ion-page>
      <div class="d-flex" style="height: 88vh;">
          <div class="sideNav">
               <TabsPage />
           </div>
            <div class="main">
                    <div class="header">
                         <div class="d-flex headerIcons">
                             <ion-icon :icon="chevronBackCircle"  color ="light"></ion-icon>
                             <ion-icon :icon="chevronForwardCircle"  color ="light"></ion-icon>
                               <ion-searchbar placeholder="Artists,songs,or Podcasts"></ion-searchbar>
                         </div>
                       
                             <ion-button fill="solid" shape="round" class="ion-text-capitalize Userbtn">Migo Campos</ion-button>

                    </div>
         <ion-item>
    <ion-label>Select: Action Sheet Interface</ion-label>
    <ion-select interface="action-sheet" :interface-options="options">
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>
               </div>
      </div>
       
    </ion-page> 
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TabsPage from "./TabsPage.vue";
/* 
if the icons is not rendering make sure you import ion-icons and add the ionicon components and remove the name in ion-icon
https://stackoverflow.com/questions/61422423/ionic-vue-ionicons-5-x-x-doesnt-show-icon
*/
import { IonPage,IonButton,IonIcon,IonSearchbar } from '@ionic/vue';
import { search,chevronBackCircle,chevronForwardCircle } from "ionicons/icons";
export default defineComponent({
    name:'searchPage',
    components:{
        TabsPage,
        IonPage,
        IonButton,
        IonIcon,
        IonSearchbar
        
    },
    setup(){
        return{
            search,
            chevronBackCircle,
            chevronForwardCircle
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
     display: flex;
    height: 64px;
    z-index: 2;
}
.header ion-button{
    font-weight: 700;
    letter-spacing: -.05em;
}
.header .headerIcons ion-icon{
    font-size: 35px;
    margin: 5px;
    /* --color:#000000; */
    
}
.header .Userbtn{
    --background:#000000;
    margin-left: auto;
}
ion-searchbar{
    --border-radius: 50px;
    width: 400px;
}
/* .RightSideHeader{
    align-items: flex-end;
} */


</style>
