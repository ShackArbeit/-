import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLinkCardStore = defineStore('linkCard', () => {
  let linkArray = ref([]);
  let nextId = 1; 

  function addLinkCard() {
    if (nextId <= 14) { 
      let newId = nextId;
      const  usedIds=new Set(linkArray.value.map(card=>card.id))
      for(let i=1;i<=nextId;i++){
        // 確保 newId 為最小且尚未使用的 ID
         if(!usedIds.has(i)){
            newId=i;
            break
         }
      }
      linkArray.value.push({ id: newId });
      console.log(`已新增 id 為 ${newId} 的卡片元件`);
      console.log(linkArray.value)
      nextId=Math.max(nextId+1,newId+1)
    } else {
      console.log('已達到最大卡片數量 14');
    }
  }

  function deleteLinkCard(cardId) {
    linkArray.value = linkArray.value.filter(card => card.id !== cardId );
    console.log(`已刪除 id 為 ${cardId } 的卡片元件`);
    nextId-=1;
    console.log('nextId:',nextId)
  }

  return { linkArray, addLinkCard, deleteLinkCard };
});