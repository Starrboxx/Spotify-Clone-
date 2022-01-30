<template>
    <ion-grid  class="">
        <ion-row>
           <ion-col  size-xl="4" size-md="6" class="ion-no-padding ion-padding-end ">
                <!-- to move the content to far left of the card
                https://stackoverflow.com/questions/49569679/how-to-remove-the-padding-around-ion-item
                 -->
                 <ion-card  class="">
                    <ion-item class="ion-no-padding">
                       <div class="position: relative;">
                           <img src="https://mosaic.scdn.co/640/ab67616d00001e02424910c1b05e5dca58b5254eab67616d00001e02ae1d7274dd73b78fb2270fc8ab67616d00001e02c11fba9651210118925deacaab67616d00001e02cb95963709806e12d93128d4" style="margin-bottom:-4px;" alt="">
                            <!-- <img src="https://i.scdn.co/image/ab67616d00001e024de078ff187c4ece68c38da0" alt=""> -->
                       </div>
                       <div class="PlayList-title">
                           <ion-label>Kdrama Ost</ion-label>
                       </div>
                         <!-- <ion-button fill="outline" slot="end">View</ion-button> -->
                    </ion-item>
                </ion-card>
            </ion-col>
            <ion-col size-xl="4" size-md="6" class="ion-no-padding ion-padding-end">
                 <ion-card  class="">
                    <ion-item class="ion-no-padding">
                       <div class="position: relative;">
                           <img src="https://mosaic.scdn.co/640/ab67616d00001e025b3685b06e22d32bed46c962ab67616d00001e02df5022bdf1ac4bf52135c4beab67616d00001e02e8132ffe49666c18a1f243b3ab67616d00001e02fda74ae03a653f5d84010a79" style="margin-bottom:-4px;" alt="">
                       </div>
                       <div class="PlayList-title">
                           <ion-label>Kpop</ion-label>
                       </div>
                         <!-- <ion-button fill="outline" slot="end">View</ion-button> -->
                    </ion-item>
                </ion-card>
            </ion-col>
            <ion-col size-xl="4" size-md="6" class="ion-no-padding ion-padding-end">
                 <ion-card  class="">
                    <ion-item class="ion-no-padding">
                       <div class="position: relative;">
                           <img src="https://mosaic.scdn.co/640/ab67616d00001e021a450f85d9c9e9bdc9070057ab67616d00001e0263e0ddbb488d0eeec0e738fcab67616d00001e026c971ef3296c879c94128829ab67616d00001e0284095737f6056e682666d6f9" style="margin-bottom:-4px;" alt="">
                       </div>
                       <div class="PlayList-title">
                           <ion-label>Random Songs</ion-label>
                       </div>
                         <!-- <ion-button fill="outline" slot="end">View</ion-button> -->
                    </ion-item>
                </ion-card>
            </ion-col>
            <ion-col size-xl="4" size-md="6" class="ion-no-padding ion-padding-end">
                 <ion-card  class="">
                    <ion-item class="ion-no-padding">
                       <div class="position: relative;">
                           <img src="https://seed-mix-image.spotifycdn.com/v6/img/artist/52zMTJCKluDlFwMQWmccY7/en/default" style="margin-bottom:-4px;" alt="">
                       </div>
                       <div class="PlayList-title">
                           <ion-label>Loona mix</ion-label>
                       </div>
                       
                    </ion-item>
                </ion-card>
            </ion-col>
            <ion-col size-xl="4" size-md="6"  class="ion-no-padding ion-padding-end">
                 <ion-card  class="">
                    <ion-item class="ion-no-padding">
                       <div class="position: relative;">
                           <img src="https://i.scdn.co/image/ab67706c0000da84dd9ed01a0d92e55280a6fe83" style="margin-bottom:-4px;" alt="">
                       </div>
                       <div class="PlayList-title">
                           <ion-label class="ion-text-wrap">Our Beloved Summer OST</ion-label>
                       </div>
                    </ion-item>  
                </ion-card>
            </ion-col>
            <ion-col size-xl="4" size-md="6" class="ion-no-padding ion-padding-end">
                 <ion-card  class="">
                    <ion-item class="ion-no-padding">
                       <div class="position: relative;">
                           <img src="https://seed-mix-image.spotifycdn.com/v6/img/artist/7n2Ycct7Beij7Dj7meI4X0/en/default" style="margin-bottom:-4px;" alt="">
                       </div>
                       <div class="PlayList-title">
                           <ion-label>Twice mix</ion-label>
                       </div>
                        
                    </ion-item>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>
<script>
import { defineComponent } from 'vue';
import { IonGrid,IonRow,IonCol,IonCard,IonItem,IonLabel } from '@ionic/vue';
export default defineComponent({
   name:'PlayList',
   components:{
       IonGrid,
       IonRow,
       IonCol,
       IonCard,
       IonItem,
       IonLabel,
       
   }
})
</script>
<style scoped>
ion-card{
    --background: rgba(255, 255, 255, .05);
    margin:3px;
}
ion-row{
    row-gap: 10px;
}
ion-item{
    --background: rgba(255, 255, 255, .05);
}
ion-item .item-native{
    /* padding-inline-start: 0; */
}
ion-item img{
    height: 80px;
     width: 80px;
}
.PlayList-title{
    padding:16px;
    color:white;
    font-weight: 700;
    font-size: 1em;
}
</style>

