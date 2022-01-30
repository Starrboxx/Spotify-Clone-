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
                         </div>
                       
                             <ion-button fill="outline" color="light" shape="round">Upgrade</ion-button>
                        
                    </div>
               </div>
      </div>
    </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import TabsPage from "./TabsPage.vue";
import {chevronBackCircle,chevronForwardCircle} from 'ionicons/icons';
export default defineComponent({
    name:'YourLibraryPage',
    components:{
        TabsPage,
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
    margin-left:10px;
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

</style>
