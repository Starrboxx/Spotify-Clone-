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
                            <ion-button color="medium">Playlists</ion-button>
                            <ion-button color="medium">Podcasts</ion-button>
                            <ion-button color="medium">Artists</ion-button>
                            <ion-button color="medium">Albums</ion-button>  
                            
                         </div>
                           
                              <ion-button fill="solid" shape="round" class="ion-text-capitalize Userbtn">Migo Campos</ion-button>
                       
                    </div>
               </div>
      </div>
    </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import TabsPage from "./TabsPage.vue";
// import PlaylistLibraryPage from '../components/PlaylistLibraryPage.vue';
import {IonPage, IonIcon, IonButton} from '@ionic/vue';
import {chevronBackCircle,chevronForwardCircle} from 'ionicons/icons';
export default defineComponent({
    name:'YourLibraryPage',
    components:{
        TabsPage,
        IonPage,
        IonIcon,
        IonButton,
        // PlaylistLibraryPage
    },
    setup(){
        return{
            chevronBackCircle,
            chevronForwardCircle
        }
    }
})
</script>
<style scoped>
.ion-page{
    background-color: #121212;
}
.d-flex{
    display: flex;
    /* margin-left:10px; */
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
.header .headerIcons ion-icon{
    font-size: 35px;
    margin: 5px;
    
}
.header ion-button{
    /* --border-radius: 50px; */
    --background: lightblue;
    margin-left: auto;
}
.RightSideHeader{
    /* display: flex; */
    align-items: flex-end;

}
.header .Userbtn{
    --background:#000000;
    margin-left: auto;
    margin-right: 30px;
}

</style>
