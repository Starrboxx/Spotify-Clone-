<template>
    <ion-page>
        
            <ion-router-outlet></ion-router-outlet>
            <div class="ion-align-items-start sideNav">
                    <div style="padding-top: 25px;" >
                        <div  style="padding: 0 24px; margin-bottom:18px;">
                            <img src="../image/Spotify_Logo_RGB_White.png" alt="">
                        </div>
                         <ion-button href="/home" expand="block" tab="home" fill="clear"  class="HomeNav ion-text-capitalize">
                             <div class="Menu1">
                                <ion-icon :icon="home"  slot="start"></ion-icon>
                               <ion-label style="margin-right:6rem;">Home</ion-label>
                            </div>
                        </ion-button>
                        
                        
                        <ion-button  href="/search" tab="search" fill="clear"  class="SearchNav ion-text-capitalize">
                            <div class="Menu2">
                                <ion-icon :icon="search"></ion-icon>
                                <ion-label style="margin-right:6rem;">Search</ion-label>
                            </div>
                        </ion-button>
                        <ion-button  href="/collections/playlist" tab="library" fill="clear"  class="PlaylistNav ion-text-capitalize">
                            <div class="Menu3">
                                <ion-icon :icon="library"></ion-icon>
                                <ion-label style="margin-right:3.75rem;">Your Library</ion-label>
                            </div>
                        </ion-button>
                    </div>
                    </div>
           
      
    </ion-page>
</template>
<script>
import { defineComponent } from 'vue'
import { search,home,library } from "ionicons/icons";
import { IonIcon,IonPage,IonButton,IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
    name:'TabsPage',
    setup() {
        return{
            search,
            home,
            library
        }
    },
    components:{
        IonPage,
        IonIcon,
        IonButton,
        IonRouterOutlet,
        
    }
})
</script>
<style>
  .sideNav{
    background-color: #000000;
    width: 14rem;
    height: 100%;
    flex: none;
    
    /* resizable grid
    https://www.brainbell.com/javascript/making-resizable-table-js.html
    */
    /* cursor: col-resize; */
  }
  .sideNav img{
      width: 8.1rem;
  }
 
  .HomeNav span{
      text-align: left;
      width: 100%;
  }
    .HomeNav,.SearchNav,.PlaylistNav{
        width: 100%;
        font-weight: 700;
        letter-spacing: -1px;
        color: gray;
        transition: color .5s ease;
    }
    .SearchNav:hover{
        color:white;
    }
    .PlaylistNav:hover{
        color:white;
    }
    .Menu1 ion-icon,
    .Menu1 ion-label{
        color: white;
    }
   
    .Menu1 ion-icon,
    .Menu2 ion-icon,
    .Menu3 ion-icon{
        margin-right: 15px;
        font-size: 20px;
    }
/* .button-inner{
    justify-content:flex-start;
} */
    /* ion-button{
       margin-right: auto;
    } */
</style>
