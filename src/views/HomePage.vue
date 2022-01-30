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
                       
                             <ion-button fill="outline" color="light" shape="round" class="Upgradebtn">Upgrade</ion-button>
                             <ion-button fill="solid" shape="round" class="ion-text-capitalize Userbtn">Migo Campos</ion-button>

                    </div>
                   <div class="main-Container">
                        <div class="backgroundColor" id="backgroundColor" style="background-color: rgba(248, 56, 120, 1);"></div>
                       <section>
                           <div class="Container">
                               <div class="subContainer">
                                   <section class="PlayList">
                                       <div class="Greetings">
                                           <!-- https://stackoverflow.com/questions/45906659/a-complex-condition-inside-v-if -->
                                           <h2 v-if="currentTime >= 0 && currentTime < 12">Good Morning</h2>
                                           <h2 v-else-if="currentTime >= 12 && currentTime < 17">Good Afternnon</h2>
                                           <h2 v-else>Good evening</h2>
                                       </div>
                                       <PlayList />
                                   </section>
                               </div>
                           </div>
                       </section>
                       <!-- <img src="../src/image/FOL-Playlist-logo.jpg" alt=""> -->
                   </div>
               </div>
           </div>
      
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import searchPage from "./searchPage.vue";
import { IonPage,IonButton } from '@ionic/vue';
import { search,chevronBackCircle,chevronForwardCircle } from "ionicons/icons";
import TabsPage from "./TabsPage.vue";
import PlayList from "../components/Playlist.vue";
// import { IonPage } from '@ionic/vue';

// import { search } from "ionicons/icons";
export default defineComponent({
    name:'HomePage',
    components:{
        // searchPage,
        PlayList,
        IonPage,
        TabsPage,
        IonButton,
       
        // IonTabs,
        // IonIcon,
        // IonTabButton,
        // IonRouterOutlet,
        // IonTabBar,

    },
    /* 
    get currenttime and display greetings based on current time
    https://stackoverflow.com/questions/57249466/getting-current-time-and-date-in-vue-js
    */
    data(){
        return{
            currentTime: 0,
            hoverActive: true,
        }
    },
   
    methods:{
       Time(){
           const h = new Date().getHours();
           this.currentTime = h;
       }
    }, 
    created() {
            setInterval(this.Time, 1000);
           
            
    },
    setup(){
        return{
            search,
            chevronBackCircle,
            chevronForwardCircle
        };
    },
    props:{
        // Greetings:{
        //     type: String,
        //     default: ''
        // },
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
/* we need to set a width and height first in the parent div and add a padding on the 
child so that we dont need to 
add a text just to see the length of div
*/
.main{
    width: 100%;
    height: 100%;
    position: relative;
    
}
.backgroundColor{
    
    background-image: linear-gradient(rgba(0,0,0,.6) 0,#121212 100%);
    height: 332px;
     margin-top: -64px;
    position: absolute;
    transition: background 1s ease;
    width: 100%;
    z-index: -1;
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
.header .Upgradebtn{
    --border-radius: 50px;
    margin-left: auto;
    --color: white;
    letter-spacing: .1em;
}
.header .Userbtn{
    --background:#000000;
    margin-left: 30px;
    margin-right: 30px;
}
.RightSideHeader{
    /* display: flex; */
    align-items: flex-end;
}
.main-Container{
    min-height: calc(((100vh - 64px) - 90px) - 519px);
        scroll-behavior: smooth;
        isolation: isolate;
    padding-bottom: 32px;
}

.subContainer{
    padding: 0 16px;
    padding-top: 24px;
}
.PlayList{
    min-height: 224px;
}
.Greetings{
    margin-left:.5rem;
}
.Greetings h2{
    font-size: 32px;
    font-weight: 700;
    color: white;
    line-height: 36px;
    letter-spacing: -.04em;
}

</style>