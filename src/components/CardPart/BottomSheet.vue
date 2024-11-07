
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: Boolean
});

const emit = defineEmits(['update:isVisible']);

const hideBottomSheet = () => {
  emit('update:isVisible', false);
};
</script>
<template>
    <div class="bottom-sheet-overlay" v-if="isVisible" @click="hideBottomSheet">
      <div class="bottom-sheet" @click.stop>
        <div class="bottom-sheet-header" @click="hideBottomSheet">
          <div class="handle"></div>
        </div>
        <div class="bottom-sheet-content">
          <p>新增區塊</p>
          <div class="options">
            <button>文字</button>
            <button>連結</button>
            <button>圖片</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .bottom-sheet-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-end;
    z-index: 10;
  }
  .bottom-sheet {
    width: 100%;
    background: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    animation: slideUp 0.3s ease-out;
  }
  .bottom-sheet-header {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  .handle {
    width: 40px;
    height: 5px;
    background: #ccc;
    border-radius: 5px;
  }
  .bottom-sheet-content {
    padding: 20px;
  }
  .options button {
    margin: 5px;
    padding: 10px;
    background: #f5f5f5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  </style>
  