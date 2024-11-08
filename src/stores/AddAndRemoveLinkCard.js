import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLinkCardStore = defineStore('linkCard', () => {
  let linkArray = ref([]);
  let nextId = 1; // 起始 ID 設為 1

  function addLinkCard() {
    if (nextId <= 14) { // 限制 ID 為 1 到 14
      linkArray.value.push({ id: nextId });
      console.log(`已新增 id 為 ${nextId} 的卡片元件`);
      nextId++;
    } else {
      console.log('已達到最大卡片數量 14');
    }
  }

  function deleteLinkCard(cardId) {
    linkArray.value = linkArray.value.filter(card => card.id !== cardId);
    console.log(`已刪除 id 為 ${cardId} 的卡片元件`);
  }

  return { linkArray, addLinkCard, deleteLinkCard };
});