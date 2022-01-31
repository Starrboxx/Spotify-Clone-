<template>
    <ion-page>
       <div >
            <ion-button color="medium">Playlists</ion-button>
            <ion-button color="medium">Podcasts</ion-button>
            <ion-button color="medium">Artists</ion-button>
            <ion-button color="medium">Albums</ion-button>
       </div>
    </ion-page>
</template>
<script>
import { defineComponent } from 'vue';
import {IonPage, IonButton }  from '@ionic/vue';
export default defineComponent({
  name: 'PlaylistLibraryPage',
  components:{
      IonPage,
      IonButton,
  }
})
</script>
