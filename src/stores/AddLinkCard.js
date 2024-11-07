import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLinkCardStore=defineStore('linkCard',()=>{
      let linkArray=ref([])
      function  addLinkCard(){
        linkArray.value.push({ id: Date.now() });
        console.log('已經新增卡片元件了')
      }
      return {linkArray,addLinkCard}
})
