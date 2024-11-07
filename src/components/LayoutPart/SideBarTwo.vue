<script setup>
import AddRecord from '../OutputPart/AddRecord.vue';
import SideBarTwoContent from './SideBarTwoContent.vue';

</script>

<template>
    <div class="container">
        <!-- 新增區塊部分 -->
         <AddRecord/> 
        <!-- 各區塊 Icon 部分 -->
        <SideBarTwoContent/>
    </div>

</template>


<style scoped>
.container{
    display: flex;
    width:100%;
    height:100%;
    flex-direction: column;
    align-items: flex-start; 
    align-self: stretch; 
    background: #F8F2F2;
}

</style>