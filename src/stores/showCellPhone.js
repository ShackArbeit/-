import { defineStore } from "pinia";
import { ref } from "vue";

export const showCellPhoneStore=defineStore('showCellPhone',()=>{
       const showMainPart=ref(false);
       function  openShowMainPart(){
             showMainPart.value=true
             console.log('showMainPart',showMainPart.value)
             console.log('已經打開了')
       }
       function closeShowMainPart(){
             showMainPart.value=false;
             console.log('showMainPart',showMainPart.value)
             console.log('已經關閉了')
       }
       return {showMainPart,openShowMainPart,closeShowMainPart}
})