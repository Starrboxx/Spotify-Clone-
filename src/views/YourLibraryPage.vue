<template>
    <ion-page>
         <div class="d-flex" style="height: 88vh;">
          <div class="sideNav">
               <TabsPage />
           </div>
            <div class="main">
                    <div class="header">
                       <span style="color:white;">Library Page</span>
                    </div>
               </div>
      </div>
    </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import TabsPage from "./TabsPage.vue";
export default defineComponent({
    name:'YourLibraryPage',
    components:{
        TabsPage,
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
</style>
